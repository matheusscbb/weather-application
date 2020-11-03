import React from "react";

import { Button, CircularProgress } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ButtonCompoent = (props) => {
  const {
    loading = false,
    variant,
    color,
    buttonLabel,
    onClick,
    hasCloseIcon = false,
  } = props;

  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : "contained"}
      color={color ? color : "primary"}
      disabled={loading}
    >
      {hasCloseIcon ? <CloseIcon /> : ""}
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
