import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { routePath } from '../routes/route';

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 75,
    '& > div > *': {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: 18,
        marginRight: 20
    }
})
const Header =  () => {
    const logo = '/HHlogo.png';
    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routePath.home}>
                    <img src={logo} alt="Logo" style={{ width: 160, height: 40, marginTop: 11}}/>
                </Link>
                <Link to={routePath.create}>Post a Job</Link>
                <Link to={routePath.posts}>Find Jobs</Link>
                
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;