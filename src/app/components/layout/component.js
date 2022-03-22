import {
    Outlet,
} from 'react-router-dom';
import style from './style.module.scss';

function Layout() {
    return (
        <>
            <div className={style.mask} />
            <div className={style.container}>
                <main className={style.main}>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;
