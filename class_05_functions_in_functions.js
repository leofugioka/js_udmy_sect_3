function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));
