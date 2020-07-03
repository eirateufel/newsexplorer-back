require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
const middlewares = require('./middlewares/index');
const databaseUrl = require('./utils/databaseAddres');

const { PORT = 3000 } = process.env;
const { MONGO_URL = databaseUrl } = process.env;
const corsOptions = {
	origin: 'http://84.201.181.215:3000/',
	credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
})
	.then(() => console.log('Соединение с базой данных установлено'))
	.catch((err) => console.log(err.message));

app.use(middlewares);
app.use(routes);

app.listen(PORT, () => {
	console.log(`I'm running on port ${PORT}`);
});
