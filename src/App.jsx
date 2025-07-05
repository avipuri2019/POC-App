import { useState, useEffect } from "react";
import GridView from "./Components/Grid/GridView";
import DetailView from "./Components/Detail/DetailView";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ViewToggle from "./Components/ViewToggle/ViewToggle";
import ListView from "./Components/List/ListView";

const fetchUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
};

export default function App() {
  const menuItems = [
    { label: "Dashboard" },
    { label: "Employee" },
    {
      label: "User",
      subMenu: [
        "View Users",
        "Add User",
        "Add User",
        "Add User",
        "Add User",
        "Add User",
        "Add User",
        "Add User",
      ],
    },
    {
      label: "Settings",
      subMenu: ["General", "Security"],
    },
    { label: "About Us" },
    { label: "Contact Us" },
  ];

  const [users, setUsers] = useState([]);
  const [view, setView] = useState("grid");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="app-container">
      <Navbar menuItems={menuItems} />

      <div className="content-wrapper">
        {view !== "detail" && (
          <div className="content-header">
            <h2 className="content-heading">User Management</h2>
            <ViewToggle view={view} setView={setView} />
          </div>
        )}

        <div className="content-container">
          {view === "grid" && (
            <GridView
              users={users}
              onUserSelect={(user) => {
                setSelectedUser(user);
                setView("detail");
              }}
            />
          )}
          {view === "tile" && <ListView users={users} />}
          {view === "detail" && selectedUser && (
            <DetailView user={selectedUser} onBack={() => setView("tile")} />
          )}
        </div>
      </div>
    </div>
  );
}
