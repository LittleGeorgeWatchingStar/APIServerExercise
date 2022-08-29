
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import atmRouter from "./routes/atm.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/atm", atmRouter);

const CONNECTION_URL = "mongodb+srv://dbAdmin:db123456@cluster0.vhxerep.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);