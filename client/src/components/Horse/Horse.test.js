import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store/store"
import Horse from "./Horse"


test('Horse renders correctly', () => {
    const horse = render(<Provider store={store}><Horse horseIndex={0} horse={{ name: "Test1", distance: 0 }} /></Provider>)
    expect(horse.getByText(/Test1/i)).toBeInTheDocument()
    expect(horse.getByText(/0m/i)).toBeInTheDocument()
})

test("Horse has succesfully been selected after click", () => {
    const horse = render(<Provider store={store}><Horse horseIndex={0} horse={{ name: "Test1", distance: 0 }} /></Provider>)
    fireEvent.click(horse.getByTestId("horse"))
    expect(horse.getByTestId("horse")).toHaveClass('selected')
    expect(store.getState().userChoice).toBe(0)
})