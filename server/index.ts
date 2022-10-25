import express, {Express, Request, Response} from 'express'
import cors from 'cors'

const port = '5000'

const app: Express = express()


// middleware
app.use(cors())
app.use(express.json)

app.listen(port, () => {
    console.log('Server has been started on port 5000')
    
})
