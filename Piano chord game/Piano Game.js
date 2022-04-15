
var letters = ["a", "b", "c", "d", "e", "f", "g"];
var chords = ["M"];
var mode = "normal";

var currentLetter = "c";
var currentChord = "M";

var completeList = ["a", "aS", "b", "c", "cS", "d", "dS", "e", "f", "fS", "g", "gS"];
var aList = ["a", "b", "cS", "d", "e", "fS", "gS"];
var bList = ["b", "cS", "dS", "e", "fS", "gS", "aS"];
var cList = ["c", "d", "e", "f", "g", "a", "b"];
var dList = ["d", "e", "fS", "g", "a", "b", "cS"];
var eList = ["e", "fS", "gS", "a", "b", "cS", "dS"];
var fList = ["f", "g", "a", "bS", "c", "d", "e"];
var gList = ["g", "a", "b", "c", "d", "e", "fS"];

var NUMBER_WHITE_KEYS = 14;
var NUMBER_BLACK_KEYS = 5;
var chosen = [];
var width = getWidth() / NUMBER_WHITE_KEYS;
var height = 250;
var buffer = 4;
var yPosition = getWidth() - (getWidth() / 2);
var background = new Rectangle(getWidth(), height + buffer + buffer);
background.setPosition(0, yPosition - buffer);
background.setColor(Color.BLACK);
add(background);
var modeText = new Text("normal", "20pt Arial");
modeText.setPosition(100, 50);
modeText.setColor(Color.BLACK);
add(modeText);
var chordText = new Text("g major", "30pt Arial");
chordText.setPosition((getWidth() / 2) - 100, yPosition - 100);
chordText.setColor(Color.BLACK);
add(chordText);
var c1 = new Rectangle(width - buffer, height);
c1.setPosition(buffer / 2, yPosition);
c1.setColor(Color.WHITE);
var d1 = new Rectangle(width - buffer, height);
d1.setPosition(width + (buffer / 2), yPosition);
d1.setColor(Color.WHITE);
var e1 = new Rectangle(width - buffer, height);
e1.setPosition(2 * width + (buffer / 2), yPosition);
e1.setColor(Color.WHITE);
var f1 = new Rectangle(width - buffer, height);
f1.setPosition(3 * width + (buffer / 2), yPosition);
f1.setColor(Color.WHITE);
var g1 = new Rectangle(width - buffer, height);
g1.setPosition(4 * width + (buffer / 2), yPosition);
g1.setColor(Color.WHITE);
var a1 = new Rectangle(width - buffer, height);
a1.setPosition(5 * width + (buffer / 2), yPosition);
a1.setColor(Color.WHITE);
var b1 = new Rectangle(width - buffer, height);
b1.setPosition(6 * width + (buffer / 2), yPosition);
b1.setColor(Color.WHITE);
var c2 = new Rectangle(width - buffer, height);
c2.setPosition(7 * width + (buffer / 2), yPosition);
c2.setColor(Color.WHITE);
var d2 = new Rectangle(width - buffer, height);
d2.setPosition(8 * width + (buffer / 2), yPosition);
d2.setColor(Color.WHITE);
var e2 = new Rectangle(width - buffer, height);
e2.setPosition(9 * width + (buffer / 2), yPosition);
e2.setColor(Color.WHITE);
var f2 = new Rectangle(width - buffer, height);
f2.setPosition(10 * width + (buffer / 2), yPosition);
f2.setColor(Color.WHITE);
var g2 = new Rectangle(width - buffer, height);
g2.setPosition(11 * width + (buffer / 2), yPosition);
g2.setColor(Color.WHITE);
var a2 = new Rectangle(width - buffer, height);
a2.setPosition(12 * width + (buffer / 2), yPosition);
a2.setColor(Color.WHITE);
var b2 = new Rectangle(width - buffer, height);
b2.setPosition(13 * width + (buffer / 2), yPosition);
b2.setColor(Color.WHITE);
var c1SB = new Rectangle(2/3 * width, height / 2);
c1SB.setPosition(width - (1/3 * width), yPosition);
c1SB.setColor(Color.BLACK);
var c1S = new Rectangle((2/3 * width) - buffer *2, (height / 2) - buffer);
c1S.setPosition(width - (1/3 * width) + buffer, yPosition);
c1S.setColor(Color.BLACK);
var d1SB = new Rectangle(2/3 * width, height / 2);
d1SB.setPosition((width * 2) - (1/3 * width), yPosition);
d1SB.setColor(Color.BLACK);
var d1S = new Rectangle((2/3 * width) - buffer *2, (height / 2) - buffer);
d1S.setPosition((width * 2) - (1/3 * width) + buffer, yPosition);
d1S.setColor(Color.BLACK);
var f1SB = new Rectangle(2/3 * width, height / 2);
f1SB.setPosition((width * 4) - (1/3 * width), yPosition);
f1SB.setColor(Color.BLACK);
var f1S = new Rectangle((2/3 * width) - buffer *2, (height / 2) - buffer);
f1S.setPosition((width * 4) - (1/3 * width) + buffer, yPosition);
f1S.setColor(Color.BLACK);
var g1SB = new Rectangle(2/3 * width, height / 2);
g1SB.setPosition((width * 5) - (1/3 * width), yPosition);
g1SB.setColor(Color.BLACK);
var g1S = new Rectangle((2/3 * width) - buffer *2, (height / 2) - buffer);
g1S.setPosition((width * 5) - (1/3 * width) + buffer, yPosition);
g1S.setColor(Color.BLACK);
var a1SB = new Rectangle(2/3 * width, height / 2);
a1SB.setPosition((width * 6) - (1/3 * width), yPosition);
a1SB.setColor(Color.BLACK);
var a1S = new Rectangle((2/3 * width) - buffer *2, (height / 2) - buffer);
a1S.setPosition((width * 6) - (1/3 * width) + buffer, yPosition);
a1S.setColor(Color.BLACK);
var c2SB = new Rectangle(2/3 * width, height / 2);
c2SB.setPosition((width * 8) - (1/3 * width), yPosition);
c2SB.setColor(Color.BLACK);
var c2S = new Rectangle((2/3 * width) - buffer *2, (height / 2) - buffer);
c2S.setPosition((width * 8) - (1/3 * width) + buffer, yPosition);
c2S.setColor(Color.BLACK);
var d2SB = new Rectangle(2/3 * width, height / 2);
d2SB.setPosition((width * 9) - (1/3 * width), yPosition);
d2SB.setColor(Color.BLACK);
var d2S = new Rectangle((2/3 * width) - buffer * 2, (height / 2) - buffer);
d2S.setPosition((width * 9) - (1/3 * width) + buffer, yPosition);
d2S.setColor(Color.BLACK);
var f2SB = new Rectangle(2/3 * width, height / 2);
f2SB.setPosition((width * 11) - (1/3 * width), yPosition);
f2SB.setColor(Color.BLACK);
var f2S = new Rectangle((2/3 * width) - buffer * 2, (height / 2) - buffer);
f2S.setPosition((width * 11) - (1/3 * width) + buffer, yPosition);
f2S.setColor(Color.BLACK);
var g2SB = new Rectangle(2/3 * width, height / 2);
g2SB.setPosition((width * 12) - (1/3 * width), yPosition);
g2SB.setColor(Color.BLACK);
var g2S = new Rectangle((2/3 * width) - buffer * 2, (height / 2) - buffer);
g2S.setPosition((width * 12) - (1/3 * width) + buffer, yPosition);
g2S.setColor(Color.BLACK);
var a2SB = new Rectangle(2/3 * width, height / 2);
a2SB.setPosition((width * 13) - (1/3 * width), yPosition);
a2SB.setColor(Color.BLACK);
var a2S = new Rectangle((2/3 * width) - buffer * 2, (height / 2) - buffer);
a2S.setPosition((width * 13) - (1/3 * width) + buffer, yPosition);
a2S.setColor(Color.BLACK);

