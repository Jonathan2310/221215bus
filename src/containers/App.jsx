import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../pages/Register';
import AltaBus from '../pages/AltaBus';
import NotFound from '../pages/NotFound';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/altaBus" element={<AltaBus />} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>   
     );
}

export default App;