//로코 컴포넌트
interface Props {
  size: 's' | 'b';
}

export default function Logo({size = 's'}: Props) {
  const textSize = size === 's' ? '32' : '80';
  return <h1 className={`text-point_color text-[${[textSize]}px] font-bold`}>logo</h1>;
}
