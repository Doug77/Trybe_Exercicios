import express from 'express';
// eslint-disable-next-line import/no-unresolved
import Plants from './Plants';

const app = express();

app.use(express.json());

app.get('/plants', async (_req, res) => {
  const plants = await new Plants().getPlants();

  res.send(plants);
});

app.get('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plants = await new Plants().getPlantById(id);

  res.send(plants);
});

app.delete('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plants = await new Plants().removePlantById(id);

  res.send(plants);
});

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000');
});