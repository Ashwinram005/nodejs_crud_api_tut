const crypto=require("crypto");
const reqbodyparser=require("../util/body-parser");
const writeToFile=require("../util/write-to-file");
module.exports=async(req,res)=>{
    
    if(req.url==="/api/movies"){
        try {
            const body=await reqbodyparser(req);
            body.id=crypto.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201,{"Content-Type":"application/json"});
            console.log("Request body",body);
            res.end();
        } catch (error){
            res.writeHead(400,{"Content-Type":"application/json"});
            res.end(JSON.stringify({"error":error.message}));
        }
    }
}