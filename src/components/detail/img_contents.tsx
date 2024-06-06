import Image from "next/image";

interface Props {
  imgs: Img[];
}

interface Img {
  bannerImageUrl: string;
}

const first_img_Style = `w-[50%] h-[100%] pe-2 rounded-box_rounded`;
const img_style = `w-[48%] h-[48%] rounded-box_rounded`;

export default function ImgContents({ imgs }: Props) {
  return (
    <div className="my-10 h-[440px] flex  ">
      <Image
        className={`${first_img_Style}`}
        width={500}
        height={300}
        src={imgs[0].bannerImageUrl}
        alt="farm_img"
      />
      <div className="flex flex-wrap gap-5 justify-end">
        {imgs.map((item, i) => {
          if (i !== 0)
            return (
              <Image
                className={`${img_style}`}
                key={item.bannerImageUrl}
                width={500}
                height={300}
                src={item.bannerImageUrl}
                alt="farm_img"
              />
            );
        })}
      </div>
    </div>
  );
}
