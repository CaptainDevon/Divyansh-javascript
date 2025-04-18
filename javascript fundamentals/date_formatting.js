let date=new Date("January 9,2004");
console.log(`date: ${date}`);

//diaplay calender date
console.log(`date: ${date.toDateString()}`);
// display a locale-string date
console.log(`USA: ${date.toLocaleDateString('en-US')}`);
console.log(`england: ${date.toLocaleDateString('en-GB')}`);
console.log(`Japan: ${date.toLocaleDateString('ja-JP')}`);


