import React from 'react';

const Features = () => (
    <section className="section section--features">
        <div className="wrapper wrapper--nightly">
            <h3>Try Atom Nightly ✨</h3>

            <p>Want to never wait for new improvements? The Nightly channel contains new features and bug fixes as soon as they get merged into master. It is intended for developers and very early adopters. See the <a href="/blog/2019/06/21/introducing-atom-nightly-releases">blog post</a> for more information.</p>

            <div className="features-item">
                <span className="mega-octicon octicon-rocket"></span>
                <p>Keep your current Atom configuration when using Atom Nightly</p>
            </div>
            <div className="features-item">
                <span className="mega-octicon octicon-calendar"></span>
                <p>New Nightly releases are available every few days and installed automatically</p>
            </div>
            <div className="features-item">
                <span className="mega-octicon octicon-bug"></span>
                <p>There may be bugs. If you have problems, please <a href="https://github.com/atom/atom/blob/master/CONTRIBUTING.md#submitting-issues">file an issue</a></p>
            </div>
        </div>
    </section>
);

export default Features;
