interface AccountCardProps {
  name: string;
  balance: number;
  expense: number;
  logo?: string;
}

export default function AccountCard({ name, balance, expense, logo }: AccountCardProps) {
  return (
    <div className="bg-white shadow rounded p-4 w-40 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        {logo && <img src={logo} alt={name} className="w-6 h-6" />}
      </div>
      <p className="text-gray-500 text-sm">Balance: Rs. {balance}</p>
      <p className="text-gray-400 text-sm">Expenses: Rs. {expense}</p>
    </div>
  );
}
