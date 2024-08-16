import {Box, Stack, Typography} from "@mui/material";

const Section_1 = () => {
    return (
        <Stack
            padding={"10px"}
            justifyContent={"center"}
            flexDirection={{
                xs: "column",
                md: "row",
            }}
            alignItems={{
                xs: "center",
                md: "flex-start",
            }}
            gap={{
                xs: "30px",
                md: "8%",
            }}
            marginTop={{
                xs: "30px",
                md: "80px",
            }}
            textAlign={{
                xs: "center",
                sm: "left",
                md: "left",
            }}
            // position={"relative"}
            // sx={{pointerEvents:"auto"}}
        >
            <Stack
                width={{
                    xs: "170px",
                    md: "140px"
                }}
                gap={1}
                position={{
                    xs: "static",
                    md: "absolute",
                }}
                top={14}
                left={"24px"}
            >
                <Typography variant={"body1"}>
                    <Typography variant={"gradientText"}>Transform Your Website</Typography>
                </Typography>
                <Typography variant={"body2"}>With Motion Art Effect</Typography>
            </Stack>
            <Stack
                width={{
                    xs: "100%",
                    md: "50%",
                }}
                gap={3}
            >
                <Typography variant={"h1"}>
                    Attract Your Visitors Attention With Colorful&nbsp;<Box component={'br'} display={{
                    xs: "block",
                    sm: "none",
                    md: "block",
                }}/>
                    <Typography variant={"gradientText"}>Motion Art Effects</Typography>
                </Typography>
                <Typography variant={"body2"}>
                    Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for
                    seamlessly integrating captivating animations into your website.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Section_1;
