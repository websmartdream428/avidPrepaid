import { useContext } from "react";
import InputMask from "react-input-mask";
import logo from "assets/image/logo.png";
import imacPhone from "assets/image/imac-phone.png";
import Container from "components/Container";
import PhoneNumberContext from "context/PhoneNumber";
import PhoneCodeContext from "context/PhoneCode";

const IntroPart = () => {
  const { phoneNumber, setPhoneNumber } = useContext<any>(PhoneNumberContext);
  const { setPhoneCode } = useContext<any>(PhoneCodeContext);

  const handleClick = () => {
    if (phoneNumber === "" || phoneNumber.indexOf("_") > -1) {
      setPhoneNumber("");
    } else {
      setPhoneCode(true);
      window.location.href = "#phonecode";
    }
  };

  return (
    <div className="landing-intro py-[4%]">
      <div className="max-w-[1400px] w-[90%] lg:flex-row flex-col flex justify-center items-center landing-header mb-4 m-auto">
        <img
          src={logo}
          alt="logo"
          className="logo-img cursor-pointer max-w-[133px]"
        />
        <div className="w-[65em] h-[2px] bg-white mx-[10px]" />
        <div className="rounded-full cursor-pointer text-[#116cdd] leading-tight hover:text-black bg-white py-[10px] px-[25px] text-[1.6em] font-semibold whitespace-nowrap">
          Let's Get Started
        </div>
      </div>
      <Container>
        <div className="flex items-center m-auto tracking-[2px] text-white lg:flex-row flex-col">
          <div>
            <h1 className="font-normal mb-[30px] md:leading-[80px] leading-[70px] md:text-[4em] text-[3em]">
              Get your
              <br /> government benefits up to{" "}
              <b className="font-black">6 days early!</b>
              <sup className="text-[13px] -top-[3em]">1</sup>
            </h1>
            <p className="text-white text-[2em] text-left leading-[24px] tracking-tight mb-[5%] font-semibold">
              Let's Get Started
            </p>
            <div className="flex md:flex-row flex-col md:items-center items-start">
              <InputMask
                value={phoneNumber}
                placeholder="Enter Mobile Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                mask="(999) 999-9999"
                // maskChar=" "
                className="border-white border-[1px] md:mr-[15px] md:mb-0 mr-0 mb-[15px] h-[50px] outline-none bg-white text-[#777] text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em] placeholder:text-[#043e93]"
              />

              <div
                onClick={handleClick}
                className="border-[1px] whitespace-nowrap border-white bg-[#043e93] text-[22px] py-[10px] px-[16px] rounded-full h-[50px] font-bold text-white hover:text-black flex items-center cursor-pointer tracking-normal"
              >
                Lets Get Started
              </div>
            </div>
          </div>
          <div>
            <img
              src={imacPhone}
              alt="imacPhone"
              className="max-w-[65vmin] mt-[15px] intro-img"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntroPart;
