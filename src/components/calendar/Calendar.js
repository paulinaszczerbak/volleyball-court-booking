import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import dateFns from 'date-fns';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import BookingDialog from '../calendar/BookingDialog'
import Reservations from './Reservations';
import { connect } from 'react-redux';


const styles = theme => ({
    cell:{
        cursor: 'pointer',
        textAlign: 'center',
        height: '100px',
        fontSize: '40px'
    },
    selected: {
        backgroundColor: '#0053d8',
        color: 'white'
      },
    disabled: {
        color: '#c2c9d3',
        pointerEvents: 'none'
      },
    daysFromPast: {
        backgroundColor: '#e1e7f2',
        pointerEvents: 'none',
        color: '#9ea2a8'
    },
    textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    },
    smallFont: {
        fontSize: '10px'
    }
})

class Calendar extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        openDialog: false
    };

    renderHeader(){
        const dateFormat = "MMMM YYYY";

        return (
            <Grid item container justify='space-between' >
                <Grid item>
                    <IconButton onClick={this.prevMonth}>
                        <ArrowBackIos/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <span>
                    {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </Grid>
                <Grid item>
                    <IconButton onClick={this.nextMonth}>
                        <ArrowForwardIos/>
                    </IconButton>
                </Grid>
            </Grid>
        );
    }

    renderDays(){
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for(let i=1; i<8; i++){
            days.push(
                <Grid item xs key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </Grid>
            );
        }

        return <Grid item container justify='space-between'>{days}</Grid>
    }

    renderCells(classes){
        const { reservations } = this.props;

        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 1; i < 8; i++) {
              formattedDate = dateFns.format(day, dateFormat);
              const cloneDay = day;
              let className = classes.cell + ' ';
              // make all days not from current month disabled
              // or disable all days if it's month from the past 
              if(!dateFns.isSameMonth(day, monthStart) || dateFns.isBefore(currentMonth, dateFns.startOfToday() ) ){  
                className += classes.disabled;
              }
              // disable current month days from the past
              else if(dateFns.isBefore(day, dateFns.startOfToday())){
                className += classes.daysFromPast;
              }
              // change selected day color
              else if(dateFns.isSameDay(day, selectedDate)){
                    className += classes.selected;
              }

              //check if exists reservation on current day
              let isReservation=false;
              let dayReservations = [];
              reservations.forEach(reservation => {
                  if (reservation["startDate"].includes(dateFns.format(day, 'YYYYMMDD'))){
                      isReservation=true;
                      dayReservations.push(reservation);
                  }
                });
              days.push(
                <Grid item xs key={day}>
                    <Paper className={className}
                    onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    // onClick={this.handleClickOpen}
                    >
                        {formattedDate}
                        {
                            isReservation ? <Reservations styles={classes.smallFont} dayReservations={dayReservations} />  : null
                        } 
                        
                    </Paper>
                </Grid>
              );
              day = dateFns.addDays(day, 1);
            }
            rows.push(
              <Grid item container justify='space-between' spacing={0} key={day}>
                {days}
              </Grid>
            );
            days = [];
          }

          return <Grid container justify='space-between' className="body">{rows}</Grid>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day,
            openDialog: true
        })
        
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };
    
    handleClose = value => {
    this.setState({  openDialog: false });
    };
      
    render(){
        const {classes} = this.props;
        return(
            <Grid container >
            <BookingDialog
            open={this.state.openDialog}
            onClose={this.handleClose}
            />
            
                {this.renderHeader(classes)}
                {this.renderDays(classes)}
                {this.renderCells(classes)}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return { reservations: state.reservations };
};

// export default withStyles(styles)(Calendar);
export default withStyles(styles)(connect(mapStateToProps)(Calendar));

