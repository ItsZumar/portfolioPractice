import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    backgroundColor: "black",
    color: "white",
  },
  margin: {
    marginBottom: 20,
  },
  icons: {
    margin: 20,
    border: "1px solid gray",
    fontSize: "55px",
    padding: 10,
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    [theme.breakpoints.down("xs")]: {
      margin: 10,
      fontSize: "45px",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Container
        style={{ padding: 50 }}
        align="center"
        className={classes.mainDiv}
      >
        <Typography variant="h3" className={classes.margin}>
          ZS
        </Typography>
        <Typography variant="h5" className={classes.margin}>
          Living, learning, & leveling up one day at a time.
        </Typography>
        <div className={classes.margin}>
          <a href="https://twitter.com/home" style={{ color: "white" }}>
            <TwitterIcon className={classes.icons} />
          </a>
          <a href="https://www.facebook.com" style={{ color: "white" }}>
            <FacebookIcon fontSize="large" className={classes.icons} />
          </a>
          <a href="https://github.com" style={{ color: "white" }}>
            <GitHubIcon fontSize="large" className={classes.icons} />
          </a>
        </div>
        <Typography className={classes.margin}>
          Designed by Zumar Saeed
        </Typography>
        <Typography className={classes.margin}>Made with VScode</Typography>
      </Container>
    </div>
  );
}

export default Footer;