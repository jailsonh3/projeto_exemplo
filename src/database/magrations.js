import { connection } from './dbconfig.js';

const database = {
    async init() {
        await connection.connect()
        //    MINHA QUERYS

        // await connection.query(`DROP TABLE IF EXISTS users`);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users(
                id int(4) AUTO_INCREMENT,
                nome varchar(30) NOT NULL,
                email varchar(50) UNIQUE,
                PRIMARY KEY (id)
            );`
        );


        await connection.end();

    }
}

database.init();