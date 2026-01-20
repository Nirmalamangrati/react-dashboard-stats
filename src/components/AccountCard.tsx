interface AccountCardProps {
  name: string;
  balance: number;
  expense: number;
  logo?: string;
}

export default function AccountCard({
  name,
  balance,
  expense,
  logo,
}: AccountCardProps) {
  return (
    <div className="border border-black p-2  flex flex-col gap-0 items-start text-left">
      <div className="flex items-center gap-4">
        <h3 className="font-semibold text-sm gap-8">{name}</h3>
        {logo && <img src={logo} alt={name} className="w-5 h-5" />}
      </div>
      <div className="mt-4 items-start text-left">
        <p className="font-bold text-xs "> Rs. {balance}</p>
        <p className="text-gray-500 text-xs"> Rs. {expense}</p>
      </div>
    </div>
  );
}
