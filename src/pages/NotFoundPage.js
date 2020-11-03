import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  centerText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#ccc",
    height: "100vh",
    backgroundColor: "#fff",

    "& div" : {
      display: "flex",
      alignItems: "center",
      
      marginBottom: 200,
      borderBottom: "8px solid #ccc",

      "& h1": {
        margin: 0,
        maxWidth: 300,
        fontSize: 62,
      },
      
      "& span": {
        fontSize: 156,
        fontWeight: "bold",
      },
    },
  },
});

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.centerText}>
      <div>
        <h1>PAGE NOT FOUND</h1> <span>.404</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
