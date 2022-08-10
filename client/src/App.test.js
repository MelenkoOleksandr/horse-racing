import App from "./App"
import {fireEvent, render} from "@testing-library/react"
import store from "./store/store"
import { Provider } from "react-redux"

it("App renders", () => {
    const { asFragment } = render(<Provider store={store}><App /></Provider>)
    expect(asFragment()).toMatchSnapshot()
})

describe('Greeting test', () => {
    it('Button is disabled if race have started', () => {
        const greeting = render(<Provider store={store}><App /></Provider>)
        const btn = greeting.getByTestId("greeting-btn")
        fireEvent(btn, new MouseEvent('click'))
        expect(btn).not.toBeDisabled()
    })
})
