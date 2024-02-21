import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { email, password } = data;
    console.log(email, password);
  }
  return (
    <div className="flex flex-col w-[375px] mx-auto">
      <h2 className="self-center font-semibold font-roboto text-xl mb-5">
        Sign in to your account
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          type="email"
          id="email"
          {...register("email", { required: "Email field cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-2">
          {errors.email?.message}
        </p>

        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          id="password"
          {...register("password", {
            required: "The password field cannot be empty",
          })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-2">
          {errors.password?.message}
        </p>

        <button className="bg-primary rounded-lg px-1 py-2 mb-2 text-stone-200 font-bold font-mono">
          sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
