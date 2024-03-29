import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (

            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>Escape</b>Room</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>

                </nav>
            </header>
        )
    }
}