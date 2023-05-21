import sql from 'mssql'
import sqlConfig from './sqlConfig'

let connection = null

async function connect() {
    try {
        connection = await sql.connect(sqlConfig)
        console.log('Connected to sql server')
    } catch (error) {
        console.error('Error connecting to sql server:', error)
    }
}

async function disconnect() {
    try {
        await connection.close()
        console.log('Disconnected from sql server')
    } catch (error) {
        console.error('Error disconnecting from sql server:', error)
    }
}

export { connect, disconnect }