const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Enter name!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit"
});

// mango.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Emily",
//   age: 12,
//   favFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Awesome"
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Sour"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 4,
//   review: "Weird"
// });

// Fruit.insertMany([kiwi, orange, banana], err => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully inserted");
//   }
// });

Fruit.find((err, fruits) => {
  if(err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(fruit => {
      console.log(fruit.name);
    })
  }
});

// Fruit.deleteOne({
//       _id: "61305ebc043690557ccd37cd"
//     }, err => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted");
//   }
// })

// Person.updateOne({
//       _id: '612e53559adc8a2bf8a304a9'
//     }, {
//       favFruit: mango
//     }, err => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated");
//   }
// })