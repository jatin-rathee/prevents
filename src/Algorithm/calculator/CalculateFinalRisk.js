import * as constants from './constants';
import {CalculateAbsoluteFA} from './CalculateAbsoluteFA';
import {
  getCoefficient,
  getBloodPressureCoefficient,
} from './AnswersCoefficientConverter';
import {CalculateMRaw} from './CalculateMRaw';

let CalculateFinalRisk = (
  AbsoluteFA,
  Ethnicity, //race
  Fruits, //diet
  Drinking, //alcohol
  Activity, //activity
  ParentsStroke, //family
  Stress, //stress
  FA,
  Dementia,
  Memory,
  BrainInjury,
  MiniStroke,
  Weight,
  Height,
  HeightUnit,
  WeightUnit,
) => {
  let cEth,
    cFruits,
    cDrink,
    cActivity,
    cParentStroke,
    cStress,
    mRaw,
    cDementia,
    cMemory,
    cBrainInjury,
    cMiniStroke;

  let FinalRisk = 0;
  FinalRisk =
    AbsoluteFA +
    constants.coefficientEthnicity *
      (cEth = getCoefficient(Ethnicity, 'Ethnicity')) +
    (cFruits = constants.coefficientFruits * getCoefficient(Fruits, 'Fruits')) +
    (cDrink =
      constants.coefficientDrinking * getCoefficient(Drinking, 'Drinking')) +
    (cActivity =
      constants.coefficientActivity * getCoefficient(Activity, 'Activity')) +
    (cParentStroke =
      constants.coefficientParentsStroke *
      getCoefficient(ParentsStroke, 'ParentsStroke')) +
    (cStress = constants.coefficientStress * getCoefficient(Stress, 'Stress')) +
    (mRaw = CalculateMRaw(Height, Weight, HeightUnit, WeightUnit, Ethnicity)) +
    (cDementia =
      constants.coefficientDementia * getCoefficient(Dementia, 'Dementia')) +
    (cMemory = constants.coefficientMemory * getCoefficient(Memory, 'Memory')) +
    (cBrainInjury =
      constants.coefficientBrainInjury *
      getCoefficient(BrainInjury, 'BrainInjury'));

  if ((cMiniStroke = getCoefficient(MiniStroke, 'MiniStroke')) === 1) {
    if (FA === 5) {
      FinalRisk += constants.coefficientStroke5;
    } else if (FA === 10) {
      FinalRisk += constants.coefficientStroke10;
    }
  }

  //FinalRisk = Math.round(FinalRisk * 100) / 100;
  return FinalRisk;
};

export {CalculateFinalRisk};
