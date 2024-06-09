//로고 컴포넌트
interface Props {
  size: "s" | "b";
}

export default function Logo({ size = "s" }: Props) {
  const textSize = size === "s" ? "text-3xl" : "text-6xl";
  return <h1 className={`text-point_color ${textSize} font-bold`}>logo</h1>;
}
