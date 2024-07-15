import React from 'react';
import image from '../assets/img/c40ebc87389e5017509a71054e2cac38.jpg';

const Home = () => (
    <section class="section section--realtime" id="teletype">
        <div class="wrapper">
            <h3>Teletype for Atom</h3>

            <p>Great things happen when developers work together—from teaching and sharing knowledge to building better software. Teletype for Atom makes collaborating on code just as easy as it is to code alone, right from your editor.</p>

            <div class="welcome-bgs">
                <img src={image} class="welcome-bg welcome-bg--screenshot" />
            </div>

            <p>Share your workspace and edit code together in real time. To start collaborating, <a href="atom://settings-view/show-package?package=teletype">open Teletype in Atom</a> and install the package.</p>

            <p class="welcome-cta">
                <a href="https://teletype.atom-editor.cc/" class="welcome-button">Learn more</a>
            </p>
        </div>
    </section>
);

export default Home;
