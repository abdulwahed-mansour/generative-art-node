const layersOrder = [
    { name: 'Background', number: 4 },
    { name: 'Head', number: 3 },
    { name: 'Face', number: 3 },
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 50;

module.exports = { layersOrder, format, rarity, defaultEdition };