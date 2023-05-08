import { DataSource } from 'typeorm';

const SqliteConnection = new DataSource({
  type: 'sqlite',
  database: 'api',
  entities: ['./src/Entities/**/*.ts'],
  synchronize: true,
});

SqliteConnection.initialize()
  .then(() => console.log('Conexão com banco realizada'))
  .catch(err => console.log(`Erro ao realizar conexão com o banco ${err}`));

export { SqliteConnection };
