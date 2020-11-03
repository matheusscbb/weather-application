import React from "react";

import { Room } from "@material-ui/icons";
import { SvgIcon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  markerCotainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const MarkerComponent = (props) => {
  const { text, fontSize, className } = props;

  const classes = useStyles();

  return (
    <div className={`${classes.markerCotainer} ${className}`}>
      <SvgIcon
        color="secondary"
        component={Room}
        fontSize={fontSize ? fontSize : "default"}
      />

      {text && <span>{text}</span>}
    </div>
  );
};

export default MarkerComponent;
