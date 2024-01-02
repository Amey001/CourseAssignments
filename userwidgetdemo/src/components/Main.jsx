import React from "react";
import Header from "./Header";
import Users from "./Users";
import UserWidgetComponent from "./UserWidgetComponent";

const Main = () => {
  return (
    <div className="h-[100vh] w-[100%] border border-blue-300 bg-gray-100 md:w-[84%]">
      <Header />
      <Users />
      <UserWidgetComponent />
    </div>
  );
};

export default Main;
