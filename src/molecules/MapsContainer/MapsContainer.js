import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import { makeStyles, CircularProgress } from "@material-ui/core";

import MarkerComponent from "../../atoms/Marker/MarkerComponent";

const useStyles = makeStyles({
  markerCotainer: {
    position: "relative",

    "& svg": {
      position: "absolute",
      bottom: 0,
    },
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
    backgroundColor: "eeeeee63",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

function MapsContainer(props) {
  const { loading, center, marker, onClickHanlder } = props;
  const classes = useStyles();

  const [zoom] = useState(10);

  const onMapClicked = (e) => {
    const { lat, lng } = e;

    onClickHanlder({
      lat: lat,
      lng: lng,
    });
  };

  return loading ? (
    <div className={classes.loading}>
      <CircularProgress color="secondary" variant="indeterminate" />
    </div>
  ) : (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBRUxIpc53pL-hprG7WvjKY0lX6_Zz1Poc" }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={onMapClicked}
      >
        <MarkerComponent
          {...marker}
          fontSize="large"
          className={classes.markerCotainer}
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapsContainer;
