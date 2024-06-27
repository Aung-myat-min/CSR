import { useState } from "react";

interface EventSwitchProps {
  previousFunc: () => void;
  upcomingFunc: () => void;
}

export default function EventSwitch({
  previousFunc,
  upcomingFunc,
}: EventSwitchProps) {
  const [activeButton, setActiveButton] = useState(true);

  const handleButtonClick = (buttonName: boolean) => {
    setActiveButton(buttonName);
    // Add logic here to handle switching between Previous and Upcoming events
  };

  return (
    <div className="w-11/12 m-auto flex justify-center lg:mt-32 md:mt-24 xl:mt-30 mt-20">
      <div className="lg:w-4/12 w-8/12 flex bg-primary dark:bg-secondary text-center rounded-xl font-bold text-xs md:text-sm lg:text-base shadow-[rgba(0,0,0,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px]">
        <button
          className={`w-1/2 rounded-se-xl rounded-s-xl lg:py-0.5 py-1 text-background bg-${
            !activeButton ? "blue" : "main"
          }`}
          onClick={() => {
            handleButtonClick(true);
            previousFunc();
          }}
        >
          Previous
        </button>
        <button
          className={`w-1/2 rounded-es-xl rounded-e-xl lg:py-0.5 py-1 text-background bg-${
            activeButton ? "blue" : "main"
          }`}
          onClick={() => {
            handleButtonClick(false);
            upcomingFunc();
          }}
        >
          Upcoming
        </button>
      </div>
    </div>
  );
}
