// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import SalesChart from "./SalesChart";
import StatsCard from "./StatsCard";
import Text from "./Text";
import TopLabel from "./TopLabel";

const Dashboard = () => {
  const [stats, setStats] = useState({ top: [], bottom: [] });
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/stats");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="p-5 text-center">Loading dashboard...</div>;
  }

  return (
    <div className="w-full max-w-[97%] flex flex-col gap-5 p-5 mx-auto">
      {/* TOP STATS */}
      <div className="flex flex-wrap gap-5 w-full">
        {stats?.top?.map((item, index) => (
          <div key={index} className="flex-1 min-w-[220px]">
            <StatsCard {...item} />
          </div>
        ))}
      </div>

      {/* SALES CHART + TOP SELLINGS */}
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

      {/* BOTTOM STATS */}
      <div className="flex flex-wrap justify-center w-full gap-5">
        {stats?.bottom?.map((item, index) => (
          <div key={index} className="flex-1 min-w-[220px]">
            <StatsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
