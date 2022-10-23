import { pool } from "../db.js"


export const getFiguritas = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM figuritas')
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getFigurita = async (req, res) => {
    
    try {

        const [rows] = await pool.query('SELECT * FROM figuritas WHERE id = ?', [req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message : 'Sticker not found'
        })
    
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}


export const createFigurita = async (req, res) => {
    
    try {
        const {id, idpais, namepais, nameplayer, latengo, esrepetida} = req.body
        const rows = await pool.query('INSERT INTO figuritas (`id`, `idpais`, `namepais`, `nameplayer`, `latengo`, `esrepetida`) VALUES (?, ?, ?, ?, ?, ?)',[id, idpais, namepais, nameplayer, latengo, esrepetida])
        // console.log('rr:', rows);
        // console.log('Datos del body:', id, name, continent, group, landmarks, teamready, typedby);
        
        res.send({
            id,
            idpais,
            namepais,
            nameplayer,
            latengo,
            esrepetida
        })  
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const deleteFigurita = async (req, res) => {
    try {

        const [result] = await pool.query('DELETE FROM figuritas WHERE id = ?',[req.params.id]) 
        if( result.affectedRows <= 0) return res.status(404).json({
            message: 'Sticker not found'
        })
    
        res.sendStatus (204)

    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}



export const updateFigurita = async (req, res) => {

    try {
        const {id} = req.params
        const { nameplayer, latengo, esrepetida } = req.body
        const [result] = await pool.query('UPDATE figuritas SET `nameplayer` = IFNULL(?, nameplayer), `latengo` = IFNULL(?, `latengo`), `esrepetida` = IFNULL(?, `esrepetida`)  WHERE id = ?', [nameplayer, latengo, esrepetida, id])
        
        // console.log('Datos del body:', id, name, continent, group, landmarks, teamready, typedby);

        if( result.affectedRows === 0) return res.status(404).json({
            message: 'Sticker not found'
        })
    
        const [rows] = await pool.query('SELECT * FROM figuritas WHERE id = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

