import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import dateFns from 'date-fns';
import {simpleAction} from '../../actions/simpleAction'


const styles = {
  dialog:{
    padding: '2em'
  },
};

class BookingDialog extends Component {
  state={
   startDate: "",
   duration:"" 
  }

    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };

    handleChangeStart = (time) => {
      this.setState({
        // startTime: time,
        startDate: dateFns.format(time, 'YYYYMMDD HHmm')
    })
  };

  handleChangeDuration = (time) => {
    this.setState({
      duration: time,
  })
};

handleChange = event => {
  this.setState({ value: event.target.value,
  duration: event.target.value });
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
                  {console.log(this.state.startDate)}
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
                ALL RESERVATIONS<br/>
                {/* {this.state.startTime} */}
                {this.state.duration}
                {/* <Reservations /> */}
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

  const mapStateToProps = (state) => {
    return {
      startDate: state.startDate,
      duration: state.duration
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      handleClose: simpleAction()
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BookingDialog));