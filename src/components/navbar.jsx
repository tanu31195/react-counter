import React from 'react';

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">NavBar{" "}
                <span className={"badge badge-pill badge-secondary"}>
                        {totalCounters}
                    </span>
            </a>
        </nav>
    );
};

// class NavBar extends Component {
//     render() {
//     }
// }

export default NavBar;
