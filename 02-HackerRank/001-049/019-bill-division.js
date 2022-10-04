function bonAppetit(bill, k, b) {
  // Write your code here
  let priceNotEat = bill[k];
  let totalCost = 0;
  for(let i=0; i<bill.length; i++)
      totalCost += bill[i];
  let sharedCost = (totalCost - priceNotEat)/2
  if(sharedCost == b)
      console.log("Bon Appetit")
  else
      console.log(b - sharedCost)
}

let bill = [3, 10, 2, 9];
let k = 1;
let b = 12;

bonAppetit(bill, k, b);

bill = [3, 10, 2, 9];
k = 1;
b = 7;

bonAppetit(bill, k, b);
