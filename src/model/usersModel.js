import { pool } from "../databases/connectionMysql.js"

export async function Get ()  {
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

export async function Post( data ){
    try {
        const {userName, userPassword} = data;
        const [results, fields] = await pool.execute(
            'INSERT INTO `users` (userName, userPassword) VALUES ( ? , ?)',
            [userName , userPassword]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}

export async function Put( data, id ){
    try {
        const {userName, userPassword} = data;
        const [results, fields] = await pool.execute(
            'UPDATE `users` SET userName = ?, userPassword = ? WHERE id = ?',
            [userName , userPassword, id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}