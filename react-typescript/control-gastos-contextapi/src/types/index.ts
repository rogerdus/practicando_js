export type Expense = {
    id: string;
    expenseName: string;
    date: Value;
    amount: string;
    category: string;
}

export type DraftExpense = Omit<Expense, 'id'>;

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
    id: string;
    name: string;
    icon: string;
}