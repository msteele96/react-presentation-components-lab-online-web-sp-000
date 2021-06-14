// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super ()
        this.state = {mood: "happy"}
    }

    handleClick = () => {
        const toggled = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: toggled
        })
    }

    render () {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}