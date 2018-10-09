import React from 'react'; 
import Typography from '@material-ui/core/Typography';

const Footer = (props) => {
    return(
        // <footer className={classes.footer}>
        <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        FooterFooterFooterFooterFooterFooterFooter
        </Typography>
      </footer>
        
    );
};

export default Footer;