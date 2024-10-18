import { useState, ChangeEvent,FormEvent,Dispatch, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { categories } from "../data/categories";
import { Activity } from '../types/index';
import { ActivityActions, ActivityState } from '../reducers/activity-reducer';

type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}

export default function Form({dispatch, state} : FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);

  useEffect(() => {
    if(state.activeId){
      const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
      setActivity(selectedActivity)
    }
  },[state.activeId])

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value ,
    })
  }

  const isValidActivity = () => {
    const {name, calories} = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: 'save-activity', payload: {newActivity: activity}})
    setActivity({
        ...initialState,
        id: uuidv4(),
    })
  }

  return (
    <form className="space-y-5 bg-white shadow-md p-10 rounded-lg"
    onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria: </label>
        <select
          className="border border-slate-200 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name">Actividad: </label>
        <input
          type="text"
          className="border border-slate-200 p-2 rounded-lg"
          id="name"
          placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories">Calorias: </label>
        <input
          type="number"
          className="border border-slate-200 p-2 rounded-lg"
          id="calories"
          placeholder="Ej. 300 o 500 "
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
        disabled={!isValidActivity()}
      />
    </form>
  );
}

