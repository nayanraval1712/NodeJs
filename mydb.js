// creat a class and expoer other file  exprrt class 

class Database {
    //   creat a function 
    insert(sql) {
        console.log('insert sql command executed....')
    }
    update(sql) {
        console.log('update sql command executed....')
    }
    delete(sql) {
        console.log('delete sql command executed....')
    }
    select(sql) {
        console.log('select sql command executed....')
    }
}

module.exports.data = Database