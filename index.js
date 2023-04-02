const shirtprice = document.getElementById ("shirt_price").textContent
console.log (shirtprice);
Number (shirtprice);
const skirtprice = document.getElementById ("skirt_price").textContent
console.log (skirtprice);
Number (skirtprice);
const jeansprice = document.getElementById ("jeans_price").textContent
console.log (jeansprice);
Number (jeansprice);
const shirtprice2 = document.getElementById ("shirt2_price").textContent
console.log (shirtprice2);
Number (shirtprice2);
function total () {
    shirtprice + skirtprice + jeansprice + shirtprice2
}
console.log (total);
function final () {
    return total * 0.8
}
// alert (final);