import { Kefir as K } from "kefir";
import Hammer from "hammerjs";

function observer(element) {
  const manager = new Hammer(element);

  manager.get("swipe").set({ velocity: 0.1 });

  return manager;
}

function surface(element) {
  const manager = observer(element);
  const swipe = K.fromEvents(manager, "swipe");
  const left = swipe.filter((e) => e.direction == 2);
  const right = swipe.filter((e) => e.direction == 4);

  swipe.left = left;
  swipe.right = right;

  return { swipe };
}

export default surface;
