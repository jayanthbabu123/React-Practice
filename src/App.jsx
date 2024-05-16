import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard name="Jayanth" age={30} />,
  },
  { path: "/profile", name: "Profile", component: <Profile /> },
  { path: "/login", name: "Login", component: <Login /> },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
