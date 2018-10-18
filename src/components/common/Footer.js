import React from 'react'; 
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const style = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
    flexShrink: 0
  }
})

const Footer = (props) => {
  const {classes} = props;
    return(
      <footer className={classes.footer}>
      {/* <footer> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
          Build with 
          {/* <span role='img' aria-label='Love'> ⚡ ❤️ </span> */}
          <span role='img' aria-label='Lightning'> ⚡ </span>
        </Typography>
      </footer>
        
    );
};

export default withStyles(style)(Footer);