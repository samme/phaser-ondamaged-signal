It's dispatched after damage is applied but **before** the sprite is killed (if necessary).

```javascript
var sprite = game.add.sprite();

sprite.onDamaged.add(function (amount, health, maxHealth){
  // …
}, sprite);
```
