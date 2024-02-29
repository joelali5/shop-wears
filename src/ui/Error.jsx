import { useRouteError } from "react-router-dom";
import BackBtn from "./BackBtn";

function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center bg-slate-200">
      <div className="flex flex-col items-center space-y-7">
        <h1 className="text-2xl md:text-3xl font-bold font-roboto">
          Oops! 🛑 🛑
        </h1>
        <p className="text-xl md:text-2xl font-roboto">
          Sorry, an unexpected error has occurred!
        </p>
        <p className="text-2xl md:text-3xl">
          <i>{error.data || error.message}</i>
        </p>
        <BackBtn route={-1} />
      </div>
    </div>
  );
}

export default Error;
