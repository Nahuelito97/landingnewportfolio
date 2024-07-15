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
                <div className="footer-right">
                    <a href="#">
                        <span className="octicon octicon-code">© 2024 My Portfolio</span>                       
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
