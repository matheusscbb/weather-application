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

const WeatherTemperature = (props) => {
  const { loading = false, max, min } = props;
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
        <h4>Min</h4> {min}ºC
      </div>

      <div>
        <h4>Max</h4> {max}ºC
      </div>
    </article>
  );
};

export default WeatherTemperature;
