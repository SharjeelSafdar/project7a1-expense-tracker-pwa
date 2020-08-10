import React, { useContext } from 'react';
import cx from 'classnames';
// Context
import { GlobalContext } from '../../context/GlobalProvider';
// Styles
import styles from './Calculator.module.css';

const Calculator = () => {
    const { calcVisible, setCalculatorHidden, calcScreen, setCalcScreen } = useContext(GlobalContext);
    const setScreen = (key: string) => {
        setCalcScreen && setCalcScreen(key);
    };
    
    return (
        <div className={cx(styles.container, calcVisible ? styles.show : styles.hide)}>
            <div className={styles.calcHead}>
                <h3>Calculator</h3>
                {/* Pressing the 'X' button resets the calculator's visibility to 'hidden'. */}
                <button onClick={() => setCalculatorHidden && setCalculatorHidden()}>X</button>
            </div>
            
            <div className={styles.screen}>
                {calcScreen}
            </div>

            <div className={styles.keypad}>
                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('(')}>(</button>
                    <button onClick={() => setScreen(')')}>)</button>
                    <button onClick={() => setScreen('CE')}><img src="/images/backspace.svg" alt="CE"/></button>
                    <button onClick={() => setScreen('C')}>C</button>
                </div>

                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('1')}>1</button>
                    <button onClick={() => setScreen('2')}>2</button>
                    <button onClick={() => setScreen('3')}>3</button>
                    <button onClick={() => setScreen('+')}>+</button>
                </div>

                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('4')}>4</button>
                    <button onClick={() => setScreen('5')}>5</button>
                    <button onClick={() => setScreen('6')}>6</button>
                    <button onClick={() => setScreen('-')}>-</button>
                </div>
                
                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('7')}>7</button>
                    <button onClick={() => setScreen('8')}>8</button>
                    <button onClick={() => setScreen('9')}>9</button>
                    <button onClick={() => setScreen('*')}>x</button>
                </div>

                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('.')}>.</button>
                    <button onClick={() => setScreen('0')}>0</button>
                    <button onClick={() => setScreen('=')}>=</button>
                    <button onClick={() => setScreen('/')}>÷</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;