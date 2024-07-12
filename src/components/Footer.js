import React from 'react';



/*
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="">{content.nav.logo}&nbsp;</Link>
            {new Date().getFullYear()} 🚀
        </Typography>
    );
}

*/
const Footer = () => (
    <footer>
        <div className="footer">
            
            <div className="wrapper no-pad">
                <ul className="footer-left">
                    <li><a href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">Terms of Use</a></li>
                    <li><a href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">Privacy</a></li>
                    <li><a href="https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a></li>
                    <li><a href="/releases">Releases</a></li>
                    <li><a href="https://flight-manual.atom-editor.cc/faq">FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <div className="footer-right">
                    <a href="https://github.com">
                        <span className="octicon octicon-code"></span>
                        with
                        <span className="octicon octicon-heart"></span>
                        by
                        <span className="octicon octicon-logo-github"></span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
