const CalculatorDiscountPercentage = (actualPrice, offerPrice) => {
  //   const actualPrice = props.actualPrice;
  //   const offerPrice = props.offerPrice;

  if (actualPrice === '' || offerPrice === '') {
    return null;
  }
  let difference = offerPrice - actualPrice;
  // console.log('difference calculaated', actualPrice, offerPrice, difference);
  if (difference < 0) {
    difference = -1 * difference;
  }
  let calculate = (difference / actualPrice) * 100;
  calculate = calculate.toFixed(0);
  return calculate;
};

export {CalculatorDiscountPercentage};
