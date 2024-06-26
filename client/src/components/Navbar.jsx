import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to={"/"} className="">PERN STACK</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("task/new")}
            >
              New Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
