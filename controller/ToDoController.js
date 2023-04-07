// const {Todo}=require('../model/todo')

const { todo } = require("../model/todo");

exports.getTask = async (req, res) => {
  try {
    const coun=[1,2,3,4,5,6,7,8,9]
    const result = await todo.find({status:"pending"})
    console.log(result);
    if (!result) console.log(result[0].task);
    // res.json(result)
    const count= await todo.find({status:("pending")}).count()
    console.log();

    const deleteCount=await todo.find({status:("deleted")}).count()
    const deleted=await todo.find({status:("deleted")})
    const complated=await todo.find({status:("complated")}).count()
    const complat=await todo.find({status:("complated")})
    console.log(deleteCount);
    console.log();
    // res.render("index", { result ,count:count,deleteCount,complated});
    res.render("index",{result,count,deleteCount,complated,deleted,complat,coun})
  } catch (error) {
    console.log(error);
  }
};

exports.addtask = async (req, res) => {
  try {
    
      console.log(req.body.praority);
      console.log("sddd");
      const todoTask = {
        task: req.body.task,
        status: "pending",
        priority: req.body.praority,
      };
      await todo.create(todoTask);
      res.redirect("back");
    
      
    
  } catch (error) {
    console.log(error);
  }
};

exports.deletetask = async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;

    await todo.updateOne({_id:(id)},{
        $set:{
            status:"deleted"
        }
    });
    res.redirect("back");
  } catch (error) {
    console.log(error);
  }
};

exports.complatetask= async(req,res)=>{
    try {
        console.log("eeeeeeeeeee");
        console.log(req.params.id);
const id=req.params.id
        
    await todo.updateOne({_id:(id)},{
        $set:{
            status:"complated"
        }
    });
    res.redirect("back");
    } catch (error) {
        console.log(error);
        
    }
}



exports.perdelete=async(req,res)=>{
  try {
    const id=req.params.id
    console.log(id,'oooooooooooooooo');
    await todo.deleteOne({_id:(id)})
    res.redirect("back");
  } catch (error) {
    console.log(error);
    
  }

}