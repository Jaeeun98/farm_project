import NextArrow from "../ui/next_arrow";
import PrevArrow from "../ui/prev_arrow";

const arrowStyle = `absolute top-[10%] z-10 cursor-pointer`;

export const settings = {
  className: "flex h-[117px]",
  infinite: true,
  slidesToShow: 3,
  swipeToSlide: true,
  nextArrow: <NextArrow arrowStyle={`${arrowStyle} right-1`} />,
  prevArrow: <PrevArrow arrowStyle={`${arrowStyle} left-[-10px]`} />,
  centerPadding: "10px", // Add padding to center
  // afterChange: function (index: number) {
  //   console.log(
  //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //   );
  // },
};
