import {
  Box,
  CardContent,
  Typography,
  Container,
  Grid,
  Card,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function MainSurat() {
  return (
    <>
      <main>
        <HeaderSurah />
        <Content />
      </main>
    </>
  );
}

const Content = () => {
  const [data, setData] = useState([]);
  // const id = props.match.params.id;
  // console.log(id);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://equran.id/api/surat/" + id)
      .then((res) => {
        console.log("res", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  console.log({ data: data.ayat });
  const ayat = data.ayat || [];
  console.log(ayat);
  return (
    <>
      <Container sx={{ mt: "4rem", mb: "4rem" }} maxWidth="md">
        <Grid container spacing={4} flexDirection="column">
          {ayat.map((params) => (
            <Grid item key={params.nomor}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent className="">
                  <Typography
                    textAlign="end"
                    gutterBottom
                    variant="h5"
                    component="h2"
                    fontSize="2rem"
                  >
                    {params.ar}
                    <span className="nomorAyat">{params.nomor}</span>
                  </Typography>
                  <Typography
                    textAlign="start"
                    fontSize="1rem"
                    fontWeight="400"
                  >
                    {params.idn}
                  </Typography>
                  <Stack></Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const HeaderSurah = () => {
  const [data, setData] = useState([]);
  // const id = props.match.params.id;
  // console.log(id);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://equran.id/api/surat/" + id)
      .then((res) => {
        // console.log("res", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  const clickPrev = () => {
    window.location.href = `/${data.nomor - 1}`;
  };
  const clickNext = () => {
    window.location.href = `/${data.nomor + 1}`;
  };
  const ayat = data.ayat || [];

  // console.log({ data: data });
  return (
    <>
      <Container sx={{ mt: "2rem" }}>
        <Grid>
          <Grid>
            <Card sx={{ mt: "3rem", mb: "3rem" }}>
              <CardContent>
                <Typography>
                  {data.arti}({data.nama_latin})
                </Typography>
                <Typography>
                  {data.nomor < 2 ? (
                    ""
                  ) : (
                    <Link className="prevNext" onClick={() => clickPrev()}>
                      «
                    </Link>
                  )}
                  000/00{data.jumlah_ayat}
                  {data.nomor > 113 ? (
                    ""
                  ) : (
                    <Link className="prevNext" onClick={() => clickNext()}>
                      »
                    </Link>
                  )}
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography sx={{ mb: "1rem" }}>Play Audio</Typography>
                <Typography>
                  <audio src={data.audio} controls />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
