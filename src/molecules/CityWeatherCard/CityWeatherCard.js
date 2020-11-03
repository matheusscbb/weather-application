import React from "react";

import { makeStyles } from "@material-ui/core";

import SimpleSkeleton from "../../atoms/SimpleSkeleton/SimpleSkeleton";
import WeatherTemperature from "../../atoms/WeatherTemperature/WeatherTemperature";

const useStyles = makeStyles({
  cardCity: {
    padding: 20,
    borderTop: "1px solid #ccc",

    "&:hover": {
      backgroundColor: "#f1f1f1",
    },

    "& h4, h2": {
      margin: 0,
    },
    
    "& h2": {
      textAlign: "left",
    },

    "& h3": {
      marginBottom: 10,
      color: "#70757A",
      textAlign: "left",
    },
  },
})

const CityWeatherCard = (props) => {
  const { loading = false, city } = props;
  const classes = useStyles();

  return (
    <section className={classes.cardCity}>
      {loading ? (
        <>
          <SimpleSkeleton width={120} height={28} marginBottom={20} />
          <SimpleSkeleton width={160} height={22} marginBottom={10} />
        </>
      ) : (
        <>
          <h2>{city.name}</h2>
          <h3>Temperature</h3>
        </>
      )}

      <WeatherTemperature
        loading={loading}
        min={city.main.temp_min}
        max={city.main.temp_max}
      />
    </section>
  );
};

export default CityWeatherCard;
