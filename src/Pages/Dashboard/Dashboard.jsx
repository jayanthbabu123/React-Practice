import { useState } from "react";
import Table from "../../Components/Table";

const Dashboard = (props) => {
  console.log(props);
  const users = [
    {
        id: 1,
        name: "John",
        age: 25
    },
    {
        id: 2,
        name: "Jane",
        age: 30
    },
    {
        id: 3,
        name: "Bob",
        age: 20
    }
]
  return (
    <>
      <h1>Dashboard Component</h1>
      <Table  />
      
    </>
  );
};

export default Dashboard;
