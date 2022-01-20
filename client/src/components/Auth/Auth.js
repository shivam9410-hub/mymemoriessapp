import React,{useState} from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import useStyles from './styles';
import Input from './input';
import icon from './icon';
const Auth = () => {
    const [showPassword,setShowPassword]=useState(false);
const [isSignup,setIsSignup]=useState(false);
    const handleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    };

    const handleSubmit=()=>{

    }
    const handleChange=()=>{

    }
    const googleSuccess=()=>{
        console.log(res);
    }
    const googleFailure=()=>{
        console.log("Google Sign in was unsuccessful.Try Again ")
    }
const switchMode=()=>{
setIsSignup((prevIsSignup)=>!prevIsSignup);
handleShowPassword(false);    
}
    const classes=useStyles();
    return (
     <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
             <Avatar className={classes.avatar}>
<LockOutlinedIcon/>
             </Avatar>
             <Typography  variant="h5">{isSignup?'SignUp':'SignIn'}</Typography>

             <form    className={classes.form} onSubmit={handleSubmit}>
<Grid container spacing={2}>
    {
   isSignup&&(<>
   <Input name="firstname" label="First Name" handleChange={handleChange} autofocus half ></Input>
   <Input name="lastname" label="Last Name" handleChange={handleChange} half ></Input>

   </>)
    }
    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
    <Input name="password" label="password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
{isSignup&&<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}


</Grid>
<GoogleLogin 
clientId="Google Id" render={(renderProps)=>(
    <Button className={classes.googleButton} 
    color='primary' fullWidth
                                 onClick={renderProps.onClick} 
     disabled={renderProps.disabled} 
     startIcon={<icon/>}
      varaint='contained'>
Google SignIn

      </Button>
)}
onSuccess={googleSuccess}
onFailure={googleFailure}
cookiePolicy="single_host_origin"
/>
<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
    {isSignup?'Sign Up':'Sign In'}
</Button>
<Grid container justify="flex-end">
    <Grid item>
        <Button onClick={switchMode}>
{isSignup?'Already have an account? SignIn':'Dont have an account? SignUp'}
        </Button>
    </Grid>
</Grid>
             </form>
         </Paper>
     </Container>
    )
}

export default Auth;
