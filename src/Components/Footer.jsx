import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    console.log(currentYear);
    return (
        <footer>
            <p>
                The year is {currentYear}
            </p>
        </footer>
    )
}

export default Footer;