import {Stack} from "@mui/material";
import Section_1 from "./sections/section_1";
import Section_2 from "./sections/section_2";

const App = () => {
    return (
        <Stack maxWidth={"1280px"} marginX={"auto"}>
            <Section_1/>
            <Section_2/>
        </Stack>
    );
}
export default App;
