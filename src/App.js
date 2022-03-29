import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import CommunicationContainer from "./components/Communication/CommunicationContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App-wrapper">
      <Header />
      <NavbarContainer />
      <div className="App-content">
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/messages/*" element={<CommunicationContainer />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
