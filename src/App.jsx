import apiUrl from "../api"
import Main from "./layout/Main";
import Index from "./pages/Index";
import Mobile from "./components/Mobile";

function App() {
    console.log(apiUrl);
    console.log(process.env.NODE_ENV);
    return (
        <>
            <Main>
                <Index />
            </Main>
            <Mobile />
        </>
    )
}

export default App

