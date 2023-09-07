import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  color: string;
  icon: any;
  button?: any;
};

export default function StockCard(props: Props) {
  return (
    <Card>
      <Grid container className="min-h-[70px]">
        <Grid item className="flex-grow h-[100px] p-2">
          <Typography variant="h5" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {props.subtitle}
          </Typography>
          {props.button}
        </Grid>

        <Grid
          item
          style={{
            backgroundColor: props.color,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 70,
          }}
        >
          <props.icon fontSize="large" />
          {/* {React.createElement(props.icon, { fontSize: "large" })} */}
        </Grid>
      </Grid>
    </Card>
  );
}
