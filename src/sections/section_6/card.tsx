import {Box, Stack, StackProps, Typography} from "@mui/material";
import theme from "../../theme";

export interface Section_6_CardProps extends StackProps {
    img: string;
    title: string;
    description: string;
}

const Section_6_Card = (props: Section_6_CardProps) => {
    const {img, title, description, sx, ...restStackProps} = props;
    return (
        <Stack
            sx={[{
                padding: 4,
                gap: {
                    xs: 1,
                    sm: 2,
                },
                borderRadius: "18px",
                boxShadow: `inset 0px 1px 1px ${theme.palette.primary.main}`,
            }, ...(Array.isArray(sx) ? sx : [sx])]} {...restStackProps}>
            <Box
                width={{
                    xs: "140px",
                    sm: "180px",
                }}
                sx={{transition: "all 0.2s ease-in-out"}}
                margin={"-15px 0 0 -35px"}
            >
                <img src={img} alt={title} width={"100%"}/>
            </Box>
            <Typography variant={"h4"}>{title}</Typography>
            <Typography variant={"body2"}>{description}</Typography>
        </Stack>
    );
};

export default Section_6_Card;
