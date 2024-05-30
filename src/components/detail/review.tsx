"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StarScore from "../ui/star_score";
import NextArrow from "../ui/next_arrow";
import PrevArrow from "../ui/prev_arrow";
import "./slider.css";

const testData = [
  {
    img: "/images/banner.png",
    nickname: "닉네임",
    score: "0.0",
    content:
      "리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰",
  },
  {
    img: "/images/banner.png",
    nickname: "닉네임",
    score: "0.0",
    content:
      "리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰",
  },
  {
    img: "/images/banner.png",
    nickname: "닉네임",
    score: "0.0",
    content:
      "리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰",
  },
  {
    img: "/images/banner.png",
    nickname: "닉네임",
    score: "0.0",
    content:
      "리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰",
  },
];

const arrowStyle = `absolute top-[10%] z-10 cursor-pointer`;

export default function Review() {
  const settings = {
    className: "flex h-[117px]",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <NextArrow arrowStyle={arrowStyle} />,
    prevArrow: <PrevArrow arrowStyle={arrowStyle} />,
    centerPadding: "10px", // Add padding to center
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <ul className="mt-3">
      <Slider {...settings}>
        {testData.map((item) => (
          <li
            className="flex border rounded-xl px-4 py-3 w-[445px] h-[87px] shadow-lg me-3"
            key={item.nickname}>
            <div className="flex ">
              <Image
                className="rounded-full h-[56px] me-4 my-1"
                width={56}
                height={56}
                src={item.img}
                alt="user_img"
              />
              <div className="flex  ">
                <div>
                  <p className="text-[12px] text-text_sub ">{item.nickname}</p>
                  <StarScore score="0.0" />
                </div>
                <p className="h-[44px] w-[80%] text-[14px] mt-4 text-ellipsis overflow-hidden ">
                  {item.content}
                </p>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
}
