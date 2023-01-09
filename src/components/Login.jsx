import {useFormik} from "formik";
import "../App.css";
import {schema} from "../schemas";
import {Link} from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log("submitted");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Login = () => {
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: schema,
      onSubmit,
    });

  console.log(errors);

  return (
    <div className="flex justify-center items-center  min-h-screen bg-[#f7f7f7]">
      <form
        onSubmit={handleSubmit}
        action="./userpage"
        method="post"
        className="bg-[#fff] p-10 shadow shadow-[#040c16] w-96 md:w-2/6"
      >
        <div className="pb-10">
          <p className="text-3xl font-bold text-[#213F7D]">Welcome!</p>
          <p>Enter login details </p>
        </div>
        <div className="pb-4">
          <label htmlFor="email"></label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            id="email"
            placeholder="Email"
            className={
              errors.email && touched.email
                ? " input-error bg-[#fff] border-2 rounded p-2 md:p-4 w-full"
                : "bg-[#fff] border-2 rounded p-2 md:p-4 w-full"
            }
          />
          {errors.email && touched.email && (
            <p className="text-red-600 text-xs ">{errors.email}</p>
          )}
        </div>

        <div className="pb-4">
          <label htmlFor="password"></label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            id="password"
            placeholder="Password"
            className={
              errors.password && touched.password
                ? " input-error bg-[#fff] border-2 rounded p-2 md:p-4 w-full"
                : "bg-[#fff] border-2 rounded p-2 md:p-4 w-full"
            }
          />
          {errors.password && touched.password && (
            <p className="text-red-600 text-xs ">{errors.password}</p>
          )}
        </div>
        <div className="pb-4 text-[#39CDCC]">
          <p>
            <a href="./Login.jsx">forget password?</a>
          </p>
        </div>

        <Link to="./userpage">
          <button
            type="submit"
            className="w-full bg-[#39CDCC] text-[#fff] p-4 rounded"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Login;
