import React from "react";

import { Button, CircularProgress } from "@material-ui/core";

const ButtonCompoent = (props) => {
  const { loading = false, variant, color, buttonLabel, onClick } = props;

  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : "contained"}
      color={color ? color : "primary"}
      disabled={loading}
    >
      {buttonLabel}
      {loading ? (
        <CircularProgress
          style={{ marginLeft: 6 }}
          thickness={6}
          size={16}
          variant="indeterminate"
          color="secondary"
        />
      ) : (
        ""
      )}
    </Button>
  );
};

export default ButtonCompoent;
