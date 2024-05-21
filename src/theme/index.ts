import {createTheme} from "@mui/material";
import {CSSProperties} from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EEE5FFBD",
        },
        secondary: {
            main: "#EEE5FF",
        },
        background: {
            default: "#070314",
        },
        gradient_1: {
            main: "linear-gradient(90deg, #F87516 5%, #5E11FF 100%)",
        },
        gradient_1_reverse: {
            main: "linear-gradient(90deg, #5E11FF 0%, #F87516 100%)",
        },
        gradient_2: {
            main: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 767,
            lg: 1025,
            xl: 1367,
        }
    },
    typography: {
        allVariants: {
            transition: "all 0.3s",
            color: "#EEE5FF",
        },
        gradientText: {
            backgroundImage: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                body1: ({theme}) => theme.unstable_sx({
                    fontSize: {
                        xs: "18px",
                        md: "20px",
                    },
                    fontWeight: "500",
                    fontFamily: "Outfit",
                }),
                body2: ({theme}) => theme.unstable_sx({
                    fontSize: {
                        xs: "16px",
                        md: "18px",
                    },
                    fontWeight: "300",
                    fontFamily: "Outfit",
                    lineHeight: "1.5",
                }),
                subtitle1: ({theme}) => theme.unstable_sx({
                    fontSize: {
                        xs: "14px",
                        md: "16px",
                    },
                    fontWeight: "300",
                    fontFamily: "Outfit",
                }),
                subtitle2: {
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Outfit",
                },
                h5: {
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "outfit",
                    lineHeight: "1",
                    color: "#EEE5FF"
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
                        color: theme.palette.secondary.main,
                        lineHeight: {
                            xs: "1.4",
                            md: "1.5",
                        },
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
                        color: theme.palette.secondary.main,
                        lineHeight: "1.6",
                    }),
                },
                {
                    props: {variant: "h4"},
                    style: ({theme}) => theme.unstable_sx({
                        fontSize: {
                            xs: "18px",
                            md: "25px",
                        },
                        fontFamily: "Sora",
                        fontWeight: "600",
                        lineHeight: "2",
                        color: theme.palette.secondary.main,
                    }),
                },
            ]
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "10px 35px",
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    textTransform: "none",
                    borderRadius: "5px",
                },
            },
            variants: [
                {
                    props: {variant: "contained"},
                    style: ({theme}) => theme.unstable_sx({
                        background: "white",
                        border: "2px solid white",
                        transition: "all 0.2s ease-in-out",
                        color: "black",
                        "&:hover": {
                            background: "transparent",
                            color: "white",
                        }
                    })
                }
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

declare module '@mui/material/styles' {
    interface Palette {
        gradient_1: Palette['primary'];
        gradient_1_reverse: Palette['primary'];
        gradient_2: Palette['primary'];
    }

    interface PaletteOptions {
        gradient_1?: PaletteOptions['primary'];
        gradient_1_reverse?: PaletteOptions['primary'];
        gradient_2: PaletteOptions['primary'];
    }
}
