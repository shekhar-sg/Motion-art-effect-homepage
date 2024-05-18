import {styled} from "@mui/material";
import {ComponentProps} from "react";

export const GradientText = styled("text")((props) => {
    const {theme} = props;
    return theme.unstable_sx({
        background: `linear-gradient(90deg, #F87516 0%, #5E11FF 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    });

})
export type GradientTextProps = ComponentProps<typeof GradientText>;