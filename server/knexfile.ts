import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database','database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
};

// Rodar as Migrations
// npx knex migrate:latest --knexfile knexfile.ts migrate:latest