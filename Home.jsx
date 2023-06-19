import React from "react";

import { useNavigate } from "react-router-dom";
let Home=() =>
{
    let n=useNavigate()
    function goHome()
    {
        n('/Home')
    }
    function goImages()
    {
        n('/Images')
    }
    function goAboutUs()
    {
        n('/AboutUs')
    }
    function goContactUs()
    {
        n('/ContactUs')
    }
    
    const navigate=useNavigate();
    const handleUser=()=>{
        navigate("/BasicTable");
    }
return(
    
<div>
        <button onClick={goHome}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={goImages}>Images</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={goAboutUs}>About Us</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={goContactUs}>Contact Us</button>&nbsp;&nbsp;&nbsp;&nbsp;
        
        <button onClick={handleUser}>Admin</button>
    
<section>
    <center>
    <h1 style={{color:"red"}}>WELCOME TO OUR EVENTS</h1>
    </center>
    <h2>BEST EVENT PLANNERS:</h2>
    <p>An event planner, also known as an event coordinator or event specialist, is a professional responsible
        for organising and coordinating meetings and special events for individuals, businesses, non-profit
        organisations or other groups. Those in this role might work for a company or freelance. They could
        work in various industries, like hospitality and tourism, recreation, arts and culture, sports,
        fundraising, corporate marketing or non-profit. Here are some events they might plan:</p>
           <ul> 
            <li>WEDDING EVENTS</li>
             <li>BIRTHDAY EVENTS</li>
            <li>WEDDING ANNIVERSARIES</li>
            <li>CONFERENCES</li>
            <li>NAMING CERIMONY</li>
            <li>SPINSTER FUNCTIONS</li>
            </ul>
            <h2>Wedding:</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0zH7_4qptuZltpla4nZ5siPa2NgLboDddQMZkOqjhw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFxoW9RdOuksu6GVLi6oAWcZp-Tf8M5iR6Dc2Esywvw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_92pA-R10-4fut4LjLXp_twfrp1Yt28rNHl4wy2CZQ&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlNY9FSnDTvGGxvycGNZYwtOi39gtGF7716ez_vfHSA&usqp=CAU&ec=48665701" height="300px" width="300px"></img>
            <h2>Birthday:</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPltauohRSvrwpFPP_-p2-kTmHGLUEqnjABljoTPbhBw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_wBXLieVAeExWU5keHaas0IcjEz2683xVHC5kYaGZg&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGv1CwMzUzsH7GgPC0qY150xC7ldRvutvLoBnuPVuSjg&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpZvqvxlYoDJ7kQdCl9j4FRTkMsazQgClixiKJ0PJKA&usqp=CAU&ec=48665701" height="300px" width="300px"></img>
    </section>
</div>
)
}
export default Home;