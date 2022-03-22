import PropTypes from 'prop-types';
import style from './style.module.scss';

function Tabs({ handleTab }) {
    return (
        <div className={style.tabs}>
            <ul className={style.nav}>
                <li className={style.programmer} onClick={() => handleTab('Programmer')}>
                    Programmer
                </li>
                <li className={style.teacher} onClick={() => handleTab('Teacher')}>
                    Teacher
                </li>
                <li className={style.cashier} onClick={() => handleTab('Cashier')}>
                    Cashier
                </li>
            </ul>
        </div>
    );
}

Tabs.propTypes = {
    handleTab: PropTypes.func.isRequired,
};

export default Tabs;
