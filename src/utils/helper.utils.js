const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(price / 100);

  return newPrice;
};

const getUniqueValues = (products, type) => {
  let specificList = products.map((product) => product[type]);
  if (type === "colors") {
    specificList = specificList.flat();
  }

  return ["all", ...new Set(specificList)];
};

export { formatPrice, getUniqueValues };
