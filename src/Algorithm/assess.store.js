import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {observable, action, computed, extendObservable} from 'mobx';

import stringsOfLanguages from '../components/dictionary';
import {observer} from 'mobx-react';

import {CalculateFinalRisk} from '../classes/calculator/CalculateFinalRisk';
import {CalculateAbsoluteFA} from '../classes/calculator/CalculateAbsoluteFA';
import {CalculateBMI} from '../classes/calculator/CalculateBMI';
import {CalculateBaseFA} from '../classes/calculator/CalculateBaseFA';
import {CalculatePopulationRisk} from '../classes/calculator/CalculatePopulationRisk';

import {getCoefficient} from '../classes/calculator/AnswersCoefficientConverter';
import {Alert} from 'react-native';

@observer
//export default
class AssessStoreClass extends Component {
  @observable Age = null;
  @observable Sex = null;
  @observable Ethnicity = null;
  @observable Height = null;
  @observable Weight = null;
  @observable Smoking = null;
  @observable Drinking = null;
  @observable Fruits = null;
  @observable Activity = null;
  @observable Stress = null;
  @observable ParentStroke = null;
  @observable BloodPressure = null;
  @observable PressureMedicine = null;
  @observable Diabetes = null;
  @observable HeartDisease = null;
  @observable EnlargedHeart = null;
  @observable Dementia = null;
  @observable Fibrillation = null;
  @observable Memory = null;
  @observable BrainInjury = null;
  @observable MiniStroke = null;


  @computed get FinalRisk5() {
    return CalculateFinalRisk(
      this.AbsoluteFA5,
      this.Ethnicity,
      this.Fruits,
      this.Drinking,
      this.Activity,
      this.ParentStroke,
      this.Stress,
      5,
      this.Dementia,
      this.Memory,
      this.BrainInjury,
      this.MiniStroke,
      this.Weight,
      this.Height,
      this.HeightUnit,
      this.WeightUnit,
    );
  }

  @computed get FinalRisk10() {
    return CalculateFinalRisk(
      this.AbsoluteFA10,
      this.Ethnicity,
      this.Fruits,
      this.Drinking,
      this.Activity,
      this.ParentStroke,
      this.Stress,
      10,
      this.Dementia,
      this.Memory,
      this.BrainInjury,
      this.MiniStroke,
      this.Weight,
      this.Height,
      this.HeightUnit,
      this.WeightUnit,
    );
  }

  @computed get AbsoluteFA5() {
    return CalculateAbsoluteFA(
      this.Age,
      this.Sex,
      this.BloodPressure,
      this.PressureMedicine,
      this.Diabetes,
      this.Smoking,
      this.HeartDisease,
      this.Fibrillation,
      this.EnlargedHeart,
      5,
    );
  }

  @computed get AbsoluteFA10() {
    return CalculateAbsoluteFA(
      this.Age,
      this.Sex,
      this.BloodPressure,
      this.PressureMedicine,
      this.Diabetes,
      this.Smoking,
      this.HeartDisease,
      this.Fibrillation,
      this.EnlargedHeart,
      10,
    );
  }

  @computed get BaseFA5() {
    return CalculateBaseFA(
      this.Age,
      this.Sex,
      5,
      this.BloodPressure,
      this.Ethnicity,
    );
  }
  @computed get BaseFA10() {
    return CalculateBaseFA(
      this.Age,
      this.Sex,
      10,
      this.BloodPressure,
      this.Ethnicity,
    );
  }

  @computed get PopulationRisk5() {
    return CalculatePopulationRisk(
      this.BaseFA5,
      this.FinalRisk5,
      this.Ethnicity,
    );
  }
  @computed get PopulationRisk10() {
    return CalculatePopulationRisk(
      this.BaseFA10,
      this.FinalRisk10,
      this.Ethnicity,
    );
  }

  @computed get BMI() {
    return CalculateBMI(
      this.Height,
      this.Weight,
      this.HeightUnit,
      this.WeightUnit,
    );
  }


  getBMI = () => {
    switch (this.Ethnicity) {
      case 'chinese':
        if (this.BMI !== '' && this.BMI >= 18 && this.BMI < 24) {
          return 'NORMAL weight';
        } else if (this.BMI !== '' && this.BMI >= 24 && this.BMI < 28) {
          return 'OVERWEIGHT';
        } else if (this.BMI !== '' && this.BMI >= 28) {
          return 'OBESITY';
        }
        break;

      case 'japanese':
      case 'malay':
      case 'other_asian':
        if (this.BMI !== '' && this.BMI >= 18.5 && this.BMI < 23) {
          return 'NORMAL weight';
        } else if (this.BMI !== '' && this.BMI >= 23 && this.BMI < 27) {
          return 'OVERWEIGHT';
        } else if (this.BMI !== '' && this.BMI >= 27) {
          return 'OBESITY';
        }
        break;

      default:
        if (this.BMI !== '' && this.BMI >= 18 && this.BMI < 25) {
          return 'NORMAL weight';
        } else if (this.BMI !== '' && this.BMI >= 25 && this.BMI < 30) {
          return 'OVERWEIGHT';
        } else if (this.BMI !== '' && this.BMI >= 30) {
          return 'OBESITY';
        }
        break;
    }
  };
}

const AssessStore = new AssessStoreClass();

export {AssessStore};
