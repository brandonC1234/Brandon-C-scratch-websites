//main variables
var DELAY = 40;
var SPEED = 5;
var clicking = false;
var MAX_DY = 8;
var POINTS_PER_ROUND = 5;
var points = 0; 
var score; // what you see
var flyY = 1;
var fps = 0;

//close call variables
var closeDistance = 2;
var closeRecent = true;
var closeDelay = 500;
var closeText = new Text("you're so cool!", "6pt Arial");
var closePoints = 200;

//headLights variables
var dark = false;
var headLightRadius = 50;
var lightOnScreen = 0;
var lightRotate = true;
var lightRotation = 0;
var direction = -1;

//movement Variables
var copter;
var dy = 0;
var dy_change = 1;
var max_dy_change;

//dust variables
var DUST_RADIUS = 3;
var DUST_BUFFER = 10;

//obstacle variables
var obstacleWidth = 30;
var obstacleHeight = 80;
var NUM_OF_OBSTACLES = 3;

//terrain variables
var TERRAIN_WIDTH = 60;
var MAX_TERRAIN_HEIGHT = 80;
var MIN_TERRAIN_HEIGHT = 30;
var TERRAIN_COLOR = Color.white;

//arrays
var obstacles = [];
var top_terrain = [];
var bottom_terrain = [];
var dust = [];
var stars = [];

//Bullet Variables
var bullet;
var bullet_radius = 10;
var bulletOnScreen = false;
var crash_num = 0;

//bonus Circles variables
var bonus;
var bonus_radius = 10;
var bonus_points = 1000;
var LEVEL = 1;
var level_board;

//Points and level variables
var POINTS_LEVEL_2 = 5000;
var level_2 = false;
var POINTS_LEVEL_3 = 10000;
var level_3 = false;
var POINTS_LEVEL_4 = 15000;
var level_4 = false;
var POINTS_LEVEL_5 = 17000;
var level_5 = false;

//Color variables
var blue_amount = 225;
var green_amount = 225;
var red_amount = 0;
var blue;
var red;
var green;
var red_change = 1;
var green_change = 1;
var blue_change = 1;

//end animation variables
var endCount = 0;
var mars = false;

var testCircle = new Circle(200);
testCircle.setPosition(getWidth() / 2, getHeight() / 2);
testCircle.setColor(Color.red);

var headLights1 = new Arc(headLightRadius, 325, 15, 0);
headLights1.setColor(Color.white);
headLights1.setPosition(-100, -100);
add(headLights1);

var headLights2 = new Arc(40, 325, 20, 0);
headLights2.setColor(Color.white);
headLights2.setPosition(-100, -100);
add(headLights2);

var headLights3 = new Arc(30, 325, 20, 0);
headLights3.setColor(Color.white);
headLights3.setPosition(-100, -100);
add(headLights3);

var headLights4 = new Arc(20, 325, 20, 0);
headLights4.setColor(Color.white);
headLights4.setPosition(-100, -100);
add(headLights4);

var headLights5 = new Arc(10, 325, 20, 0);
headLights5.setColor(Color.white);
headLights5.setPosition(-100, -100);
add(headLights5);

var frames = new Text( fps , "20pt Arial");
frames.setPosition(20, getHeight() - 50 );
frames.setColor(Color.black);
add(frames);


function start(){
    stopTimer(lose);
    var mySong = new Audio("https://www.youtube.com/audiolibrary_download?vid=1c9c95fff744ad5e");
    mySong.play();
    stopTheTimers();
	setup();
	setTimer(game, DELAY);
	
	setTimer(FPS, 1100);
	
	keyDownMethod(isClicking);
	keyUpMethod(notClicking);
	
}

