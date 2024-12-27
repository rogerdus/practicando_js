import { DraftExpense, Expense } from "../types"

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    {type: 'show-modal'} |
    {type: 'hide-modal'} |
    {type: 'add-expense', payload: {expense: DraftExpense}}

export type BudgetState = {
    budget: number,
    modal: boolean,
    expenses: Expense[],
}

export const initialState: BudgetState = {
    budget: 0,
    modal: false
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
): BudgetState => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'show-modal'){
        return{
            ...state,
            modal: !state.modal
        }
    }
    if(action.type === 'hide-modal'){
        return{
            ...state,
            modal: false
        }
    }
    
    if(action.type === 'add-expense'){
        return{
            ...state,
            expenses: [...state.expenses, action.payload.expense]
        }
    }

    return state
}