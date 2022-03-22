import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Communication from "./components/Communication/Communication";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar sidebarData={props.state.sidebar} />
      <div className="App-content">
        <Routes>
          <Route
            path="/profile/*"
            element={
              <Profile
                pageData={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/messages/*"
            element={
              <Communication 
                pageData={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
