/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './Home.css'

class Home extends Component {
    render() {
        let heading = "Cultivating Antifragility";
        let subheading = "I have not yet decided what this site is going to be yet";
        
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">{ heading}</h1>
                        <div className="is-two-thirds column is-paddingless">
                            <h2 className="subtitle is-4">{ subheading }</h2>
                        </div>
                        <a className="button is-large is-primary" id="learn">Learn More</a>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="container">
                        <div class="columns pd is-desktop">
                        <div class="column is-1 has-text-centered">
                            <i class="fa fa-cog is-primary"></i>
                        </div>
                        <div class="column is-one-third-desktop">
                            <p class="title"><strong>Engineering Technologist</strong></p>
                        </div>
                            <div class="column">
                            <p id="welcometext">With close to 20 years experience in technology. Skilled at developing and formulating a strategy around a business outcome, hands on implementation of solutions as well as growing and leading teams to 
                            deliver on a vision.</p>
                        </div>
                        </div>
                    </div>
                    <div class="columns pd">
                        <div class="column">
                        <div class="card">
                            <div class="card-content">
                            <p class="title">Knowing is not enough we must apply. Willing is not enough we must do.</p>
                            <p class="subtitle has-text-right">- Bruce Lee</p>
                            </div>
                        </div>
                        </div>
                        <div class="column">
                        <div class="card">
                            <div class="card-content">
                            <p class="title">Knowing is not enough we must apply. Willing is not enough we must do.</p>
                            <p class="subtitle has-text-right">- Bruce Lee</p>
                            </div>
                        </div>
                        </div>
                        <div class="column">
                        <div class="card">
                            <div class="card-content">
                            <p class="title">Knowing is not enough we must apply. Willing is not enough we must do.</p>
                            <p class="subtitle has-text-right">- Bruce Lee</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>                
            </div>
        );
    }
}
export default Home;