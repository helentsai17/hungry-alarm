import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
    logOut(e) {
        localStorage.removeItem('usertoken')
        window.location = "/"
    }


    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/restaurant/start" className="nav-link">
                        Restaurant
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        User
                </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/user/location" className="nav-link">
                        Resturant nearby
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/reservation" className="nav-link">
                        My reservation
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/allevent" className="nav-link">
                        Event
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/favorite" className="nav-link">
                        Favorite
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/profile" className="nav-link">
                        User
                </Link>
                </li>
                <li className="nav-item">   
                    <a onClick={this.logOut.bind(this)} className="nav-link">
                        Logout</a>
                </li>
            </ul >
        )

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">hungry alarm</a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>

                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                    {/* {(() => {
                        if (localStorage.getItem('usertoken') != null && localStorage.getItem('restauranttoken') == null) {
                            return userLink
                        } 
                        else if (localStorage.getItem('restauranttoken')!= null && localStorage.getItem('usertoken') == null) {
                            return RestaurantLink
                        } 
                        else {
                            return loginRegLink
                        }
                    })()} */}
                </div>
            </nav>
        );
    }


}
export default withRouter(Navbar)