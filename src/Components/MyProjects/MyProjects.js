import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import img from "../../Images/eCommerce.png";
import img1 from "../../Images/todo.png";
import img2 from "../../Images/table.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  container: {
    paddingTop: 125,
    paddingBottom: 150,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 90,
  },
  media: {
    padding: 0,
    height: 260,
  },
  card1: {
    backgroundColor: "rgba(201, 24, 74, 0.7)",
    padding: 20,
    color: "black",
  },
  card2: {
    backgroundColor: "#232323",
    padding: 20,
    color: "black",
  },
  card3: {
    backgroundColor: "purple",
    padding: 20,
    color: "black",
  },
  cardTypography: {
    color: "white",
    marginBottom: 20,
  },
  cardTypographyDetail: {
    color: "white",
    marginBottom: 40,
  },
  link: {
    textDecoration: "none",
    backgroundColor: "white",
    padding: "10px 20px",
    color: "rgba(0,0,0,0.8)",
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
  },
  linkView: {
    textDecoration: "none",
    backgroundColor: "white",
    padding: "10px 20px",
    color: "rgba(0,0,0,0.8)",
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 140,
  },
  eCommerce: {
    width: "401px",
    height: "196px",
  },
  table: {
    width: "363px",
    height: "100px",
    marginTop: "50px",
    marginBottom: "44px",
  },
});

function MyProjects() {
  const classes = useStyles();
  return (
    <Container align="center" className={classes.container}>
      <Typography variant="h3" className={classes.heading}>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card align="center">
            <CardMedia
              className={classes.eCommerce}
              image={img}
              title="E-Commerce"
            />
            <CardContent className={classes.card1}>
              <Typography variant="h4" className={classes.cardTypography}>
                E-Commerce
              </Typography>
              <Typography className={classes.cardTypographyDetail}>
                E-Commerce is a Website that is Design by using
                Material-ui/core, Material-ui/icons and react-router-dom.
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 270,
                }}
              >
                <a
                  href="https://github.com/ItsZumar/eCommerce"
                  className={classes.link}
                >
                  <GitHubIcon />
                  Github
                </a>
                <a
                  href="https://e-commerce12.netlify.app/"
                  className={classes.linkView}
                >
                  <VisibilityIcon />
                  View Live
                </a>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card align="center">
            <CardMedia
              className={classes.eCommerce}
              image={img1}
              title="Todo App"
            />
            <CardContent className={classes.card2}>
              <Typography variant="h4" className={classes.cardTypography}>
                Todo App
              </Typography>
              <Typography className={classes.cardTypographyDetail}>
                Todo App is a Website that is Design by using Material-ui/core,
                Material-ui/icons and react-router-dom.
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 270,
                }}
              >
                <a
                  href="https://github.com/ItsZumar/Todo-App"
                  className={classes.link}
                >
                  <GitHubIcon />
                  Github
                </a>
                <a
                  href="https://github.com/ItsZumar/Todo-App"
                  className={classes.linkView}
                >
                  <VisibilityIcon />
                  View Live
                </a>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card align="center">
            <CardMedia
              className={classes.table}
              image={img2}
              title="Material-Table"
            />
            <CardContent className={classes.card3}>
              <Typography variant="h4" className={classes.cardTypography}>
                Material-Table
              </Typography>
              <Typography className={classes.cardTypographyDetail}>
                Material-Table is a Website that is Design by using
                Material-ui/core, Material-ui/icons and react-router-dom.
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 270,
                }}
              >
                <a
                  href="https://github.com/ItsZumar/Material-Table"
                  className={classes.link}
                >
                  <GitHubIcon />
                  Github
                </a>
                <a
                  href="https://github.com/ItsZumar/Material-Table"
                  className={classes.linkView}
                >
                  <VisibilityIcon />
                  View Live
                </a>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyProjects;
