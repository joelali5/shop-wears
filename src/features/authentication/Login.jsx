import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/apiAuth";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(formData) {
    const { email, password } = formData;

    try {
      setIsLoading(true);
      await login(email, password);
      setIsLoading(false);
      reset();
      navigate("/checkout");
    } catch (error) {
      toast.error("Provided email or password is incorrect!");
    }
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
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-serif"
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
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-serif"
          id="password"
          {...register("password", {
            required: "The password field cannot be empty",
          })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-2">
          {errors.password?.message}
        </p>

        <button
          className="bg-primary rounded-lg px-1 py-2 mb-2 text-stone-200 font-bold font-serif"
          disabled={isLoading}
        >
          {isLoading ? <SpinnerMini /> : "Login"}
        </button>
        <p className="font-roboto text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-bold font-serif">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
