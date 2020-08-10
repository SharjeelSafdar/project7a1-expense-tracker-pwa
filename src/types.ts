export type Transaction = {
    id: number;
    description: string;
    amount: number;
    date: Date;
}

export type State = {
    transactions: Transaction[];
    description: string;
    date: string;
    time: string;
    amount: string;
    currentBalance: number;
    totalIncome: number;
    totalExpense: number;
    previousBalance: number;
    previousIncome: number;
    previousExpense: number;
    calcVisible: boolean;
    calcScreen: string;
    setCalcScreen?: (char: string) => void;
    addTransaction?: (transaction: Transaction) => void;
    editTransaction?: (id: number) => void;
    deleteTransaction?: (id: number) => void;
    setCalculatorVisible?: () => void;
    setCalculatorHidden?: () => void;
    setDescription?: (description: string) => void;
    setDate?: (date: string) => void;
    setTime?: (time: string) => void;
    setAmount?: (amount: string) => void;
}

type AddTransaction = { 
    readonly type: 'ADD_TRANSACTION';
    readonly payload: Transaction;
}
type EditTransaction = {
    readonly type: 'EDIT_TRANSACTION';
    readonly payload: number;
}
type DeleteTransaction = {
    readonly type: 'DELETE_TRANSACTION';
    readonly payload: number;
}
type SetCalculatorVisible = {
    readonly type: 'SET_CALCULATOR_VISIBLE';
    readonly payload: null;
}
type SetCalculatorHidden = {
    readonly type: 'SET_CALCULATOR_HIDDEN';
    readonly payload: null;
}
type SetDescription = {
    readonly type: 'SET_DESCRIPTION';
    readonly payload: string;
}
type SetDate = {
    readonly type: 'SET_DATE';
    readonly payload: string;
}
type SetTime = {
    readonly type: 'SET_TIME';
    readonly payload: string;
}
type SetAmount = {
    readonly type: 'SET_AMOUNT';
    readonly payload: string;
}
type SetCalcScreen = {
    readonly type: 'SET_CALCULATOR_SCREEN';
    readonly payload: string;
}

export type Actions = AddTransaction
                    | EditTransaction 
                    | DeleteTransaction 
                    | SetCalculatorVisible 
                    | SetCalculatorHidden
                    | SetDescription
                    | SetDate
                    | SetTime
                    | SetAmount
                    | SetCalcScreen;

// export type Context = State | Actions;