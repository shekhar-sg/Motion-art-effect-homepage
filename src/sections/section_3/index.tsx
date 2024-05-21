import {Box, Button, Stack, Typography} from "@mui/material";
import magicPen from "../../assets/motionarteffect-img5.png";
import {East} from "@mui/icons-material";
import theme from "../../theme";

const Section_3 = () => {
    return (
        <Stack sx={{
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
                xs: "column",
                md: "row"
            },
            padding: "0 10px",
        }}>
            <Stack
                width={{
                    xs: "100%",
                    md: "60%"
                }}
                gap={"24px"}
                textAlign={{
                    xs: "center",
                    sm: "left"

                }}
            >
                <Typography variant={"h2"}>
                    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                </Typography>
                <Typography variant={"subtitle2"}>
                    Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your
                    website with visually stunning motion art elements.
                </Typography>
                <Button sx={{
                    borderRadius: "18px",
                    padding: {
                        xs: "20px 25px",
                        sm: "20px 30px",
                    },
                    fontSize: {
                        xs: "16px",
                        md: "18px"
                    },
                    gap: 1,
                    lineHeight: "normal",
                    fontFamily: "Sora",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: {
                        xs: "0 auto",
                        md: 0
                    },
                    width: {
                        xs: "auto",
                        md: "75%"
                    },
                    maxWidth: {
                        xs: "100%",
                        md: "350px"
                    },
                    backgroundImage: theme.palette.gradient_1_reverse.main,
                    color: theme.palette.primary.main,
                }}>
                    Purchase From Envato
                    <East/>
                </Button>
            </Stack>
            <Box width={{
                xs: "70%",
                sm: "auto",
                // md: "40%"
            }}>
                <img src={magicPen} alt={"magic"} width={"100%"}/>
            </Box>
        </Stack>
    );
};

export default Section_3;
