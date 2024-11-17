export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.MYSQLHOST || 'localhost'
export const DB_USER = process.env.MYSQLUSER || 'root'
export const DB_PASSWORD = process.env.MYSQLPASSWORD || ''
export const DB_NAME = process.env.MYSQLDATABASE || 'usersdb'
export const DB_PORT = process.env.MYSQLPORT || 3306

console.log('Database Configuration:', {
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    port: DB_PORT
});