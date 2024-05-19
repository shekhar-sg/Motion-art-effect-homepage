import {Stack} from "@mui/material";
import Section_1 from "./sections/section_1";
import Section_2 from "./sections/section_2";
import Section_3 from "./sections/section_3";
import Section_4 from "./sections/section_4";
import Section_5 from "./section_5";

const App = () => {
    return (
        <Stack maxWidth={"1280px"} marginX={"auto"}>
            <Section_1/>
            <Section_2/>
            <Section_3/>
            <Section_4/>
            <Section_5/>
        </Stack>
    );
}
export default App;
