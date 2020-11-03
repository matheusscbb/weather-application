import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import WeatherTemperature from "../atoms/WeatherTemperature/WeatherTemperature";
import CardComponent from "../atoms/CardComponent/CardComponent";
import WeatherWind from "../atoms/WeatherWind/WeatherWind";
import MapsContainer from "../molecules/MapsContainer/MapsContainer";

const useStyles = makeStyles({
  container: {
    padding: "20px 50px",

    "& h6": {
      marginBottom: 60,
    },

    "@media(max-width: 600px)": {
      padding: "20px 0 0",
      width: "90%",
      margin: "auto",
    },
  },
  cardArea: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",

    padding: 20,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",

    "@media(max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
  mapContainer: {
    padding: 50,
  },
});

const DetailPage = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location) {
      if (!location.state) {
        history.push("/");
        return;
      }

      setCity(location.state.city);
    }

    setLoading(false);
  }, [location, history]);

  return (
    <>
      <section className={classes.container}>
        <Typography component="h1" variant="h2">
          {city?.name} <small>({city?.sys.country})</small>
        </Typography>

        <Typography component="h6" variant="h6" gutterBottom>
          {`Latitude: ${city?.coord.lat} Longitude: ${city?.coord.lon}`}
        </Typography>

        <div className={classes.cardArea}>
          <CardComponent title="Temperature">
            <WeatherTemperature
              max={city?.main.temp_max}
              min={city?.main.temp_min}
              loading={loading}
            />
          </CardComponent>

          <CardComponent title="Wind">
            <WeatherWind
              direction={city?.wind.deg}
              velocity={city?.wind.speed}
              loading={loading}
            />
          </CardComponent>
        </div>
      </section>

      {!loading ? (
        <div className={classes.mapContainer}>
          <MapsContainer
            marker={{ lat: city?.coord.lat, lng: city?.coord.lon }}
            height={600}
            width="100%"
            center={{ lat: city?.coord.lat, lng: city?.coord.lon }}
            zoom={14}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailPage;