//functions about game mecanics
function stopTheTimers(){
    stopTimer(game);
    stopTimer(lose);
    stopTimer(FPS);
}
function setup(){
    setBackgroundColor(Color.cyan);
    
    copter = new WebImage("https://codehs.com/static/img/library/objects/helicopter.png");
    copter.setSize(50, 25);
    copter.setColor(Color.BLACK);
    copter.setPosition(getWidth() / 3, getHeight() / 2);
    add(copter);
    
    addObstacles();
    addTerrain();
    
    score = new Text(points);
    score.setColor(Color.black);
    score.setPosition( 10, 30);
    add(score);
    
    level_board = new Text("Level: " + LEVEL);
    level_board.setPosition(200, 30);
    level_board.setColor(Color.black);
    add(level_board);
    
    addBonus();
}
function game(){
    var collider = getCollider();
    var numStarsHit = 0;
    if(collider != null && collider != copter && collider != bonus){
        for(var i = 0; i < stars.length; i++){
            var obj = stars[i];
            if(collider != obj){
                numStarsHit ++;
            }
        }
        if(numStarsHit == stars.length){
            setLose();
        }
    }else if(collider == bonus){
        points = points + bonus_points;
        remove(bonus);
    }
    if(hitWall()){
        setLose();
        return;
    }
    if(clicking){
        dy -= dy_change;
        if(dy <= -MAX_DY){
            dy = - MAX_DY;
        }
    }else{
        dy += dy_change;
        if(dy >= MAX_DY){
            dy = MAX_DY;
        }
    }
    copter.move(0, dy);
    //checkClose();
    moveObstacle();
    moveTerrain();
    moveHeadLights();
    updatePoints();
    moveDust();
    addDust();
    moveBonus();
    updateLevel();
    checkLevel();
    if(bulletOnScreen == true){
        moveBullet();
    }
    fps = fps + 1;
}
function FPS(){
    frames.setText(fps);
    fps = 0;
}
function notClicking(e){
    clicking = false;
}
function isClicking(e){
    clicking = true;
}
function changeDY(){
    if(dy_change > max_dy_change){
        dy_change = dy_change - 1;
    }
    if(dy_change < max_dy_change){
        dy_change = dy_change + 1;
    }
    if(dy_change == max_dy_change){
        stopTimer(changeDY);
    }
}

//functions about background
function moveBullet(){
    bullet.move(-SPEED * 1.5, 0);
    if(bullet.getX() < 0){
        bullet.setPosition(getWidth() + bullet_radius, Randomizer.nextInt(bullet_radius, getWidth() - bullet_radius));
        add(bullet);
    }
}

function addObstacles(){
    for(var i = 0; i < NUM_OF_OBSTACLES; i++){
        var obstacle = new Rectangle(obstacleWidth, obstacleHeight);
        obstacle.setPosition(getWidth() + i * (getWidth() / NUM_OF_OBSTACLES), Randomizer.nextInt(0, getHeight() - obstacleHeight));
        obstacle.setColor(Color.white);
        obstacles.push(obstacle);
        add(obstacle);
    }
}
function moveObstacle(){
    for(var i = 0; i < NUM_OF_OBSTACLES; i++){
        var obstacle = obstacles[i];
        obstacle.move(-SPEED, 0);
        if(obstacle.getX() < 0){
            obstacle.setPosition(getWidth(), Randomizer.nextInt(0, getHeight() - obstacleHeight));
        }
    }
}
function removeObstacle(){
    for(var i = 0; i < obstacles.length; i++){
        var obstacle = obstacles[i];
        remove(obstacle);
        obstacles.remove(obstacle);
        i--;
    }
}
function changeObstacleSize(){
    removeObstacle();
    addObstacles();
}

function addTerrain(){
    for(var i = 0; i <= getWidth() / (TERRAIN_WIDTH * (2/3)); i++){
        var height = Randomizer.nextInt(MIN_TERRAIN_HEIGHT, MAX_TERRAIN_HEIGHT);
        var terrain = new Oval(TERRAIN_WIDTH, height)
        terrain.setPosition(i * (TERRAIN_WIDTH * (2/3)), 0);
        terrain.setColor(TERRAIN_COLOR);
        top_terrain.push(terrain);
        add(terrain);
        
        var height = Randomizer.nextInt(MIN_TERRAIN_HEIGHT, MAX_TERRAIN_HEIGHT);
        var bottomTerrain = new Oval(TERRAIN_WIDTH, height)
        bottomTerrain.setPosition(i * (TERRAIN_WIDTH * (2/3)), getHeight());
        bottomTerrain.setColor(TERRAIN_COLOR);
        bottom_terrain.push(bottomTerrain);
        add(bottomTerrain);
    }
}
function moveTerrain(){
    for(var i = 0; i < top_terrain.length; i++){
        var obj = top_terrain[i];
            obj.move(-SPEED, 0);
        if(obj.getX() < -obj.getWidth()){
            obj.setPosition(getWidth(), 0);
        }
    }
    for(var i = 0; i < bottom_terrain.length; i++){
        var obj = bottom_terrain[i];
            obj.move(-SPEED, 0);
        if(obj.getX() < -obj.getWidth()){
            obj.setPosition(getWidth(), getHeight());
        }
    }
}

