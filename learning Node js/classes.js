class person{
    constructor(name){
        this.name=name;
    }
    greet()
    {
        console.log(`hello ${this.name}`);
    }
}

class student extends person{
    constructor(name,level)
    {
        super(name);
        this.level=level;
    }
    greet(){
        console.log(`hello ${this.name} from ${this.level}`);
    }
}

const a1=new person("divyansh sinha");
const a2=new student("shashank","4th year");
const a3=new student("Raginee","2nd year");

a3.greet=()=>console.log("i am special");
a1.greet();
a2.greet();
a3.greet();