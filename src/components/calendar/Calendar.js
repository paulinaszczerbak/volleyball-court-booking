import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import dateFns from 'date-fns';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { white } from 'ansi-colors';

const styles = theme => ({
    cell:{
        textAlign: 'center'
    }
})

class Calendar extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader(){
        const dateFormat = "MMMM YYYY";

        return (
            <Grid item container justify='space-between' className={styles.calendar} >
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
                <Grid item xs>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </Grid>
            );
        }

        return <Grid item container justify='space-between'>{days}</Grid>
    }

    renderCells(){
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
              days.push(
                <Grid item xs>
                    <Paper className='cell'>
                        {formattedDate}    
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

    onDateClick = day => {};
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


    render(){
        return(
            <Grid container >
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </Grid>
        );
    }
}

export default withStyles(styles)(Calendar);