function addDust(){
    var d = new Circle(DUST_RADIUS);
    d.setPosition(copter.getX() - DUST_BUFFER, copter.getY() + DUST_BUFFER);
    d.setColor(Color.grey);
    dust.push(d);
    add(d);
}
function moveDust(){
    for(var i = 0; i < dust.length; i++){
        var d = dust[i];
        var radius = d.getRadius() - 0.1;
        d.setRadius(radius);
        d.move(-SPEED, 0);
        
        if(d.getX() < 0){
            dust.remove(d);
            i--;
        }
    }
}

function addBonus(){
    bonus = new Circle(bonus_radius);
    bonus.setPosition(getWidth() + bonus_radius, Randomizer.nextInt(bonus_radius, getWidth() - bonus_radius));
    bonus.setColor(Randomizer.nextColor());
    add(bonus);
}
function moveBonus(){
    bonus.move(-SPEED * 2, 0);
    bonus.setColor(Randomizer.nextColor());
    if(bonus.getX() < 0){
        bonus.setPosition(getWidth() + bonus_radius, Randomizer.nextInt(bonus_radius, getWidth() - bonus_radius))
        add(bonus);
    }
}

function fade(){
    var color = new Color(red_amount, green_amount, blue_amount);
    setBackgroundColor(color);
    
    if(green_amount < green){
        green_amount = green_amount + green_change;
    }
    if(green_amount > green){
        green_amount = green_amount - green_change;
    }
    if(red_amount < red){
        red_amount = red_amount + red_change;
    }
    if(red_amount > red){
        red_amount = red_amount - red_change;
    }
    if(blue_amount < blue){
        blue_amount = blue_amount + blue_change;
    }
    if(blue_amount > blue){
        blue_amount = blue_amount - blue_change;
    }
    if(blue_amount == blue && green_amount == green && red_amount == red){
        stopTimer(fade);
    }
}

//functions dealing with losing
function hitWall(){
    var hit_top = copter.getY() < 0;
    var hit_bottom = copter.getY() + copter.getHeight() > getHeight();
    return hit_top || hit_bottom;
}

function printLose(){
    
    var text = new Text("YOU LOSE! Score: " + points);
    text.setPosition(getWidth()/2 - text.getWidth() / 2, getHeight() / 2 - text.getHeight() / 2);
    text.setColor(Color.red);
    add(text);
    
}
function setLose(){
    stopTimer(game);
    stopTimer(fade);
    setTimer(lose, 10);
    setTimeout(printLose, 1000);
}
function lose(){
    
    remove(headLights1);
    moveDust();
    copter.move(0, 5);
    if(crash_num == 360){
        crash_num = 0;
    }else{
        crash_num = crash_num + 50;
    }
    copter.setRotation(crash_num);
}
function getCollider(){
    var topLeft = getElementAt(copter.getX() - 1, copter.getY() - 1);
    if(topLeft != null){
        return topLeft;
    }
    
    var topRight = getElementAt(copter.getX() + copter.getWidth() + 1, copter.getY() - 1);
    if(topRight != null){
        return topRight;
    }
    
    var bottomLeft = getElementAt(copter.getX() - 1, copter.getY() + copter.getHeight() + 1);
    if(topLeft != null){
        return topLeft;
    }
    
    var bottomRight = getElementAt(copter.getX() + copter.getWidth() + 1, copter.getY() + copter.getHeight() + 1);
    if(topRight != null){
        return topRight;
    }
    var midRight = getElementAt(copter.getX() + copter.getWidth() + 1, copter.getY() + .5 * copter.getHeight());
    if(midRight != null){
        return midRight;
    }
    var midTop = getElementAt(copter.getX() + .5 * copter.getWidth(), copter.getY() + 1);
    if(midTop != null){
        return midTop;
    }
    return null;
}

