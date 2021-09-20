const { Router } = require("express");
const axios = require("axios");
const Breed = require("../models/Breed");
const Dog = require("../models/Dog");

const router = Router();

router.get("/seed", async () => {
  try {
    const interval = setInterval(async () => {
      const breedCount = await Dog.countDocuments();
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      if (response.status === 200) {
        const [, breed, title] = response.data.message.match(
          /([\w+_-]+)\/([\w_-]+)\.jpg$/
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
            await Dog.create({ name: title, breedId });
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

router.get("/dogs", async (req, res) => {
  const { search } = req.query;
  const page = parseInt(req.query.page, 10) || 1;

  const limit = 10;
  let count;

  const findCondition = {};

  if (search) {
    findCondition.name = new RegExp(search);
    count = await Dog.count(findCondition);
  } else {
    count = await Dog.countDocuments();
  }

  const dogs = await Dog.find(findCondition)
    .limit(limit)
    .skip(page * limit - limit)
    .populate("breedId");

  return res.json({ count, dogs });
});

module.exports = router;
