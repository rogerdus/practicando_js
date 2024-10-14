import type { MenuItem } from "../types"

type menuItemProps = {
    item: MenuItem,
    addItem: (item:MenuItem) => void
}

export default function MenuItem({item, addItem} : menuItemProps) {
  return (
    <button
    className=" border-2 border-teal-700 w-full p-3 flex justify-between
    hover:bg-teal-600 hover:text-white"
    onClick={() => addItem(item)}
    >
        <p>{item.name} </p>
        <p className="font-black">${item.price} </p>
    </button>
  )
}
