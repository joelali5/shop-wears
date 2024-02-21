import { useNavigate } from "react-router-dom";

function BackBtn({ route }) {
  const navigate = useNavigate();
  return (
    <div className="sm:w-3/5 mx-auto py-4 ml-2 sm:ml-[300px]">
      <button onClick={() => navigate(route)} className="text-blue-400">
        &larr; back
      </button>
    </div>
  );
}

export default BackBtn;
