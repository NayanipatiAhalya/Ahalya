import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Images from './image.jsx';
import About from './About.jsx';
import Contact from './contact.jsx';
import BasicTable from "./BasicTable.jsx";
import AddUser from "./AddUser.jsx";
import Update from "./Update.jsx";
import Login from "./Login.jsx";
import Signup from "./signu.jsx";




const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Images" element={<Images />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/BasicTable" element={<BasicTable/>}/>
        <Route path="/AddUser" element={<AddUser />}/>
        <Route path="/Update/:id" element={<Update />} />
         
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default Path;