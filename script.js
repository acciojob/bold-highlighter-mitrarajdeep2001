function highlight() {
    //Write your code here

	let strongList = document.querySelectorAll('strong');
	strongList.forEach((element) => {
		element.style.color = 'green'
	})
}


function return_normal() {
    //Write your code here

    let strongList = document.querySelectorAll('strong');
	strongList.forEach((element) => {
		element.style.color = 'black'
	})
}
