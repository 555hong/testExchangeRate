import express, { Express } from 'express'
import routes from './routes'
import helmet from 'helmet'
import cors from 'cors'
const app: Express = express()

app.use(
    cors({
      origin: '*',
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      preflightContinue: true,
      optionsSuccessStatus: 200,
      exposedHeaders: ['Content-Disposition'],
    }),
)
app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: false,
      noSniff: false,
    }),
)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)

routes.initialRoutes(app)
export default app