import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import "../style/input-box.css";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from "../redux/slice/auth-slice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateForm = () => {
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let check = true;
    if (email.trim() === "" || password === "") {
      alert("Các ô khônng được để trống!");
      check = false;
    } else if (!filter.test(email)) {
      alert("Hãy nhập địa chỉ email hợp lệ.\nVD: Example@gmail.com");
      check = false;
    }
    return check;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() === true) {
      const res = await axios.post("http://localhost:3001/api/v1/auth/login", {
        email,
        password,
      });
      const response = res.data;
      if (response.data) {
        localStorage.setItem("token", response.accessToken);
        console.log(response.data)
        const { password, email, name, role } = response.data;
        dispatch(SET_ACTIVE_USER({ password, email, name, role }));
        navigate("/");
        setEmail("");
        setPassword("");
      } else {
        alert(response.error);
      }
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="text-center">
        <div className="py-6">
          <h1 className="text-sky-800 font-bold text-4xl">Đăng nhập</h1>
          <p className="mt-2 text-sm font-normal">
            Nếu chưa có tài khoản,{" "}
            <Link
              to={routes.register}
              className="inline underline hover:text-sky-500 transition-all ease-linear"
            >
              Đăng ký tại đây!
            </Link>
          </p>
        </div>
        <form
          action=""
          method="post"
          className="block"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="relative my-4 z-10 input-box">
            <input
              type="text"
              className="block outline-none w-96 py-2 transition-all ease-linear px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label text-[#444] transition-all ease-linear">
              Tên đăng nhập
            </p>
          </div>
          <div className="relative my-4 input-box">
            <input
              type="password"
              className="block outline-none w-96 py-2 px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label text-[#444] transition-all ease-linear">
              Mật khẩu
            </p>
          </div>
          <button
            type="submit"
            className="mx-auto block bg-sky-500 text-white px-4 py-2 rounded-sm transition-all ease-linear hover:bg-sky-800"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
