import { pool } from "../db.js"


export const getPaises = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM paises')
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getPais = async (req, res) => {
    
    try {

        const [rows] = await pool.query('SELECT * FROM paises WHERE id = ?', [req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message : 'País not found'
        })
    
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}


export const createPais = async (req, res) => {
    
    try {
        const {id, name, continent, group, landmarks, teamready, typedby} = req.body
        const rows = await pool.query('INSERT INTO paises (`id`, `name`, `continent`, `group`, `landmarks`, `teamready`, `typedby`) VALUES (?, ?, ?, ?, ?, ?, ?)',[id, name, continent, group, landmarks, teamready, typedby])
        // console.log('rr:', rows);
        // console.log('Datos del body:', id, name, continent, group, landmarks, teamready, typedby);
        
        res.send({
            id,
            name,
            continent,
            group,
            landmarks,
            teamready,
            typedby
        })  
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const deletePais = async (req, res) => {
    try {

        const [result] = await pool.query('DELETE FROM paises WHERE id = ?',[req.params.id]) 
        if( result.affectedRows <= 0) return res.status(404).json({
            message: 'País not found'
        })
    
        res.sendStatus (204)

    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}


export const updatePais = async (req, res) => {

    try {
        const {id} = req.params
        const {name, continent, group, landmarks, teamready, typedby} = req.body
        const [result] = await pool.query('UPDATE paises SET `name` = IFNULL(?, name), `continent` = IFNULL(?, `continent`), `group` = IFNULL(?, `group`), `landmarks` = IFNULL(?, `landmarks`), `teamready` = IFNULL(?, `teamready`), `typedby` = IFNULL(?, `typedby`)  WHERE id = ?', [name, continent, group, landmarks, teamready, typedby, id])
        
        // console.log('Datos del body:', id, name, continent, group, landmarks, teamready, typedby);

        if( result.affectedRows === 0) return res.status(404).json({
            message: 'Pais not found'
        })
    
        const [rows] = await pool.query('SELECT * FROM paises WHERE id = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

