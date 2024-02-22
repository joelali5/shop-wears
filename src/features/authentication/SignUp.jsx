import { useForm } from "react-hook-form";
import { supabase } from "../../helper/supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(formData) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
            firstname: formData.firstname,
            lastname: formData.lastname,
            city: formData.city,
            street: formData.street,
            houseNumber: formData.houseNumber,
            postcode: formData.postcode,
          },
        },
      });
      reset();
      toast.success("Account created successfully.");
      navigate("/checkout");
    } catch (error) {
      toast.error("There was error creating your account");
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
        <label htmlFor="username" className="mb-2">
          Username:
        </label>
        <input
          type="text"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          id="username"
          {...register("username", { required: "username cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.username?.message}
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
        <label htmlFor="firstname" className="mb-2">
          First name:
        </label>
        <input
          type="text"
          id="firstname"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("firstname", { required: "first name cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.firstname?.message}
        </p>
        <label htmlFor="lastname" className="mb-2">
          Last name:
        </label>
        <input
          type="text"
          id="lastname"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("lastname", { required: "last name cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.lastname?.message}
        </p>

        <label htmlFor="city" className="mb-2">
          City:
        </label>
        <input
          type="text"
          id="city"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("city", { required: "city cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.city?.message}
        </p>
        <label htmlFor="street" className="mb-2">
          Street:
        </label>
        <input
          type="text"
          id="street"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("street", { required: "street cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.street?.message}
        </p>
        <label htmlFor="houseNumber" className="mb-2">
          House number:
        </label>
        <input
          type="number"
          id="houseNumber"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("houseNumber", {
            required: "house number cannot be empty",
          })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.houseNumber?.message}
        </p>

        <label htmlFor="postcode" className="mb-2">
          Postcode:
        </label>
        <input
          id="postcode"
          type="text"
          className="border-[1px] border-stone-200 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          {...register("postcode", { required: "Postcode cannot be empty" })}
        />
        <p className="text-xs sm:text-sm text-red-500 mb-3">
          {errors.postcode?.message}
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
      </form>
    </div>
  );
}

export default SignUp;
