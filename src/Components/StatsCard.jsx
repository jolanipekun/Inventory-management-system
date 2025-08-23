import React from "react";
import Text from "./Text";

const StatsCard = ({ title, value, icon, trend, ColTrend, path }) => {
  return (
    <div
      className="p-6 rounded-3xl bg-white relative cursor-pointer 
        shadow-[6px_6px_10px_0px_#0000000D] 
        flex-1 min-w-[220px] max-w-full"
    >
      <div className="flex flex-col">
        <Text
          text={title}
          fontSize="text-sm sm:text-base md:text-lg"
          width="70%"
          color="#202224"
          fontWeight="300"
        />
        <Text
          text={value}
          fontSize="text-xl sm:text-2xl md:text-3xl"
          fontWeight="500"
        />
        <div className="flex gap-2 items-center flex-wrap">
          <img
            src={path}
            alt="Path Icon"
            className="w-5 h-3 sm:w-6 sm:h-4"
            style={{ width: "23px", height: "13px" }}
          />
          <Text
            color="#00B69B"
            text={ColTrend}
            fontSize="text-xs sm:text-sm md:text-base"
            fontWeight="500"
          />
          <Text
            color="#606060"
            text={trend}
            width="fitContent"
            fontSize="text-xs sm:text-sm md:text-base"
            fontWeight="400"
          />
        </div>
      </div>
      <div className="absolute top-5 right-5 w-8 h-8 sm:w-10 sm:h-10">
        <img src={icon} alt="Logo" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default StatsCard;
