import React from 'react';
import Routes from "../routes";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import "../Pages/dashboard.scss";


function Layout(props) {
    return (
       
        <div >
            <Navbar/>
            <div style={{display: "flex"}}>
            <Sidebar/>
            <div className="content">
              <Routes/>
            </div>
            </div>

        </div>
    );
}

export default Layout;