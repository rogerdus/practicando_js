import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type menuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : menuItemProps) {
  return (
    <button
    className=" border-2 border-teal-700 w-full p-3 flex justify-between
    hover:bg-teal-600 hover:text-white"
    onClick={() => dispatch({type: 'add-item', payload: {item } })}
    >
        <p>{item.name} </p>
        <p className="font-black">${item.price} </p>
    </button>
  )
}
