import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import avatar from "../Images/avatar.png";
import MyDetail from "./MyDetail";
import img from "../Images/lake.png";

const useStyles = makeStyles((theme) => ({
  div: {
    // backgroundColor: "#303030",
    color: "white",
    paddingTop: 30,
    overflowX: "hidden",
    backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)),
      url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    paddingTop: 130,
    [theme.breakpoints.down("md")]: {
      paddingTop: 80,
    },
  },
  mainTypography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  secTypography: {
    marginTop: 20,
    fontSize: 20,
  },
  img: {
    width: 260,
    marginTop: 50,
    marginBottom: 90,
    [theme.breakpoints.down("sm")]: {
      marginTop: 69,
      width: 200,
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.div}>
        <Container align="center" className={classes.container}>
          <div>
            <Typography variant="h3" className={classes.mainTypography}>
              Student and Front-end Developer
            </Typography>
            <Typography variant="h5" className={classes.secTypography}>
              I am a Student and I code beautifully simple things, and I love
              what I do.
            </Typography>
          </div>
          <img alt="#" src={avatar} className={classes.img} />
        </Container>
      </div>
      <MyDetail />
    </div>
  );
}

export default HomePage;
