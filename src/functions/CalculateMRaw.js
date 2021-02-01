import {CalculateBMI} from './CalculateBMI';

let CalculateMRaw = (Height, Weight, HeightUnit, WeightUnit, Ethnicity) => {
  let BMI = CalculateBMI(Height, Weight, HeightUnit, WeightUnit);
  if (BMI === 0) {
    return 0;
  } else {
    let raw_mass;
    if (
      Ethnicity === 'indian' ||
      Ethnicity === 'japanese' ||
      Ethnicity === 'malay'
    ) {
      raw_mass = BMI - 23;
    } else if (Ethnicity === 'chinese') {
      raw_mass = BMI - 24;
    } else {
      raw_mass = BMI - 25;
    }

    let mass = Math.round(raw_mass * 100) / 100;
    let massActive;
    if (mass < 0) {
      mass = 0;
      massActive = 0;
    } else {
      massActive = 1;
    }

    return massActive * (1.02 + mass * 0.1);
  }
};

export {CalculateMRaw};
