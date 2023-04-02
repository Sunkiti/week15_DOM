const shirtprice = +document.getElementById ("shirt_price").textContent
console.log (shirtprice);
const skirtprice = +document.getElementById ("skirt_price").textContent
console.log (skirtprice);
const jeansprice = +document.getElementById ("jeans_price").textContent
console.log (jeansprice);
const shirtprice2 = +document.getElementById ("shirt2_price").textContent
console.log (shirtprice2);
const total = shirtprice + skirtprice + jeansprice + shirtprice2;
console.log (total);
const discount = () => {
    document.querySelector('.contaner__finalprice_total').innerHTML = 
    total * 0.8;
}
