You could use it to play an animation, start emitters, or update health bars.

Use
---

It's dispatched after damage is applied but **before** the sprite is killed (if necessary).

```javascript
var sprite = game.add.sprite();

sprite.onDamaged.add(function (amount, health, maxHealth){
  // …
}, sprite);
```
