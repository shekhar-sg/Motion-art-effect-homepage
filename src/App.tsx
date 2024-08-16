import {Stack} from "@mui/material";
import Section_1 from "./sections/section_1";
import Section_2 from "./sections/section_2";
import Section_3 from "./sections/section_3";
import Section_4 from "./sections/section_4";
import Section_5 from "./sections/section_5";
import Section_6 from "./sections/section_6";
import Footer from "./sections/footer_section";
import {RefObject, useEffect, useRef} from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import theme from "./theme";

const App = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mainRef = useRef<HTMLDivElement>(null)

    const handleMouseEvent = (event: MouseEvent) => {
        propagateMouseEvent(event, canvasRef);
    };

    useEffect(function () {
        const canvas = canvasRef.current
        const main = mainRef.current

        if (main) {
            main.addEventListener('click', handleMouseEvent)
            main.addEventListener('mousemove', handleMouseEvent)
            main.addEventListener('mousedown', handleMouseEvent)
            main.addEventListener('mouseup', handleMouseEvent)
            main.addEventListener('mouseover', handleMouseEvent)
            main.addEventListener('mouseout', handleMouseEvent)
        }

        if (canvas) {
            webGLFluidEnhanced.simulation(canvas as HTMLCanvasElement)
            webGLFluidEnhanced.config({
                DENSITY_DISSIPATION: 6,
                VELOCITY_DISSIPATION: 4,
                BACK_COLOR: theme.palette.background.default,
                SUNRAYS_WEIGHT: 4,
            })
        }

        return () => {
            if (main) {
                main.removeEventListener('click', handleMouseEvent);
                main.removeEventListener('mousemove', handleMouseEvent);
                main.removeEventListener('mousedown', handleMouseEvent);
                main.removeEventListener('mouseup', handleMouseEvent);
                main.removeEventListener('mouseover', handleMouseEvent);
                main.removeEventListener('mouseout', handleMouseEvent);
            }
        }
    }, [canvasRef])

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
            <Stack ref={mainRef}
                   maxWidth={"1280px"}
                   marginX={"auto"}
                   paddingX={"14px"}
                   gap={12}
                   zIndex={1}
                // sx={{pointerEvents: "none"}}
                   position={"relative"}
            >
                <Section_1/>
                <Section_2/>
                <Section_3/>
                <Section_4/>
                <Section_5/>
                <Section_6/>
            </Stack>
            <Footer/>
        </>
    );
}
export default App;

const propagateMouseEvent = (event: MouseEvent, targetRef: RefObject<HTMLElement>) => {
    const target = targetRef.current;
    if (target) {
        target.dispatchEvent(new MouseEvent(event.type, event));
    }
}