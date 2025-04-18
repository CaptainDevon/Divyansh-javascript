import { v4 as uuidv4 } from 'uuid';
let users=[];

export const getUsers=(req,res)=>
    {
        res.send(users);
    }

export const getUserById=(req,res)=>
    {
        const {id}=req.params;
        const fetchUser=users.find((i)=>i.id==id);
        res.send(fetchUser);
    }


export const addUser=(req,res)=>
    {
        const user=req.body;
        users.push({...user,id:uuidv4()});
        res.send(`user with the userName ${user.firstName} ${user.lastName} is added`)
    }


export const deleteUser=(req,res)=>
    {
        const {id}=req.params;
        users=users.filter((i)=>i.id!=id);
        res.send(`the user has been deleted from the database`);
    }

export const updateUser=(req,res)=>
    {
        const {id}=req.params;
        const{firstName,lastName,age}=req.body;
        const user=users.find((i)=>i.id==id);

        if(firstName)
        {
            user.firstName=firstName;
        }

        if(lastName)
        {
            user.lastName=lastName;
        }
        if(age)
        {
            user.age=age;
        }

        res.send('the updations have been made');
    }