export function getRandomColor(){
    return (`rgba( ${getRandomInteger(0,255)} , ${getRandomInteger(0,255)} , ${getRandomInteger(0,255)} ,  ${Math.random().toFixed(1)} )`)
}

export function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
