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
          I am 21 year old doing Software Engineer from Rawalpindi, PK. Since
          beginning my journey as a Website Developer nearly 2 years ago, I have
          learnt basics of HTML, CSS, JS, React and material-ui and also trying
          to learn new things.
        </Typography>
      </Grid>
      <Container style={{ marginTop: -170 }}>
        <Card />
      </Container>
    </Grid>
  );
}

export default MyDetail;
