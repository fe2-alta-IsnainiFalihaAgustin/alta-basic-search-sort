function maximumBuyProduct(money, productPrice) {

  let arrSort = productPrice.sort(function(a, b) {return a - b})
  let total = 0
  let produk = 0

  for (let i = 0; i < arrSort.length; i++){
    total += arrSort[i]
    if (total <= money){
      produk++
    }
  }
  return produk
}
console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000]))      // 3
console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])); // 4
console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000]));   // 4
console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000]));           // 1
console.log(maximumBuyProduct(0, [10000, 30000])  );  