class Link {
  constructor(bodyA, bodyB) {
    var lastRect = bodyA.body.bodies.length - 2;

    var options = {
      bodyA: bodyA.body.bodies[lastRect],
      bodyB: bodyB,
      pointA: {
        x: 0,
        y: 0
      },
      pointB: {
        x: 0,
        y: 0
      },
      length: -10,
      stiffness: 0.02
    }

    this.link = Constraint.create(options);
    World.add(world, this.link);
  }

  cut() {
    World.remove(world, this.link);
  }

}