import React, { useState } from "react";
import Container from "components/Container";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    title: "Why Avid ?",
    text: 'Digital banking at its best! With Avid Prepaid, you get your payments early. By signing up for Early Access, you can receive your government benefits up to 6 days early and receive payroll up to 2 days early.<sup>1</sup> Avid Prepaid has no overdraft fees or minimum balance.<sup>2</sup> You control your account with Avid Prepaid\'s robust mobile app, security, and alert features such as real time alerts, account shield<sup>3</sup>, and transaction history. Getting started is easy, just enter your mobile number and click "Lets Get Started" to sign up today!',
  },
  {
    title: "Which Avid Prepaid Card is right for me ?",
    text: "Avid has two types of debit cards to offer:<br />Avid Go! - This card is a pay as you go card. You do not have to pay any monthly or annual fees, and there are low transaction fees.<sup>2</sup><br/>Avid Select - With Avid select you pay a low monthly fee, but there are no swipe fees associated with point of sale transactions.<sup>2</sup>",
  },
  {
    title: "What is Early Access ?",
    text: "Early Access is exactly what it sounds like. Traditional banks usually hold your paychecks before depositing it into your bank account. When you enroll in Avid Prepaid's Early Access, Avid Prepaid will switch your next payment to be received onto your Avid Prepaid Card Account when we receive notice of your payment up to 6 days early for government benefits and up to 2 days early for payroll or other direct deposits.<sup>1</sup>",
  },
  {
    title: "What type of government benefits can I receive on my card ?",
    text: "Most benefits from the Federal Government are eligible. These are some of the most common benefits:<br/>Social Security payments<br/>Pension and other regular payments<br/>Supplemental Security Income (SSI)<br/>Social Security Disability Insurance (SSDI)<br/>Veterans Administration Compensation and Pension",
  },
  {
    title: "How do I sign up ?",
    text: 'There is no charge to create an account online.<sup>6</sup> Get started today by entering your mobile number and click "Lets Get Started"!',
  },
  {
    title: "Where can I use my Avid Prepaid Visa Debit card account ?",
    text: "Your Avid Prepaid card can be used anywhere that Visa debit is accepted. Most retailers, gas stations, pharmacies, as well as eCommerce stores accept the card. You can also access cash at virtually any ATM nationwide or at most bank branches. A digital version of your card, available through the mobile app and site, can be used online and you can add your card to the preferred mobile wallet of your choice including Apple Pay, Google Pay, and Samsung Pay.",
  },
  {
    title: "Are my funds FDIC insured ?",
    text: "Your money is safe with Avid Prepaid. Our top priority is protecting our customers - that starts with keeping your information and money secure. Funds are insured up to $250,000 through our issuing bank, Metropolitan Commercial Bank, Member FDIC",
  },
  {
    title:
      "How Prepaid Cards directly changed the way people received their Government Benefits.",
    text: "How Prepaid Cards directly changed the way people received their Government Benefits.<br/><br/>In 2013, in order to be more efficient, secure, and save American taxpayers money, the government officially made the move away from paper checks. Before the move to electronic payments was made, hundreds of thousands of government benefit checks were reported as lost or stolen, costing millions of dollars to American taxpayers.<br/><br/>Starting in 2013, the Treasury Department required that all new recipients of federal benefits programs, including Social Security, SSI, Veterans benefits, and government retirement plans, needed either a bank account for direct deposit or they were issued a prepaid, government debit card called Direct Express. Although it was mandated in 2013, the move away from paper checks actually began a couple years earlier, in 2011.<br/><br/>This left recipients with 2 options; direct deposit into a bank account or a prepaid, government issued debit card. If they chose the prepaid debit card option, their only choice was to use Direct Express.<br/><br/>That was then. Today, it’s important to note that those who do receive government benefits via a prepaid debit card have more options available. Companies such as Avid Prepaid offer debit cards that give recipients earlier access to their benefits and more reliable customer service.<br/><br/>You may ask, does Direct Express deposit early? The answer is no, Federal benefits are automatically deposited to the prepaid debit card account on the day of the payment.<br/><br/>The Avid Prepaid card is an option that does provide early access. Avid Prepaid processes the deposits as soon as the Government communicates that it’s sending a payment to the customer. This usually occurs several days before the actual payment date. For example, SSI and VA payments are paid on the first of each month. With the Avid Prepaid card, they’re credited to the account up to six days early every month and all other payments are credited up to two days early.<br/><br/>Many things have changed since the government made the move away from paper checks in 2013. Today, there are more options available for government benefit recipients. Those who choose the Direct Express prepaid debit card option can now make a well-educated decision by researching alternate companies to receive their government benefits from. Like Avid Prepaid, who offers award-winning customer service and perks such as receiving their benefits up to six days early.<br/><br/><small>Avid Prepaid Visa Debit Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc and is not affiliated with Direct Express<sup>®</sup><small>",
  },
];

