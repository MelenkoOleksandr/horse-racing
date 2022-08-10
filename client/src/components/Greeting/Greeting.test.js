import Greeting from "./Greeting"
import { render } from "@testing-library/react"
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux"

const mockStore = configureStore([])

describe('Greeting test', () => { 
    it('Button is disabled if race have started', () => {
        let store = mockStore({
            raceStarted: true
        })
        const greeting = render(<Provider store={store}><Greeting /></Provider>)  
        expect(greeting.getByTestId("greeting-btn").disabled).toBe(true)
    })
 })
