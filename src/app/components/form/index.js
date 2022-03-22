import PropTypes from 'prop-types';
import style from './style.module.scss';

function Form({ submit }) {
    return (
        <form className={style.form} onSubmit={submit}>
            <div className={style.row}>
                <label htmlFor="experience">Experience</label>
                <div className={style.select_container}>
                    <select name="experience" id="experience" defaultValue={0}>
                        <option value={0}>0-3</option>
                        <option value={1}>4-7</option>
                        <option value={2}>8-10</option>
                        <option value={3}>11+</option>
                    </select>
                </div>
            </div>
            <div className={style.row}>
                <label htmlFor="location">Location</label>
                <div className={style.select_container}>
                    <select name="location" id="location" defaultValue="stockholm">
                        <option value="stockholm">Stockholm</option>
                        <option value="gothenburg">Gothenburg</option>
                    </select>
                </div>
            </div>
            <div className={style.row}>
                <label htmlFor="year">Select Year</label>
                <div className={style.select_container}>
                    <select name="year" id="year" defaultValue={2019}>
                        <option value={2019}>2019</option>
                        <option value={2020}>2020</option>
                    </select>
                </div>

            </div>
            <button type="submit">
                Calculate
            </button>
        </form>
    );
}

Form.propTypes = {
    submit: PropTypes.func.isRequired,
};

export default Form;
