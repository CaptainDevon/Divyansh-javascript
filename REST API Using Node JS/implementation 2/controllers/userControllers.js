import User from '../entity/users.js'; 

export  const getAllUsers=async(req,res)=>{
        try
        {
            const users=await User.find();
            res.json(users);
        }
        catch(e)
        {
            res.json(e);
        }
};

export const getUserById=async(req,res)=>{
    try
    {
        const {id}=req.params;
        const user=await User.findById(id);
        if(!user)res.json({"message":"the user was not found"});
        res.json(user);
    }
    catch(e)
    {
        res.json(e);
    }
};

export const createUser=async(req,res)=>{
    try
    {
        const {firstName,middleName,lastName,email,age}=req.body;
        const newUser=new User({firstName,middleName,lastName,email,age});
        await newUser.save();
        res.json(newUser);
    }
    catch(e)
    {
        res.json(e);
    }
};

export const deleteUserById=async(req,res)=>{
    try
    {
        const{id}=req.params;
        const user=await User.findOneAndDelete({_id:id});
        if(!user)res.json({"message":"the user was not found"});
        res.send({message:"user deleted sucessfully",user});
    }
    catch(e)
    {
        res.json(e);
    }
};

export const updateUserById=async(req,res)=>{
    try
    {
        const {id}=req.params;
        const {firstName,middleName,lastName,email,age}=req.body;
        const user=await User.findById(id);

        if(firstName) user.firstName=firstName;
        if(middleName) user.middleName=middleName;
        if(lastName) user.lastName=lastName;
        if(email) user.email=email;
        if(age) user.age=age;

        await user.save();
        res.send({"message":"The updation have been made",user});
    }
    catch(e)
    {
        res.json(e);
    }
}