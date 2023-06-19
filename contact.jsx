import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
let Contact=() =>
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
        <button onClick={goImages}>Image</button>&nbsp;&nbsp;
        <button onClick={goAboutUs}>About Us</button>&nbsp;&nbsp;
        <button onClick={goContactUs}>Contact Us</button>&nbsp;&nbsp;
       
    
    

<section>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Events</Typography>
        <p>
        The Event Planner Layout Pack captures a perfect balance of versatility and originality. The design is
        unique with beautiful background graphics and sleek button designs. And the page layouts are extremely
        accessible for designers looking to build an event planner site that fits their own needs. The pack
        includes dedicated pages for showcasing event projects, portfolios, and services.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Toll free:1234-5678-90
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                    Email:eventsplanners@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                    For Registration:7689-1223-55
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
</section>
</div>
)
};
export default Contact;