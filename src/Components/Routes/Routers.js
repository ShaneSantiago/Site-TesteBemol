import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "../Pages/Cadastro/Cadastro"

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Cadastro />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers