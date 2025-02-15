import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 75
})
const Header =  () => {
    const logo = '/HHlogo.png';
    return (
        <StyledAppBar>
            <Toolbar>
                <img src={logo} alt="Logo" style={{ width: 160, height: 40, marginTop: 11}}/>
                Post a Job
                Find Jobs
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;