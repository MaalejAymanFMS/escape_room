import React, { Component } from 'react';
import './MyForm';
import MyForm from './MyForm';
import image from "./TheGameProduction.jpg";


export default class Content extends Component {
    render() {
        return (

            <section className="content-header">

                
                <div class="image"
                    style={{
                        backgroundImage:
                            `url(${image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top right",
                        backgroundSize: "20%",

                    }} ><MyForm /></div>

            </section>

        )
    }
}