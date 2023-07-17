import React from 'react';
import{AppBar, Toolbar, CssBaseline, Typography,
     makeStyles, useTheme, useMediaQuery} from "@material-ui/core";
import {Link} from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import {Container} from 'react-bootstrap';
import Logo from '../assets/shoppingCart.svg';

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));
  
  
const Navigationbar = () => {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sticky='top'>
      <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Online Store
        </Typography>
        {isMobile ? (
            <DrawerComponent/>
        ): (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
            <Link to="/cart" className={classes.link}>
              Cart
            </Link>
            <Link to="/search" className={classes.link}>
              Search
            </Link>
            <button variant='outline-primary' className='rounded-circle' style={{width:'3rem' ,height:'3rem'}}><img style={{width:'2rem' ,height:'2rem'}}  src={Logo} alt='logo' />
              <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
               style={{color:'white', width:'1.5rem', height:'1.5rem', position:'absolute', bottom: 10, right:20, transform:'translate(25%,25%)'}}>3</div>
            </button>
          </div>
        )}
      </Toolbar>
    </AppBar>
    </Container>
  );
};
  
export default Navigationbar;