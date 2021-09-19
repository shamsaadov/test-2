export const getImageUrl = (dog) => {
  return `https://images.dog.ceo/breeds/${dog.breedId.name}/${dog.name}.jpg`;
};
