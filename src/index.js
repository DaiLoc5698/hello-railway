import express from 'express';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const APP_HOST = '0.0.0.0'
const APP_PORT = 8080

app.get('/contacts', async (req, res) => {
  try {
    res.send('GET contacts')
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

app.post('/contacts', async (req, res) => {
  try {
    res.send('POST contacts', req.body)
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

app.get('/contacts/:id', async (req, res) => {
  try {
    res.send('GET contacts', req.params.id)
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

app.put('/contacts/:id', async (req, res) => {
  try {
    res.send('PUT contacts', { ...req.body, id: req.params.id })
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

app.delete('/contacts/:id', async (req, res) => {
  try {
    res.send('DELETE contacts', req.params.id)
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`Example app listening on http://${APP_HOST}:${APP_PORT}`)
})

export default app;