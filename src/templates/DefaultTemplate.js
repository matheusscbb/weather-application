import React from "react";

import { Route } from "react-router-dom";

import SimpleHeader from "../molecules/SimpleHeader/SimpleHeader";

const DefaultTemplate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <SimpleHeader />
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export default DefaultTemplate;
