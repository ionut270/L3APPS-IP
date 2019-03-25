import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Equal } from "./components/Equal";
import * as math from "mathjs";
import "./components/Button.css";
import "./components/Sensor/sensor.js";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            output: "",
            sign: 0, // 0 for plus 1 for minus
            number: 0,
            opened: 0
        };
    }

    handleLight = () => {
        alert(window.ondeviceproximity);
        if ("ondeviceproximity" in window) {
            // Fired when object is in the detection zone
            window.addEventListener("deviceproximity", function(event) {
                // Object distance in centimeters
                alert(event.value + " centimeters");
            });
        } else {
            alert("deviceproximity not supported");
        }
    };
    addToInput = val => {
        console.log("vibrate");
        navigator.vibrate =
            navigator.vibrate ||
            navigator.webkitVibrate ||
            navigator.mozVibrate ||
            navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate(70);
        }
        if ((this.sign = 0 && !isNaN(val)))
            this.setState({ input: this.state.input + val });
        switch (val) {
            case "+/-":
                navigator.vibrate(1000);
                break;
            case "%":
                this.setState({ input: this.state.input + val });
                this.setState({ output: this.state.output + val });
                break;
            case "√":
                if (this.state.input !== "") {
                    this.state.opened++;
                    this.setState({ input: this.state.input + "*sqrt(" });
                    this.setState({
                        output: this.state.output + "X" + val + "("
                    });
                    break;
                } else {
                    this.state.opened++;
                    this.setState({ input: this.state.input + "sqrt(" });
                    this.setState({ output: this.state.output + val + "(" });
                    break;
                }
            case "/":
                this.setState({ input: this.state.input + val });
                this.setState({ output: this.state.output + val });
                break;
            case "X":
                this.setState({ input: this.state.input + "*" });
                this.setState({ output: this.state.output + val });
                break;
            case "-":
                this.setState({ input: this.state.input + val });
                this.setState({ output: this.state.output + val });
                break;
            case "+":
                this.setState({ input: this.state.input + val });
                this.setState({ output: this.state.output + val });
                break;
            case "(":
                this.setState({ input: this.state.input + val });
                this.setState({ output: this.state.output + val });
                this.state.opened++;
                break;
            case ")":
                if (this.state.opened === 0) {
                    navigator.vibrate(150);
                    break;
                } else {
                    this.state.opened--;
                    this.setState({ input: this.state.input + val });
                    this.setState({ output: this.state.output + val });
                    break;
                }
            default:
                this.setState({ input: this.state.input + val });
                this.setState({ output: this.state.output + val });
                break;
        }
    };

    handleEqual = () => {
        if (this.state.opened === 1) {
            alert("There is a pharantesis opened!");
        } else if (this.state.opened > 1) {
            alert("There are " + this.state.opened + " pharantesis opened!");
        }
        //alert(this.state.input);
        this.setState({
            output: math.eval(this.state.input)
        });
    };

    render() {
        return (
            <div className="app">
                <Input input={this.state.output} />
                <div className="calc-wrapper">
                    <div className="row">
                        <Button
                            handleClick={() => {
                                this.setState({ input: "", output: "" });
                                //this.setState({ input: this.state.input.slice(0, -1), output: this.state.output.slice(0, -1); })
                            }}
                        >
                            C
                        </Button>
                        <Button handleClick={this.handleLight}>+/-</Button>
                        <Button handleClick={this.addToInput}>%</Button>
                        <Button handleClick={this.addToInput}>√</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>X</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>0</Button>
                        <div className={`button-wrapper`}>
                            <Button handleClick={this.addToInput}>(</Button>
                            <Button handleClick={this.addToInput}>)</Button>
                        </div>
                        <Button handleClick={this.addToInput}>.</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="row">
                        <Equal handleClick={() => this.handleEqual()}>=</Equal>
                    </div>
                </div>
                <h1>Ambient Light Sensor</h1>
                <p>Current Light Levels</p>
                <div id="details" />
                <script
                    type="text/javascript"
                    src="./components/Sensor/sensor.js"
                />
            </div>
        );
    }
}

export default App;
