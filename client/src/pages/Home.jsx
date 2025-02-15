import { Box, Button, styled, Typography } from "@mui/material";
import Header from "../components/Header"
const Component = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    margin: '0 150px',
    '& > div': {
        display: 'flex',
        width: '50%',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize: 50,
            lineHeight: 1.5,
            letterSpacing: -1
        },
        '& > button': {
            width: 180,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 18,
            fontWeight: 600,
            marginTop: 48
        }
    }
})

const Home = () => {
    const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";

    return (
        <div>
            <Header/>
            <Component>
                <Box>
                    <Typography>Find trusted HouseHelp<br/>Quickly and Easily</Typography>
                    <Button variant="contained">Post a Job</Button>
                </Box>
                <Box>
                    <img src={animatedImage} alt="home" style={{width: 600}}/>
                </Box>
            </Component>
        </div>
    )
}
export default Home;