let CalculateBMI = (Height, Weight, HeightUnit, WeightUnit) => {
  if (isNaN(Height) || isNaN(Weight) || Weight <= 0 || Height <= 0) {
    return 0;
  } else {
    HeightUnit === 'cm' ? (heightCoef = 1) : (heightCoef = 2.54);
    WeightUnit === 'kg' ? (weightCoef = 1) : (weightCoef = 0.453592);
    return (
      Math.round(
        ((Weight * weightCoef) / Math.pow((Height * heightCoef) / 100, 2)) * 10,
      ) / 10
    );
  }
};

export {CalculateBMI};
