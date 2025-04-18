let s=new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(5);
s.add(5);
console.log(s);
console.log(s.size);

s.delete(3);
console.log(s);