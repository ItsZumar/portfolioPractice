import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import avatar from "../Images/avatar.png";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 62,
    paddingBottom: 200,
  },
  img: {
    width: 260,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container align="center" spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginBottom: 50 }}
          >
            About Me
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid>
            <Typography
              variant="h5"
              color="textSecondary"
              style={{ marginBottom: 15 }}
            >
              Hi There!
            </Typography>
            <Typography
              variant="h4"
              style={{ marginBottom: 25, fontWeight: "bold", color: "#633232" }}
            >
              I am Zumar Saeed.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" style={{ marginBottom: 20 }}>
              I am 21 years old from Rawalpindi, PK. I have learnt basics of
              HTML, CSS, JS, React and material-ui.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" color="primary">
              <a
                style={{ textDecoration: "none" }}
                href="email: zumarsaeed17@gmail.com"
              >
                zumarsaeed@gmail.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="#" src={avatar} className={classes.img} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
