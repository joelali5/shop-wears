function SignUp() {
  return (
    <div className="flex flex-col w-[375px] mx-auto">
      <h2 className="self-center font-semibold font-roboto text-xl mb-5">
        Signup for an account
      </h2>
      <form className="flex flex-col">
        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          type="email"
          id="email"
        />
        <label htmlFor="username" className="mb-2">
          Username:
        </label>
        <input
          type="text"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          id="username"
        />
        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          id="password"
        />
        <label htmlFor="firstname" className="mb-2">
          First name:
        </label>
        <input
          type="text"
          id="firstname"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />
        <label htmlFor="lastname" className="mb-2">
          Last name:
        </label>
        <input
          type="text"
          id="lastname"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />

        <label htmlFor="city" className="mb-2">
          City:
        </label>
        <input
          type="text"
          id="city"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />
        <label htmlFor="street" className="mb-2">
          Street:
        </label>
        <input
          type="text"
          id="street"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />
        <label htmlFor="houseNumber" className="mb-2">
          House number:
        </label>
        <input
          type="number"
          id="houseNumber"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />

        <label htmlFor="zip" className="mb-2">
          Zipcode:
        </label>
        <input
          id="zip"
          type="text"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />

        <label htmlFor="tel" className="mb-2">
          Tel:
        </label>
        <input
          type="text"
          id="tel"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
        />

        <button className="bg-primary rounded-lg px-1 py-2 mb-2 text-stone-200 font-bold font-mono">
          sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
