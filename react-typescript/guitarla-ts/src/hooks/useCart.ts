import { useEffect,useState } from 'react'
import { db } from "../data/db"
import { useMemo } from 'react'
import type { CartItem , Guitar, GuitarID} from '../types/types'

export const useCart = () => {

    const initialCart = () : CartItem[] =>{
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
      const [data] = useState(db)
      const [cart, setCart] = useState(initialCart)
      const MAX_ITEMS = 5

      ///use efect siempre es un callback que depende de como lo declares va a funcionar
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

      function addToCart(item: Guitar){
        const itemExist = cart.findIndex(guitar => guitar.id === item.id)
        console.log("agregando");
        if(itemExist >= 0){
          if(cart[itemExist].quantity >= MAX_ITEMS) return
          const updateCart = [...cart]
          updateCart[itemExist].quantity++
          setCart(updateCart)
        }else{
          //item.quantity = 1
          const newItem : CartItem = {...item, quantity: 1}
          //nreItem.quantity = 1
          setCart([...cart, newItem])
        }
      }

      function removeFromCart(id: GuitarID) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
      }

      function increaseQuantity(id: GuitarID) {
        const updatedCart = cart.map(item => {
          if (item.id === id && item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
        setCart(updatedCart)
      }

      function decreaseQuantity(id: GuitarID) {
        const updatedCart = cart.map(item => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
        setCart(updatedCart)
      }
      function clearCart() {
        setCart([])
      }

      const isEmpty = useMemo(() => cart.length === 0, [cart]);
      const cartTotal = useMemo( () => cart.reduce((total, item) => total + (item.quantity * item.price) ,0),[cart])

      return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
      }
}
