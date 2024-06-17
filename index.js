import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
    origin : process.env.CORS_URL,
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  }))
app.use(express.json());

const { CORS_URL } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));