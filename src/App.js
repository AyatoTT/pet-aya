import {Route, Routes} from "react-router";

import Home from "./pages/home/home";
import Messages from "./pages/messages/messages";
import Orders from "./pages/orders/orders";


function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/orders" element={<Orders />} />

            </Routes>

        </div>
    );


}

export default App