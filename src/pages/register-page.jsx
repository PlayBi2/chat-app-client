import { Link } from "react-router-dom";
import routes from "../routes";
import "../style/input-box.css";
const Register = () => {
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
        <form action="" method="post" className="block">
          <div className="relative my-4 z-10 input-box">
            <input
              type="text"
              className="block outline-none w-96 py-2 transition-all ease-linear px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label transition-all ease-linear">
              Tên đăng nhập
            </p>
          </div>
          <div className="relative my-4 input-box">
            <input
              type="password"
              className="block outline-none w-96 py-2 px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
            />
            <p className="absolute top-1/2 left-0 -translate-y-1/2 px-4 z-0 pointer-events-none input-label transition-all ease-linear">
              Mật khẩu
            </p>
          </div>
          <div className="relative my-4 input-box">
            <input
              type="password"
              className="block outline-none w-96 py-2 px-4 border-solid border-[1px] border-[#dddfe2] rounded-md focus:border-sky-400"
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
