import React from "react";

import serviceImg1 from "assets/image/phone-4x.png";
import serviceImg2 from "assets/image/customerservice-4x.png";
import serviceImg3 from "assets/image/security-4x.png";
import serviceImg4 from "assets/image/credit-4x.png";

const ServiceCard = (props: any) => {
  return (
    <div className="rounded-[75px] bg-[#f0f2f6] w-[365px] max-w-[395px] mb-5">
      <div className="-mt-[2.5em] pt-0 p-[25px]">
        <div className="h-[200px]">
          <img src={props.img} alt="Service" className="m-auto pb-[14px]" />
        </div>
        <h1 className="mb-[15px] text-[1.5em] pl-[35px] font-bold leading-[44px] -tracking-[1px]">
          {props.title}
        </h1>
        {props.children}
      </div>
    </div>
  );
};

const ServicePart = () => {
  return (
    <div className="py-16 w-[90vw] m-auto px-[15px]">
      <div className="flex justify-evenly flex-wrap mt-[42px]">
        <ServiceCard img={serviceImg1} title="Mobile Banking">
          <ul className="list-disc pl-[35px] mb-[10px] service-card-list">
            <li>Always know your account balance</li>
            <li>Mobile Tap to Pay</li>
            <li>
              Real Time Alerts including SMS, Email, and Push{" "}
              <span className="text-[0.7em]">Carrier rates may apply</span>
            </li>
            <li>Bank-to-Card and Card-to-Card</li>
            <li>Virtual Card available</li>
          </ul>
        </ServiceCard>
        <ServiceCard
          img={serviceImg2}
          title="Award Winning US Based Customer Service"
        >
          <ul className="list-disc pl-[35px] mb-[10px] service-card-list">
            <li>Most calls answered with hold times less than 30 seconds</li>
            <li>
              Fanatical U.S based Customer Service team who cares about you
            </li>
            <li>
              World-class award-winning bilingual representatives available 7
              days a week to answer all of your questions
            </li>
          </ul>
        </ServiceCard>
        <ServiceCard img={serviceImg3} title="Security and Alerts">
          <ul className="list-disc pl-[35px] mb-[10px] service-card-list">
            <li>Visa Zero Liability Protection</li>
            <li>FDIC Insured</li>
            <li>
              Peace of mind with Account Shield<sup>3</sup>
            </li>
            <li>Security Biometrics</li>
            <li>Latest EMV chip technology</li>
          </ul>
        </ServiceCard>
        <ServiceCard img={serviceImg4} title="Account Features">
          <ul className="list-disc pl-[35px] mb-[10px] service-card-list">
            <li>
              No direct deposit fee<sup>2</sup>
            </li>
            <li>Reloadable at over a million retailers worldwide</li>
            <li>
              Share money with friends and family with up to 4 companion
              accounts at no charge<sup>4</sup>
            </li>
            <li>Use anywhere Visa debit is accepted worldwide</li>
          </ul>
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServicePart;
