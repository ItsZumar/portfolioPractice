import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Form from "../Components/Form/Form";

const useStyles = makeStyles((theme) => ({
  contact: {
    paddingTop: 50,
    paddingBottom: 70,
    color: "black",
  },
  gridItem1: {
    marginBottom: 60,
  },
  gridItem2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px 60px 50px 60px",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 20px 50px 20px",
    },
  },
  gridItem3: {
    backgroundColor: "white",
    color: "black",
    padding: "50px 60px 50px 60px",
    boxShadow: "0 0 10px 1px gray",
  },
  textField: {
    marginTop: 20,
  },
  sendBtn: {
    marginTop: 70,
    width: 150,
  },
  infoFields: {
    display: "flex",
    padding: 20,
    marginBottom: 20,
    color: "white",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      marginBottom: 10,
    },
  },
  icons: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    [theme.breakpoints.down("xs")]: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
  },
  typography: {
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.gridItem1} align="center">
            <Typography variant="h3" gutterBottom>
              Contact me
            </Typography>
            <Typography variant="h6">
              Thanks for taking the time to reach out. How can I help you today?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItem2}>
            <a href="Address: Rawalpindi, PK" className={classes.infoFields}>
              <div className={classes.icons}>
                <LocationOnIcon />
              </div>
              <div>
                <Typography variant="h6" className={classes.typography}>
                  Address
                </Typography>
                <Typography className={classes.typography}>
                  Rawalpindi, PK
                </Typography>
              </div>
            </a>
            <a href="phone: 0888-9338839" className={classes.infoFields}>
              <div className={classes.icons}>
                <PhoneIcon />
              </div>
              <div>
                <Typography className={classes.typography} variant="h6">
                  Phone
                </Typography>
                <Typography className={classes.typography}>
                  0888-9338839
                </Typography>
              </div>
            </a>
            <a
              href="Email: zumarsaeed@gmail.com"
              className={classes.infoFields}
            >
              <div className={classes.icons}>
                <EmailIcon />
              </div>
              <div>
                <Typography variant="h6" className={classes.typography}>
                  Email{" "}
                </Typography>
                <Typography className={classes.typography}>
                  zumarsaeed17@gmail.com
                </Typography>
              </div>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.gridItem3}
            align="center"
          >
            <Form />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
