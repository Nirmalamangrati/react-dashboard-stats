interface TransactionCardProps {
  statement: string;
  date: string;
  category: string;
  account: string;
  amount: number;
}

export default function TransactionCard({
  statement,
  date,
  category,
  account,
  amount,
}: TransactionCardProps) {
  return (
    <div className="grid grid-cols-5 gap-4 items-center p-3 mb-2  hover:border-2 hover:border-blue-500 rounded transition">
      <div>
        <p className="font-medium">{statement}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>

      <span className="bg-black text-white px-2 py-0.5 rounded-md text-[10px] text-center justify-self-center">
        {category}
      </span>

      <p className="text-gray-500 text-sm text-center">{account}</p>
      <p className="font-semibold text-center">Rs. {amount}</p>
    </div>
  );
}
