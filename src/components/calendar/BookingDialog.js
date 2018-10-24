import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TimeInput from 'material-ui-time-picker';
import Grid from '@material-ui/core/Grid';


const styles = {
  dialog:{
    padding: '1em'
  },
  backgroundColor: 'red'
};

class BookingDialog extends Component {
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };

    handleChange = (time) => {
      console.log(time);
  };
  
    render() {
      const { classes, onClose, selectedValue, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">Book a court</DialogTitle>
          <Grid className={classes.dialog} ccontainer justify='space-between'>
            <Grid item>
              <span>From: </span>
              <TimeInput
              mode='12h'
              onChange={(time) => this.handleChange(time)}
              />
            </Grid>
            <Grid item>
              <span>To: </span>
              <TimeInput
              mode='12h'
              onChange={(time) => this.handleChange(time)}
              />
            </Grid>
          </Grid>
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