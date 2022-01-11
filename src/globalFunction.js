const globalFunction = () => {
  const handlePrice = (price) => {
    const milions = `${
      Math.floor(price / 1000000) === 0 ? "" : Math.floor(price / 1000000)
    }`;

    let hunderedsOfThousands;
    if ((price % 1000000) / 1000 < 100) {
      hunderedsOfThousands = `0${(price % 1000000) / 1000}`;
      if (price < 100000) {
      hunderedsOfThousands = `${(price % 1000000) / 1000}`;
      }
      if ((price % 1000000) / 1000 === 0) {
        hunderedsOfThousands = `000`;
      }
    } else {
      hunderedsOfThousands = `${(price % 1000000) / 1000}`;
    }

    const priceAfterHanlde = `${
      milions === "" ? milions : `${milions}.`
    }${hunderedsOfThousands}.000`;

    return price !== 0 ? priceAfterHanlde : "0" ;
  };

  return { handlePrice };
};

export default globalFunction;
