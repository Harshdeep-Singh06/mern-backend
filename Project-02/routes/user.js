const express = require("express");

const router = express.Router();

// router.get('/users',async (req,res)=>{
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//      ${allDbUsers.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html)
// })

//REST API

router.get('/', async(req,res)=>{
    const allDbUsers = await User.find({});
    res.setHeader("X-MyName","Harshdeep Singh") //Custom HEADER
    // Always use X to CUSTOM HEADERS
    // console.log(req.headers)
    return res.json(allDbUsers);
})

router
.route("/:id")
.get(async(req,res)=>{
    const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);
    if (!user) return res.status(404).json({error:"user not found"});
    return res.json(user);
})
.patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
    return res.json({status:"Success"})
})
.delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"Success"})
})

router.post("/",async (req,res)=>{
    const body = req.body;
    if(!body || !body.first_name ||!body.email|| !body.gender || !body.job_title ||! body.last_name){
        return res.status(400).json({msg: 'All field are required...'})
    }
    // // console.log('Body', body);
    // users.push({...body,id:users.length+1});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status:"Success",id:users.length})
    // })
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    // console.log("result",result);
    return res.status(201).json({msg:"success"});
})

module.exports = router;