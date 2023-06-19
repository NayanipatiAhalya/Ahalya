import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8080/update/${id}`, userData);
    navigate("/BasicTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/finduser/${id}`);
    setUserData(result.data);
  };

  return (
    <Container>
      <Box>
        <h1>Update user details</h1>
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
              label="date"
              name="date"
              value={date}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Update
              </Button>
              <Button href="/BasicTable" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Update;