import test from "tape";

import "hammer-simulator";
import surface from "../index.js";

test('creates an stream of swipe events', (t) => {
  const element = document.createElement("div");
  const movement = surface(element);

  movement.swipe.onValue(function (e) {
    t.equal(element, e.target)
    t.end();
  });

  Simulator.gestures.swipe(element);
});

test('creates an stream of swipe left events', (t) => {
  const element = document.createElement("div");
  const movement = surface(element);

  movement.swipe.left.onValue(function (e) {
    t.equal(element, e.target)
    t.end();
  });

  Simulator.gestures.swipe(element, {
    deltaX: -300,
    deltaY: 0
  });
});

test('creates an stream of swipe right events', (t) => {
  const element = document.createElement("div");
  const movement = surface(element);

  movement.swipe.right.onValue(function (e) {
    t.equal(element, e.target)
    t.end();
  });

  Simulator.gestures.swipe(element, {
    deltaX: 300,
    deltaY: 0
  });
});
