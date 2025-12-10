import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// get __dirname local di ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// static
app.use(express.static(path.join(__dirname, 'allure-report')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'allure-report', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Allure Report running at http://localhost:${PORT}`);
});
