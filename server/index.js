require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
});