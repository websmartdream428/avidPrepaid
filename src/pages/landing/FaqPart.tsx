import Container from "components/Container";
import React from "react";

const FaqPart = () => {
  return (
    <div>
      <Container>
        <div className="pb-[4%]">
          <p className="m-0 text-[1.3em] font-medium pt-[2%] text-center">
            <strong>Have more Questions?</strong>
            {" Find more information by "}
            <a
              href="https://google.com"
              className="text-[#0386ff] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              clicking here
            </a>
          </p>
          <h1 className="text-center mt-[5%] font-extrabold text-[#0386ff] text-[2.4em] leading-][44px] mb-8 -tracking-[1px]">
            Lets Get Started
          </h1>
          <div className="flex justify-center gap-[45px]">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="border-[#0386ff] border-[1px] h-[50px] outline-none bg-white text-black text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em] placeholder:text-[#0386ff]"
            />
            <div className="border-[1px] border-[#0386ff] bg-[#0386ff] text-[1.25em] py-[10px] px-[16px] rounded-full h-[50px] font-medium text-white hover:text-black flex items-center cursor-pointer tracking-normal">
              Lets Get Started
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqPart;
