import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/signup";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/signup" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;