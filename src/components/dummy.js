import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Link, Stack } from "@mui/material";
import axios from "axios";

export default function MainHome() {
  const [surat, setSurat] = useState([]);

  const getAPI = async () => {
    const response = await axios("https://equran.id/api/v2/surat");
    setSurat(response.data.data);
  };

  useEffect(() => {
    getAPI();
  }, []);

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
              My Quran Apps
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
        <Content data={surat} />
      </main>
    </>
  );
}

const Content = ({ data }) => {
  const click = (id) => {
    console.log(id);
  };
  console.log({ data: data });
  return (
    <Container className="" maxWidth="md">
      <Grid container spacing={4}>
        {data.map((data) => (
          <Grid item key={data.nomor} xs={12} sm={6} md={4}>
            <Link
              sx={{ textDecoration: "none" }}
              onClick={() => click(data.nomor)}
            >
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
                    {data.nama}
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontSize="1.3rem"
                    fontWeight="400"
                  >
                    {data.namaLatin}
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
                      {data.arti}
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
                      {data.jumlahAyat} ayat
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
