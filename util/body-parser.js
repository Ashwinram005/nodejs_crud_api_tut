module.exports=async(req)=>{
    return new Promise((resolve,reject)=>{
        try {
            let body='';
            req.on('data',(chunk)=>{
                body+=chunk.toString();
            })
            req.on('end',()=>{
                resolve(JSON.parse(body));
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}