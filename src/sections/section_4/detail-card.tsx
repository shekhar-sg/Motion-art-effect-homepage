import {Box, Stack, StackProps, Typography} from "@mui/material";
import theme from "../../theme";

interface DetailCardProps extends StackProps {
    title: string;
    description: string;
    image: string;
}

const DetailCard = (props: DetailCardProps) => {
    const {title, description, image, ...restProps} = props;
    return (
        <Stack sx={{
            padding: 4,
            gap: 2,
            borderRadius: "18px",
            textAlign:{
                xs: "center",
                sm: "left",
            },
            background: theme.palette.gradient_2.main,
            color: theme.palette.primary.main,
            boxShadow: `inset 0px 1px 1px ${theme.palette.primary.main}`,
            width: {
                xs: "400",
                md: "30%%",
            },
        }} {...restProps}>
            <Typography variant={"h4"}>{title}</Typography>
            <Typography variant={"body2"}>{description}</Typography>
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
