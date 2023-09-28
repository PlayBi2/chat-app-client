import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER } from "../redux/slice/auth-slice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(REMOVE_ACTIVE_USER());
    localStorage.removeItem("token");
    navigate('/login')
  };

  return (
    <div className="border-r-[1px] border-solid border-[#ebebeb] bg-purple-600 text-white">
      <div className="px-4 py-1 flex justify-between items-center border-b-[1px] border-solid border-[#ebebeb]">
        <Avatar />
        <button
          className="block text-sm font-medium border-solid border-2 border-slate-200 px-4 py-2 rounded-md transition-all ease-linear hover:border-sky-200 hover:text-sky-200"
          onClick={() => handleLogout()}
        >
          Đăng xuất
        </button>
      </div>
      <div className="px-4">
        <div
          className="flex items-center justify-between py-2 cursor-pointer select-none"
          onClick={() => setOpen((pre) => !pre)}
        >
          <h2 className="text-base font-medium">Danh sách phòng</h2>
          <span
            className={`text-lg transition-all ease-linear duration-300 ${
              open && "rotate-180"
            }`}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <ul
          className={`overflow-hidden transition-all ease-linear ${
            !open && "h-0"
          }`}
        >
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
        </ul>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="flex items-center py-2 select-none">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          src="https://phunuvietnam.mediacdn.vn/media/news/33abffcedac43a654ac7f501856bf700/anh-profile-tiet-lo-g-ve-ban-1.jpg"
          alt="user"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-sm font-medium ml-2">John</p>
    </div>
  );
};

const Room = () => {
  return (
    <div className="flex group justify-between py-2 px-2 transition-all ease-linear cursor-pointer rounded-md text-white text-sm hover:bg-[rgba(0,0,0,0.1)]">
      <p className="group-hover:text-blue-400 transition-all ease-linear">
        Phòng 1
      </p>
      <div>
        <button
          className="px-1 mx-1 transition-all ease-linear hover:text-yellow-400"
          title="Sửa tên phòng"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="px-1 transition-all ease-linear hover:text-red-800"
          title="Thoát khỏi phòng chat"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
