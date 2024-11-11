'use client';

import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import bodyimg from "@/app/assets/images/home.jpg"; // Update this path to the actual image file
import { useRouter } from "next/navigation";

const page = () => {
  const Redirect = useRouter();
  const goToSignupPage = ()=>{
    Redirect.push("/signup");

  }

  const goToLoginPage = ()=>{
    Redirect.push("/login");
  }
    //check if the user is logged in or not
    const checkUser = ()=>{
      const user = localStorage.getItem("user");
      if(user){
        Redirect.push("/dashboard");
      }
      else{
        Redirect.push("/signup");
      }
    }
  return (
    <div className="h-screen w-full min-h-screen">
      <div className="flex h-3 w-fit justify-between p-8 gap-96">
        <div className="logo font-extrabold text-slate-500 text-xl">
          <h2>Voice_pay</h2>
        </div>

        <div className="header_list ml-64 flex align-middle justify-center">
          <ul className="text-black flex gap-10 hover:text-gray-600">
            <li><a href="#">Learn More</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Location</a></li>
          </ul>
          <div className="buttons">
            <button className="text-blue-400 font-bold py-2 px-4 rounded " onClick={goToLoginPage}>
              Log In
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToSignupPage}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="body_contents flex">
        <div className="body_left py-36 px-24">
          <p className="text-xl text-gray-100 body-text">
            Voice Pay is a payment system that allows you to <br /> <br />
            pay for goods and services <br />{" "}
            <span className="font-extrabold text-9xl">
              using your voice
            </span>
            . <br /> It is a secure and easy way to make <br />
            payments without having to <br />
            <span className="font-extrabold text-9xl">use your hands.</span>
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-4 ml-16">
            Get Started
          </button>
        </div>
        <div className="body_right">
          <Image src={bodyimg} alt="body image" className="body-image"  />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[40px] bg-lime-200 clip-path-wave"></div>
    </div>
  );
};

export default page;
