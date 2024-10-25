import { useState, ChangeEvent, useMemo, FormEvent } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const {dispatch} = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0 ? false : true;
  }, [budget])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: 'add-budget', payload: {budget}})
  }

  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5 items-center text-blue-600">
        <label htmlFor="budget" className="text-2xl font-bold">
          Definir presupuesto
        </label>
        <input
          type="number"
          id="budget"
          className="w-full bg-white border border-gray-200 p-2 rounded-lg"
          placeholder="Definir tu presupuesto"
          onChange={handleChange}
          value={budget}
        />
      </div>
      <input
        type="submit"
        value="Definir presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2
        text-white font-black uppercase
        disabled:opacity-40"
        disabled={!isValid}
        onClick={handleSubmit}
      ></input>
    </form>
  );
}
