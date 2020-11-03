import React, { useState } from "react";

import { getCloserWeatherCities } from "../../services/city";


import { makeStyles } from "@material-ui/core";

import ButtonCompoent from "../../atoms/ButtonComponent/ButtonComponent";
import AsideCitiesResult from "../AsideCitiesResult/AsideCitiesResult";

const useStyles = makeStyles({
  barContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    top: 60,
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
});

const SearchContainer = (props) => {
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

      <AsideCitiesResult list={list} loading={buttonLoading} isOpen={isOpen} closeHandler={() => setIsOpen(false)} />
    </>
  );
};

export default SearchContainer;
