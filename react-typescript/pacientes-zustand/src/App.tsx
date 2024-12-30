import PatienForm from "./components/PatienForm"
import PatiensList from "./components/PatiensList"

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl text-center">
          Seguimiento Pacientes
        <span className="text-indigo-600"> Veterinaria</span>
         </h1>
         <div className="mt-12 md:flex">
          <PatienForm />
          <PatiensList />
         </div>
      </div>
    </>
  )
}

export default App
