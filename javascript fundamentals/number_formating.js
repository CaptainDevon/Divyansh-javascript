//rounding number to integer
let num1=5.748578;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`floor: ${Math.floor(num1)}`);

//fixed
let fixed=num1.toFixed(3);
console.log(`Fixed type: ${typeof(fixed)} fixed value:${fixed}`);

//diaply in locale-specifi format
let num2=1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);
console.log(`Greece: ${num2.toLocaleString('en-EL')}`);
console.log(`Bangladesh: ${num2.toLocaleString('bg-BG')}`);
console.log(`Punjab: ${num2.toLocaleString('pa-PA')}`);


//format internation currency
let salary=100000;
let monthlysalary=salary/12;
console.log(`monthly salary: ${monthlysalary.toFixed(2)}`);

let formatter = Intl.NumberFormat('en-US',{style: 'currency',currency:'USD'});
console.log(`US Dollars: ${formatter.format(monthlysalary)}`);

let formatter1 = Intl.NumberFormat('de-DE',{style: 'currency',currency:'EUR'});
console.log(`Euros: ${formatter1.format(monthlysalary)}`);

let formatter2 = Intl.NumberFormat('ja-JA',{style: 'currency',currency:'JPY'});
console.log(`Yen: ${formatter2.format(monthlysalary)}`);

let formatter3 = Intl.NumberFormat('zh-HK',{style: 'currency',currency:'HKD'});
console.log(`Hong kong dollars: ${formatter3.format(monthlysalary)}`);

