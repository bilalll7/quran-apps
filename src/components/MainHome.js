import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }}>
          <Container maxWidth="sm">
            <Typography
              variant="p"
              fontSize="3rem"
              fontWeight="600"
              letterSpacing="1px"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Daftar Surah
            </Typography>
            <Typography
              mt="1rem"
              variant="p"
              fontSize="1rem"
              align="center"
              color="textSecondary"
              letterSpacing="1.3px"
              paragraph
            >
              Membaca Al-Quran dengan mudah dimanapun dan kapan pun.
            </Typography>
          </Container>
        </Box>
        <Content />
      </main>
    </>
  );
}

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://equran.id/api/surat")
      .then((res) => {
        console.log("testd: ", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      <Container className="" maxWidth="md">
        <Grid container spacing={4}>
          {data.map((surah) => (
            <Grid item key={surah.nomor} xs={12} sm={6} md={4}>
              <Link className="link" to={`/${surah.nomor}`}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent className="">
                    <Typography
                      textAlign="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {surah.nama}
                    </Typography>
                    <Typography
                      textAlign="center"
                      fontSize="1.3rem"
                      fontWeight="400"
                    >
                      {surah.nama_latin}
                    </Typography>
                    <Stack mt="1rem" justifyContent="center" direction="row">
                      <Typography
                        padding="5px"
                        fontSize="0.8rem"
                        bgcolor="green"
                        color="white"
                        margin="4px"
                        letterSpacing="1.5px"
                        textAlign="center"
                        borderRadius="0.5rem"
                      >
                        {surah.arti}
                      </Typography>
                      <Typography
                        padding="5px"
                        fontSize="0.8rem"
                        bgcolor="teal"
                        color="white"
                        margin="4px"
                        letterSpacing="1.5px"
                        textAlign="center"
                        borderRadius="0.5rem"
                      >
                        {surah.jumlah_ayat} ayat
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