var chord =["c","e","g"];

function start(){
    setup();
    mouseClickMethod(checkKey);
    keyDownMethod(checkButton);
    chooseNewChord();
}

function checkKeys(){
    var wrong = [];
    var correct = [];
    var taken = [];
    var match;
    
    if(chosen.length == chord.length){
        for(var i = 0; i < chord.length; i++){
            var choice = chosen[i];
            var letter = choice.charAt(0);
            if(choice.length == 3){
                letter = letter + "S";
            }else{
            }
            var n = chord.indexOf(letter);
            if(n != -1){
                correct.push(choice);
            }else{
            }
        }
    }
    
    if(correct.length == chord.length){
        chooseNewChord();
        clearKeys();
        println("correct");
    }
}
function setup(){
    drawPiano();
}
function clearKeys(){
    for(var i = 0; i < chosen.length; i++){
        var key = chosen[i];
        var number = key.charAt(1);
        if(number == 1){
            if(key.length == 3){
                if(key == "c1S"){
                    c1S.setColor(Color.BLACK);
                }
                if(key == "d1S"){
                    d1S.setColor(Color.BLACK);
                }
                if(key == "f1S"){
                    f1S.setColor(Color.BLACK);
                }
                if(key == "g1S"){
                    g1S.setColor(Color.BLACK);
                }
                if(key == "a1S"){
                    a1S.setColor(Color.BLACK);
                }
            }else{
                if(key == "c1"){
                    c1.setColor(Color.WHITE);
                }
                if(key == "d1"){
                    d1.setColor(Color.WHITE);
                }
                if(key == "e1"){
                    e1.setColor(Color.WHITE);
                }
                if(key == "f1"){
                    f1.setColor(Color.WHITE);
                }
                if(key == "g1"){
                    g1.setColor(Color.WHITE);
                }
                if(key == "a1"){
                    a1.setColor(Color.WHITE);
                }
                if(key == "b1"){
                    b1.setColor(Color.WHITE);
                }
            }
        }else{
            if(key.length == 3){
                if(key == "c2S"){
                    c2S.setColor(Color.BLACK);
                }
                if(key == "d2S"){
                    d2S.setColor(Color.BLACK);
                }
                if(key == "f2S"){
                    f2S.setColor(Color.BLACK);
                }
                if(key == "g2S"){
                    g2S.setColor(Color.BLACK);
                }
                if(key == "a2S"){
                    a2S.setColor(Color.BLACK);
                }
            }else{
                if(key == "c2"){
                    c2.setColor(Color.WHITE);
                }
                if(key == "d2"){
                    d2.setColor(Color.WHITE);
                }
                if(key == "e2"){
                    e2.setColor(Color.WHITE);
                }
                if(key == "f2"){
                    f2.setColor(Color.WHITE);
                }
                if(key == "g2"){
                    g2.setColor(Color.WHITE);
                }
                if(key == "a2"){
                    a2.setColor(Color.WHITE);
                }
                if(key == "b2"){
                    b2.setColor(Color.WHITE);
                }
            }
        }
    }
    chosen = [];
}
function chooseNewChord(){
    
    
    var chosen = false;
    
    while(chosen == false){
        var choiceNumber = Randomizer.nextInt(0, (letters.length - 1));
        var choice = letters[choiceNumber]
        
        var chordNumber = Randomizer.nextInt(0, (chords.length - 1));
        var chordChoice = chords[chordNumber];
        
        if(chordChoice == currentChord && choice == currentLetter){
            
        }else{
            chosen = true;
        }
    }
    
    currentChord = chordChoice;
    currentLetter = choice;
    
    var list = [];
    var numbers = [];
    var newChord = [];
    var cText;
    
    println(currentLetter);
    
    if(currentLetter == "a"){
        for(var i = 0; i < aList.length; ++i){
            list[i] = aList[i];
        }
    }else if(currentLetter == "b"){
        for(var i = 0; i < bList.length; ++i){
            list[i] = bList[i];
        }
    }else if(currentLetter == "c"){
        for(var i = 0; i < cList.length; ++i){
            list[i] = cList[i];
        }
    }else if(currentLetter == "d"){
        for(var i = 0; i < dList.length; ++i){
            list[i] = dList[i];
        }
    }else if(currentLetter == "e"){
        for(var i = 0; i < eList.length; ++i){
            list[i] = eList[i];
        }
    }else if(currentLetter == "f"){
        for(var i = 0; i < fList.length; ++i){
            list[i] = fList[i];
        }
    }else if(currentLetter == "g"){
        for(var i = 0; i < gList.length; ++i){
            list[i] = gList[i];
        }
    }else{
        
    }
    
    println(list);
    
    if(currentChord == "M"){
        numbers = [1, 3, 5];
        cText = "major";
    }else if(currentChord == "m"){
        numbers = [1, "3F", 5];
        cText = "minor"
    }
    
    chordText.setText(currentLetter + " " + cText);
    
    for(var i = 0; i < numbers.length;i++){
        var newNumber = numbers[i];
        
        var newLetter = list[newNumber - 1];
        println(newLetter);
        
        newChord.push(newLetter);
    }
    
    println(newChord);
    
    chord = [];
    
    for(var i = 0; i < newChord.length; ++i){
        chord[i] = newChord[i];
    }
    
    println(chord)
}

