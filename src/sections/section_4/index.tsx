import {Stack, Typography} from "@mui/material";
import card_1 from "../../assets/motionarteffect-img11.png";
import card_2 from "../../assets/motionarteffect-img10.png";
import DetailCard from "./detail-card.tsx";

interface Section_4Props {
    title: string;
    description: string;
    image: string;
}

const data: Section_4Props[] = [
    {
        title: "Apply On Section",
        description: "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. ",
        image: card_1,
    },
    {
        title: "Apply On page",
        description: "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
        image: card_2,
    }
];

const Section_4 = () => {
    return (
        <Stack sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
        }}>
            <Typography variant={"h2"} textAlign={"center"} maxWidth={{
                xs: "80%",
                md: "55%",
            }}>
                Apply On Any Section Or Enable For Whole Page
            </Typography>
            <Stack
                flexDirection={{
                    xs: "column",
                    md: "row",
                }}
                justifyContent={"center"}
                alignItems={"center"}
                height={{
                    xs: "auto",
                    md: "580px",
                    lg: "680px",
                }}
                gap={3}
            >
                {
                    data.map((item, index) => (
                        <DetailCard key={index} title={item.title} description={item.description} image={item.image}
                                    alignSelf={index === 0 ? "flex-start" : "flex-end"}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
        ;
};

export default Section_4;
