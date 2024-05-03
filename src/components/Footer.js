import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Membaca Al-Quran dengan mudah
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Dimana pun dan Kapan pun !
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}
