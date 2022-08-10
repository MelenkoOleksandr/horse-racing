import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { setHorses, setUserChoise } from "../../store/raceSlice/raceSlice"
import store from "../../store/store"
import UserChoice from "./UserChoice"

test('UserChoice is not render if not horseSelected',  () => {
    const userChoice = render(<Provider store={store}><UserChoice /></Provider>)
    expect(userChoice.queryByTestId("user-choice")).not.toBeInTheDocument()
})

test("UserChoice Works Correctly", () => {
    const userChoice = render(<Provider store={store}><UserChoice /></Provider>)
    store.dispatch(setHorses([{name: "test", distance: 1000}, {name: "test2", distance: 900}]))
    store.dispatch(setUserChoise(0))
    expect(userChoice.getByTestId("user-choice")).toBeInTheDocument()
    expect(userChoice.getByTestId("user-choice")).toContainElement(userChoice.getByText(/test/i))
    expect(userChoice.queryByTestId("user-result")).not.toBeInTheDocument()
})
