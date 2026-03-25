import * as myModel from "../model/usersModel.js"

// metodo get = verbo get
export async function Get(req,res){
    try {
        const response = await myModel.Get();
        if (response.message.toLowerCase() == "success".toLowerCase() ) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
        
        
    } catch (error) {
        res.status(403).json({"message":"erro", "Error": error.message});
    }
}

export async function GetById(req,res) {
    try {
        const id = req.params.id;
        const response = await myModel.GetById(id);
        if (response.message.toLowerCase() == "success".toLowerCase() ) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
       res.status(403).json({"message":"erro", "Error": error.message});    
    }
}

export async function Delete(req,res) {
    try {
        const id = req.params.id;
        const response = await myModel.Delete(id);
        if (response.message.toLowerCase() == "success".toLowerCase() ) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
       res.status(403).json({"message":"erro", "Error": error.message});    
    }
}
