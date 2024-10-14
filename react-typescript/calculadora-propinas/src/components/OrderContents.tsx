import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}
export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumos</h2>
        <div className="space-y-3 mt-10"></div>
        {
         order.map((item) => (
            <div key={item.id} 
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="font-black justify-end ">{formatCurrency(item.price)} </p>
                </div>
                <p className="font-black">x{item.quantity} {formatCurrency(item.quantity * item.price)} </p>
              <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
              >
                X
                </button>
            </div>
         ))
        }
    </div>
  )
}
