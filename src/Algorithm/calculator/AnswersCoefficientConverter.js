let getBloodPressureCoefficient = BloodPressure => {
  let bp;
  if (
    BloodPressure === null ||
    BloodPressure === 'null' ||
    typeof BloodPressure === 'undefined' ||
    BloodPressure === 0 ||
    BloodPressure === 'dontknow' ||
    BloodPressure <= 119
  ) {
    bp = 119;
  } else {
    bp = BloodPressure;
  }

  return bp;
};

let getCoefficient = (answer, question) => {
  let coef;

  if (question === 'Fruits') {
    if (Number(answer) === 7 || answer == null || answer == 'null') coef = 0;
    else coef = 1;
  } else if (question === 'Activity') {
    if (Number(answer) === 5 || answer == null || answer == 'null') coef = 0;
    else coef = 1;
  } else if (question === 'Ethnicity') {
    if (answer === 'white' || answer === 'not_specified') coef = 0;
    else coef = 1;
  } else if (
    answer == 'no' ||
    answer == null ||
    answer == 'null' ||
    answer == '' ||
    answer == 0 ||
    answer == 'occasionally' ||
    answer == 'more12' ||
    answer == 'dontknow' ||
    answer == 'not_specified'
  ) {
    coef = 0;
  } else coef = 1;

  return coef;
};

export {getBloodPressureCoefficient, getCoefficient};
