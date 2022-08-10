import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { setHorses, setWinner } from "../../store/raceSlice/raceSlice"
import store from "../../store/store"
import Winner from "./Winner"

test("Winner is not showing", () => {
    const userChoice = render(<Provider store={store}><Winner /></Provider>)
    expect(userChoice.queryByTestId("winner")).not.toBeInTheDocument()
})

test('Winner is shown', async () => {
    const userChoice = render(<Provider store={store}><Winner /></Provider>)
    store.dispatch(setHorses([{ name: "test", distance: 1000 }, { name: "test2", distance: 900 }]))
    store.dispatch(setWinner(0))
    expect(await userChoice.findByText(/test/i)).toBeInTheDocument()
})

