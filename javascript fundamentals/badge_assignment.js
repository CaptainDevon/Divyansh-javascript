let badge_color;
let years=19;
if(years<5)
{
    badge_color="Blue";
}
else if(years<10)
{
    badge_color="yellow";
}
else if(years<15)
{
    badge_color="red";
}
else if(years<20)
{
    badge_color="purple";
}
else
{
    badge_color="silver";;
}
console.log(`the colour of your badge is : ${badge_color}`);
