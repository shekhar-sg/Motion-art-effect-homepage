import {Box, Stack, StackProps, Typography} from "@mui/material";

interface DetailCardProps extends StackProps {
    title: string;
    description: string;
    image: string;
}

const DetailCard = (props: DetailCardProps) => {
    const {title, description, image,...restProps} = props;
    return (
        <Stack sx={{
            padding: "32px",
            borderRadius: "24px",
            margin: "20px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            width: {
                xs: "400",
                md: "30%%",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
        }} {...restProps}>
            <Typography variant={"h4"} alignSelf={"self-start"}>{title}</Typography>
            <Typography variant={"body1"}>{description}</Typography>
            <Box sx={{
                borderRadius: "24px",
                marginX: "auto",
            }}
            >
                <img src={image} alt={"demo"} width={"100%"} height={"100%"}/>
            </Box>
        </Stack>
    );
};

export default DetailCard;
