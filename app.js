import Express  from "express";
import dotenv from "dotenv"
import {connectPassport} from './utils/provider.js';
import session from "express-session";
import passport from "passport";

const app= Express()
export default app;
dotenv.config({
    path:"./config/config.env"
})

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session())

connectPassport()