//functions dealing with levels and points
function updatePoints(){
    points = points + POINTS_PER_ROUND;
    score.setText(points);
}
function updateLevel(){
    if(level_2 == false){
        if (points >= POINTS_LEVEL_2 ){
            LEVEL = 2;
            level_2 = true;
        }
    }
    if(level_3 == false){
        if (points >= POINTS_LEVEL_3){
            LEVEL = 3;
            level_3 = true;
        }
    }
    if(level_4 == false){
        if (points >= POINTS_LEVEL_4){
            LEVEL = 4;
            level_4 = true;
        }
    }
    if(level_5 == false){
        if (points >= POINTS_LEVEL_5){
            LEVEL = 5;
            level_5 = true;
        }
    }
}

function checkLevel(){
    if(LEVEL == 2){
        
        obstacleHeight = 100;
        obstacleWidth = 25;
        NUM_OF_OBSTACLES = 4;
        changeObstacleSize();
        addObstacles();
        
        red = 0;
        blue = 0;
        green = 0;
        dark = true;
        red_change = 3;
        blue_change = 3;
        green_change = 3;
        setTimer(fade, 100);
        max_dy_change = 1;
        setTimer(changeDY, 1000);
        SPEED = 5;
        POINTS_PER_ROUND = 5;
        MAX_DY = 12;
        bonus_points = 1000;
        level_board.setText("Level: " +  LEVEL);
        level_board.setColor(Color.white);
        level_board.setPosition(20,100);
        
        frames.setColor(Color.white);
        
        score.setColor(Color.white);
        score.setPosition(20,150);
        LEVEL = 0;
    }
    if(LEVEL == 3){
        
        obstacleHeight = 90;
        obstacleWidth = 25;
        NUM_OF_OBSTACLES = 3;
        changeObstacleSize();
        addObstacles();
        
        red = 254
        blue = 0
        green = 165
        dark = false;
        headLights1.setPosition(-100, -100);
        red_change = 2;
        green_change = 1;
        setTimer(fade, 50);
        max_dy_change = 5;
        SPEED = 8;
        POINTS_PER_ROUND = 10;
        MAX_DY = 10;
        bonus_points = 100;
        level_board.setText("Level: " +  LEVEL);
        level_board.setColor(Color.white);
        level_board.setPosition(20,100);
        
        score.setColor(Color.white);
        score.setPosition(20,150);
        LEVEL = 0;
    }
    if(LEVEL == 4){

        red = 0
        blue = 255;
        green = 0;
        red_change = 1;
        dark = false;
        blue_change = 1.5;
        setTimer(fade, 50);
        SPEED = 6;
        POINTS_PER_ROUND = 3;
        MAX_DY = 12;
        bonus_points = 100;
        level_board.setText("Level: " +  LEVEL);
        level_board.setColor(Color.white);
        level_board.setPosition(20,100);
        
        bullet = new Circle(bullet_radius);
        bullet.setPosition(getWidth() + bullet_radius, Randomizer.nextInt(bullet_radius, getHeight() - bullet_radius));
        bullet.setColor(Color.red);
        add(bullet);
        bulletOnScreen = true;
        
        score.setColor(Color.white);
        score.setPosition(20,150);
        LEVEL = 0;
    }
}

