import * as constants from './constants';
import {
  getBloodPressureCoefficient,
  getCoefficient,
} from './AnswersCoefficientConverter';

let imp_L, imp_A, imp_B, BaseFA;

let CalculateBaseFA = (Age, Sex, FA, BloodPressure, Ethnicity) => {
  switch (Sex) {
    case 'male':
      BaseFA = CalcBaseFA_Male(Age, FA, BloodPressure);
      break;
    case 'female':
      BaseFA = CalcBaseFA_Female(Age, FA, BloodPressure);
      break;
    default:
      BaseFA = 'null';
    // break;
  }

  return (
    BaseFA +
    getCoefficient(Ethnicity, 'Ethnicity') * constants.coefficientEthnicity
  );
};

let CalcBaseFA_Male = (Age, FA, BloodPressure) => {
  imp_L =
    constants.coefficientMaleAge * Number(Age) +
    constants.coefficientMaleSystolicBloodPressure *
      constants.normalSystolicBloodPressure;
  imp_A = imp_L - constants.imp_MaleM;
  imp_B = Math.exp(imp_A);
  switch (FA) {
    case 5:
      BFA = (1 - Math.pow(0.9642, imp_B)) * 100;
      break;
    case 10:
      BFA = (1 - Math.pow(0.9044, imp_B)) * 100;
      break;
  }
  return BFA;
};

let CalcBaseFA_Female = (Age, FA, BloodPressure) => {
  imp_L =
    constants.coefficientFemaleAge * Number(Age) +
    constants.coefficientFemaleSystolicBloodPressure *
      constants.normalSystolicBloodPressure;
  imp_A = imp_L - constants.imp_FemaleM;
  imp_B = Math.exp(imp_A);
  switch (FA) {
    case 5:
      BFA = (1 - Math.pow(0.9741, imp_B)) * 100;
      break;
    case 10:
      BFA = (1 - Math.pow(0.9353, imp_B)) * 100;
      break;
  }
  return BFA;
};

export {CalculateBaseFA};
