import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { connect } from 'react-redux';
import dateFns from 'date-fns';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = () => ({
    listElem: {
        paddingTop: '0px',
        paddingBottom: '0px',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '10px'
    }
})

const Reservations = (props) => {
    const { dayReservations, classes } = props;
    
    const reservationList = dayReservations.map((reservation)=>
        {
        let start = dateFns.parse(dayReservations[0]["startDate"]);
        let end = dateFns.addHours(start, reservation["duration"]);
        return(
        <ListItem disableGutters className={classes.listElem} key={reservation["startDate"]}>
            {dateFns.format(start, 'HH:mm')}-
            {dateFns.format(end, 'HH:mm')}
        </ListItem>
        )
        }
    )
    // console.log(start);
    return(
        <div>
            <List >
                {reservationList}
            </List>
                {/* {dateFns.format(start, 'HH:mm')}-
                {dateFns.format(end, 'HH:mm')}
                {console.log(start)}
                {console.log(end)} */}
        </div>
        )   

// static  propTypes = {
//     booked: PropTypes.object
// }

}
// const mapStateToProps = (state) => {
//     return { reservations: state.reservations };
// };


// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// };

// export default Reservations;
export default withStyles(styles)(Reservations);