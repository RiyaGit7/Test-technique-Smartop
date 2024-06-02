const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const surgeonRoutes = require('./routes/surgeonRoutes');  

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/surgeons', surgeonRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
