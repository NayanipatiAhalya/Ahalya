import React from "react";
import { useNavigate } from "react-router-dom";
let About=() =>
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
    <center>
    <h1>WELCOME TO MY EVENTS</h1>
    </center>
    <h2>why choose us ?</h2>
    <h1>BECAUSE WE CARE ABOUT YOUR EVENT:</h1>
    <p>Choosing Ragasaan is an investment towards your event because we treasure and care for all our clients
         and we are prepared to go that extra mile to make each event unique and memorable. With our experienced
          team, we ensure the success of your event – that is why we do not simply ‘manage’ things
           – we ‘orchestrate’ every single component of your special day, so that what you see and get, far exceeds
            anything you could have possibly imagined! We have years of experience in special event management
             and offer a unique service, which begins with sourcing the right venue, to organising and managing
              all the various aspects of your event or party. We have an excellent reputation and always provide 
              a professional level of service. We strive to fulfil our client’s expectations and objectives in a
               creative and cost-effective way and create concepts to achieve your dreams and work within your budget.</p>
               <img src="https://www.aicaevents.com/wp-content/uploads/2020/09/Garden_birthday_party_decoration_by_aicaevents_TPG1closeup.jpg"></img>
               <h1>A TEAM WITH EXPERIENCE</h1>
               <p>We will oversee and run the entire event from start to finish, leaving you free to enjoy your
                event and play special host to your guests. We create the ambiance in your venue, whether be it
                a hotel, a stately home or a marquee.</p>

                <p>Our approach is very "hands-on"; we will manage all services required to make your event a success.
                If you are sourcing any extra services, we will liaise with you and your sub-contractors to ensure
                nothing is overlooked. We are happy to manage all or only some aspects of your event, allowing
                you to retain control whilst benefiting from our planning and operational experience.


</p>
</section>
</div>
)
};
export default About;