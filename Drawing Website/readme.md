## Overview
This is an unfinished mutliplayer drawing website like skribbl.io, but I intended to let people choose any word they want to draw. I still need to make a game loop code to run it, which will be done in the future.

#### codehs link: https://codehs.com/editor/html/4442443/505083/index.html

## User Instructrions
#### Player 1
1. Open the website and enter you username when prompted
2. Wait for other players to join
3. Click start game
4. Enter word to draw
5. Click and drag over the large canvas to draw
6. Click the boxes beneath the canvas to change brush color
7. All brush strokes should apear on the other player's screens when brush is lifted (you stop clicking)

#### Other players
1. Open the website and enter you username when prompted
2. Once person starts drawing, start entering guesses into the chat
    1. If the guess is right, a message will appear

##### This concludes all the features at the moment, but a complete game loop will be completed later

## Recreation Instructions
1. Because this code utilizes pubnub to communicate between devices, you must go to their website and use your own pubnub ID
    1. labeled "Personal pubnub keys" in example code
## Special aspects
1. Since there is no server side feature, everything is managed by the client computers, which made the code significantly more complicated to make
