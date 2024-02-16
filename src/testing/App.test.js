import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store";
import '@testing-library/jest-dom';
import App from '../components/App';

describe("App", () => {
    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                    <App/>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

});