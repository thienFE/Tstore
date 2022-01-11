import { useEffect } from "react";
import { useParams } from "react-router-dom";

import DetailItem from "../components/DetailItem/DetailItem";

function Detail() {
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <DetailItem prodId={id} />
    </>
  );
}

export default Detail;
