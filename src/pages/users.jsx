import React, { useState, useEffect } from "react";
import data from "../users.json";
import { Input } from "@chakra-ui/react";

const Users = () => {
  const [sortField, setSortField] = useState("name");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (field) => {
    const sortOrder = field === sortField && order === "asc" ? "desc" : "asc";
    setSortField(field);
    setOrder(sortOrder);
    handleSorting(field, sortOrder);
  };

  const handleSorting = (field, order) => {
    console.log("Sorting by 🠋:", field, "Order:", order);

    if (field) {
      const sorted = [...data].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (order === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  useEffect(() => {
    handleSorting("name", "asc");
  }, []);

  const filterData = (data, searchTerm) => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = filterData(data, e.target.value);
    setTableData(filteredData);
  }

  return (
    <div>
      <h1>This is for displaying a data table</h1>
      <Input placeholder="Search..." variant="subtle" onChange={handleSearchChange} />
      <table>
        <caption>Users Data Table</caption>
        <thead>
          <th
            key="name"
            className={`sorted-${sortField === "name" ? order : ""}`}
            onClick={() => handleSortChange("name")}
          >
            Name
          </th>
          <th
            key="username"
            className={`sorted-${sortField === "username" ? order : ""}`}
            onClick={() => handleSortChange("username")}
          >
            Username
          </th>
          <th
            key="email"
            className={`sorted-${sortField === "email" ? order : ""}`}
            onClick={() => handleSortChange("email")}
          >
            Email
          </th>
          <th key="phone">Phone</th>
          <th key="company">Company</th>
        </thead>
        <tbody>
          {tableData.map((user) => {
            return (
              <tr>
                <td>{user.name || "-"}</td>
                <td>{user.username || "-"}</td>
                <td>{user.email || "-"}</td>
                <td>{user.phone || "-"}</td>
                <td>{user.company.name || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
