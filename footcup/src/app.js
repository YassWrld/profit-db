import express from 'express';
const port = process.env.PORT || 4125;
import helmet from 'helmet';
import "./core/db.js";
import router from './routers/index.js';
import crypto from 'crypto';

const app = express();


app.use(express.json());
app.use(helmet());

app.use('/', router);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

