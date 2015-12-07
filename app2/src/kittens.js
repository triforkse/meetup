import mongo from 'mongoose';
mongo.connect('mongodb://db/test');

export const db = mongo.connection;
const kittySchema = mongo.Schema({
  name: String,
});

const Kitten = mongo.model('Kitten', kittySchema);

export function addKitten(name) {
  const kitten = new Kitten({ name: name });
  kitten.save();
}

export function getKittens() {
  const kittens = Kitten.find({}).exec();
  return kittens;
}

export function adoptAll() {
  const query = Kitten.find().remove({});
  query.exec();
}
