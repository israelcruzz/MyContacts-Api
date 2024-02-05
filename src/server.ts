import express from 'express'
import routes from './routes'
import cors from 'cors'
import { config } from 'dotenv';
config();

const app = express()
const port = 3030

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log('🚀 Server Online')
})
