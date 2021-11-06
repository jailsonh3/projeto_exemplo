import { connection } from '../database/dbconfig.js';

class UserController {
    async create(request, response) {
        try {
            const { nome, email } = request.body;

            const sql = 'INSERT INTO users(nome, email) VALUES(?, ?)';
            const values = [nome, email];

            await connection.execute(sql, values);

            return response.status(201).send();

        } catch (error) {
                return response.status(400).json({error: error.message})
        }
    }

    async show(request, response) {
        const querySql = 'SELECT * FROM users';

        const [data, ] = await connection.execute(querySql);
   
        console.log(data)
   
        return response.render('index', {data});
    }
}

export { UserController }