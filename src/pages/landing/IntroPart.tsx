import logo from "assets/image/logo.png";
import imacPhone from "assets/image/imac-phone.png";

const IntroPart = () => {
  return (
    <div className="landing-intro py-[4%]">
      <div className="flex gap-5 justify-center items-center landing-header mb-[1%]">
        <img
          src={logo}
          alt="logo"
          className="logo-img cursor-pointer max-w-[133px]"
        />
        <div className="w-[65em] h-[2px] bg-white mx-[10px] max-w-[910px]" />
        <div className="rounded-full cursor-pointer text-[#116cdd] hover:text-black bg-white py-[10px] px-[25px] text-[1.6em] font-semibold">
          Let's Get Started
        </div>
      </div>
      <div className="w-[70vw] px-[15px] m-auto">
        <div className="flex items-center -mx-[15px] tracking-[2px] text-white">
          <div>
            <h1 className="text-[4.2em] font-normal mb-[30px] leading-[80px]">
              Get your government benefits up to{" "}
              <b className="font-black">6 days early!</b>
              <sup className="text-[13px] -top-[3em]">1</sup>
            </h1>
            <p className="text-white text-[2em] text-left leading-[24px] tracking-tight mb-[5%] font-semibold">
              Let's Get Started
            </p>
            <div className="flex gap-[15px] items-center">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="border-white border-[1px] h-[50px] outline-none bg-white text-black text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em]"
              />
              <div className="border-[1px] border-white bg-[#043e93] text-[22px] py-[10px] px-[16px] rounded-full h-[50px] font-bold text-white hover:text-black flex items-center cursor-pointer">
                Lets Get Started
              </div>
            </div>
          </div>
          <div>
            <img
              src={imacPhone}
              alt="imacPhone"
              className="max-w-[65vmin] mt-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPart;
