const Createjob = require("../models/createjob")
 
exports.createjob = (req,res) =>{
    const job =  new Createjob(req.body);
    job.save((err,job)=>{
            if(err){
                return res.status(400).json({
                    err: "NOT able to save job in DB"
                  });
            }
       res.json({job})
    })
}

exports.job = (req,res)=>{
      Createjob.find({},(err,jobs)=>{
        if(err){
            return res.status(400).json({
                err: "cannot get information"
              });
        }
        res.json({jobs})
      })
}