import { Link } from 'react-router-dom'

import classes from './MainNavigation.css'

function MainNavigation() {
    return (
        <header>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetup</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default MainNavigation;