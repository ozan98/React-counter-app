import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    console.log('navbar - Rendered')
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-second ary">
                    { totalCounters }
                </span>
            </a>
        </nav>
    )
}

// class NavBar extends React.Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar{" "}
//                     <span className="badge badge-pill badge-secondary">
//                         { this.props.totalCounters }
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
export default NavBar;