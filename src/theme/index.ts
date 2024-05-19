import {createTheme} from "@mui/material";
import {CSSProperties} from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EEE5FFBD",
        },
        secondary: {
            main: "#F87516",
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 767,
            lg: 1025,
            xl: 1367,
        }
    },
    typography: {
        fontFamily: "Outfit, Sora",
        gradientText: {
            backgroundImage: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                body1: ({theme}) => theme.unstable_sx({
                    fontSize: {
                        xs: "16px",
                        md: "18px",
                    },
                    fontWeight: "500",
                }),
                body2: {
                    fontSize: "16px",
                    fontWeight: "500",
                },
                subtitle1: {
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Sora",
                },
                subtitle2: {
                    fontSize: "18px",
                    fontWeight: "300",
                    fontFamily: "Outfit",
                },
                h5: {
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "outfit",
                    lineHeight: "1",
                },
            },
            variants: [
                {
                    props: {variant: "h1"},
                    style: ({theme}) => theme.unstable_sx({
                        fontSize: {
                            xs: "35px",
                            md: "40px",
                            lg: "55px",
                            xl: "65px",
                        },
                        fontFamily: "Sora",
                        fontWeight: "500",
                    }),
                },
                {
                    props: {variant: "h2"},
                    style: ({theme}) => theme.unstable_sx({
                        fontSize: {
                            xs: "25px",
                            md: "30px",
                            lg: "35px",
                            xl: "40px",
                        },
                        fontFamily: "Sora",
                        fontWeight: "600",
                    }),
                },
                {
                    props: {variant: "h4"},
                    style: ({theme}) => theme.unstable_sx({
                        fontSize: {
                            xs: "20px",
                            md: "25px",
                        },
                        fontFamily: "Sora",
                        fontWeight: "600",
                        textAlign:{
                            xs: "center",
                            md: "center",
                        }
                    }),
                },
            ]
        }
    }
})
export default theme;

declare module '@mui/material/styles' {
    interface TypographyVariants {
        gradientText: CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        gradientText?: CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        gradientText: true;
    }
}
