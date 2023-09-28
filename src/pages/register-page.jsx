import { Link } from "react-router-dom";
import routes from "../routes";
import "../style/input-box.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const submitForm = async () => {
    if (validateForm() === true) {
      const res = await axios.post(
        `http://localhost:3001/api/v1/auth/register`,
        {
          email,
          password,
          name,
        }
      );
      if (res.data.message) {
        alert("Đăng kí tài khoản thành công!");
      } else {
        alert("Tài khoản đã tồn tại!");
      }
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
    };
  }, []);

  const validateForm = () => {
    let check = true;
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (
      email.trim() === "" ||
      name.trim() === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Các ô không được để trống!");
      check = false;
    } else if (!filter.test(email)) {
      alert("Hãy nhập địa chỉ email hợp lệ.\nVD: Example@gmail.com");
      check = false;
    } else if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      check = false;
    }
    return check;
  };

  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className=" py-6 text-center">
        <div>
          <h1 className="text-sky-800 font-bold text-4xl">Đăng ký</h1>
          <p className="mt-2 text-sm font-normal">
            Nếu đã có tài khoản,{" "}
            <Link
              to={routes.login}
              className="inline underline hover:text-sky-500 transition-all ease-linear"
            >
              Đăng nhập tại đây!
            </Link>
          </p>
        </div>
        <form
          action="http://localhost:3001/api/v1/auth/register"
          method="post"
          className="block"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <div className="relative my-4 z-10 input-box">
            <input
              type="text"
              className="block outline-none w-96 py-2 transition-all ease-linear px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label transition-all ease-linear">
              Email
            </p>
          </div>
          <div className="relative my-4 z-10 input-box">
            <input
              type="text"
              className="block outline-none w-96 py-2 transition-all ease-linear px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label transition-all ease-linear">
              Tên người dùng
            </p>
          </div>
          <div className="relative my-4 input-box">
            <input
              type="password"
              className="block outline-none w-96 py-2 px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label transition-all ease-linear">
              Mật khẩu
            </p>
          </div>
          <div className="relative my-4 input-box">
            <input
              type="password"
              className="block outline-none w-96 py-2 px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label transition-all ease-linear">
              Nhập lại mật khẩu
            </p>
          </div>
          <button
            type="submit"
            className="mx-auto block bg-sky-500 text-white px-4 py-2 rounded-sm transition-all ease-linear hover:bg-sky-800"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
