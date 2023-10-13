import Navigation from './Navigation';
import MainFooter from './MainFooter';

import classes from './Layout.module.css'

export default function layout(props){
    return(
        <div>
            <Navigation/>
            <main className={classes.main}>
                {props.children}
            </main>
            <MainFooter/>
        </div>
    );
}