const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmatros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

/**
 * Banco de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * Banco não relacional - NoSQL: MongoDB, CouchDB, etc 
 */


 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


