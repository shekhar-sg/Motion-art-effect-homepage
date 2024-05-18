import {Stack} from "@mui/material";
import Section_1 from "./sections/section_1";
import Section_2 from "./sections/section_2";
import Section_3 from "./sections/section_3";

const App = () => {
    return (
        <Stack maxWidth={"1280px"} marginX={"auto"}>
            <Section_1/>
            <Section_2/>
            <Section_3/>
        </Stack>
    );
}
export default App;
