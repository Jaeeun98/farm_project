import Header from "@/components/detail/header";
import Contents from "@/components/detail/contents";

interface Props {
  params: {
    slug: string;
  };
}

export default function Detail({ params }: Props) {
  console.log(params);
  return (
    <div>
      {/* <Header /> */}
      <Contents farmId={params.slug} />
    </div>
  );
}
