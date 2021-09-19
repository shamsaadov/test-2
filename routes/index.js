const { Router } = require("express");
const axios = require("axios");
const Breed = require("../models/Breed");
const Dog = require("../models/Dog");

const router = Router();

router.get("/seed", async (req, res) => {
  try {
    const interval = setInterval(async () => {
      const breedCount = await Dog.countDocuments();
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      if (response.status === 200) {
        const [, breed, title] = response.data.message.match(
          /(\w+)\/([\w_-]+)\.jpg$/
        );
        let breedId;
        const candidate = await Breed.findOne({ name: breed });
        if (candidate) {
          breedId = candidate._id;
        } else {
          const newBreed = await Breed.create({ name: breed });
          breedId = newBreed._id;
        }
        try {
          if (breedCount <= 100) {
            const dog = await Dog.create({ name: title, breedId });
          } else {
            console.log("100");
            clearInterval(interval);
          }
          console.log(`added `);
        } catch (e) {
          console.log(`err: ${e.toString()}`);
        }
      } else {
        console.log("ошибка при запросе");
      }
    }, 150);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/breeds", async (req, res) => {
  const dog = await Dog.find().populate('breedId');
  return res.json(dog);
});

module.exports = router;
