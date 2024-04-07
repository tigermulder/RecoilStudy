import styled from "styled-components";
import ProductCard from "./../component/ProductCard/ProductCard";
import dummyData from "../mockupdata/dummyData";
import { Suspense } from "react";

function Main() {

  return (
    <Suspense>
      <ListWrapper>
        {dummyData.map((e) => {
          return (
            <ProductCard key={e.id} data={e} />
          );
        })}
      </ListWrapper>
    </Suspense>
  );
}
const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export default Main;
