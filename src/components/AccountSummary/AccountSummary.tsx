import React, { useContext } from 'react';
import CountUp from 'react-countup';
// Context
import { GlobalContext } from '../../context/GlobalProvider';
// Styles
import styles from './AccountSummary.module.css';

const AccountSummary: React.FC = () => {
    const { currentBalance, totalIncome, totalExpense, previousBalance, previousIncome, previousExpense } 
        = useContext(GlobalContext);
    
    return (
        <div className={styles.container}>

            <div className={styles.balance}>
                <div className={styles.balanceImage}>
                    <img className={styles.image} src="/images/balance.svg" alt="Current Balance"/>
                </div>
                <h2><CountUp start={previousBalance} end={currentBalance} duration={2} /></h2>
                <h4>Current Balance</h4>
            </div>

            <div className={styles.income}>
                <div className={styles.incomeImage}>
                    <img className={styles.image} src="/images/income.svg" alt="Total Income"/>
                </div>
                <h2><CountUp start={previousIncome} end={totalIncome} duration={2} /></h2>
                <h4>Total Income</h4>
            </div>

            <div className={styles.expense}>
                <div className={styles.expenseImage}>
                    <img className={styles.image} src="/images/expense.svg" alt="Total Expense"/>
                </div>
                <h2><CountUp start={previousExpense} end={totalExpense} duration={2} /></h2>
                <h4>Total Expenditure</h4>
            </div>

        </div>
    );
}

export default AccountSummary;