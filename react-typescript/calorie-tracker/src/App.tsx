import { useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {
  const [state,dispatch] = useReducer(activityReducer, initialState)
  const canRestarApp = () => useMemo(() =>  state.activities.length,[state.activities])

  return (
    <>
    <header className="bg-slate-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contador de calorias
        </h1>
        <button className="bg-slate-300 hover:bg-slate-200 text-black
        font-bold py-2 px-4 rounded disabled:opacity-10"
         disabled={!canRestarApp()}
         onClick={() => dispatch({type: 'restart-app'})}
        >
          Reiniciar App
        </button>
      </div>
    </header>
    <section className="bg-slate-500 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <Form
         dispatch={dispatch}
         state={state}
        />
      </div>
    </section>
    <section className="bg-gray-800 py-10" >
      <div className="max-w-4xl mx-auto">
        <CalorieTracker
          activities={state.activities}
        />
      </div>
    </section>
    {/* Listado de actividades */}
    <section className="p-10 mx-auto max-w-4xl">
      <ActivityList
        activities={state.activities}
        dispatch={dispatch}
      />
    </section>
  </>
  )
}

export default App