function getFlat(letter){
    var n = completeList.indexOf(letter);
    var newLet;
    
    if(n == 0){
        newLet = completeList[completeList.length - 1]
    }else{
        newLet = completeList[n]
    }
    
    return newLet;
    
}

function checkKey(e){
    var x = e.getX();
    var y = e.getY();
    var key;
    var selected = false;
    if(y > yPosition && y < yPosition + height){
        if(x > (getWidth() / 2) + (buffer / 2)){
            if(x < f2.getX()){
                if(x > c2S.getX() && x < c2S.getX() + (width * 2/3) && y < yPosition + (height/2)){
                    key = ("c2S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        c2S.setColor(Color.BLUE);
                    }else{
                        c2S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > d2S.getX() && x < d2S.getX() + (width * 2/3) && y < yPosition + (height / 2)){
                    key = ("d2S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        d2S.setColor(Color.BLUE);
                    }else{
                        d2S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > c2.getX() && x < c2.getX() + (width - buffer)){
                    key = ("c2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        c2.setColor(Color.BLUE);
                    }else{
                        c2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > d2.getX() && x < d2.getX() + (width - buffer)){
                    key = ("d2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        d2.setColor(Color.BLUE);
                    }else{
                        d2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > e2.getX() && x < e2.getX() + (width - buffer)){
                    key = ("e2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        e2.setColor(Color.BLUE);
                    }else{
                        e2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }
            }else{
                if(x > f2S.getX() && x < f2S.getX() + (width * 2/3) && y < yPosition + (height/2)){
                    key = ("f2S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        f2S.setColor(Color.BLUE);
                    }else{
                        f2S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > g2S.getX() && x < g2S.getX() + (width * 2/3) && y < yPosition + (height / 2)){
                    key = ("g2S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        g2S.setColor(Color.BLUE);
                    }else{
                        g2S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > a2S.getX() && x < a2S.getX() + (width * 2/3) && y < yPosition + (height / 2)){
                    key = ("a2S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        a2S.setColor(Color.BLUE);
                    }else{
                        a2S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > f2.getX() && x < f2.getX() + (width - buffer)){
                    key = ("f2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        f2.setColor(Color.BLUE);
                    }else{
                        f2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > g2.getX() && x < g2.getX() + (width - buffer)){
                    key = ("g2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        g2.setColor(Color.BLUE);
                    }else{
                        g2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > a2.getX() && x < a2.getX() + (width - buffer)){
                    key = ("a2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        a2.setColor(Color.BLUE);
                    }else{
                        a2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > b2.getX() && x < b2.getX() + (width - buffer)){
                    key = ("b2");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        b2.setColor(Color.BLUE);
                    }else{
                        b2.setColor(Color.WHITE);
                        var selected = true;
                    }
                }
            }
        }else if (x < (getWidth() / 2) - (buffer / 2)){
            if(x < 3 * width + (buffer / 2)){
                if(x > c1S.getX() && x < c1S.getX() + (width * 2/3) && y < yPosition + (height/2)){
                    key = ("c1S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        c1S.setColor(Color.BLUE);
                    }else{
                        c1S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > d1S.getX() && x < d1S.getX() + (width * 2/3) && y < yPosition + (height / 2)){
                    key = ("d1S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        d1S.setColor(Color.BLUE);
                    }else{
                        d1S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > c1.getX() && x < c1.getX() + (width - buffer)){
                    key = ("c1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        c1.setColor(Color.BLUE);
                    }else{
                        c1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > d1.getX() && x < d1.getX() + (width - buffer)){
                    key = ("d1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        d1.setColor(Color.BLUE);
                    }else{
                        d1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > e1.getX() && x < e1.getX() + (width - buffer)){
                    key = ("e1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        e1.setColor(Color.BLUE);
                    }else{
                        e1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }
            }else{
                if(x > f1S.getX() && x < f1S.getX() + (width * 2/3) && y < yPosition + (height/2)){
                    key = ("f1S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        f1S.setColor(Color.BLUE);
                    }else{
                        f1S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > g1S.getX() && x < g1S.getX() + (width * 2/3) && y < yPosition + (height / 2)){
                    key = ("g1S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        g1S.setColor(Color.BLUE);
                    }else{
                        g1S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > a1S.getX() && x < a1S.getX() + (width * 2/3) && y < yPosition + (height / 2)){
                    key = ("a1S");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        a1S.setColor(Color.BLUE);
                    }else{
                        a1S.setColor(Color.BLACK);
                        var selected = true;
                    }
                }else if(x > f1.getX() && x < f1.getX() + (width - buffer)){
                    key = ("f1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        f1.setColor(Color.BLUE);
                    }else{
                        f1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > g1.getX() && x < g1.getX() + (width - buffer)){
                    key = ("g1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        g1.setColor(Color.BLUE);
                    }else{
                        g1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > a1.getX() && x < a1.getX() + (width - buffer)){
                    key = ("a1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        a1.setColor(Color.BLUE);
                    }else{
                        a1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }else if(x > b1.getX() && x < b1.getX() + (width - buffer)){
                    key = ("b1");
                    var n = chosen.indexOf(key);
                    if(n == -1){
                        b1.setColor(Color.BLUE);
                    }else{
                        b1.setColor(Color.WHITE);
                        var selected = true;
                    }
                }
            }
        }
        
        if(key != null){
            if(selected == false){
                chosen.push(key);
                checkKeys();
            }else{
                chosen.remove(n);
                checkKeys();
            }
        }else{
            
        }
        
    }
}

function checkButton(e){
    var key;
    var selected = false;
    
    if(mode == "normal"){
        if(e.keyCode == Keyboard.letter('c')){
            key = ("c1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                c1.setColor(Color.BLUE);
            }else{
                c1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('d')){
            key = ("d1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                d1.setColor(Color.BLUE);
            }else{
                d1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('e')){
            key = ("e1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                e1.setColor(Color.BLUE);
            }else{
                e1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('f')){
            key = ("f1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                f1.setColor(Color.BLUE);
            }else{
                f1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('g')){
            key = ("g1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                g1.setColor(Color.BLUE);
            }else{
                g1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('a')){
            key = ("a1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                a1.setColor(Color.BLUE);
            }else{
                a1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('b')){
            key = ("b1");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                b1.setColor(Color.BLUE);
            }else{
                b1.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('C')){
            key = ("c1S");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                c1S.setColor(Color.BLUE);
            }else{
                c1S.setColor(Color.WHITE);
                selected = true;
            }
        }else if(e.keyCode == 16){
            mode = "sharp";
            modeText.setText("sharp");
        }
    }else{
        if(e.keyCode == 16){
            mode = "normal";
            modeText.setText("normal");
        }
        if(e.keyCode == Keyboard.letter('c')){
            key = ("c1S");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                c1S.setColor(Color.BLUE);
            }else{
                c1S.setColor(Color.BLACK);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('d')){
            key = ("d1S");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                d1S.setColor(Color.BLUE);
            }else{
                d1S.setColor(Color.BLACK);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('f')){
            key = ("f1S");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                f1S.setColor(Color.BLUE);
            }else{
                f1S.setColor(Color.BLACK);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('g')){
            key = ("g1S");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                g1S.setColor(Color.BLUE);
            }else{
                g1S.setColor(Color.BLACK);
                selected = true;
            }
        }else if(e.keyCode == Keyboard.letter('a')){
            key = ("a1S");
        
            var n = chosen.indexOf(key);
            println(n);
            if(n == -1){
                a1S.setColor(Color.BLUE);
            }else{
                a1S.setColor(Color.BLACK);
                selected = true;
            }
        }else{
            
        }
    }
    println(e.keyCode);
    
    if(key != null){
        if(selected == false){
            chosen.push(key);
            checkKeys();
        }else{
            chosen.remove(n);
            checkKeys();
        }
    }else{
        
    }
    
}

function drawPiano(){
    
    add(a1);
    add(b1);
    add(c1);
    add(d1);
    add(e1);
    add(f1);
    add(g1);
    add(c1SB);
    add(c1S);
    add(d1SB);
    add(d1S);
    add(f1SB);
    add(f1S);
    add(g1SB);
    add(g1S);
    add(a1SB);
    add(a1S);
    add(c2);
    add(d2);
    add(e2);
    add(f2);
    add(g2);
    add(a2);
    add(b2);
    add(c2SB);
    add(c2S);
    add(d2SB);
    add(d2S);
    add(f2SB);
    add(f2S);
    add(g2SB);
    add(g2S);
    add(a2SB);
    add(a2S);
}
