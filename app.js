const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(5000, () => {
  console.log('Server is running on port 5000.');  
})