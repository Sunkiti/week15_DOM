const shirtprice = +document.getElementById ("shirt_price").textContent
console.log (shirtprice);
const skirtprice = +document.getElementById ("skirt_price").textContent
console.log (skirtprice);
const jeansprice = +document.getElementById ("jeans_price").textContent
console.log (jeansprice);
const shirtprice2 = +document.getElementById ("shirt2_price").textContent
console.log (shirtprice2);
function sum (shirtprice, skirtprice, jeansprice, shirtprice2) {
    return shirtprice + skirtprice + jeansprice + shirtprice2;
}
console.log (sum);
function final () {
    return total * 0.8
}
// alert (final);