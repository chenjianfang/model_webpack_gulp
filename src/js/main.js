import {Time} from './time';
console.log(Time);
document.querySelector("input").addEventListener("input",function(e){
	console.log($(e.target).val());
	var getTime = Time($(e.target).val());
	$(".right").html(getTime);
})