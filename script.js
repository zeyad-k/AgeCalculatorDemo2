const submitButton= document.querySelector('.card__button')
const inputElement= document.querySelectorAll('.card__input')


const calculateAge = (year, month, day)=>{
 	const  today = new Date()
	const  birthday = new Date(year, month-1, day)
	let yourAge = today.getFullYear() - birthday.getFullYear() 
	const monthDiff = today.getMonth -birthday.getMonth
	if (monthDiff < 0 ) {
		yourAge = yourAge -1
	}
	return yourAge
 }


const onclickFunction = () =>{
alert('you clicked me')
}

submitButton.addEventListener('click',onclickFunction)