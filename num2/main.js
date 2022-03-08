
const days = [ 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА','ВОСКРЕСЕНЬЕ'];

const month = [
'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТА', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ' 
]

function getDayInfo(calendar) 
{
    calendar = calendar.split(".").map(i => +i)
	let G = new Date(calendar[2],calendar[1] -1,calendar[0]);
	let Yea = G.getFullYear();
	let Mon = month[G.getMonth()];
    let Dat = G.getDate();
	let dnum = days[G.getDay() - 1];
	let day = Math.ceil(Dat / 7);
	
	return ` //=> ${dnum} , ${day} НЕДЕЛЯ ${Mon} ${Yea} ГОДА`;		
}
console.log(getDayInfo('09.03.2022'));



  









































