import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const Root: FunctionComponent = () => {
    return <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
}

export default Root;