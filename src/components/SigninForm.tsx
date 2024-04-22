import { useState } from "react";
import { z } from "zod";
import { SignInSchema } from "../validation";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

type SignInFormData = z.infer<typeof SignInSchema>;

const SigninForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({});

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validating form fields and showing errors if any
    const validation = SignInSchema.safeParse(formData);

    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};

      validation.error.errors.forEach((error) => {
        const field = error.path[0];
        newErrors[field] = error.message;
      });

      setErrors(newErrors);
      return;
    }

    const storedUser = localStorage.getItem(
      import.meta.env.VITE_LOCAL_STORAGE_USER
    );

    if (!storedUser) {
      return toast.error("Please register first to log in!");
    }

    let user;
    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user data:", error);
      return toast.error("Error parsing user data. Please try again later.");
    }

    if (formData.email !== user.email)
      return toast.error("Invalid email. This user is not registered!");

    const isValid = await bcrypt.compare(formData.password, user.password);

    if (!isValid) return toast.error("Invalid password!");

    localStorage.setItem(
      import.meta.env.VITE_AUTH_TOKEN_KEY,
      import.meta.env.VITE_AUTH_TOKEN_VALUE
    );
    navigate("/dashboard");
    toast.success("User successfully logged in!");
  };
  return (
    <div className="sp-grid grid grid-rows-1 grid-cols-1 lg:grid-cols-2 p-10 w-full md:w-10/12">
      <div className="gif-box  hidden lg:block rounded-lg">
        <img src="/assets/Sign-In-Animation.gif" />
      </div>
      <div className="sp-form-box  flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-12">Sign in to TaskCraft</h2>
        <form
          className="flex flex-col w-80 md:w-96 gap-5"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label className="block text-gray-500 font-bold mb-1 pr-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none border-2 border-gray-200 rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1 ml-3">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-500 font-bold mb-1 pr-4">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none border-2 border-gray-200 rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
            />
          </div>
          <div className="btn-signup">
            <button
              className="shadow bg-custom-navy-blue focus:shadow-outline focus:outline-none text-white font-bold p-4 rounded-full w-full mt-5 hover:bg-custom-navy-blue-hover"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
