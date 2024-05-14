"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Message = {
  content: string;
  type: string;
}

type Inputs = {
  question: string;
}

export default function Home() {
  const [message, setMessage] = useState('')

  const { watch,register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('입력된 값 : ' + JSON.stringify(data));
    fetch('http://localhost:8000/api/chat/titanic', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json()) // 응답을 JSON으로 파싱
    .then((data) => {
      console.log("응답:", data); // 응답 데이터를 콘솔에 출력
      console.log("응답:", data.answer); // 응답 데이터를 콘솔에 출력
      setMessage(data); // 응답 데이터를 상태에 저장
    })
    .catch((error) => console.log("에러:", error));
    
  }
  //  <div className="h-screen flex justify-center items-center bg-gray-100">
  //     <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
  //       <div className="p-8">
          {/* <h2 classNameName="text-4xl font-bold mb-8 text-center text-blue-500">Chat GPT</h2> */}
          // <div className="bg-gray-200 rounded-lg p-6 mb-8 h-80 overflow-y-auto">
          // {<h4>{message? message : ""}</h4>}
          // </div>
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <div classNameName="flex items-center mb-6">
    //           <input
    //             type="text"
    //             {...register("question", { required: true })}
    //             classNameName="flex-1 py-4 px-6 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 text-black"
    //             placeholder="메시지를 입력하세요..."
    //           />
    //           <button
    //             type="submit"
    //             classNameName="py-4 px-8 bg-blue-500 text-gray font-bold rounded-r-lg transition duration-300 ease-in-out hover:bg-blue-600"
    //           >
    //             전송
    //           </button>
    //         </div>
    //         {errors.question && (
    //           <span classNameName="text-red-500 block mb-4">메시지를 입력하세요.</span>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </div>
 
  return (<div className="flex justify-center items-center w-screen h-screen bg-white">
  <div className="flex justify-start items-start gap-8">
    <div
      className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[404px] overflow-hidden gap-8 p-12 rounded-xl bg-white"
      style={{ boxShadow: "0px 4px 6px -4px rgba(0,0,0,0.1), 0px 0px 15px 0 rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="flex-grow-0 flex-shrink-0 opacity-80 text-base font-medium text-left text-black">
          Plan 1 name
        </p>
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-semibold text-left text-black">
            $5
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            per month
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[308px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[308px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[308px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[308px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
      </div>
      <div
        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3.5 rounded-lg bg-black"
        style={{ boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          Select
        </p>
      </div>
    </div>
    <div
      className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[406px] overflow-hidden gap-8 p-12 rounded-xl bg-white"
      style={{ boxShadow: "0px 4px 6px -4px rgba(0,0,0,0.1), 0px 0px 15px 0 rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="flex-grow-0 flex-shrink-0 opacity-80 text-base font-medium text-left text-black">
          Plan 2 name
        </p>
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-semibold text-left text-black">
            $10
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            per month
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
      </div>
      <div
        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3.5 rounded-lg bg-black"
        style={{ boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          Select
        </p>
      </div>
    </div>
    <div
      className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[405px] overflow-hidden gap-8 p-12 rounded-xl bg-white"
      style={{ boxShadow: "0px 4px 6px -4px rgba(0,0,0,0.1), 0px 0px 15px 0 rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="flex-grow-0 flex-shrink-0 opacity-80 text-base font-medium text-left text-black">
          Plan 3 name
        </p>
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-semibold text-left text-black">
            $20
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            per month
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[309px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[309px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[309px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[309px] text-xl font-medium text-left text-[#828282]">
          Feature
        </p>
      </div>
      <div
        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3.5 rounded-lg bg-black"
        style={{ boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          Select
        </p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center w-[842px] absolute  top-[244px] gap-6">
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[842px] text-[64px] font-bold text-center text-black">
    {message? message : ""}
    </p>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[842px] text-2xl text-center text-[#828282]">
      And a subheading describing your pricing plans, too
    </p>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-xl bg-neutral-100">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 rounded-lg bg-white">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
          Monthly plans
        </p>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 rounded-lg bg-neutral-100">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
          Annual plans
        </p>
      </div>
    </div>
  </div>
  <div className="w-[1440px] h-[164px] absolute  top-0 overflow-hidden bg-white">
    <div className="flex justify-end items-center absolute left-[970px] top-14 gap-12">
      <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-black">Page</p>
      <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-black">Page</p>
      <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-black">Page</p>
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3.5 rounded-lg bg-black"
        style={{ boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          Button
        </p>
      </div>
    </div>
    <p className="absolute left-20 top-[67px] text-xl font-medium text-left text-black">
      Site name
    </p>
  </div>
  <div className="w-screen h-[264px] absolute top-[1512px] overflow-hidden bg-white">
    <div className="flex flex-col justify-center items-end w-[187px] absolute left-[736px] top-12 gap-6">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-black">
        Topic
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
    </div>
    <div className="flex flex-col justify-center items-end w-[187px] absolute left-[955px] top-12 gap-6">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-black">
        Topic
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
    </div>
    <div className="flex flex-col justify-center items-end w-[187px] absolute left-[1173px] top-12 gap-6">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-black">
        Topic
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[187px] text-base font-medium text-left text-[#454545]">
        Page
      </p>
    </div>
    <p className="absolute left-20 top-[52px] text-2xl text-left text-black">Site name</p>
    <div className="flex justify-start items-start absolute left-20 top-44 gap-2">
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M20 10.04C14.5 10.04 10 14.53 10 20.06C10 25.06 13.66 29.21 18.44 29.96V22.96H15.9V20.06H18.44V17.85C18.44 15.34 19.93 13.96 22.22 13.96C23.31 13.96 24.45 14.15 24.45 14.15V16.62H23.19C21.95 16.62 21.56 17.39 21.56 18.18V20.06H24.34L23.89 22.96H21.56V29.96C23.9164 29.5879 26.0622 28.3856 27.6099 26.5701C29.1576 24.7546 30.0053 22.4457 30 20.06C30 14.53 25.5 10.04 20 10.04Z"
          fill="#828282"
        />
      </svg>
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M27 11C27.5304 11 28.0391 11.2107 28.4142 11.5858C28.7893 11.9609 29 12.4696 29 13V27C29 27.5304 28.7893 28.0391 28.4142 28.4142C28.0391 28.7893 27.5304 29 27 29H13C12.4696 29 11.9609 28.7893 11.5858 28.4142C11.2107 28.0391 11 27.5304 11 27V13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H27ZM26.5 26.5V21.2C26.5 20.3354 26.1565 19.5062 25.5452 18.8948C24.9338 18.2835 24.1046 17.94 23.24 17.94C22.39 17.94 21.4 18.46 20.92 19.24V18.13H18.13V26.5H20.92V21.57C20.92 20.8 21.54 20.17 22.31 20.17C22.6813 20.17 23.0374 20.3175 23.2999 20.5801C23.5625 20.8426 23.71 21.1987 23.71 21.57V26.5H26.5ZM14.88 16.56C15.3256 16.56 15.7529 16.383 16.0679 16.0679C16.383 15.7529 16.56 15.3256 16.56 14.88C16.56 13.95 15.81 13.19 14.88 13.19C14.4318 13.19 14.0019 13.3681 13.685 13.685C13.3681 14.0019 13.19 14.4318 13.19 14.88C13.19 15.81 13.95 16.56 14.88 16.56ZM16.27 26.5V18.13H13.5V26.5H16.27Z"
          fill="#828282"
        />
      </svg>
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 23L23.19 20L18 17V23ZM29.56 15.17C29.69 15.64 29.78 16.27 29.84 17.07C29.91 17.87 29.94 18.56 29.94 19.16L30 20C30 22.19 29.84 23.8 29.56 24.83C29.31 25.73 28.73 26.31 27.83 26.56C27.36 26.69 26.5 26.78 25.18 26.84C23.88 26.91 22.69 26.94 21.59 26.94L20 27C15.81 27 13.2 26.84 12.17 26.56C11.27 26.31 10.69 25.73 10.44 24.83C10.31 24.36 10.22 23.73 10.16 22.93C10.09 22.13 10.06 21.44 10.06 20.84L10 20C10 17.81 10.16 16.2 10.44 15.17C10.69 14.27 11.27 13.69 12.17 13.44C12.64 13.31 13.5 13.22 14.82 13.16C16.12 13.09 17.31 13.06 18.41 13.06L20 13C24.19 13 26.8 13.16 27.83 13.44C28.73 13.69 29.31 14.27 29.56 15.17Z"
          fill="#828282"
        />
      </svg>
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M15.8 10H24.2C27.4 10 30 12.6 30 15.8V24.2C30 25.7383 29.3889 27.2135 28.3012 28.3012C27.2135 29.3889 25.7383 30 24.2 30H15.8C12.6 30 10 27.4 10 24.2V15.8C10 14.2617 10.6111 12.7865 11.6988 11.6988C12.7865 10.6111 14.2617 10 15.8 10M15.6 12C14.6452 12 13.7295 12.3793 13.0544 13.0544C12.3793 13.7295 12 14.6452 12 15.6V24.4C12 26.39 13.61 28 15.6 28H24.4C25.3548 28 26.2705 27.6207 26.9456 26.9456C27.6207 26.2705 28 25.3548 28 24.4V15.6C28 13.61 26.39 12 24.4 12H15.6ZM25.25 13.5C25.5815 13.5 25.8995 13.6317 26.1339 13.8661C26.3683 14.1005 26.5 14.4185 26.5 14.75C26.5 15.0815 26.3683 15.3995 26.1339 15.6339C25.8995 15.8683 25.5815 16 25.25 16C24.9185 16 24.6005 15.8683 24.3661 15.6339C24.1317 15.3995 24 15.0815 24 14.75C24 14.4185 24.1317 14.1005 24.3661 13.8661C24.6005 13.6317 24.9185 13.5 25.25 13.5ZM20 15C21.3261 15 22.5979 15.5268 23.5355 16.4645C24.4732 17.4021 25 18.6739 25 20C25 21.3261 24.4732 22.5979 23.5355 23.5355C22.5979 24.4732 21.3261 25 20 25C18.6739 25 17.4021 24.4732 16.4645 23.5355C15.5268 22.5979 15 21.3261 15 20C15 18.6739 15.5268 17.4021 16.4645 16.4645C17.4021 15.5268 18.6739 15 20 15M20 17C19.2044 17 18.4413 17.3161 17.8787 17.8787C17.3161 18.4413 17 19.2044 17 20C17 20.7956 17.3161 21.5587 17.8787 22.1213C18.4413 22.6839 19.2044 23 20 23C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20C23 19.2044 22.6839 18.4413 22.1213 17.8787C21.5587 17.3161 20.7956 17 20 17Z"
          fill="#828282"
        />
      </svg>
    </div>
    <svg
      width={1280}
      height={1}
      viewBox="0 0 1280 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[79px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="4.37114e-8" y1="0.5" x2={1280} y2="0.500112" stroke="#E6E6E6" />
    </svg>
  
  </div>
 
          
  <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
  <div className="flex justify-start items-center w-[685px] h-[95px] absolute left-[408px] top-[1118px] gap-4 px-4 py-2 rounded-lg bg-white border border-[#e0e0e0]">
    <input
      type="text"
      {...register("question", { required: true })}
      className="flex-grow w-[613px] text-base text-left text-black outline-none"
      placeholder="Placeholder"
    />
    <button
      type="submit"
      className="flex-grow-0 flex-shrink-0 w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center"
    >
      <svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M6 9.5L12 15.5L18 9.5"
          stroke="#828282"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
</form>
</div>


      );
  }
