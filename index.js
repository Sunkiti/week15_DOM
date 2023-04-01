const shirtprice = document.getElementById ("shirt")
console.log (shirtprice);
const skirtprice = document.getElementById ("skirt")
console.log (skirtprice);
const jeansprice = document.getElementById ("jeans")
console.log (jeansprice);
const shirtprice2 = document.getElementById ("shirt2")
console.log (shirtprice2);
function total () {
    shirtprice + skirtprice + jeansprice + shirtprice2
}
console.log (total);
function final () {
    return total * 0.8
}
// alert (final);