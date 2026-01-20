import {
  HomeIcon,
  CalendarIcon,
  FileIcon,
  BarChartIcon,
  ClockIcon,
} from "@radix-ui/react-icons";

export default function Sidebar() {
  return (
    <div className="w-20 h-screen border-r flex flex-col hover:border-3 hover:border-purple-500 transition">
      <div className="flex justify-center py-4">
        <div className="font-bold text-lg">Logo</div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow gap-6">
        <HomeIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
        <CalendarIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
        <FileIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
        <BarChartIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
        <ClockIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
}
