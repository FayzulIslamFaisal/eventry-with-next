import Link from "next/link";

const ActionButtons = ({ fromsDetails }) => {
  return (
    <div className={`w-full flex gap-4 mt-4 ${fromsDetails && "flex-1"}`}>
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      <Link
        href={`/payment`}
        className="w-full bg-green-600 hover:bg-green-700 text-center px-2 py-2 rounded-md shadow-sm "
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
