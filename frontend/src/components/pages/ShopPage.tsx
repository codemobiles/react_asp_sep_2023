import { Box, Button } from "@mui/material";
import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

type Props = {};

export default function ShopPage({}: Props) {
  return (
    <Box sx={{ marginTop: 10 }}>
      ShopPage
      <AccessAlarmIcon />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Box>
  );
}
