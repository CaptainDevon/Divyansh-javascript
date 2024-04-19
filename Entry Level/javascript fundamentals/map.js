let mpp=new Map();

//inserting elements in map 
mpp.set(1,"divyansh sinha");
mpp.set(2,"shashank chandra");
mpp.set(3,"ehteshamul hassan");
mpp.set(4,"Ayush kumar");
mpp.set(5,"omar khan");

console.log(mpp)

//fetching elements in map
console.log(mpp.get(4));
console.log(mpp.get("divyansh sinha")); //gives undefined

//finding the size of the map
console.log(mpp.size);

//deleting the elements in the map 
mpp.delete(3);
mpp.delete(2);
console.log(mpp);


