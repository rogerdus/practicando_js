import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {
  ///state
  ///use efect siempre es un callback que depende de como lo declares va a funcionar
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  function addToCart(item){
    const itemExist = cart.findIndex(guitar => guitar.id === item.id)
    console.log("agregando");
    if(itemExist >= 0){
      const updateCart = [...cart]
      updateCart[itemExist].quantity++
      setCart(updateCart)
    }else{
      setCart([...cart, {...item, quantity: 1}])
    }
  }

  useEffect(() => {
    setData(db)
  }, [])

  return (
    <>
      <Header
        cart={cart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
            key={guitar.id}
            guitar={guitar}
            addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
