import { useState } from 'react';
import { Form, Tabs } from '../../components';
import {
    baseSalaryCalculator,
    salaryExperienceCalculator,
    baseTaxCalculator,
    highIncomeTaxCalculator,
    numberWithCommas,
} from '../../../utility';

import style from './style.module.scss';

function Home() {
    const [activeTab, setActiveTab] = useState('Programmer');
    const [netSalary, setNetSalary] = useState(false);
    const handleTab = (value) => {
        setNetSalary(false);
        setActiveTab(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            experience: Number(e.target.experience.value),
            location: e.target.location.value,
            year: Number(e.target.year.value),
        };
        const basicSalary = baseSalaryCalculator(activeTab);
        const salaryWithExperience = salaryExperienceCalculator(values.experience, basicSalary);
        const basicTax = baseTaxCalculator(values.location, values.year, salaryWithExperience);
        const extraTax = highIncomeTaxCalculator(values.location, values.year, basicTax);
        setNetSalary(extraTax);
    };
    return (
        <div className={[style.container, style[activeTab]].join(' ')}>
            <Tabs activeTab={activeTab} handleTab={handleTab} />
            <div className={style.form_container}>
                <Form submit={onSubmit} />
            </div>
            {netSalary ? (
                <p>
                    Your net salary estimate is :
                    {' '}
                    <br />
                    SEK
                    {' '}
                    {numberWithCommas(netSalary)}
                </p>
            ) : null}
        </div>
    );
}

export default (Home);
