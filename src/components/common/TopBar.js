import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

const TopBar = (props) => {

  const { classes } = props;

    return(
        <Grid item className={styles.menuButton}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                    variant="contained"
                    component={Link}
                    to='/home'>
                        <MenuIcon />
                    </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
                    Volleyball Court booking
                </Typography>
                    <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    component={Link}
                    to='/login'
                    onClick={props.logOutClicked}
                    >
                    Log out
                    </Button>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}
export default withStyles(styles)(TopBar);