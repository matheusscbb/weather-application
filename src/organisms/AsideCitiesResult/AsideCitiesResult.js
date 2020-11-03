import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { uniqueId } from "lodash";

import ButtonCompoent from "../../atoms/ButtonComponent/ButtonComponent";
import CityWeatherCard from "../../molecules/CityWeatherCard/CityWeatherCard";

const useStyles = makeStyles({
  asideContainer: {
    top: 60,
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
      maxHeight: "calc(100vh - 220px)",
    },

    "& a": {
      textDecoration: "none",
      color: "initial",
    },

    "& button": {
      width: "100%",
      marginTop: 10,
    },
  },
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

const AsideCitiesResult = (props) => {
  const {
    loading = false,
    list,
    isOpen,
    closeHandler
  } = props;
  const classes = useStyles();

  return (
    <aside
      className={classes.asideContainer}
      style={{ left: isOpen ? 0 : -300 }}
    >
      <div>
        <ButtonCompoent variant="text" buttonLabel="CLOSE RESULTS" hasCloseIcon onClick={() => closeHandler()} />

        {list &&
          list.map((city) => {
            return (
              <Link
                to={{
                  pathname: "/details",
                  state: {
                    city: city,
                  },
                }}
                key={uniqueId()}
              >
                <CityWeatherCard loading={loading} city={city} />
              </Link>
            );
          })}
      </div>
    </aside>
  );
};

export default AsideCitiesResult;
