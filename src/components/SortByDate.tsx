import { FaSort } from "react-icons/fa6";

const SortByDate = () => {
  return (
    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
      <span className="flex gap-2 items-center">
        <p>Sort task by date</p>
        <p>
          <FaSort fontSize={15} />
        </p>
      </span>
    </button>
  );
};

export default SortByDate;
