import React from "react";

import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const CardComponent = (props) => {
  const { image, imageTitle, children, title } = props;

  return (
    <Card>
      <CardActionArea>
        {image ? <CardMedia
          image={image}
          title={imageTitle}
        /> : ""}
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
