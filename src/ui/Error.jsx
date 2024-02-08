import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center bg-slate-200">
      <h1 className="text-2xl md:text-3xl font-bold font-roboto">
        Oops! 🛑 🛑
      </h1>
      <p className="text-xl md:text-2xl font-roboto">
        Sorry, an unexpected error has occurred!
      </p>
      <p className="text-2xl md:text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
