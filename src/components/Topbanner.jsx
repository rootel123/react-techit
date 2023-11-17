import { useEffect, useState } from "react";
import Closeicon from "../icons/Closeicon";

const Topbanner = () => {
  const [isClose, setIsClose] = useState(false);

  const onClickClose = () => {
    setIsClose(true);

    localStorage.setItem("topBannerClose", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("topBannerClose") === "true") {
      setIsClose(true);
    }
  }, []);

  return (
    <div className={`h-[42px] bg-purple-100 ${isClose && "hidden"}`}>
      <div className="container flex justify-between">
        <div className="flex items-center">
          <span className="font-semibold">
            앱 스쿨 사전설명회로 궁금증 해결하기
          </span>
          <img
            className="w-[52px]"
            src="./images/top_banner.webp"
            alt="top_banner"
          />
        </div>
        <button className="w-5" onClick={onClickClose}>
          <Closeicon />
        </button>
      </div>
    </div>
  );
};

export default Topbanner;
