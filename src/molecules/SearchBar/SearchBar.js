import React, { useState } from "react";

import { getCloserWeatherCities } from "../../services/city";

import { uniqueId } from "lodash";

import { makeStyles } from "@material-ui/core";

import ButtonCompoent from "../../atoms/ButtonComponent/ButtonComponent";
import WeatherTemperature from "../../atoms/WeatherTemperature/WeatherTemperature";
import SimpleSkeleton from "../../atoms/SimpleSkeleton/SimpleSkeleton";

const useStyles = makeStyles({
  barContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    top: 0,
    left: 0,
    zIndex: 2,
    width: 240,
    position: "absolute",
    backgroundColor: "white",

    margin: 10,
    padding: 20,
    borderRadius: 8,

    "& button": {
      width: "100%",
      marginTop: 10,
    },
  },
  asideContainer: {
    top: 0,
    bottom: 0,
    zIndex: 1,
    width: 300,
    position: "absolute",
    backgroundColor: "white",

    margin: 0,
    padding: "120px 0px 60px",

    transition: "all 0.2s ease-out",

    "& div": {
      overflow: "auto",
      maxHeight: "calc(100vh - 160px)",
    },

    "& button": {
      width: "100%",
      marginTop: 10,
    },
  },
  cardCity: {
    cursor: "Pointer",
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

    "& article": {
      display: "flex",
      justifyContent: "space-around",

      color: "#70757A",

      "& div": {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});

const SearchBar = (props) => {
  const { coordinates, loading } = props;

  const classes = useStyles();

  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const onClickHandler = async () => {
    const { lat, lng } = coordinates;
    setButtonLoading(true);
    
    getCloserWeatherCities(lat, lng)
      .then((response) => response.json())
      .then((response) => {
        setList(response.list);
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setButtonLoading(false));
  };

  return (
    <>
      <div className={classes.barContainer}>
        <span>Select a location and search</span>

        <ButtonCompoent
          buttonLabel="Search"
          color="secondary"
          onClick={() => onClickHandler()}
          loading={loading || buttonLoading}
        />
      </div>

      <aside
        className={classes.asideContainer}
        style={{ left: isOpen ? 0 : -300 }}
      >
        <div>
          {list &&
            list.map((city) => {
              return (
                <section className={classes.cardCity} key={uniqueId()}>
                  {buttonLoading ? (
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

                  <WeatherTemperature loading={buttonLoading} min={city.main.temp_min} max={city.main.temp_max}/>
                </section>
              );
            })}
        </div>
      </aside>
    </>
  );
};

export default SearchBar;
