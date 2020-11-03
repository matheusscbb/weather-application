import React from "react";

import { makeStyles } from "@material-ui/core";

import SimpleSkeleton from "../SimpleSkeleton/SimpleSkeleton";

const useStyles = makeStyles({
  weatherContainer: {
    display: "flex",
    justifyContent: "space-around",

    color: "#70757A",

    "& div": {
      display: "flex",
      flexDirection: "column",
    },

    "& h4": {
      margin: 0
    },
  },
});

const WeatherWind = (props) => {
  const { loading = false, direction, velocity } = props;
  const classes = useStyles();

  return loading ? (
    <article className={classes.weatherContainer}>
      <div>
        <SimpleSkeleton width={30} height={16} marginBottom={4} />
        <SimpleSkeleton width={60} height={16} />
      </div>

      <div>
        <SimpleSkeleton width={30} height={16} marginBottom={4} />
        <SimpleSkeleton width={60} height={16} />
      </div>
    </article>
  ) : (
    <article className={classes.weatherContainer}>
      <div>
        <h4>Direciton</h4> {direction}º
      </div>

      <div>
        <h4>Velocity</h4> {velocity}º m/s
      </div>
    </article>
  );
};

export default WeatherWind;
