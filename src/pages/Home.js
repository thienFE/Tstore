import { useState, useEffect, useContext } from "react";

import Banner from "../components/Banner/Banner";
import Loader from "../components/Loader/Loader";
import ProdItemContainer from "../components/ProdItem/ProdItemContainer";
import { GlobalContext } from "../GlobalState";

function Home() {
  const [seeMore, setSeeMore] = useState(false);

  const { isLoader } = useContext(GlobalContext)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div>
      <Banner />
      <ProdItemContainer
        seeMore={seeMore}
        setSeeMore={setSeeMore}
        quantity={12}
      />
      {isLoader && <Loader />}
    </div>
  );
}

export default Home;
