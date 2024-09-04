import type { MenuItem } from "../types"

type menuItemProps = {
    item: MenuItem
}

export default function MenuItem({item} : menuItemProps) {
  return (
    <button
    className=" border-2 border-teal-700 w-full p-3 flex justify-between
    hover:bg-teal-600 hover:text-white"
    >
        <p>{item.name} </p>
        <p className="font-black">${item.price} </p>
    </button>
  )
}
