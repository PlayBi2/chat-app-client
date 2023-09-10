import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/side-bar";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/scroll-bar.css'
const Home = () => {
  const state = useSelector((state) => state.auth);
  const nav = useNavigate();

  // useEffect(() => {
  //   if (state.isLoggin === false) {
  //     nav("/login");
  //   }
  // }, []);

  return (
    <div className="grid grid-cols-3_9 h-screen w-full overflow-hidden">
      <SideBar />
      <div className="flex flex-col">
        <Header />
        <div className="flex-1 p-2 flex flex-col">
          <div className="order-1 flex-1 max-h-[36.5rem] overflow-y-scroll">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <form action="" method="post" className="flex w-full p-2 order-9">
            <input
              type="text"
              placeholder="input message..."
              className="block flex-1 border-solid border-[1px] border-[#ccc] outline-none text-sm px-2 text-[#444] mr-2 rounded-md"
            />
            <button
              type="submit"
              className="text-white bg-sky-600 px-5 py-1 rounded-md transition-all ease-linear hover:bg-sky-700"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="p-2 border-b-[1px] border-solid border-[#ebebeb] flex items-center justify-between">
      <div>
        <h2 className="font-medium text-base mb-1">Phòng 1</h2>
        <p className="text-sm opacity-80">Đây là phòng 1</p>
      </div>
      <div className="flex items-center">
        <button className="group flex items-center text-sm mr-4 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium rounded-md opacity-80 transition-all ease-linear hover:border-sky-700 hover:text-sky-700">
          <span className="text-sm mr-1 text-[#333] transition-all ease-linear group-hover:text-sky-700">
            <FontAwesomeIcon icon={faUserPlus} />
          </span>
          <p className="text-sm">Mời</p>{" "}
        </button>
        <ul className="flex">
          <li className="-mr-2">
            <Member />
          </li>
          <li className="-mr-2">
            <Member />
          </li>
          <li>
            <Member />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Member = () => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden border-solid border-2 border-sky-800">
      <img
        src="https://phunuvietnam.mediacdn.vn/media/news/33abffcedac43a654ac7f501856bf700/anh-profile-tiet-lo-g-ve-ban-1.jpg"
        alt="member"
        title="member"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

const Message = () => {
  return (
    <div className="py-[6px]">
      <div className="flex">
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src="https://phunuvietnam.mediacdn.vn/media/news/33abffcedac43a654ac7f501856bf700/anh-profile-tiet-lo-g-ve-ban-1.jpg"
            alt="img-message"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">John</h3>
          <p className="text-xs opacity-70 -mt-1">time</p>
        </div>
      </div>
      <p className="ml-12 text-sm -mt-1">Message</p>
    </div>
  );
};

export default Home;
