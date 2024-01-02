import React from "react";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";

const UserWidgetComponent = () => {
  // user data
  const userData = [
    {
      name: "Rowan Torres",
      email: "Rowantorres@gmail.com",
      image: "../images/rowan.avif",
      status: "Active",
    },
    {
      name: "Roman Torres",
      email: "Romantorres@gmail.com",
      image: "../images/roman.jpeg",
      status: "InActive",
    },
    {
      name: "Roman Torres",
      email: "Romantorres@gmail.com",
      image: "../images/roman.jpeg",
      status: "InActive",
    },
  ];
  return (
    <div className="userboard flex flex-col bg-white h-[85%] md:h-[77%] mx-4">
      <div className="left flex justify-between h-14 ">
        <div className=" px-3 col-3 h-[100%] flex items-center text-nowrap">
          <button
            className="flex items-center bg-gray-200 border border-gray rounded-1 h-7 mr-3 p-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="blueviolet"
              class="bi bi-sort-up"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
            </svg>
            <h1 className="md:text-[14px]">Sort By</h1>
          </button>
          <button
            className="flex items-center bg-gray-200 border border-gray rounded-1 h-7 mr-3 p-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="rgb(124, 17, 224)"
              class="bi bi-funnel-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
            </svg>
            <span className="text-[14px]">Filter By</span>
          </button>
        </div>
        <div className="col-6 flex justify-end items-center">
          <SearchBox />
        </div>
      </div>
      <div className="flex-col md:flex lg:flex-row flex-wrap border border-gray bg-white h-[84%] md:h-[50%]">
        {userData.map((user, index) => (
          <div className="md:col-md-4 " key={index}>
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWidgetComponent;
