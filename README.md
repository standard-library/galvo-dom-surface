# galvo-surface

A function that, given an element, creates streams for swiping around. Currently supports swiping left and right and generic swiping. (Pull requests welcome.)

Implemented using Kefir.js and Hammer.js.

## Installation

```shell
yarn add @standard-library/galvo-surface
```

## Usage

```javascript
import surface from "@standard-library/galvo-surface";

const touchpad = surface(document.querySelector(".touchpad"));

touchpad.swipe
// => Kefir.Stream
touchpad.swipe.left
// => Kefir.Stream
touchpad.swipe.right
// => Kefir.Stream
```

Using [galvo](https://github.com/standard-library/galvo) this event stream can be used to move forward and backward in a sequence of elements:

```javascript
import galvo from "@standard-library/galvo";
import surface from "@standard-library/galvo-surface";

const { swipe } = surface(document.querySelector(".touchpad"));
const sequence = galvo({
  advance: swipe.right,
  recede: swipe.left
}, ["a", "b", "c"]);

// Do a few swipes right, then one left

sequence.current
// => a---b---c---b
```
