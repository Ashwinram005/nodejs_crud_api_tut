module.exports=(req,res)=>{
    let baseUrl=req.url.substring(0,req.url.lastIndexOf("/")+1);
    console.log(baseUrl);
    let id=req.url.split("/")[3];
    const regexV4=new RegExp(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi);
    // console.log(id);
    if(req.url=="/api/movies"){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else if(!regexV4.test(id)){
        res.writeHead(400,{"ContentType": "application/json"});
        res.end(JSON.stringify({title:"Validation Failed",message: 'UUID is not valid'}))
    }
    else if(regexV4.test(id)){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        let filteredMovie=req.movies.filter((movie)=>{
            return movie.id===id;
        })
        res.write(JSON.stringify(filteredMovie));
    }
    else{
        res.writeHead(404,{"ContentType": "application/json"});
        res.end(JSON.stringify({title:"Not Found",message: 'Route not found'}))
    }
}