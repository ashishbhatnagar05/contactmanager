import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const {name,email,phone}=this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
            </div>
        )
    }
}

export default Contact;