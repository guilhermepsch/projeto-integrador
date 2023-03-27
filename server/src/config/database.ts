export default {
  dialect: 'postgres',
  host: String(process.env.DBHOST),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  port: String(process.env.DBPORT),
  database: String(process.env.POSTGRES_DB),
  define: {
    timestamps: true,
    underscored: true,
  },
}