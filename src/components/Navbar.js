import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography varient="title" color="inherit">
            React and Material UI Application
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
