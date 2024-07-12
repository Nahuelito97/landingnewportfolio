import React from 'react';

const Hero = () => (
    <section className="section section--hero">
        <p className="sunset-banner sunset-text-color">
            Atom and all repositories under Atom will be archived on December 15, 2022.
            <a className="sunset-text-color" href="/404.html">Learn more in our official statement.</a>
        </p>

        <div className="wrapper">
            <header className="hero-header">
                <div aria-hidden="true" className="hero-header-item hero-logo">
                   <div className="hero-logo-circles">
                        <img src={require('../assets/img/index-portal-red-semi.svg').default} className="hero-logo-circle" alt="red semi" />
                        <img src={require('../assets/img/index-portal-red.svg').default} className="hero-logo-circle" alt="red" />
                        <img src={require('../assets/img/index-portal-orange-semi.svg').default} className="hero-logo-circle" alt="orange semi" />
                        <img src={require('../assets/img/index-portal-orange.svg').default} className="hero-logo-circle" alt="orange" />
                        <img src={require('../assets/img/index-portal-yellow-semi.svg').default} className="hero-logo-circle" alt="yellow semi" />
                        <img src={require('../assets/img/index-portal-yellow.svg').default} className="hero-logo-circle" alt="yellow" />
                        <img src={require('../assets/img/index-portal-green-semi.svg').default} className="hero-logo-circle" alt="green semi" />
                        <img src={require('../assets/img/index-portal-green.svg').default} className="hero-logo-circle" alt="green" />
                        <img src={require('../assets/img/index-portal-blue-semi.svg').default} className="hero-logo-circle" alt="blue semi" />
                        <img src={require('../assets/img/index-portal-blue.svg').default} className="hero-logo-circle" alt="blue" />
                    </div>
                </div>
                <ul className="hero-header-item hero-download">
                    <li>
                        <img src={require('../assets/img/index-atom-wordmark.svg').default} className="logo-wordmark" alt="Atom Wordmark" />
                    </li>
                    <li>
                        <span className="version">1.63</span>
                        <a href="/releases">Release notes</a>
                    </li>
                    <li>
                        <a href="https://github.com/atom/atom/releases/latest" className="welcome-button">
                            <span className="octicon octicon-move-down"></span> Download
                        </a>
                    </li>
                </ul>

                <p className="hero-meta">
                    <span className="hero-tos">
                        By downloading, you agree to the <a href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">Terms and Conditions</a>.
                    </span>
                    <a href="https://github.com/atom/atom/releases/latest">Other platforms</a>
                    <a href="/beta">Try Atom Beta</a>
                    <a href="/nightly">Try Atom Nightly</a>
                </p>
            </header>

            <div className="hero-features">
                <h1 className="hero-tagline">A hackable <span className="hero-tagline-highlight">text editor</span> for the 21st Century</h1>
            </div>

            <img src={require('../assets/img/header-img.svg').default} className="hero-octonaut" alt="Octonaut" height={300} width={300} />
        </div>
    </section>
);

export default Hero;
