import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
@inject("store")
@observer
export default class Second extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Second page AppTor Simple for web app</h1>
                    <div className="App-image" style={{backgroundImage: "url(" + require("../source/genius.jpg") + ")"}}></div>
                    <Link className="App-link" to="/">Go god</Link>
                </header>
            </div>
        );
    }
}