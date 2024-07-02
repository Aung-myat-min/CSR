import { Dispatch, SetStateAction } from "react";
export default function MiniNav({
  role,
  setRole,
}: {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
}) {
  const listStyles = `p-5 hover:cursor-pointer bg-gray-400 border border-gray-400 transition-colors hover:bg-main`;

  const handleClick = (value: string) => {
    setRole(value);
  };

  return (
    <div className="flex justify-center my-3">
      <select
        name="role"
        id="roles"
        className="md:hidden mx-auto dark:bg-gray-600"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="1">All</option>
        <option value="2">Founders</option>
        <option value="3">Finances</option>
        <option value="4">ContentWriters</option>
        <option value="5">Graphics</option>
        <option value="6">Developers</option>
        <option value="7">Designers</option>
        <option value="8">Others</option>
      </select>

      <ul className="hidden md:flex flex-row items-center my-6 flex-wrap rounded-lg overflow-hidden w-fit mx-auto">
        <li
          onClick={() => handleClick("1")}
          className={`${listStyles} ${
            role === "1" ? "!bg-main !text-white" : ""
          }
          `}
        >
          All
        </li>
        <li
          onClick={() => handleClick("2")}
          className={`${listStyles} ${
            role === "2" ? "!bg-main !text-white" : ""
          }`}
        >
          Founders
        </li>
        <li
          onClick={() => handleClick("3")}
          className={`${listStyles} ${
            role === "3" ? "!bg-main !text-white" : ""
          }`}
        >
          Finances
        </li>
        <li
          onClick={() => handleClick("4")}
          className={`${listStyles} ${
            role === "4" ? "!bg-main !text-white" : ""
          }`}
        >
          ContentWriters
        </li>
        <li
          onClick={() => handleClick("5")}
          className={`${listStyles} ${
            role === "5" ? "!bg-main !text-white" : ""
          }`}
        >
          Graphics
        </li>
        <li
          onClick={() => handleClick("6")}
          className={`${listStyles} ${
            role === "6" ? "!bg-main !text-white" : ""
          }`}
        >
          Developers
        </li>
        <li
          onClick={() => handleClick("7")}
          className={`${listStyles} ${
            role === "7" ? "!bg-main !text-white" : ""
          }`}
        >
          Designers
        </li>
        <li
          onClick={() => handleClick("8")}
          className={`${listStyles} ${
            role === "8" ? "!bg-main !text-white" : ""
          }`}
        >
          Others
        </li>
      </ul>
    </div>
  );
}
