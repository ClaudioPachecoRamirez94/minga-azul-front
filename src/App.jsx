import apiUrl from "../api"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Mobile from "./components/Mobile";

function App() {
    console.log(apiUrl);
    console.log(process.env.NODE_ENV);
    return (
        <>
            <Navbar />
            <Index />
            <Footer />
            <Mobile />
        </>
    )
}

export default App

