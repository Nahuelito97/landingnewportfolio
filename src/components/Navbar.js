import React from 'react';

const Navbar = () => (
    <header className="top-bar">
        <nav aria-label="Primary" className="wrapper no-pad">
            <ul className="navigation">
                <li><a href="/packages">Packages</a></li>
                <li><a href="/themes">Themes</a></li>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="https://github.com/atom/atom/discussions">Discussions</a></li>
            </ul>
        </nav>
    </header>
);

export default Navbar;