function slowDown(){
    if(SPEED != 0){
        SPEED = SPEED - .5;
    }
}
function moveHeadLights(){
    if(dark == true){
        if(lightOnScreen < 1 ){
            headLights5.setPosition(copter.getX() + (copter.getWidth() / 1.5), copter.getY() + 22);
            lightOnScreen = lightOnScreen + .1;
        }else if(lightOnScreen >= 1 && lightOnScreen < 2){
            headLights4.setPosition(copter.getX() + (copter.getWidth() / 1.5), copter.getY() + 22);
            lightOnScreen = lightOnScreen + .1;
            remove(headLights5);
        }else if(lightOnScreen >= 2 && lightOnScreen < 3){
            headLights3.setPosition(copter.getX() + (copter.getWidth() / 1.5), copter.getY() + 22);
            lightOnScreen = lightOnScreen + .1;
            remove(headLights4);
        }else if(lightOnScreen >= 3 && lightOnScreen < 4){
            add(headLights2);
            headLights2.setPosition(copter.getX() + (copter.getWidth() / 1.5), copter.getY() + 22);
            remove(headLights3);
            lightOnScreen = lightOnScreen + .1;
        }else if(lightOnScreen >= 4 && lightOnScreen < 5){
            add(headLights1);
            headLights1.setPosition(copter.getX() + (copter.getWidth() / 1.5), copter.getY() + 22);
            remove(headLights2);
            lightOnScreen = 5;
        }else if(lightOnScreen == 5){
            if(lightRotation <= 0){
                direction = 1;
            }
            if(lightRotation >= 70){
                direction = -1;
            }
            lightRotation = lightRotation + direction;
            headLights1.setRotation(lightRotation);
            headLights1.setPosition(copter.getX() + (copter.getWidth() / 1.5), copter.getY() + 22);
        }
    }else{
        remove(headLights2);
        remove(headLights1);
    }
}
function checkClose(){
    if(closeRecent){
        
        var objectx;
        var objecty;
        
        var topLeft = getElementAt(copter.getX() - closeDistance, copter.getY() - closeDistance);
    
        var topRight = getElementAt(copter.getX() + copter.getWidth() + closeDistance, copter.getY() - closeDistance);
    
        var bottomLeft = getElementAt(copter.getX() - closeDistance, copter.getY() + copter.getHeight() + closeDistance);
    
        var bottomRight = getElementAt(copter.getX() + copter.getWidth() + closeDistance, copter.getY() + copter.getHeight() + closeDistance);
    
        var midRight = getElementAt(copter.getX() + copter.getWidth() + closeDistance, copter.getY() + closeDistance * copter.getHeight());
    
        var midTop = getElementAt(copter.getX() + closeDistance * copter.getWidth(), copter.getY() + closeDistance);
    
        if(midTop != null || topLeft != null || topRight != null || bottomLeft != null || bottomRight != null || midRight != null){
            if(midRight != null){
                objectx = midRight.getX();
                objecty = midRight.getY();
            } else if(midTop != null){
                objectx = midTop.getX();
                objecty = midTop.getY();
            } else if(topLeft != null){
                objectx = topLeft.getX();
                objecty = topLeft.getY();
            } else if(topRight != null){
                objectx = topRight.getX();
                objecty = topRight.getY();
            } else if(bottomLeft != null){
                objectx = bottomLeft.getX();
                objecty = bottomLeft.getY();
            } else if(bottomRight != null){
                objectx = bottomRight.getX();
                objecty = bottomRight.getY();
            }
            if(objectx != bonus.getX() && objecty != bonus.getY()){
                printClose();
                points = points + closePoints;
                setTimeout(closeUpdate, closeDelay + 500);
                setTimeout(removeClose, closeDelay);
                closeRecent = false;
                println(objectx + objecty)
            }
        }
    }
    
}

function printClose(){
    var message;
    var pick = Randomizer.nextInt(1, 5);
    if(pick == 1){
        message = "That was close!";
    }else if(pick == 2){
        message = "MLG PRO!";
    }else if(pick == 3){
        message = "Playing with death?";
    }else if(pick == 4){
        message = "Wow That was close!";
    }else if(pick == 5){
        message = "You're so good!";
    }
    closeText.setText(message);
    closeText.setPosition(Randomizer.nextInt(0, 50), Randomizer.nextInt(100, 400));
    closeText.setColor(Color.BLACK)
    add(closeText);
}

function closeUpdate(){
    closeRecent = true;
}
function removeClose(){
    remove(closeText);
}
