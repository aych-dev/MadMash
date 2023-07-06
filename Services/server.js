const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const url = `https://rpc.helius.xyz/?api-key=${process.env.API_KEY}`;
    const { data } = await axios.post(url, {
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByGroup',
      params: {
        groupKey: 'collection',
        groupValue: 'J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w',
        page: 1,
        limit: 1000,
      },
    });
    const { result } = data;
    res.json(result.items);
  } catch (err) {
    console.error('Error retrieving assets by group:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server is running ${PORT}`));
