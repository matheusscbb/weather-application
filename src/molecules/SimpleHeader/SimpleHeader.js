import React from "react";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  header: {
    position: "relative",
    zIndex: 4,

    height: 60,
    padding: "0 20px",
    backgroundColor: theme.palette.secondary.main,

    display: "flex",
    alignItems: "center",

    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontSize: "2em"
    }
  },
}));

const SimpleHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav>
        <Link to="/">
          Weather Application
        </Link>
      </nav>
    </header>
  );
};

export default SimpleHeader;
