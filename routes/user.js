import  Express from "express";
import passport from "passport";


const router= Express.Router()


router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"]
}))

router.get("/login",(req,res)=>{
    res.send("login now")
})
export default router