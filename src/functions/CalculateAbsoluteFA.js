import * as constants from './constants'
import {
	getBloodPressureCoefficient,
	getCoefficient,
} from './AnswersCoefficientConverter'
let imp_L, imp_A, imp_B, AbsoluteFA

let CalculateAbsoluteFA = (
	Age,
	Sex,
	BloodPressure,
	PressureMedicine,
	Diabetes,
	Smoking,
	HeartDisease,
	Fibrillation,
	EnlargedHeart,
	FA
) => {
	switch (Sex) {
		case 'Male':
			AbsoluteFA = CalculateAbsoluteFA_Male(
				Age,
				BloodPressure,
				PressureMedicine,
				Diabetes,
				Smoking,
				HeartDisease,
				Fibrillation,
				EnlargedHeart,
				FA
			)
			break
		case 'Female':
			AbsoluteFA = CalculateAbsoluteFA_Female(
				Age,
				BloodPressure,
				PressureMedicine,
				Diabetes,
				Smoking,
				HeartDisease,
				Fibrillation,
				EnlargedHeart,
				FA
			)
			break
	}

	return AbsoluteFA
}

let CalculateAbsoluteFA_Male = (
	Age,
	BloodPressure,
	PressureMedicine,
	Diabetes,
	Smoking,
	HeartDisease,
	Fibrillation,
	EnlargedHeart,
	FA
) => {
	let ag,
		bp,
		bpm,
		dia,
		sm,
		hd,
		AFA,
		imp_L =
			(ag = constants.coefficientMaleAge * Number(Age)) +
			(bp =
				constants.coefficientMaleSystolicBloodPressure *
				getBloodPressureCoefficient(BloodPressure)) +
			(bpm =
				constants.coefficientMalePressureMedicine *
				getCoefficient(PressureMedicine, 'PressureMedicine')) +
			(dia =
				constants.coefficientMaleDiabetes *
				getCoefficient(Diabetes, 'Diabetes')) +
			(sm =
				constants.coefficientMaleSmoking * getCoefficient(Smoking, 'Smoking')) +
			(hd =
				constants.coefficientMaleHeartDisease *
				getCoefficient(HeartDisease, 'HeartDisease')) +
			constants.coefficientMaleFibrillation *
				getCoefficient(Fibrillation, 'Fibrillation') +
			constants.coefficientMaleEnlargedHeart *
				getCoefficient(EnlargedHeart, 'EnlargedHeart')
	imp_A = imp_L - constants.imp_MaleM
	imp_B = Math.exp(imp_A)
	switch (FA) {
		case 5:
			AFA = (1 - Math.pow(0.9642, imp_B)) * 100
			break
		case 10:
			AFA = (1 - Math.pow(0.9044, imp_B)) * 100
			break
	}
	return AFA
}

let CalculateAbsoluteFA_Female = (
	Age,
	BloodPressure,
	PressureMedicine,
	Diabetes,
	Smoking,
	HeartDisease,
	Fibrillation,
	EnlargedHeart,
	FA
) => {
	let minus, prMed, res, some, AFA
	minus =
		constants.coefficientFemale_inter *
		getBloodPressureCoefficient(BloodPressure) *
		getCoefficient(PressureMedicine, 'PressureMedicine')

	prMed =
		constants.coefficientFemalePressureMedicine *
		getCoefficient(PressureMedicine, 'PressureMedicine')

	res = prMed - minus

	imp_L =
		constants.coefficientFemaleAge * Number(Age) +
		constants.coefficientFemaleSystolicBloodPressure *
			getBloodPressureCoefficient(BloodPressure) +
		(constants.coefficientFemalePressureMedicine *
			getCoefficient(PressureMedicine, 'PressureMedicine') + //was minus
			constants.coefficientFemale_inter *
				getBloodPressureCoefficient(BloodPressure) *
				getCoefficient(PressureMedicine, 'PressureMedicine')) +
		constants.coefficientFemaleDiabetes * getCoefficient(Diabetes, 'Diabetes') +
		constants.coefficientFemaleSmoking * getCoefficient(Smoking, 'Smoking') +
		constants.coefficientFemaleHeartDisease *
			getCoefficient(HeartDisease, 'HeartDisease') +
		constants.coefficientFemaleFibrillation *
			getCoefficient(Fibrillation, 'Fibrillation') +
		constants.coefficientFemaleEnlargedHeart *
			getCoefficient(EnlargedHeart, 'EnlargedHeart')
	imp_A = imp_L - constants.imp_FemaleM
	imp_B = Math.exp(imp_A)
	switch (FA) {
		case 5:
			some = 1 - Math.pow(0.9741, imp_B)
			AFA = (1 - Math.pow(0.9741, imp_B)) * 100
			break
		case 10:
			AFA = (1 - Math.pow(0.9353, imp_B)) * 100
			break
	}
	return AFA
}

export { CalculateAbsoluteFA }
