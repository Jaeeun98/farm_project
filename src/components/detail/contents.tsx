import Image from "next/image";
import ImgContents from "./img_contents";

const imgTestData = [
  {
    id: 1,
    src: "/images/banner.png",
  },
  {
    id: 2,
    src: "/images/banner.png",
  },
  {
    id: 3,
    src: "/images/banner.png",
  },
  {
    id: 4,
    src: "/images/banner.png",
  },
  {
    id: 5,
    src: "/images/banner.png",
  },
];

export default function Contents() {
  return (
    <section className="px-layout_px">
      <ImgContents imgs={imgTestData} />
    </section>
  );
}
