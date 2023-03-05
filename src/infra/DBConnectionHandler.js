const mysql = require('mysql')
require('dotenv/config')

// module.exports = class DbConnectionHandler{
class DbConnectionHandler{
  #user
  #pass
  #host
  #database
  #port
  #db
  constructor(db = "sqlite"){
    this.#host = process.env.hostname
    this.#user = process.env.db_user
    this.#pass = process.env.db_pass
    this.#port = process.env.db_port
    this.#database = 'book_shop'
    this.#db = db
    this.conn = ""
  }

  #connection(){
    this.conn = this.#db.createConnection({
      host:this.#host,
      user:this.#user,
      password: this.#pass,
      database: this.#database
    })
  }

  createConnection(){
    if(this.conn instanceof String) throw new Error("Connection element empty")
    this.#connection()
    return this.conn

  }
}

// const c = new DbConnectionHandler(mysql).createConnection()
// c.connect()
// c.query("select * from customers",(err, data)=>{
//   data.forEach(element => {
//     console.log(element.id, element.first_name, element.last_name)
//   });
// })
// c.end()

