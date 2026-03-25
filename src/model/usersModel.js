import { pool } from "../databases/connectionMysql.js"

export async function Get ( req, res)  {
    try {
        const [results, fields] = await pool.execute(
            'SELECT * FROM `users` ORDER BY `userName` '
        );
        return {"message":"Success","data":results} ;
        console.log(results); 
        // console.log(fields); 
        //res.status(202).json();
    } catch (error) {
        console.log(error);
        return {"message": "error", "Error": error.message}
        // res.status(403).json({"message": err})
    }
}

export async function GetById(id){
    try {
        const [results, fields] = await pool.execute(
            'SELECT * FROM `users` WHERE id = ? ORDER BY `userName` ',
            [id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}


export async function Delete(id){
    try {
        const [results, fields] = await pool.execute(
            'DELETE FROM `users` WHERE id = ?',
            [id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}