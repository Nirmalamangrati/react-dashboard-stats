import Sidebar from "@/components/ui/sidebar";
import AccountCard from "@/components/AccountCard";
import TransactionCard from "@/components/ui/TransactionCard";
import StatsChart from "@/components/ui/StatsChart";
import { SelectDemo } from "@/components/SelectDemo";
import { BellIcon, HomeIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-0 m-0">
        <header className="group flex justify-between items-center p-3  border-b border-gray-300 hover:border-3 hover:border-purple-500 transition">
          <h1 className="text-xl font-bold group-hover:border group-hover:border-purple-500 group-hover:border-dashed px-2 py-1 ">
            Good Morning, Jane.
          </h1>

          <div className="flex items-center gap-8 group-hover:border group-hover:border-purple-500 group-hover:border-dashed px-2 py-1 ">
            <p className="text-sm font-medium font-bold">
              Friday, 19 Jan, 2024
            </p>
            <BellIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
            <img
              src="/pic.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="grid grid-cols-1">
                <div className="flex items-start mt-8 p-4 mb-6 w-full  ">
                  <div className="  hover:border-3 hover:border-blue-400 transition">
                    <h2 className=" text-lg font-bold">Savings Rs. 23,000</h2>
                    <p className="text-gray-400 text-xs">
                      Savings for this month so far
                    </p>
                  </div>

                  <div className="ml-auto p-4 items-right w-full hover:border-3 hover:border-blue-400 transition">
                    <span className="font-bold">Top Expenses</span>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4].map((_, i) => (
                        <div
                          key={i}
                          className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center relative"
                        >
                          <div className="absolute inset-0 w-9 h-9 rounded-full border-3 border-orange-500 border-t-transparent border-l-transparent" />
                          <HomeIcon className="w-9 h-9 rounded-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ya 2 ota div maa matrae hover hunxa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 p-4 w-full hover:border-3 hover:border-blue-400 transition ">
                  <div className="p-4 w-500 ">
                    <p className="text-gray-500 text-sm">Total Balance</p>
                    <h2 className="text-lg font-bold">Rs. 34,000</h2>
                  </div>

                  <div className="p-4 w-500 ">
                    <p className="text-gray-500 text-sm">Total Expenses</p>
                    <h2 className="text-lg font-bold">Rs. 17,000</h2>
                  </div>

                  <div className="p-4 w-500">
                    <p className="text-gray-500 text-sm">
                      Total Balance Last 6 months
                    </p>
                    <h2 className="text-lg font-bold">Rs. 17,000</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-5  hover:border-3 hover:border-blue-400 transition">
              <div className="mb-4">
                <SelectDemo />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <AccountCard name="NIBL" balance={43000} expense={21000} />
                <AccountCard name="eSewa" balance={8000} expense={2000} />
                <AccountCard name="Global IME" balance={6000} expense={1200} />
                <AccountCard name="Khalti" balance={3000} expense={500} />
              </div>
            </div>

            <div className=" p-5 ">
              <h2 className="font-semibold mb-4 cursor-pointer hover:underline hover:border-3 hover:decoration-blue-400">
                Latest Transactions
              </h2>

              <div className="grid grid-cols-5 gap-4 pb-2 mb-3  text-sm font-semibold text-center text-gray-600">
                <span className="cursor-pointer hover:underline hover:decoration-blue-500">
                  Statement
                </span>
                <span className="cursor-pointer hover:underline hover:decoration-blue-500">
                  Category
                </span>
                <span className="cursor-pointer hover:underline hover:decoration-blue-500">
                  Account
                </span>
                <span className="cursor-pointer hover:underline hover:decoration-blue-500">
                  Amount
                </span>
              </div>

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
          </div>

          <div className="flex flex-col gap-6">
            <div className=" p-5 ">
              <h2 className="font-semibold mb-3">Statistics Last 6 months</h2>
              <StatsChart />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className=" p-4 hover:border-3 hover:border-blue-400 transition">
                <p className="text-gray-500 text-sm">Income</p>
                <h2 className="font-bold text-lg">Rs. 17,000</h2>
              </div>

              <div className=" p-4  hover:border-3 hover:border-blue-400 transition">
                <p className="text-gray-500 text-sm">Expenses</p>
                <h2 className="font-bold text-lg">Rs. 11,000</h2>
              </div>
            </div>

            <div className=" p-5 hover:border-3 hover:border-blue-400 transition">
              <h2 className="font-bold text-lg mb-4">Scheduled Expenses</h2>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center ">
                  <div>
                    <p className="font-medium">Bike EMI Payment</p>
                    <p className="text-gray-500 text-sm">28th Jan</p>
                  </div>
                  <p className="font-bold text-gray-600">Rs. 5,600</p>
                </div>

                <div className="flex justify-between items-center ">
                  <div>
                    <p className="font-medium">House Rent</p>
                    <p className="text-gray-500 text-sm">29th Jan</p>
                  </div>
                  <p className="font-bold text-gray-600">Rs. 25,000</p>
                </div>

                <div className="flex justify-between items-center ">
                  <div>
                    <p className="font-medium">Finance Loan</p>
                    <p className="text-gray-500 text-sm">30th Jan</p>
                  </div>
                  <p className="font-bold text-gray-600">Rs. 5,000</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Insurance</p>
                    <p className="text-gray-500 text-sm">30th Jan</p>
                  </div>
                  <p className="font-bold text-gray-600">Rs. 15,600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
