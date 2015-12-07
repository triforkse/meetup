import express from 'express';
import * as kittens from './kittens';
const app = express();

app.get('/', (req, res) => {
  kittens.getKittens().then((kittenArray) => {
    res.json(kittenArray.map(kitten => kitten.name));
  });
});

app.get('/add/:kitten', (req, res) => {
  kittens.addKitten(req.params.kitten);
  res.json({
    success: true,
    msg: 'Added kitten ' + req.params.kitten,
  });
});

app.get('/add', (req, res) => {
  ['Misty', 'Princess', 'Kitty', 'Fluffy', 'Whiskers',
   'Midnight', 'Simba', 'Smudge', 'Lucky', 'Bandit']
   .map(kitten => kittens.addKitten(kitten));

  res.json({
    success: true,
    msg: '10 kittens found!',
  });
});

app.get('/adoptall', (req, res) => {
  kittens.adoptAll();
  res.json({
    success: true,
    msg: 'All kittens got adopted!',
  });
});

app.listen(3000, () => {
  console.log('Running on port 3000'); // eslint-disable-line
});
