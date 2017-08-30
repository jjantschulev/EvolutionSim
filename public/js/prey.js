var prey = [];

function showPrey() {
  for (var i = prey.length - 1; i >= 0; i--) {
    prey[i].show();
    prey[i].update();
  }
}

function Prey() {
  this.pos = createVector(0, 0);

}