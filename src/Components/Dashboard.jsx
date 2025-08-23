// src/components/Dashboard.js
import React from "react";
import SalesChart from "./SalesChart";
import StatsCard from "./StatsCard";
import FiBox from "../assets/Stockicon.png";
import Path from "../assets/Path.png";
import Text from "./Text";
import TopLabel from "./TopLabel";

const Dashboard = () => {
  const options = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const StatsDataTop = [
    {
      title: "Sales",
      value: "$40,689",
      icon: FiBox,
      Path,
      ColTrend: "8.5%",
      trend: "Up from yesterday",
    },
    {
      title: "Inventory",
      value: "$40,689",
      icon: FiBox,
      Path,
      ColTrend: "8.5%",
      trend: "Up from yesterday",
    },
    {
      title: "Total Order",
      value: "10293",
      icon: FiBox,
      Path,
      ColTrend: "1.3%",
      trend: "Up from yesterday",
    },
    {
      title: "Purchase Order",
      value: "$40,689",
      icon: FiBox,
      Path,
      ColTrend: "8.5%",
      trend: "Up from yesterday",
    },
  ];
  const StatsDataBottom = [
    {
      title: "Shipments",
      value: "$40,689",
      icon: FiBox,
      Path,
      ColTrend: "8.5%",
      trend: "Up from yesterday",
    },
    {
      title: "Invoices Paid",
      value: "$40,689",
      icon: FiBox,
      Path,
      ColTrend: "1.5%",
      trend: "Up from yesterday",
    },
    {
      title: "Cancelled Order",
      value: "5",
      icon: FiBox,
      Path,
      ColTrend: "1.3%",
      trend: "Up from yesterday",
    },
    {
      title: "Delayed Orders",
      value: "3",
      icon: FiBox,
      Path,
      ColTrend: "8.5%",
      trend: "Up from yesterday",
    },
  ];
  return (
    <div className="w-full max-w-[97%] flex flex-col gap-5 p-5 mx-auto">
      <div className="flex flex-wrap gap-5 w-full">
        {StatsDataTop.map((item, index) => (
          <div key={index} className="flex-1 min-w-[220px]">
            <StatsCard
              title={item.title}
              value={item.value}
              icon={item.icon}
              path={item.Path}
              ColTrend={item.ColTrend}
              trend={item.trend}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="p-4 flex-1 rounded-3xl bg-white shadow-[6px_6px_54px_0px_#0000000D]">
          <TopLabel
            label="Sales Chart"
            optionInput={options}
            link={false}
            detailBtn={false}
          />
          <SalesChart />
        </div>
        <div className="p-5 w-full lg:w-1/3 flex flex-col gap-4 rounded-3xl bg-white shadow-[6px_6px_54px_0px_#0000000D]">
          <Text
            text="Top Sellings"
            fontSize="4vh"
            fontWeight="400"
            width="100%"
            color="#636466"
          />
          <div className="flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full p-6 bg-zinc-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-5">
        {StatsDataBottom.map((item, index) => (
          <div key={index} className="flex-1 min-w-[220px]">
            <StatsCard
              title={item.title}
              value={item.value}
              icon={item.icon}
              path={item.Path}
              ColTrend={item.ColTrend}
              trend={item.trend}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
