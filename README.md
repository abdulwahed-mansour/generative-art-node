
### usage:

```sh
git clone https://github.com/HashLips/generative-art-node

npm install
```

## Usage

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. Optionally, append '_r' and '_sr' to the layer file names to make those layer files rare or super rare respectively. 

*Example:* If you had an ball layer you would create a ball directory, and then a file might be called:

- `red_eye_ball_sr.png`
- `red_eye_ball_r.png`
- `red_eye_ball.png`

> Rarity is customizable in `src/config.js`.


```js
const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'ball', number: 2 },
    { name: 'eye color', number: 12 },
    { name: 'iris', number: 3 },
    { name: 'shine', number: 1 },
    { name: 'bottom lid', number: 3 },
    { name: 'top lid', number: 3 },
];
```



```sh
npm run build
```
