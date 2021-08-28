import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import illustration from "../Images/illustration.svg";
import Card from "../Components/Card/CardDetail";

const useStyles = makeStyles((theme) => ({
  img: {
    width: 600,
    marginTop: 80,
    marginBottom: -39,
    [theme.breakpoints.down("sm")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  detail: {
    backgroundColor: "pink",
    padding: "160px 300px 280px 300px",
    [theme.breakpoints.down("md")]: {
      padding: "160px 200px 280px 200px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "130px 60px 180px 60px",
    },
  },
  name: {
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 21,
      fontWeight: "bold",
    },
  },
  detailTypography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));

function MyDetail() {
  const classes = useStyles();
  return (
    <Grid align="center">
      <img alt="#" src={illustration} className={classes.img} />
      <Grid className={classes.detail}>
        <Typography variant="h4" className={classes.name}>
          Hi, I’m Zumar. Nice to meet you.
        </Typography>
        <Typography variant="h6" className={classes.detailTypography}>
          Since beginning my journey as a freelance designer nearly 10 years
          ago, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </Typography>
      </Grid>
      <Container style={{ marginTop: -170 }}>
        <Card />
      </Container>
    </Grid>
  );
}

export default MyDetail;
