## Code Overview
#### Primary Goal
My philosophy with this program was to code a working game engine and then build the levels/story rather than plan the game and take the chance of "hard coding" some of it into the engine.

#### Class inception (Nested classes)
With the goal of maintaining simplicity in my classes and keeping the various checks and render functions seperate I split parts of the program like the levels into 3 different nested classes. While this created more steps in calling functions from the innermost nested class, it's benefit of simplifying the classes was worth it.

#### Order of classes

- Level
   - screen
     - box
     - thing
- level_option
- character

#### Class details

