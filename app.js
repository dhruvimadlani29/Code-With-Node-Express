import express from 'express';
import { PORT } from './env.js';
const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.get('/form', (req, res) => {
  return res.send(`
      <div class="container">
        <h1>URL Shortener</h1>
        <form id="shorten-form">
          <div>
            <label for="url">Enter URL</label>
            <input type="url" id="url" name="url" required />
          </div>
          <div>
            <label for="shortCode">Enter Short Code</label>
            <input type="text" id="shortCode" name="shortCode" required />
          </div>
          <button type="submit">Shorten</button>
        </form>
        <h2>Shortened URL</h2>
        <ul id="shortened-urls"></ul>
      </div>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});
