import NextArrow from "../ui/next_arrow";
import PrevArrow from "../ui/prev_arrow";

const arrowStyle = `absolute top-[-50%]  z-10 cursor-pointer`;

export const settings = {
  className: "flex relative",
  infinite: false,
  slidesToShow: 10,
  swipeToSlide: true,
  nextArrow: <NextArrow arrowStyle={`${arrowStyle} right-0`} />,
  prevArrow: <PrevArrow arrowStyle={`${arrowStyle} left-[-20px]`} />,
  centerPadding: "10px", // Add padding to center
  // afterChange: function (index: number) {
  //   console.log(
  //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //   );
  // },
};
