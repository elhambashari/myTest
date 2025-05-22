
export function sum(a, b) {
  return a + b;
}


export function multi(c, d) {
  return c * d;
}


export function login(namn, lösenord) {
  return { namn, lösenord };
}


export function combin(a,b){
	return a+b
}

export function stor(str) {
  return str.toUpperCase();
}


export function sub(x,y){

	return (x-y)
}


export function div(n,m){

	return (n/m)
}




export function storTal(array){

	return Math.max(...array)
}



export function sumAll(array) {
  return array.reduce((total, num) => total + num, 0);
}

export function average(array) {
  if (array.length === 0) return 0;
  const sum = array.reduce((total, num) => total + num, 0);
  return sum / array.length;
}
