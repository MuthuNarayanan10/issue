import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'


export default class Confirm extends React.Component {
    verifypage = (e) => {
        this.props.history.push('/Thanks');
    }
    render() {
        return (
            <div className="confirm">
            <div className="landing-sections">
                <div className="content-section">
                    <div className="NavContainer">
                        <Header />
                    </div>
                </div>
            </div>
            <div className="sections">
                    <h2 className="mb-75">
                       Please open your mail inbox and confirm your mail id
                    </h2>
                    </div>
            <Footer />
        </div>
        )
    }}