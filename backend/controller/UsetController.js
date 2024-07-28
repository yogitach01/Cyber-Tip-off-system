import user from "../model/User.js";
import tip from "../model/Tip.js";
import { spawn } from 'child_process';
export const addUser=async (request,response)=>{
   try{ 
    console.log(request.body);
       let exist=await user.findOne({email: request.body.email});
       if(exist){
        response.status(200).json('user already exist');
        return;
       }
    const newuser= new user(request.body);
    await newuser.save();
    response.status(200).json(newuser);
    }
   catch(error){
       response.status(500).json(error);
   }
}

export const addTip=async (request,response)=>{
    try{ 
    
     const newuser= new tip(request.body);
     await newuser.save();
     response.status(200).json(newuser);
     }
    catch(error){
        response.status(500).json(error);
    }
 }

export const checkscoure = async (request, response) => {
    try {
        console.log(request.body);
    const no1=request.body.no1;
    const no2=request.body.no2;
    const  no3= request.body.no3 ;
    const no4 = request.body.no4 ;
    const no5  = request.body.no5 ;
    const no6 = request.body.no6 ;
    const predict= [no1,no2,no3,no4,no5,no6];
    console.log(no1);
   const py    = spawn('python', ['./controller/score.py',predict]);
    py.stdout.on('data', (data)=>{
    console.log(data.toString());
     response.status(200).json(data.toString());
    });
    py.stderr.on('data',(data)=>{
        console.log(data.toString());
    });
    } catch(error){
        response.status(500).json('error',error.message);
    }
}



export const resetpassword=async (request,response)=>{
     console.log(request.body);
    response.status(200).json(request.body);
}


export const getUser=async (request,response)=>{
    try{
      const us= await user.find({});
      response.status(200).json(us);
    }catch(error){
        response.status(500).json(error);
    }
}
export const getTip=async (request,response)=>{
    try{
      const us= await tip.find({});
      response.status(200).json(us);
    }catch(error){
        response.status(500).json(error);
    }
}