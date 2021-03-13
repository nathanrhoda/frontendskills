import React from 'react';
import './Footer.css';

//Stateless component below used for components where alot of things dont change. You dont need access to state
const Footer = () => {
    return (
    <div>
    <footer class="footer is-primary">
        <div class="container">
            <div class="columns">
                <div class="column">
                <p>The footer be putting its foot down</p>
                </div>
                <div class="column has-text-right">
                <a class="icon" href="https://www.linkedin.com/in/nathan-rhoda-17291a22"><i class="fa fa-linkedin"></i></a>              
                <a class="icon" href="https://twitter.com/nathanrhoda"><i class="fa fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </footer>
    </div>
    );
};

export default Footer;