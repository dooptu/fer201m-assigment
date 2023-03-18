import { Container } from "@mui/material";
import Header from "./Header/Header_Khoi";
import Footer from "./Footer/Footer_Khoi";
import { ThemeProvider } from '@mui/material';
import { customeTheme } from './customTheme_Khoi';

export default function Main() {
    return (
        <ThemeProvider theme={customeTheme}>
            <Header />
            <Footer />
        </ThemeProvider>



    );
}