
var beer = prompt("how many verses do you want to hear?")
var numberBeers = ["1 beer", "2 beers", "3 beers", "4 beers", "5 beers"]

for (i = 5; i >= 0; i--) {
if(i >1) {
	console.log(i + ' bottles of beer on the wall,  ' + i + ' bottles of beer. You take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.')
} else {
	console.log('1 bottle of beer on the wall, 1 bottle of beer. You take one down and pass it around, no more bottles of beer on the wall.')
}
}