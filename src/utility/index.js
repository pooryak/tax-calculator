export const baseSalaryCalculator = (tab) => {
    const salaryValues = {
        Programmer: 30_000,
        Teacher: 27_000,
        Cashier: 25_000,
    };

    return salaryValues[tab];
};

export const salaryExperienceCalculator = (yearsLevel, salary) => {
    let result;
    switch (true) {
        case yearsLevel === 0: // 0-3 years experience
            result = salary;
            break;
        case yearsLevel === 1:
            result = salary * (1 + 0.25); // 4-7 years experience: 25% increase
            break;
        case yearsLevel === 2:
            result = salary * (1 + 0.4); // 7-10 years experience: 40% increase
            break;
        case yearsLevel === 3:
            result = salary * (1 + 0.6); // 11+ years experience: 60% increase
            break;
        default:
            result = salary;
            break;
    }
    return result;
};

export const baseTaxCalculator = (city, year, salary) => {
    let result;
    switch (true) {
        case salary > 36000:
            result = salary;
            break;
        case (city === 'stockholm' && year === 2019):
            result = salary * (1 - 0.3);
            break;
        case (city === 'stockholm' && year === 2020):
            result = salary * (1 - 0.29);
            break;
        case (city === 'gothenburg' && year === 2020):
            result = salary * (1 - 0.22);
            break;
        case (city === 'gothenburg' && year === 2019):
            result = salary * (1 - 0.25);
            break;
        default:
            result = salary;
            break;
    }
    return result;
};

export const highIncomeTaxCalculator = (city, year, salary) => {
    let result;
    function firstLevelTax(income) {
        const additionalTax = (income - 36_000) * (1 - 0.5); // tax for salaries between 36000 and 45000 SEK
        return additionalTax;
    }
    function secondLevelTax(income) {
        const additionalTax = (income - 45_000) * (1 - 0.7); // tax for salaries above 45000 SEK
        return additionalTax;
    }
    if (salary < 36000) {
        return salary;
    } if (salary > 36_000 && salary < 45_000) {
        const basicTax = baseTaxCalculator(city, year, 36000);
        result = basicTax + firstLevelTax(salary);
        return result;
    } if (salary > 45_000) {
        const basicTax = baseTaxCalculator(city, year, 36000);
        result = basicTax + firstLevelTax(45_000) + secondLevelTax(salary);
        return result;
    }
    return result;
};

export const numberWithCommas = (salary) => salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
