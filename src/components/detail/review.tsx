"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StarScore from "../ui/star_score";

import "./slider.css";
import { settings } from "./slider_setting";
import { ReviewData } from "@/types/farm";

interface Props {
  reviewData: ReviewData[];
}

export default function Review({ reviewData }: Props) {
  console.log(reviewData);
  if (reviewData[0].reviewerName === null)
    return <p className="leading-8	text-text_sub">리뷰가 존재하지 않습니다.</p>;

  return (
    <ul className="mt-3">
      <Slider {...settings}>
        {reviewData.map((item) => (
          <li
            className="flex border rounded-xl px-4 py-3 w-[445px] h-[91px] shadow-lg me-3"
            key={item.reviewerName}>
            <div className="flex ">
              <Image
                className="rounded-full h-[56px] me-4 my-1"
                width={56}
                height={56}
                src={item.reviewerImage}
                alt="user_img"
              />
              <div className="flex">
                <div>
                  <p className="text-[12px] text-text_sub ">
                    {item.reviewerName}
                  </p>
                  <StarScore score={item.revieweStarScore} />
                </div>
                <p className="h-[44px] w-[80%] text-[14px] mt-4 text-ellipsis overflow-hidden ">
                  {item.revieweContent}
                </p>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
}
