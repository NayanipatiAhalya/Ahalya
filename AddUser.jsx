import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [isLoggedIn13, setIsLoggedIn13] = useState(false);
  const navigate13 = useNavigate();

  const handleLogin13 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn13(true);

    // Navigate to the desired route
    navigate13("/BasicTable"); // Example: Navigate to the Admin page after login
  };

  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    eventName: "",
    place: "",
    date: "",
  });

  const { eventName, place, date } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8080/adduser", userData);
    setUserData({ eventName: "", place: "", date: "" });
    navigate("/BasicTable");
  };

  


  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="eventName"
              name="eventName"
              value={eventName}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="place"
              name="place"
              value={place}
              onChange={handleData}
            />
            <TextField
            type="date"
              label="date"
              name="date"
              value={date}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained"  onClick={handleLogin13}> 
                Add Event
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;