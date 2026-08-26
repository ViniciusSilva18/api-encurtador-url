'use strict';
const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');
const QRCode = require('qrcode');
const app = express();
app.use(cors()); app.use(express.json());
const urls = new Map();

app.get('/', (req, res) => res.json({ service: 'URL Shortener API', endpoints: ['POST /shorten', 'GET /:code', 'GET /:code/stats', 'GET /:code/qr'] }));

app.post('/shorten', (req, res) => {
  const { url, alias } = req.body;
  if (!url) return res.status(400).json({ error: 'URL é obrigatória.' });
  try { new URL(url); } catch { return res.status(400).json({ error: 'URL inválida.' }); }
  const code = alias || nanoid(6);
  if (urls.has(code)) return res.status(409).json({ error: 'Alias já existe.' });
  urls.set(code, { url, code, clicks: 0, createdAt: new Date().toISOString(), lastClick: null });
  const short = `http://localhost:3000/${code}`;
  res.status(201).json({ short, code, original: url });
});

app.get('/:code', (req, res) => {
  const entry = urls.get(req.params.code);
  if (!entry) return res.status(404).json({ error: 'URL não encontrada.' });
  entry.clicks++; entry.lastClick = new Date().toISOString();
  res.redirect(302, entry.url);
});

app.get('/:code/stats', (req, res) => {
  const entry = urls.get(req.params.code);
  if (!entry) return res.status(404).json({ error: 'URL não encontrada.' });
  res.json(entry);
});

app.get('/:code/qr', async (req, res) => {
  const entry = urls.get(req.params.code);
  if (!entry) return res.status(404).json({ error: 'URL não encontrada.' });
  const qr = await QRCode.toDataURL(entry.url);
  res.json({ qr, url: entry.url });
});

app.listen(3000, () => console.log('🔗 URL Shortener em http://localhost:3000'));
