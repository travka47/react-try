import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Communication from "./components/Communication/Communication";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar sidebarData={props.state.sidebar}/>
        <div className="App-content">
          <Routes>
            <Route path="/profile/*" element={<Profile pageData={props.state.profilePage}/>} />
            <Route path="/messages/*" element={<Communication pageData={props.state.messagesPage}/>} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
