const mysqlObject = require('mysql')
require('dotenv/config')

module.exports = class DbConnectionHandler{
  #user
  #pass
  #host
  #database
  #conn
  constructor(){
    this.#host = process.env.hostname
    this.#user = process.env.db_user
    this.#pass = process.env.db_pass
    this.#database = 'book_shop'
    this.conn = ""
  }

  #connection(){
    this.conn = mysqlObject.createConnection({
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

  // connect(){
  //   this.#connection()
  //   this.conn.connect((err)=>{
  //     if(err){
  //       console.log('Database error: ', err.code.splice(0,20))
  //       this.conn = ""
  //     }
  //     console.log('Connection established')
  //   })
  // }

  // end(){
  //   this.conn.end((err)=>{
  //     if(err){
  //       console.log('Database finish error: ', err)
  //       this.conn = ""
  //     }
  //     console.log('Connection finished')
  //     this.conn = ""
  //   })
  // }
}

