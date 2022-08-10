import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import App from "../../App"
import store from "../../store/store"
import Greeting from "./Greeting"

test('Start button is disabled after start', async () => {
    const greeting = render(<Provider store={store}><App /></Provider>)
    const startBtn = await greeting.findByTestId("greeting-btn")
    fireEvent.click(startBtn)
    expect(startBtn).toBeDisabled()
})

test('Greeting has title and info text', () => {
    const greeting = render(<Provider store={store}><Greeting /></Provider>)
    expect(greeting.getByText("Welcome to the horse race!")).toBeInTheDocument()
    expect(greeting.getByText("You can select the horse after the race is started but do it before 700m")).toBeInTheDocument()
})