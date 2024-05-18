import {Stack, Typography} from "@mui/material";
import {GradientText} from "../../theme/material-components.ts";

const Section_1 = () => {
    return (
        <Stack sx={{
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: {
                xs: "center",
                md: "start",
            },
            alignItems: {
                xs: "center",
                md: "flex-start",
            },
            gap: {
                xs: "20px",
                md: "8%",
            },
        }}>
            <Stack sx={{
                width: {
                    xs: "170px",
                    md: "110px",
                }
            }}>
                <Typography variant={"body1"}>
                    <GradientText>Transform Your Website</GradientText>
                </Typography>
                <Typography variant={"body2"}>With Motion Art Effect</Typography>
            </Stack>
            <Stack sx={{
                width: {
                    xs: "100%",
                    md: "54.33%",
                },
            }}>
                <Typography variant={"h1"} sx={{

                    fontWeight: 700,
                }}>
                    Attract Your Visitors Attention With Colorful
                    <GradientText>Motion Art Effects</GradientText>
                </Typography>
                <Typography variant={"subtitle2"} color={"secondary.main"}>
                    Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for
                    seamlessly integrating captivating animations into your website.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Section_1;