const FaqCard = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (id: number) => {
    const faqElem: any = document.getElementById("faq" + id);
    const faqContentElem: any = document.getElementById("faq-content" + id);
    console.log(faqElem.getBoundingClientRect().height);
    if (open) {
      faqContentElem.style.height = 0;
    } else {
      faqContentElem.style.height =
        faqElem.getBoundingClientRect().height + "px";
    }
    setOpen((prev) => !prev);
  };
  return (
    <div
      className="border-[#dbdbdb] px-7 border-[1px] rounded-[50px]"
      style={{ contain: "content" }}
      onClick={() => handleToggle(props.id)}
    >
      <div className="flex justify-between py-5 text-[1.3em] text-[#040404] font-semibold items-center">
        <p>{props.title}</p>
        <div className="w-[25px]">
          <FaChevronRight
            size={25}
            fill="#3f9dff"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}
          />
        </div>
      </div>
      <div id={"faq-content" + props.id} className="h-0 duration-500">
        <p
          id={"faq" + props.id}
          dangerouslySetInnerHTML={{ __html: props.text }}
          className="text-[1.2em] text-[#464646] pb-5 -tracking-[1px]"
        />
      </div>
    </div>
  );
};

const FaqPart = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Container>
        <div className="py-[4%]">
          <h1 className="text-center text-[#0386ff] text-[2.4em] font-bold leading-[44px] mt-[3%] mb-[32px]">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col gap-6">
            {faqData.map((item: any, key: any) => (
              <FaqCard key={key} id={key} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
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
          <div className="md:flex-row flex-col flex items-center justify-center md:gap-[45px] gap-[20px]">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="border-[#0386ff] border-[1px] h-[50px] outline-none bg-white text-black text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em] placeholder:text-[#0386ff]"
            />
            <div className="border-[1px] whitespace-nowrap border-[#0386ff] bg-[#0386ff] text-[1.25em] py-[10px] px-[16px] rounded-full h-[50px] font-medium text-white hover:text-black flex items-center cursor-pointer tracking-normal w-fit">
              Lets Get Started
            </div>
          </div>
        </div>
        <div>
          <div className="contact-tab-header flex md:flex-row flex-col gap-[2px]">
            <div
              onClick={() => setTab(1)}
              className={`border-[1px] border-b-0  ${
                tab === 2
                  ? "bg-[#3984ed] text-white border-[#3984ed]"
                  : "border-[#ddd] text-[#1d2127] bg-white"
              }`}
            >
              <p>Customer Service</p>
            </div>
            <div
              onClick={() => setTab(2)}
              className={`border-[1px] border-b-0  ${
                tab === 1
                  ? "bg-[#3984ed] text-white border-[#3984ed]"
                  : "border-[#ddd] text-[#1d2127] bg-white"
              }`}
            >
              <p>{"Cardholder Tools & Account Access"}</p>
            </div>
          </div>
          <div className="contact-tab-body border-[#ddd] border-[1px]">
            <div
              className={`flex py-[2%] px-[40px] md:flex-row flex-col gap-4 ${
                tab === 1 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="flex flex-col md:w-[50%] w-full gap-4">
                <p className="flex items-center">
                  <FaPhoneAlt fill="#0386ff" size={20} />
                  <span className="ml-3 text-[1.1em]">
                    <strong>{"Call us at: "}</strong>{" "}
                    <a
                      href="tel:(801) 893-7716"
                      className="text-[#0386ff] hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"(801) 893-7716"}
                    </a>
                  </span>
                </p>
                <p className="flex items-center">
                  <HiMail fill="#0386ff" size={20} />
                  <span className="ml-3 text-[1.1em]">
                    <a
                      href="tel:(801) 893-7716"
                      className="text-[#0386ff] hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"Email Us"}
                    </a>
                  </span>
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt fill="#0386ff" size={20} />
                  <span className="ml-3 text-[1.1em]">
                    <strong>{"Address: P.O.:"}</strong>
                    {" Box 307, New Hyde Park, NY 11040"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:w-[50%] w-full gap-4">
                <p>
                  <strong>{"Business Hours:"}</strong>
                  {
                    " Monday - Friday: 7AM to 12AM (EST) Saturday & Sunday: 9AM to 7PM (EST)"
                  }
                </p>
                <p className="flex gap-4 text-[20px]">
                  <FaFacebookF fill="#0386ff" />
                  <FaInstagram fill="#0386ff" />
                  <FaYoutube fill="#0386ff" />
                </p>
              </div>
            </div>
            <div
              className={`py-[2%] px-[40px] text-center ${
                tab === 2 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <p className="mb-[20px] text-[1.1em]">
                <strong>
                  Are you an existing or returning customer and need access to
                  your account?
                </strong>{" "}
                <a
                  href="https://google.com"
                  className="text-[#0386ff] hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign In
                </a>
              </p>
              <p className="text-[1.1em]">
                <strong>Do you want to learn more? </strong>
                <a href="#fap" className="text-[#0386ff] hover:underline">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqPart;
