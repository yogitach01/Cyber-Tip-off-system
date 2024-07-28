import mongoose from 'mongoose';
const connection=async ()=>{
    const url=`mongodb+srv://Admin:Aniket193@cybertipline.l3zt1fy.mongodb.net/?retryWrites=true&w=majority`;
    try{
    await mongoose.connect(url,{useUnifiedTopology:  true ,useNewUrlParser:true });
    console.log('database connected'); 
    }
    catch(error){
        console.log("error while connedcting",error);
    }
}
export default connection;