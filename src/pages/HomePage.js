import React, { useState, useEffect } from "react";

import { ENUM_START_LOCATION } from "../utils/constants";

import SearchContainer from "../organisms/SearchContainer/SearchContainer";
import MapsContainer from "../molecules/MapsContainer/MapsContainer";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState({ ...ENUM_START_LOCATION });
  const [marker, setMarker] = useState({ ...ENUM_START_LOCATION });

  useEffect(() => {
    const getCoordinates = async () => {
      // add timeout to avoid eternal loading
      const options = {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(function (position) {

        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        setMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        setLoading(false);
      }, options);
    };

    if ("geolocation" in navigator) {
      getCoordinates();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <SearchContainer
        coordinates={marker ? marker : center}
        loading={loading}
      />

      <MapsContainer
        loading={loading}
        center={center}
        marker={marker}
        onClickHanlder={setMarker}
      />
    </div>
  );
};

export default HomePage;
