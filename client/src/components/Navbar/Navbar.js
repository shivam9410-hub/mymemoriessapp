import React from 'react';
import {Link} from 'react-router-dom';
import memories from '../../images/memories.png'
import {Toolbar,AppBar,Avatar,Button,Typography} from '@material-ui/core';
import useStyles from './styles';
const Navbar=() =>{
    const classes=useStyles();
    const user=null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
       <div className={classes.brandContainer}>
       <Typography componenet={Link} to="/" className={classes.heading} variant="h2" align="center">My Travel Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
       </div>
    <Toolbar className={classes.toolbar}>
        {user?(
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                    {user.result.name.charAt(0)}
                </Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary">
                Logout
            </Button>
            </div>
        ):(
<Button componenet={Link} to="/auth" variant="contained" color="primary">
SignIn
</Button>
        )}
    </Toolbar>
      </AppBar>
    );
}
export default Navbar;