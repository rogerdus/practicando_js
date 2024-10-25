import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label: string;
  amount: number;
};

function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-300 font-bold">
      {label} : <span className="text-black">{formatCurrency(amount)}</span>
    </p>
  );
}

export default AmountDisplay;
