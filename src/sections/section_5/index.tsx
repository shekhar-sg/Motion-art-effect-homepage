import {Box, Stack, Typography} from "@mui/material";
import browsers from "../../assets/motionarteffect-img8.png";

const Section_5 = () => {
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            borderRadius={"24px"}
            padding={7}
            marginY={3}
            sx={{
                boxShadow: "inset 0px 1px 1px grey",
                // backgroundImage: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)"
            }}
        >
            <Typography variant={"h4"}>
                Supported by All Popular Browsers
            </Typography>
            <Typography variant={"body1"} textAlign={"center"}>
                Rest assured, Motion Art is designed to be compatible with all major web browsers.
            </Typography>
            <Box width={"auto"}>
                <img src={browsers} alt={"supported browsers"} width={"100%"}/>
            </Box>
        </Stack>
    );
};

export default Section_5;
