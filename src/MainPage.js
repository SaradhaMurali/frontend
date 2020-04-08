import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Route from "react-router-dom/Route"
import LoginPage from "./LoginPage"


class MainPage extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/login" exact stict render={
                    () => <LoginPage />
                }>
                </Route>
            </Router>
        )
    }
}

export default MainPage