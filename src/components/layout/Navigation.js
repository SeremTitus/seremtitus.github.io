import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

export default function Navigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}