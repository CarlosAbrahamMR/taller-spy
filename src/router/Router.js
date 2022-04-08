import { BrowserRouter, Routes, Route } from "react-router-dom";
function Router(){
return <BrowserRouter>
<Routes>
<Route path="/" element={<Base/>}> </Route>
</Routes>
</BrowserRouter>;
}

export default Router;
