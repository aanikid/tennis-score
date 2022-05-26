import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import store from "../redux/store";
import {Provider} from "react-redux";

const AllTheProviders: React.FC = ({children}) => {
    return (
        <Provider store={store}>
           <>
               {children}
           </>
        </Provider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}