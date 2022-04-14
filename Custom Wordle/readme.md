## Overview
This is suppose to be a mutliplayer wordle game where players choose a word and everybody tries to guess it as fast as possible using the rules of wordle. However, the code is still a work in progress and only has single player functions in it at the moment.

The program chooses a random word between 5 and 9 letters and plays a wordle round, however, the code does not check if entered in words are correctlty spelled.

#### codehs link: https://codehs.com/editor/html/5823704/505083/index.html

## User Instructrions
1. You will be prompted to enter a name, but it's not required
2. Click the start button to begin the game
3. start typing to fill in the current guess row
4. press enter to guess the word
5. The letters will then be colored according to this table

| Color | Meaning |
| ---- | ---- |
| Grey | letter not in word |
| Yellow | letter is in word but not in that location |
| Green | letter is in word and in that location |

7. **If there is two of the same letter, the colorings will be incorrect** (This will be fixed in the future)
8. Continue entering new guesses until you get the correct word or run out of tries
9. Click the start button to start another round

The word is logged in the console at the beginning of the round if you want to cheat

## Recreation Instructions
1. Because this code utilizes pubnub to communicate between devices, you must go to their website and use your own pubnub ID
  a. labeled "Personal pubnub keys" in example code
## Special aspects
1. All CSS stylings are based on percentages, so everything should scale with window
2. All text in the keys and boxes should scale and be perfectly centered, which is much easier said than done.
