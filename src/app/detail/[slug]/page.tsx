import Header from "@/components/common/search_header";
import Contents from "@/components/detail/contents";

interface Props {
  params: {
    slug: string;
  };
}

export default function Detail({ params }: Props) {
  return (
    <div>
      <Header />
      <Contents farmId={params.slug} />
    </div>
  );
}
