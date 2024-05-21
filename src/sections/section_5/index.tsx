import {Box, Stack, Typography} from "@mui/material";
import browsers from "../../assets/motionarteffect-img8.png";
import theme from "../../theme";

const Section_5 = () => {
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            borderRadius={"24px"}
            padding={4}
            sx={{
                boxShadow: `inset 0px 1px 1px ${theme.palette.primary.main}`,
                background: theme.palette.gradient_2.main
            }}
            textAlign={"center"}
        >
            <Typography variant={"h4"}>
                Supported by All Popular Browsers
            </Typography>
            <Typography variant={"subtitle2"}>
                Rest assured, Motion Art is designed to be compatible with all major web browsers.
            </Typography>
            <Box width={"auto"}>
                <img src={browsers} alt={"supported browsers"} width={"100%"}/>
            </Box>
        </Stack>
    );
};

export default Section_5;
