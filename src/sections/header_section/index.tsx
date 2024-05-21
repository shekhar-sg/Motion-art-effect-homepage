import {AppBar, Button, Toolbar} from "@mui/material";
import MotionArtEffectLogo from "../../assets/MotionArtEffect-logo.png";

const Header = () => {


    return (
        <AppBar position={"sticky"} sx={{
            background: "transparent",
        }}>
            <Toolbar sx={{
                display: "flex",
                justifyContent: {
                    xs: "center",
                    md: "space-between",
                },
                alignItems: "center",
                backdropFilter: "blur(50px)",
            }}>
                <img src={MotionArtEffectLogo} alt={"MotionArtEffectLogo"}/>
                <Button variant={"contained"} sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    },
                }}>Purchase Now</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
