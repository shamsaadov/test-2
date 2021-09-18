const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  breedId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Breed",
  },
});

const Dog = mongoose.model("Dog", dogSchema);
module.exports = Dog;
