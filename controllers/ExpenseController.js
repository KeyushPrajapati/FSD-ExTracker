// const { model } = require("mongoose");
const Expense = require("./../models/Expensemodel");
const User = require("./../models/Usermodel");

module.exports.userExpenses = async(req,res)=>
{
    try{
        const {date,expensecate,price} = req.body;
        const token = req.cookies.token;
    // Check user logged in or not ( if token is generated that means user is exist in database ) 
      if (token) {
        const data = jwt.verify(token, 'DSGIDG54646');
        
        const exCheckData = await Expense.findOne({email:data.email})
        // new data comes from frontend
        const exData = {
            email:data.email,
            expenseList:[{ 
                expensesName:expensecate,
                expenseDate:date,
                expensePrice:price
            }]
        }
        // check the user exist in ExpenseData Collections 
        if (exCheckData){
            const enterFirstData = await Expense.insertMany([exData])
            console.log(enterFirstData)
        }
        else{
            // If user can insert more data then I will update that user document.
            const enterMulData = await Expense.updateOne({email:data.email}, {expenseList:[{ 
                expensesName:expensecate,
                expenseDate:date,
                expensePrice:price
            }]})
        }
       }
       else {
        return res.json({
          message: "No token found",
        });
      }

    }catch(err)
    {
        console.log('ExpenseController !!'+err)
    }
};
module.exports.prevData = async(req,res)=>{
    try{
        const token = req.cookies.token;
    // Check user logged in or not ( if token is generated that means user is exist in DB ) 
      if (token) {
        const data = jwt.verify(token, 'DSGIDG54646');
        const userFind = await Expense.findOne({email:data.email}, { _id: 0,email:0 ,expenseList: 1 })
        res.json(userFind);
        }
    }
    catch(err)
    {
        console.log('prevData !!'+err)
    }
    
};