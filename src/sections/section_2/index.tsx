import {Avatar, Stack, Typography} from "@mui/material";
import avatar_1 from "../../assets/motionarteffect-img2.png";
import avatar_2 from "../../assets/motionarteffect-img1.png";
import avatar_3 from "../../assets/motionarteffect-img3.png";
import StarRatings from "../../assets/motionarteffect-img4.png";
import Grid2 from "@mui/material/Unstable_Grid2";


const avatars = [
    avatar_1,
    avatar_2,
    avatar_3,
]
const Section_2 = () => {
    return (
        <Stack alignItems={"center"} gap={8} padding={"10px"} position={"relative"}>
            <Typography variant={"h5"} textAlign={"center"}>Trusted by thousands of users around the world</Typography>
            <Grid2 width={"100%"} container spacing={5}
                   sx={{
                       justifyContent: {
                           xs: "center",
                           lg: "space-between",
                       },
                   }}
            >
                {
                    avatars.map((avatar, index) => (
                        <Grid2 key={index} gap={1} sm={12} md={6} lg={4}
                               sx={{
                                   display: "flex",
                                   flexDirection:{
                                        xs: "column",
                                        sm: "row",
                                      },
                                   justifyContent: "center",
                                   alignItems: "center",
                               }}
                        >
                            <Avatar src={avatar} sx={{
                                width: "80px",
                                height: "80px",
                            }}/>
                            <Stack justifyContent={"center"} alignItems={"center"} gap={1.5}>
                                <img src={StarRatings} alt={"ratings"}/>
                                <Typography variant={"subtitle1"}>
                                    <strong>4.5</strong>&nbsp;
                                    Score, 9 Reviews
                                </Typography>
                            </Stack>
                        </Grid2>
                    ))
                }
            </Grid2>

            {/*<Stack width={"100%"} direction={"row"} flexWrap={"wrap"} gap={3}*/}
            {/*       sx={{*/}
            {/*           justifyContent: {*/}
            {/*                xs: "center",*/}
            {/*                lg: "space-between",*/}
            {/*           },*/}
            {/*       }}*/}
            {/*>*/}
            {/*    {*/}
            {/*        avatars.map((avatar, index) => (*/}
            {/*            <Stack key={index} width={"fit-content"} display={"flex"} direction={"row"}*/}
            {/*                   justifyContent={"center"} gap={3}>*/}
            {/*                <Avatar src={avatar} sx={{*/}
            {/*                    width: "80px",*/}
            {/*                    height: "80px",*/}
            {/*                }}/>*/}
            {/*                <Stack justifyContent={"center"} alignItems={"center"} gap={1.5}>*/}
            {/*                    <img src={StarRatings} alt={"ratings"}/>*/}
            {/*                    <Typography variant={"subtitle1"}>*/}
            {/*                        <strong>4.5</strong>&nbsp;*/}
            {/*                        Score, 9 Reviews*/}
            {/*                    </Typography>*/}
            {/*                </Stack>*/}
            {/*            </Stack>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Stack>*/}
        </Stack>
    );
};

export default Section_2;
