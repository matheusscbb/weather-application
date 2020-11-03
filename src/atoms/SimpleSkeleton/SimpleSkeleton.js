import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  loading: {
    backgroundColor: "#eee",
    display: "flex",
  },
});

const SimpleSkeleton = (props) => {
  const { height, width, marginBottom } = props;

  const classes = useStyles();

  return (
    <span
      className={classes.loading}
      style={{ height: height, width: width, marginBottom: marginBottom }}
    />
  );
};

export default SimpleSkeleton;
