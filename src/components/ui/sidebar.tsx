import {
  HomeIcon,
  CalendarIcon,
  FileIcon,
  BarChartIcon,
  ClockIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function Sidebar() {
  return (
    <div className="w-16 h-screen bg-white border-r flex flex-col items-center py-4 gap-6">
      <HomeIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      <CalendarIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      <FileIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      <BarChartIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      <ClockIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      <PersonIcon className="w-6 h-6 text-gray-700 cursor-pointer mt-auto" />
    </div>
  );
}
