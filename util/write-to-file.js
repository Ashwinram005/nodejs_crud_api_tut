const fs=require("fs");
const path=require("path");
module.exports=async(content)=>{
    console.log(content);
    try{
        await fs.writeFileSync(path.join(__dirname,"..","data","movies.json"),JSON.stringify(content),"utf-8");
    }catch(err){
        
        console.log(err);
    }
}