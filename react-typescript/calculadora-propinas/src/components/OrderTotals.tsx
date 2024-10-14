import { useCallback } from "react";
import { formatCurrency } from '../helpers/index';
import { OrderItem } from "../types";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
};

function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price),0) , [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total and Tips</h2>
        <p>
          Subtotal to pay: {' '} <span className="font-black">{formatCurrency(subtotalAmount())}</span>
        </p>
        <p>
          Tip: {' '} <span className="font-black"> {formatCurrency(tipAmount())}  </span>
        </p>
        <p>
          Total to pay: {' '} <span className="font-black"> {formatCurrency(totalAmount())} </span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount() === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}

export default OrderTotals;
