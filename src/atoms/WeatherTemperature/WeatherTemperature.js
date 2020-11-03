import React from "react";

import SimpleSkeleton from "../SimpleSkeleton/SimpleSkeleton";

const WeatherTemperature = (props) => {
  const { loading = false, max, min } = props;

  return loading ? (
    <article>
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
    <article>
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
