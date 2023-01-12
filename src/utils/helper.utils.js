const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(price / 100);

  return newPrice;
};

export {formatPrice};