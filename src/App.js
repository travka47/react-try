import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

function App() {
  return (
    <div className="App-wrapper">
      <Header/>
      <Navbar/>
      <div className="App-content">
        {/* <Dialogs/> */}
        <Profile/>
      </div>
    </div>
  );
}

export default App
