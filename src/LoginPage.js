import React from "react"
import "./LoginPage.css"
import axios from "axios"

class LoginPage extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: "",
            password: "",
            messageText: "",
            buttonText: "Register",
            phoneNumber:91,
            address:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
        this.registerDivShow = this.registerDivShow.bind(this)
        this.registerClick = this.registerClick.bind(this)
    }
    loginClick(event) {
        const url = "http://localhost:8080/login?userName=" + this.state.userName + "&password=" + this.state.password
        console.log(url)
        axios
            .get(url)
            .then(response => {
                this.setState({
                    messageText: response.data
                })
            }).catch(error => console.log(error));
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }
    registerDivShow(event) {
        const value = event.target.value
        this.setState(() => {
            if (value === "Register") {
                return {
                    buttonText: "Login",
                    messageText:""
                }
            } else {
                return {
                    buttonText: "Register"
                    ,messageText:""
                }
            }
        }

        )
    }

    registerClick(){
        const url = "http://localhost:8080/register?userName=" + 
        this.state.userName + "&password="
         + this.state.password +"&address="+this.state.address+ "&phoneNumber="+this.state.phoneNumber
         
        console.log(url)
        axios.post(url)
            .then(response => {
                this.setState({
                    messageText: response.data
                })
            }).catch(error => console.log(error));

    }
    render() {
        return (
            <div className="form-div">
                <div className="login-div" style={{ display: this.state.buttonText === "Register" ? "block" : "none" }}>
                    <label
                        style={{ top: 100 }}
                        className="label-style">User Name</label>
                    <input
                        style={{ top: 100, left: 100 }}
                        className="textbox-style"
                        type="text"
                        name="userName"
                        onChange={this.handleChange} />
                    <br />
                    <label
                        style={{ top: 120 }}
                        className="label-style">Password
                    </label>
                    <input
                        style={{ top: 120, left: 110 }}
                        className="textbox-style"
                        type="password"
                        name="password"
                        onChange={this.handleChange} />
                    <br />

                    <button onClick={this.loginClick} className="login-button-style">Login</button>
                </div>
                <div style={{ display: this.state.buttonText === "Register" ? "none" : "block" }} className="register-contents-div">
                    <label
                        style={{ top: 50 }}
                        className="label-style">User Name</label>
                    <input
                        style={{ top: 50, left: 100 }}
                        className="textbox-style"
                        type="text"
                        name="userName"
                        onChange={this.handleChange} />
                    <br />
                    <label
                        style={{ top: 70 }}
                        className="label-style">Password
                    </label>
                    <input
                        style={{ top: 70, left: 110 }}
                        className="textbox-style"
                        type="password"
                        name="password"
                        onChange={this.handleChange} />
                    <br />
                    <label
                        style={{ top: 90 }}
                        className="label-style">Phn Number
                    </label>
                    <input
                        style={{ top: 90, left: 90 }}
                        className="textbox-style"
                        type="number"
                        name="phoneNumber"
                        onChange={this.handleChange} />
                    <br />

                    <label
                        style={{ top: 110 }}
                        className="label-style">Address
                    </label>
                    <input className="textbox-style"
                    style={{ top: 110, left: 120}}
                    name="address"
                    type="text"
                    onChange={this.handleChange}/>
                    <button className="regiter-button-style" onClick={this.registerClick}>Register</button>
                </div>

                <div className="pre-register-div">
                    <button value={this.state.buttonText}
                        className="register-button" onClick={this.registerDivShow}>{this.state.buttonText}</button>
                </div>
                <div>
                    <p className="info-style">{this.state.messageText}</p>
                </div>
            </div>
        )
    }
}
export default LoginPage