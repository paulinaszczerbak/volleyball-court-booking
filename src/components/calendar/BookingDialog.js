import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TimeInput from 'material-ui-time-picker';
import Grid from '@material-ui/core/Grid';
import { DialogContent } from '@material-ui/core';
import Reservations from '../calendar/Reservations';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const styles = {
  dialog:{
    padding: '2em'
  },
};

class BookingDialog extends Component {
  state={
   startTime:"",
   duration:"" 
  }

    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };

    handleChangeStart = (time) => {
      this.setState({
        startTime: time,
    })
  };

  handleChangeEnd = (time) => {
    this.setState({
      endTime: time,
  })
};

handleChange = event => {
  this.setState({ value: event.target.value });
};
  
    render() {
      const { classes, onClose, selectedValue, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">Book a court</DialogTitle>
          <DialogContent className={classes.dialog} >
            <Grid container direction="row" spacing={40}>
              <Grid item container direction="column" justify='space-between'>
                <Grid item xs>
                  <span>From: </span><br/>
                  <TimeInput
                  mode='12h'
                  onChange={(time) => this.handleChangeStart(time)}
                  // value={this.state.startTime}
                  />
                </Grid>
                <Grid item xs>
                  <br/>
                  <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Duration:</FormLabel>
                  <RadioGroup
                    aria-label="duration"
                    name="duration"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel value="1" control={<Radio color="primary"/>} label="1 hour" />
                    <FormControlLabel value="1.5" control={<Radio color="primary"/>} label="1.5 hour" />
                    <FormControlLabel value="2" control={<Radio color="primary"/>} label="2 hours" />
                    <FormControlLabel value="2.5" control={<Radio color="primary"/>} label="2.5 hours"/>
                  </RadioGroup>
                </FormControl>
                </Grid>
              </Grid>
              <Grid item xs>
                ALL RESERVATIONS
                <Reservations />
              </Grid>
            </Grid>
          </DialogContent>  
        </Dialog>
      );
    }
  }
  
 BookingDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };

  export default withStyles(styles)(BookingDialog);