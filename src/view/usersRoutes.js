import { Router } from "express";
import * as mycontroller from "../controller/usersController.js"

const endPoint = "/users";

const router = Router();

router.get( `${endPoint}`, (req,res)=>{ mycontroller.Get(req,res) });
router.get( `${endPoint}/:id`, (req,res)=>{ mycontroller.GetById(req,res) });
router.delete( `${endPoint}/:id`, (req,res)=>{ mycontroller.Delete(req,res) });
export default router;