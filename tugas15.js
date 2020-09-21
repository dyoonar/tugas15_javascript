var a = 8
var b = 6
var a2 = Math.pow(a,2)
var b2 = Math.pow(b,2)
var c = a2+b2

function sisimiring(nilai) {
	return Math.sqrt(nilai)
}

console.log("Nilai AB : ",a)
console.log("Nilai BC : ",b)
console.log("panjang AC pada segitiga siku-siku tersebut adalah : ", sisimiring(c))