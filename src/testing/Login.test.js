import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from "../store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import Login from "../components/Login";

describe("Login", () => {
    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('renders the dropdown and submit button', () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        const dropdown = component.getByTestId('username_dropdown');
        const submitButton = component.getByTestId('login_button');

        expect(dropdown).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
      });

      it('the login button must unlock', () => {

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        
        const userSelectElement = wrapper.getByTestId("select-user");
        const loginButtonElement = wrapper.getByTestId("login_button");


        expect(loginButtonElement).toBeInTheDocument();
        expect(userSelectElement).toBeInTheDocument();
        expect(loginButtonElement).toBeInTheDocument();

        fireEvent.select(userSelectElement, {target: {value: "sarahedo"}});
        
        expect(loginButtonElement).toBeDisabled(false);
    });
});