import { makeStyles, Toolbar } from "@material-ui/core";
import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/OriginalLogo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "black",
    padding: "0 100px 0 100px",
  },
  logo: {
    textDecoration: "none",
    color: "white",
  },
  btn: {
    padding: "10px 20px 10px 20px",
    borderLeft: "3px solid white",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "black",
    },
    "&:active": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "black",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  headerLinks: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
      paddingBottom: 25,
    },
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header} elevation={0}>
      <Toolbar>
        <div className={classes.container}>
          <Link to="/" className={classes.logo}>
            {/* <Typography variant="h3">ZS</Typography> */}
            <img src={logo} alt="#" style={{ width: 90 }} />
          </Link>
          <div className={classes.headerLinks}>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography className={classes.btn}>Contact</Typography>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Typography className={classes.btn}>Portfolio</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography className={classes.btn}>About</Typography>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
