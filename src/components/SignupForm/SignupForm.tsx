const SignupForm = () => {
  return (
    <div className="sp-grid grid grid-rows-1 grid-cols-1 lg:grid-cols-2 p-10 w-full md:w-10/12">
      <div className="gif-box hidden lg:flex rounded-lg">
        <img src="/assets/Sign-Up-Animation.gif" />
      </div>
      <div className="sp-form-box flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-12">Sign up to TaskCraft</h2>
        <form className="flex flex-col w-80 md:w-96 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold mb-1 pr-4"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="appearance-none border-2 border-gray-200 rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold mb-1 pr-4"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="appearance-none border-2 border-gray-200 rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-500 font-bold mb-1 pr-4"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="appearance-none border-2 border-gray-200 rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
            />
          </div>
          <div className="btn-signup">
            <button
              className="shadow bg-custom-navy-blue focus:shadow-outline focus:outline-none text-white font-bold p-4 rounded-full w-full mt-5 hover:bg-custom-navy-blue-hover"
              type="button"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
