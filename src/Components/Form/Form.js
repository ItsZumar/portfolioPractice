import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  textField: {
    marginTop: 20,
  },
  sendBtn: {
    marginTop: 70,
    width: 150,
    fontWeight: "bold",
  },
});

function Form() {
  const classes = useStyles();
  return (
    <form autoComplete="off" noValidate>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Send Message
      </Typography>
      <TextField label="FullName" fullWidth className={classes.textField} />
      <TextField label="Email" fullWidth className={classes.textField} />
      <TextField label="Message" fullWidth className={classes.textField} />
      <Button
        size="large"
        variant="contained"
        className={classes.sendBtn}
        disableElevation
        color="primary"
      >
        Send
      </Button>
    </form>
  );
}

export default Form;
