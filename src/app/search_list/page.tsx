//main에서 검색했을 때 이동

import SearchHeader from "@/components/common/search_header";
import Container from "@/components/search_list/container";

//검색 결과 리스트
export default function SearchList() {
  return (
    <div>
      <SearchHeader />
      <Container />
    </div>
  );
}
