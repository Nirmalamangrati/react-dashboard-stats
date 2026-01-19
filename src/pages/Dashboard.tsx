import Sidebar from "@/components/ui/sidebar";
import AccountCard from "@/components/AccountCard";
import TransactionCard from "@/components/ui/TransactionCard";
import StatsChart from "@/components/ui/StatsChart";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-0">
        <header className="group flex justify-between items-center mb-0 p-3 hover:border-2 hover:border-purple-500">
          <h1 className="text-xl font-bold px-1 py-0.5 group-hover:border group-hover:border-purple-500 group-hover:border-dashed">
            Good Morning, Jane.
          </h1>
          <div className="flex items-center gap-2 group-hover:border group-hover:border-purple-500 group-hover:border-dashed px-1 py-0.5">
            <p className="text-sm font-medium   ">Friday, 19 Jan, 2024</p>
            <img
              src="/images/pic.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover  "
            />
          </div>
        </header>

        <div className="mb-6">
          <p className="text-lg font-semibold">Savings Rs. 23,000</p>
          <p className="text-gray-400 text-sm">Savings for this month so far</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <AccountCard name="NIBL" balance={43000} expense={21000} />
          <AccountCard name="eSewa" balance={8000} expense={2000} />
          <AccountCard name="Global IME" balance={6000} expense={1200} />
          <AccountCard name="Khalti" balance={3000} expense={500} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold mb-3">Latest Transactions</h2>
            <TransactionCard
              statement="Family dinner at Thasang Thakali"
              date="17th Jan, 2024"
              category="Food"
              account="NIBL"
              amount={7000}
            />
            <TransactionCard
              statement="Bike Repair"
              date="17th Jan, 2024"
              category="Transport"
              account="NIBL"
              amount={2000}
            />
            <TransactionCard
              statement="Tea break"
              date="17th Jan, 2024"
              category="Food"
              account="eSewa"
              amount={600}
            />
          </div>

          <div>
            <h2 className="font-semibold mb-3">Statistics Last 6 months</h2>
            <StatsChart />
          </div>
        </div>
      </div>
    </div>
  );
}
