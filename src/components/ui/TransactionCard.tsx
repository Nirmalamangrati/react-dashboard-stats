interface TransactionCardProps {
  statement: string;
  date: string;
  category: string;
  account: string;
  amount: number;
}

export default function TransactionCard({ statement, date, category, account, amount }: TransactionCardProps) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-3 rounded mb-2">
      <div>
        <p className="font-medium">{statement}</p>
        <p className="text-gray-500 text-sm">{date} | {account}</p>
        <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">{category}</span>
      </div>
      <p className="font-semibold">Rs. {amount}</p>
    </div>
  );
}
