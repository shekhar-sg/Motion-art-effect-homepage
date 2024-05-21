import {Stack, Typography} from "@mui/material";
import LightWeight from "../../assets/motionarteffect-img9.png";
import Responsive from "../../assets/motionarteffect-img6.png";
import UserFriendlyInterface from "../../assets/motionarteffect-img7.png";
import Section_6_Card, {Section_6_CardProps} from "./card.tsx";
import theme from "../../theme";

const Section_6 = () => {
    return (
        <Stack sx={{
            gap: 5,
            flexDirection: "column",
            alignItems: "center",

        }}>
            <Stack maxWidth={{
                xs: "100%",
                md: "55%",
            }} textAlign={"center"} gap={2}>
                <Typography variant={"h2"}>
                    An All-Round Plugin With Powerful Features
                </Typography>
                <Typography variant={"body2"}>
                    Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly
                    integrates with the Elementor platform, providing you with a seamless and intuitive experience.
                </Typography>
            </Stack>
            <Stack direction={"row"} marginY={3} gap={2}
                   flexWrap={{
                          xs: "wrap",
                          lg: "nowrap",
                   }}>
                {
                    cards.map((card, index) => {
                        return (
                            <Section_6_Card
                                key={index}
                                img={card.img}
                                title={card.title}
                                description={card.description}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        md: "33.33%",
                                    },
                                    flexGrow: 1,
                                    background: theme.palette.gradient_2.main,
                                }}
                            />
                        );

                    })
                }
            </Stack>
        </Stack>
    );
};

export default Section_6;

const cards: Section_6_CardProps[] = [
    {
        img: LightWeight,
        title: "Lightweight",
        description: "Motion Art for Elementor is designed to be lightweight."
    },
    {
        img: Responsive,
        title: "100% Responsive",
        description: "Create a consistent visual experience across all devices."
    },
    {
        img: UserFriendlyInterface,
        title: "User Friendly Interface",
        description: "Ensure a smooth experience for both applicants and administrators."
    }
];
