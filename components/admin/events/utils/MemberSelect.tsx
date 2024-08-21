"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface MemberSelectProps {
  id: number;
  name: string;
}

export default function MemberSelect() {
  const members: MemberSelectProps[] = [
    { id: 1, name: "Aung Myat Min" },
    { id: 2, name: "Phyo Min Khant" },
    { id: 3, name: "Wai Yan Phone Myint" },
    { id: 4, name: "Aung Myat Min" },
    { id: 5, name: "Phyo Min Khant" },
    { id: 6, name: "Wai Yan Phone Myint" },
    { id: 7, name: "Aung Myat Min" },
    { id: 8, name: "Phyo Min Khant" },
    { id: 9, name: "Wai Yan Phone Myint" },
    { id: 10, name: "Aung Myat Min" },
    { id: 11, name: "Phyo Min Khant" },
    { id: 12, name: "Wai Yan Phone Myint" },
    { id: 13, name: "Aung Myat Min" },
  ];

  const [openSuggestion, setOpenSuggestion] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState<MemberSelectProps[]>(
    []
  );
  const [highlight, setHighlight] = useState(-1);
  const [selectedMembers, setSelectedMembers] = useState<MemberSelectProps[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce typing and filter members
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        const filter = members.filter(
          (member) =>
            member.name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) &&
            !selectedMembers.some((selected) => selected.id === member.id)
        );
        setFilteredMembers(filter);
        setOpenSuggestion(true);
      } else {
        setFilteredMembers([]);
        setOpenSuggestion(false);
      }
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedMembers]);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle keyboard navigation
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
          selectMemberFunc(filteredMembers[highlight].id);
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

  // Select member
  const selectMemberFunc = (id: number) => {
    const selectedMember = members.find((member) => member.id === id);
    if (selectedMember) {
      setSelectedMembers((prevSelected) => [selectedMember, ...prevSelected]);
      setSearchTerm(""); // Clear search after selection
      setFilteredMembers([]);
      setOpenSuggestion(false);
    }
  };

  return (
    <div className="relative w-full p-1">
      {/* Input */}
      <input
        type="text"
        name="member"
        id="member"
        value={searchTerm}
        onChange={handleChange}
        className="w-full rounded"
        onKeyDown={navigationMembers}
      />
      {/* Render the dynamic box */}
      {openSuggestion && filteredMembers.length > 0 && (
        <div className="bg-white border rounded-md shadow-md w-full p-3 flex flex-col absolute z-10">
          {filteredMembers.map((member, index) => (
            <p
              id={`member-name-${index}`}
              className={`p-1 px-2 w-full text-left hover:bg-slate-200 rounded ${
                index === highlight ? "bg-gray-300" : ""
              }`}
              key={member.id}
              onMouseDown={() => selectMemberFunc(member.id)}
            >
              {member.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
