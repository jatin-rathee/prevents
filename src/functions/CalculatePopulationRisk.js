import * as constants from './constants';
import {
  //getBloodPressureCoefficient,
  getCoefficient,
} from './AnswersCoefficientConverter';

let CalculatePercentage = FinalRisk => {
  if (FinalRisk > 0.9299) {
    return 0.9299;
  } else {
    return FinalRisk;
  }
};

let CalculatePopulationRisk = (BaseFA, FinalRisk, Ethnicity) => {
  let FR = Math.round(FinalRisk * 10) / 10;
  let BR = Math.round(BaseFA * 10) / 10;
  if (FR > 100) FR = 100;
  if (BR > 100) BR = 100;
  let popRisk = FR / BR;
  return popRisk;
};
// let CalculatePopulationRisk = (BaseFA, FinalRisk, Ethnicity) => {
//   eth = getCoefficient(Ethnicity, 'Ethnicity');
//   ethC = eth * constants.coefficientEthnicity;
//   AbsRiskNoRisk = BaseFA + ethC;
//   popRisk = FinalRisk / AbsRiskNoRisk;
//   return popRisk;
// };

export {CalculatePopulationRisk};
