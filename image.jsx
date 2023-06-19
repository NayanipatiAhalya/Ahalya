import React from "react";
import { useNavigate } from "react-router-dom";
let Image=() =>
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
return(
<div>

    
        <button onClick={goHome}>Home</button>&nbsp;&nbsp;
        <button onClick={goImages}>Images</button>&nbsp;&nbsp;
        <button onClick={goAboutUs}>About Us</button>&nbsp;&nbsp;
        <button onClick={goContactUs}>Contact Us</button>&nbsp;&nbsp;
    
    

<section>
<h1>Wedding:</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0zH7_4qptuZltpla4nZ5siPa2NgLboDddQMZkOqjhw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFxoW9RdOuksu6GVLi6oAWcZp-Tf8M5iR6Dc2Esywvw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_92pA-R10-4fut4LjLXp_twfrp1Yt28rNHl4wy2CZQ&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlNY9FSnDTvGGxvycGNZYwtOi39gtGF7716ez_vfHSA&usqp=CAU&ec=48665701" height="300px" width="300px"></img>
            <h1>Birthday:</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPltauohRSvrwpFPP_-p2-kTmHGLUEqnjABljoTPbhBw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_wBXLieVAeExWU5keHaas0IcjEz2683xVHC5kYaGZg&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGv1CwMzUzsH7GgPC0qY150xC7ldRvutvLoBnuPVuSjg&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpZvqvxlYoDJ7kQdCl9j4FRTkMsazQgClixiKJ0PJKA&usqp=CAU&ec=48665701" height="300px" width="300px"></img>
<h1>Spinster Functions:</h1>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfXEz4NPEHDadzFVt2Hot_EEy55HhBkQurhDvrI5kdA&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvSpM3SZx05r9hQlo9JEoL_mHzGljK2QLoiJz7XRZIw&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-vyBi8Ltf5UrEdZUN2hI0RyBUIsd3HKAmVNlUxmV0Q&usqp=CAU&ec=48665701" height="300px" width="300px"></img> &nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbmvXmgFL98w0wX-nDKT1K0we3vBadYrR095z0dLfuA&usqp=CAU&ec=48665701" height="300px" width="300px"></img>
</section>          
</div>
)
}
export default Image;