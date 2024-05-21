import {Link, Stack, Toolbar, Typography} from "@mui/material";
import theme from "../../theme";

const Footer = () => {
    return (
        <Toolbar sx={{
            background: theme.palette.gradient_1.main,
            padding: {
                xs: "20px 0",
                md: "0 20px",
            },
            gap: 2,
            justifyContent: "space-between",
            flexDirection: {
                xs: "column-reverse",
                md: "row",
            },
            textAlign: {
                xs: "center",
                md: "left",
            },
            marginTop: {
                xs: "40px",
                md: "80px",
            }
        }}>
            <Typography variant={"subtitle1"} paddingX={"2px"}>© 2023 MotionArtEffect. All Rights Reserved.</Typography>
            <Stack direction={"row"} gap={2}>
                <Link href={"#"} variant={"subtitle1"} sx={{
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": {
                        color: "white",
                    }
                }}>
                    Documentation
                </Link>
                <Link href={"#"} variant={"subtitle1"} sx={{
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": {
                        color: "white",
                    }
                }}>
                    Support
                </Link>
            </Stack>
        </Toolbar>
    );
};

export default Footer;
