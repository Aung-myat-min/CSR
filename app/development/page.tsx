"use client";
import initDataSeeding from "../seed/intitialDataSeeding";

export default function Page() {
  return (
    <div>
      <button
        onClick={() => {
          initDataSeeding();
        }}
      >
        Click
      </button>
    </div>
  );
}
