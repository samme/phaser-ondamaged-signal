var logOnDamaged = function (amount, health, maxHealth, sprite){
    console.log("sprite '" + sprite.name + "' damage: " + amount + " health: " + health + " maxHealth: " + maxHealth);
};

var logSignal = function (sprite, msg){
    console.log("sprite '" + sprite.name + "' " + msg);
};

new Phaser.Game({
    renderer: Phaser.HEADLESS,
    state: {
        create: function (){
            var sprite = this.add.sprite();

            sprite.health = 10;
            sprite.maxHealth = 10;
            sprite.name = 'testSprite';

            console.assert(sprite.onDamaged instanceof Phaser.Signal);
            sprite.onDamaged.add(logOnDamaged);
            sprite.events.onKilled .add(logSignal, null, null, "killed");
            sprite.events.onRevived.add(logSignal, null, null, "revived");

            sprite.damage(1);
            sprite.damage(2);
            sprite.damage(3);
            sprite.damage(4);

            console.assert(!sprite.alive);

            // Should not dispatch a signal (already dead)
            sprite.damage(1);

            sprite.revive();
            sprite.damage(1);
        }
    }
});
