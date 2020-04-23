import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                </ul>
            </div>
        )
    }
}

export default Contact;