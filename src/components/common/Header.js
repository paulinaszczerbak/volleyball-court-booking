import React from 'react'; 
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    return(

        <Toolbar >
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
          >
          <Link to="/home" activeClassName="active">Volleyball court booking</Link>
          </Typography>
          <Button variant="outlined" size="small">
          <Link to="/login" activeClassName="active">Log out</Link>
          </Button>
          <nav>
            
        </nav>
        </Toolbar>
        
    );
};

const AuthHeader = ({ isLoggedIn }) => {
    if(isLoggedIn){
        return(<Header/>);
    }
    return(<div></div>);
}

export default AuthHeader;