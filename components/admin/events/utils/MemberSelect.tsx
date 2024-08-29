import { searchMember } from "@/app/csrsadmin/apis/members/admin_members";
import { Switch } from "@/components/ui/switch";
import { IMember } from "@/Schemas/MemberSchema";
import { ChangeEvent, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export interface MemberSelectProps
  extends Pick<IMember, "_id" | "Name" | "Batch"> {}

interface MemberSelect {
  eventTime?: boolean;
  selectedMembers: MemberSelectProps[];
  setEventStatus: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setSelectedMembers: React.Dispatch<React.SetStateAction<MemberSelectProps[]>>;
}

export default function MemberSelect({
  eventTime,
  selectedMembers,
  setEventStatus,
  setSelectedMembers,
}: MemberSelect) {
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState<MemberSelectProps[]>(
    []
  );
  const [highlight, setHighlight] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce search and fetch members from DB
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm) {
        const searchResult = await searchMember(searchTerm);
        if (typeof searchResult == "string") {
          setFilteredMembers(JSON.parse(searchResult) as MemberSelectProps[]);
        } else {
          alert("Fetching Members went wrong!");
        }
        setOpenSuggestion(true);
      } else {
        setFilteredMembers([]);
        setOpenSuggestion(false);
      }
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const navigationMembers = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const arrowKey = e.key;
    switch (arrowKey) {
      case "ArrowDown":
        setHighlight((prevIndex) =>
          prevIndex < filteredMembers.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case "ArrowUp":
        setHighlight((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
        break;
      case "Enter":
        if (highlight >= 0 && filteredMembers[highlight]) {
          selectMemberFunc(filteredMembers[highlight]._id);
        }
        break;
    }
  };

  useEffect(() => {
    if (highlight >= 0 && openSuggestion) {
      const highlightedItem = document.getElementById(
        `member-name-${highlight}`
      );
      if (highlightedItem) {
        highlightedItem.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [highlight]);

  const selectMemberFunc = (id: number) => {
    const selectedMember = filteredMembers.find((member) => member._id === id);
    if (selectedMember) {
      setSelectedMembers((prevSelected) => [selectedMember, ...prevSelected]);
      setSearchTerm(""); // Clear search after selection
      setFilteredMembers([]);
      setOpenSuggestion(false);
    }
  };

  const removeMember = (id: number) => {
    setSelectedMembers((members) =>
      members.filter((member) => member._id !== id)
    );
  };

  return (
    <div className="relative w-full p-1">
      <div className={`w-full border my-2 h-56 relative p-2 pt-8`}>
        <div
          className={`w-full h-full absolute bg-slate-200 cursor-not-allowed top-0 left-0 ${
            eventTime === false ? "" : "hidden"
          }`}
        ></div>
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <p className="font-bold">
            {eventTime === false ? "Future Event:" : "Past Event:"}
          </p>
          <Switch
            className="data-[state=checked]:bg-main shadow-md border-blue-400"
            value={eventTime ? 1 : 0}
            onClick={() => setEventStatus(!eventTime)}
          />
        </div>

        <div className="flex flex-row flex-wrap overflow-auto">
          {selectedMembers.map((member, index) => (
            <div
              className="flex flex-row gap-2 rounded-full items-center m-1 bg-main w-fit h-fit p-2 text-white"
              key={index}
            >
              <p>
                {member.Name} | {member.Batch}
              </p>
              <RxCross2
                className="text-bold cursor-pointer hover:text-red-500"
                onClick={() => removeMember(member._id)}
              />
            </div>
          ))}
        </div>
      </div>

      <input
        type="text"
        name="member"
        id="member"
        placeholder="Type member name here..."
        value={searchTerm}
        disabled={eventTime === false}
        onChange={handleChange}
        className="w-full rounded disabled:bg-slate-100 disabled:cursor-not-allowed"
        onKeyDown={navigationMembers}
      />

      {openSuggestion && filteredMembers.length > 0 && (
        <div className="bg-white border rounded-md shadow-md w-full p-3 flex flex-col absolute z-10">
          {filteredMembers.map((member, index) => (
            <p
              id={`member-name-${index}`}
              className={`p-1 px-2 w-full text-left hover:bg-slate-200 rounded ${
                index === highlight ? "bg-gray-300" : ""
              }`}
              key={member._id.toString()}
              onMouseDown={() => selectMemberFunc(member._id)}
            >
              {member.Name} | {member.Batch}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
