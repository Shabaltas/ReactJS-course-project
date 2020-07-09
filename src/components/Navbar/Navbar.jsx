import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavLinks = [
    {id: 0, title: "Profile", to: "/profile"},
    {id: 1, title: "Users", to: "/users"},
    {id: 2, title: "Messages", to: "/dialogs"},
    {id: 3, title: "News", to: "/news"},
    {id: 4, title: "Music", to: "/music"},
    {id: 5, title: "Settings", to: "/settings"}
];

const SimpleNavLink = (props) =>
    <div className={s.item}>
        <NavLink to={props.to} activeClassName={s.active}>{props.title}</NavLink>
    </div>;

class Navbar extends React.Component {
    render() {
        return (
            <div className={s.nav}>
                <nav>
                    {NavLinks.map(navLink => <SimpleNavLink key={navLink.id} title={navLink.title} to={navLink.to}/>)}
                </nav>
                <Friends friends={this.props.friends}/>
            </div>
        )
    };
}

export default Navbar;
