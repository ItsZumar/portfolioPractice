import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    marginTop: 30,
    marginBottom: 100,
  },
  card: {
    padding: "30px 80px 30px 80px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 50px 30px 50px",
    },
  },
  icon: {
    fontSize: 80,
    marginBottom: 30,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 21,
    },
  },
  detail: {
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  subHead: {
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
}));

function CardDetail() {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <AccountCircleIcon className={classes.icon} />
              <Typography variant="h4" className={classes.heading}>
                Student
              </Typography>
              <Typography className={classes.detail} variant="h6">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                className={classes.subHead}
              >
                Things I enjoy designing:
              </Typography>
              <Typography
                style={{ marginBottom: 30 }}
                className={classes.subHead}
                variant="h6"
              >
                UX, UI, Web, Mobile, Apps, Logos
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                className={classes.subHead}
              >
                Design Tools:
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Balsamiq
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Mockups
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Figma
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Balsamiq
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Mockups
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Figma
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <CodeIcon className={classes.icon} />
              <Typography variant="h4" className={classes.heading}>
                Front-end Developer
              </Typography>
              <Typography className={classes.detail} variant="h6">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                className={classes.subHead}
              >
                Things I enjoy designing:
              </Typography>
              <Typography
                style={{ marginBottom: 30 }}
                className={classes.subHead}
                variant="h6"
              >
                UX, UI, Web, Mobile, Apps, Logos
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                className={classes.subHead}
              >
                Design Tools:
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Balsamiq
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Mockups
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Figma
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Balsamiq
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Mockups
              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                className={classes.subHead}
                variant="h6"
              >
                Figma
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardDetail;
