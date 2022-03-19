import {useMemo} from "react";
import {Link, useLocation} from "react-router-dom";

export interface NavBarProps {
    enableIcon?: boolean;
    position?: 'left' | 'right';
}

const navItems = [
    {
        label: 'About app',
        link: '/about',
    },
    {
        label: 'Weather',
        link: '/',
    },
];

export function NavBar({enableIcon, position}: NavBarProps){
    const location = useLocation();

    const items = useMemo(() => {
        return navItems.map(({label, link}) => {
            let linkClassName = 'nav-link';
            if (location.pathname === link) {
                linkClassName += ' active'
            }

            return (
                <li key={label}>
                    <Link to={link} className={linkClassName}>{label}</Link>
                </li>
            )
        })
    }, [location.pathname]);

    return (
        <nav className='navbar navbar-light  navbar-expand-sm navbar-dark'>
            {enableIcon && (
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={require("../../icons/weather.png")}
                            alt="logo"
                            width="30"
                            height="30"
                            className="align-text-center mr-2 mb-1"
                        />
                        <h1 className="navbar-brand">Weather App</h1>
                    </Link>
                </div>
            )}
            <ul className={`navbar-nav w-100 ${position === 'right' ? 'justify-content-end' : 'justify-content-start'}`}>
                {items}
            </ul>
        </nav>
    )
}