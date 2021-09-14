import React from "react";
import {render} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../store/index.js'

import App from "../App.js";


describe("Home", () => {
    const component = render (
        <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
        <App/>
        </MemoryRouter>
        </Provider>
    );
    it("Should render Navbar",()=>{
        component.container.querySelector("Navbar")
    });

})
    