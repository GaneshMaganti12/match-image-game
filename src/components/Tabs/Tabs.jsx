import React from "react";
import "./Tabs.css";

function Tabs({ tabsList, clickTab, active }) {
  const { id, tabName } = tabsList;

  const activeTab = () => {
    clickTab(id);
  };

  return (
    <li
      className="tab"
      style={{
        fontWeight: active && 500,
        textDecoration: active && "underline",
      }}
      onClick={activeTab}
    >
      {tabName}
    </li>
  );
}

export default Tabs;
