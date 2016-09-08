{Phaser} = this
{Signal} = Phaser

Phaser.Sprite::damage =
Phaser.Component.Health::damage = (amount) ->
  if @alive
    @health -= amount;
    @onDamaged.dispatch amount, @health, @maxHealth, this
    if @health <= 0
      @kill()
  this

Object.defineProperty Phaser.Sprite.prototype, "onDamaged",
  get: ->
    @_onDamaged or (@_onDamaged = new Signal)
