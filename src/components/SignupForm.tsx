import { useState } from "react";
import { SignUpSchema } from "../validation";
import { z } from "zod";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import useTaskCraftStore from "../store";

type SignupFormData = z.infer<typeof SignUpSchema>;

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const setActive = useTaskCraftStore((s) => s.setSignupActive);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({});

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validating form fields and showing errors if any
    const validation = SignUpSchema.safeParse(formData);

    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};

      validation.error.errors.forEach((error) => {
        const field = error.path[0];
        newErrors[field] = error.message;
      });

      setErrors(newErrors);
      return;
    }

    try {
      formData.password = await bcrypt.hash(
        formData.password,
        parseInt(import.meta.env.VITE_SALT)
      );

      localStorage.setItem(
        import.meta.env.VITE_LOCAL_STORAGE_USER,
        JSON.stringify(formData)
      );

      if (!!localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_USER)) {
        setActive(false);
        navigate("/sign-in");
        toast.success("User created successfully. Please Login!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="sp-grid grid grid-rows-1 grid-cols-1 lg:grid-cols-2 p-10 w-full md:w-10/12">
        <div className="gif-box hidden lg:flex rounded-lg">
          <img src="/assets/Sign-Up-Animation.gif" />
        </div>
        <div className="sp-form-box flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Sign up to TaskCraft
          </h2>
          <form
            className="flex flex-col w-80 md:w-96 gap-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label className="block text-gray-500 font-bold mb-1 pr-4">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full p-2 md:p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic mt-1 ml-3">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-500 font-bold mb-1 pr-4">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full p-2 md:p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
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
                className="appearance-none border-2 border-gray-200 rounded-xl w-full p-2 md:p-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-200 hover:border-pink-200"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic mt-1 ml-3">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="btn-signup">
              <button
                className="shadow bg-custom-navy-blue focus:shadow-outline focus:outline-none text-white font-bold p-2 md:p-4 rounded-full w-full mt-3 md:mt-5 hover:bg-custom-navy-blue-hover"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
