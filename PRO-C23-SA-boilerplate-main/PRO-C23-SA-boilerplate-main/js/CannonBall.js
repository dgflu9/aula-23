class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

   shot() {
     var novoAngulo = cannon.angle - 28;
     novoAngulo = novoAngulo * (3.14/180);
     var velocidade = p5.Vector.fromAngle (novoAngulo);
     velocidade.mult (0.5);
     Matter.Body.setStatic (this.body, false);
     Matter.Body.setVelocity(this.body, {
       x:velocidade.x * (180/3.14), 
       y:velocidade.y * (180/3.14)});
      
  }


  display() 
  {
   
    

    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();


  }
}
