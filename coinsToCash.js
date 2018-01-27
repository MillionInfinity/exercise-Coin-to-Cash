var piggyBank={ pennies:5, dimes:58, nickels:3, quarters:60};
const value= { pennies:.01, dimes:.5, nickels: .1, quarters:.25}
let dollarAmount =0;

   let amountQuarters =value.quarters*(piggyBank.quarters*.25);
   let amountNickels = value.nickels*(piggyBank.nickels*.1); 
   let amountDimes = value.dimes*(piggyBank.dimes*.05);
   let amountPennies = value.pennies*(piggyBank.pennies*.01);

   dollarAmount+=amountQuarters;
   dollarAmount+=amountNickels;
   dollarAmount+=amountDimes;
   dollarAmount+=amountPennies;


console.log("the amount of dollar you have is $",dollarAmount);