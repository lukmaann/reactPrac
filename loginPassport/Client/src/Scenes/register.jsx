import {useFormik} from "formik"
import { Link } from "react-router-dom";
import { register } from "../helper/helper";


const Register = () => {
  const formik=useFormik({
    initialValues:{
        username:"",
        password:"",
    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async(values)=>{

        register(values)

    }
  })
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[350px] flex items-center justify-center">
        <div className="h-[90%] w-[90%] border rounded-md p-2 flex justify-start flex-col items-center border-black">
            <h1 className="text-center text-2xl mb-3">Register</h1>
            <form onSubmit={formik.handleSubmit} className="w-[90%] ">
                <input type="text" placeholder="username" {...formik.getFieldProps("username")}  autoComplete="off" className="w-full p-2 text-xl border border-black my-2 rounded-sm focus:outline-none" />
                <input type="password" placeholder="password" {...formik.getFieldProps("password")}  className="w-full p-2 text-xl border border-black  my-2 rounded-sm focus:outline-none" />
                <button  className=" w-full border border-black my-2 py-2 hover:bg-red-300 rounded-lg shadow-lg text-lg" type="submit">Register</button>

            </form>

            <Link to={"/"} className="text-red-500 text-xl">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
