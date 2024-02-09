const submitButton= document.querySelector('.card__button')
const inputElements= document.querySelectorAll('.card__input')

const validateDay= (day)=>{
if (day && day > 0 && day <= 31) {
	return true
}
}
const validateMonth= (month)=>{
if (month && month > 0 && month <= 12) {
	return true
}
}
const validateYear= (year)=>{
	const currentYear = new Date().getFullYear()
if (year && year > 0 && year <= currentYear) {
	return true
}
}

const isDateValid = (dayInput,monthInput,yearInput)=>{
	let isValid = [false,false,false]

	if (!validateDay(dayInput.value)) {
		dayInput.classList.add('card__input--error')
	}else{
		isValid[0] = true
		dayInput.classList.remove('card__input--error')
	}

	if (!validateMonth(monthInput.value)) {
		monthInput.classList.add('card__input--error')
	}else{
		isValid[1] = true
		monthInput.classList.remove('card__input--error')
	}

	if (!validateYear(yearInput.value)) {
		yearInput.classList.add('card__input--error')
	}else{
		isValid[2] = true
		yearInput.classList.remove('card__input--error')
	}

	return isValid.every((item) => item === true) 
}


const calculateAge = (year, month, day)=>{
 	const  today = new Date()
	const  birthday = new Date(year, month-1, day)
	let yourAge = today.getFullYear() - birthday.getFullYear() 
	const monthDiff = today.getMonth() - birthday.getMonth()
 
	const dayDiff = today.getDate() - birthday.getDate()

	if (monthDiff < 0 || (monthDiff==0 && dayDiff <= 0)   ) {
 		yourAge = yourAge -1
	}
	return yourAge
 }


const onclickFunction = () =>{
	const dayInput = document.querySelector('#day')
	const monthInput = document.querySelector('#month')
	const yearInput = document.querySelector('#year')
	const resultElement = document.querySelector('.card__resultValue')

if (!isDateValid(dayInput,monthInput,yearInput)) {
resultElement.textContent = '--'
	return
}

	 resultElement.textContent = calculateAge(yearInput.value, monthInput.value,dayInput.value )
// alert('you clicked me')
}

inputElements.forEach(element =>{
	element.addEventListener('keydown',(event)=>{
		// console.log(event.key)
		event.key ==='Enter' && onclickFunction()
		// 123
	})
})

submitButton.addEventListener('click',onclickFunction)