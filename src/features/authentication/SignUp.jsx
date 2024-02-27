import { useForm } from "react-hook-form";
import { supabase } from "../../helper/supabaseClient";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(formData) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          fullname: formData.fullname,
          address: formData.address,
          phone: formData.phone,
        },
      },
    });
    reset();
    toast.success("Account created successfully.");
    console.log(data);
    navigate("/login");

    if (error) {
      toast.error("User already exists. Please login.");
      navigate("/login");
    }
  }

  return (
    <div className="flex flex-col w-[375px] mx-auto">
      <h2 className="self-center font-semibold font-roboto text-xl mb-5">
        Signup for an account
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          type="email"
          id="email"
          {...register("email", { required: "email cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.email?.message}
        </p>

        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          id="password"
          {...register("password", { required: "password cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.password?.message}
        </p>
        <label htmlFor="fullname" className="mb-2">
          Fullname:
        </label>
        <input
          type="text"
          id="fullname"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("fullname", { required: "Full name cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.fullname?.message}
        </p>

        <label htmlFor="address" className="mb-2">
          Address:
        </label>
        <input
          type="text"
          id="address"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("address", { required: "address cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.address?.message}
        </p>

        <label htmlFor="phone" className="mb-2">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("phone", { required: "Phone cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.phone?.message}
        </p>

        <button className="bg-primary rounded-lg px-1 py-2 mb-2 text-stone-200 font-bold font-mono">
          sign up
        </button>
        <p className="font-roboto text-sm">
          Already registered?{" "}
          <Link to="/login" className="text-blue-500 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
