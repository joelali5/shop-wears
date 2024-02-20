function Login() {
  return (
    <div className="flex flex-col w-[375px] mx-auto">
      <h2 className="self-center font-semibold font-roboto text-xl mb-5">
        Sign in to your account
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

        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          className="border-[1px] border-stone-200 mb-4 rounded-lg px-1 py-1 focus:outline-0 font-mono"
          id="password"
        />

        <button className="bg-primary rounded-lg px-1 py-2 mb-2 text-stone-200 font-bold font-mono">
          sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
