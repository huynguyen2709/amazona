import React from 'react';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../../assets/logo.png';
import { ShoppingCart } from '@material-ui/icons';
import { Grid, Button } from '@material-ui/core';


function Navbar(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ paddingTop: '8px', marginBottom: '17px', backgroundColor: 'black', color: 'white' }}>
                <Toolbar>
                    <img src={logo} alt="" style={{ 'height': '60px', 'width': '150px' }} />
                    <Typography className={classes.title} variant="h6" >
                        Fitnezz
                    </Typography>
                    <Grid className={classes.middle}
                        container
                        justify='center'
                        alignItems="center"
                    >
                        <Grid className={classes.middleInside}>
                            <Button variant='outlined' color='secondary'>
                                    Home
                            </Button>

                            <Button variant='outlined' color='secondary'>
                                    About
                            </Button>

                            <Button variant='outlined' color='secondary'>
                                    Contact
                            </Button>

                            <Button variant='outlined' color='secondary'>
                                    Products
                            </Button>
                        </Grid>
                    </Grid>

                    <IconButton
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <ShoppingCart />
                    </IconButton>

                    <IconButton
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Navbar;