## Overview
This is a multiplayer math game website for a teacher to play with students. The teacher must log in first and then the students can join.

#### codehs link: https://codehs.com/editor/html/5966522/505083/index.html

## User Instructrions
#### Teacher start instructions
1. The teacher must first open the website. 
2. It will then prompt her with a password, which is "elephant" by default. 
3. Teacher enters in name.
#### Student join instructions
1. The students can now join. 
2. Student enters in their name.
3. **Sutdents must click the leave game button to leave, closing the tab will break name list**
  
  a.
If this does happen, have everyone leave and start from beginning of instructions
#### Game instructions
1. Once the students have joined, the teacher will select the difficulty parameters by selecting desired operators, a starting difficulty number, a difficultly multiplier (speeds up difficulty), and a difficulty divisor (reduces speed at which difficulty increases).
2. The teacher will then click click "Deploy Equations"
3. It will take a second for the student devices to confirm the deploy
4. Once all the student devices have confirmed, the teacher can click "start round"
5. They will be prompted to enter a round and question timer
  
  a. round timer is the amount of seconds a round last
  
  b. question timer is the amount of seconds students have to answer each equation

6. The students will now have an equation pop up on their screen
7. They simply type in the answer (including negative signs) and press enter to submit
8. Every correct answer will gain them a point, but a wrong answer will put them out for the rest of the round
9. At the end of the round or when the student messes up, their score will update for everyone
10. This concludes a round and the teacher can start a new one.
  
  a. avoid running two rounds at once

## Recreation Instructions
1. Because this code utilizes pubnub to communicate between devices, you must go to their website and use your own pubnub ID
  a. labeled "Personal pubnub IDs" in example code
3. Please replace teacher password
  a. currently "elephant"
## Special aspects
1. Since there is no server side feature, everything is managed by the client computers, which made the code significantly more complicated to make
