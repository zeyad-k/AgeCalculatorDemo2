const submitButton= document.querySelector('.card__button')
const inputElement= document.querySelectorAll('.card__input')

// const validateDay= (day)=>{
// if (day && day > 0 && day <= 31) {
// 	return true
// }
// }


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
	 resultElement.textContent = calculateAge(yearInput.value, monthInput.value,dayInput.value )
// alert('you clicked me')
}

submitButton.addEventListener('click',onclickFunction)