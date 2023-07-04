const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { groupKey, groupValue, page, limit } = req.body;
    const url = `https://rpc.helius.xyz/?api-key=${process.env.API_KEY}`;

    const { data } = await axios.post(url, {
      params: {
        groupKey,
        groupValue,
        page,
        limit,
      },
    });
    res.json(data.items);
  } catch (err) {
    console.error('Error retrieving assets by group:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log('Server is running'));
