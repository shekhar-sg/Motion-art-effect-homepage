import {Button, Stack, Typography} from "@mui/material";
import magicPen from "../../assets/motionarteffect-img5.png";
import {East} from "@mui/icons-material";

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
            padding: "0 24px",
            marginTop: "80px",
        }}>
            <Stack sx={{
                width: {
                    xs: "100%",
                    md: "50%"
                },
                gap: "24px",
            }}>
                <Typography variant={"h2"}>
                    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                </Typography>
                <Typography variant={"subtitle2"}>
                    Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your
                    website with visually stunning motion art elements.
                </Typography>
                <Button variant={"contained"} sx={{
                    borderRadius: "20px",
                    padding: "15px 30px",
                    fontSize: "18px",
                    fontFamily: "Sora",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: {
                        xs: "80%",
                        md: "75%"
                    },
                    minWidth: "340px",
                    transition: "background-image 5s",
                    backgroundImage: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
                    color: "white",
                    "&:hover": {
                        backgroundImage: "linear-gradient(90deg, #5E11FF 0%, #F87516 100%)",
                    },
                }}>
                    Purchase From Envato
                    <East/>
                </Button>
            </Stack>
            <img src={magicPen}/>
        </Stack>
    );
};

export default Section_3;
