var fxMode = "tense";
var fxLevel = 0.2;
var barCounter; // Quiz timeout in seconds
var urls;
var mySlider;
var endMusic;
var bgMusic;
var fx;
var fxtimer;
var default_shield_info='save lives, save your loved ones';

function showSlide(n) 
{
    mySlider.gotoSlide(n);
}

function newInfo(info) 
{
    var e = document.getElementById('shield_info');
    if (e)
    {
        if (info) 
            e.innerHTML=info;
        else
            e.innerHTML =default_shield_info;
    }
}

function newStyle(e, newClass) 
{
    e.setAttribute("class", newClass);
}

function shuffle(arra1) 
{
    var ctr = arra1.length, temp, index;
    while (ctr > 0) 
    {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

//const shieldNames = ["00","01","02","03","04","05","06","07","08","09","10"]
const shieldNames = ["06","00","04","09","02","03","05","10","01","07","08"]
const cities = {
    "Bangka": {x:103, y:224, next:"Daan Mogot"},
    "Bogor": {x:170, y:342, next:"Lippo Village"},
    "Cikarang": {x:175, y:285, next:"Kupang"},
    "Daan Mogot": {x:130, y:264, next:"Cikarang"},
    "Holland Village": {x:364, y:184, next:"Ranotana"},
    "Lippo Village": {x:115, y:328, next:"Lubuk Linggau"},
    "Lubuk Linggau": {x:50, y:280, next:"Palembang"},
    "Kupang": {x:327, y:347, next:"Holland Village"},
    "Makassar": {x:272, y:275, next:"Bogor"},
    "Palembang": { x:25, y:229, next:"Bangka"},
    "Ranotana": {x:332, y:224, next:"Makassar"},
};
const xOffsets = [-10,-10, 0,  0,10,10,10,-10];
const yOffsets = [ 10,-10,10,-10,-5, 5, 0, 0];
const xDice = [30,104,175,51,112,178];
const yDice = [64,38,21,120,95, 75];
var bar;
var playerName;
var playing = false;
var curPlayer = -1;
const mavatars = {};
var players = {};
var winners;
var animal;
var winnerNames;
var counters;
var ranks;
var seats;
var seatNames;
var seatOrigins;
var curCities;
var locations = [
    "Bangka",
    "Bogor",
    "Cikarang",
    "Daan Mogot",
    "Holland Village",
    "Lippo Village",
    "Lubuk Linggau",
    "Kupang",
    "Makassar",
    "Palembang",
    "Ranotana",
];
var road = [];
var shields = [];
var actg;
var covidLoop;
var goBtn;
var doneBtn;
var offBtn;
var thropyBtn;
var stayAtHomeBtn;
var textureGoBtn0;
var textureGoBtn1;

PIXI.utils.skipHello();

const app = new PIXI.Application({
    resizeTo: window,
    width: 640, height: 480, 
    backgroundColor: 0x1099bb, 
    resolution: window.devicePixelRatio || 1,
});

const container = new PIXI.Container();
container.sortableChildren = true;

const resize = function() 
{
    var xscale = window.innerWidth / 640;
    var yscale = window.innerHeight / 480;
    container.scale.x = xscale;
    container.scale.y = yscale;   
};

var offBtnTimer = 0;
const idle = function(n) {};
var nextState = idle;
var x = 50.0;
var road_index = 0;
var shield_index = 0;
// Listen for animate update
function ticker(delta) 
{
    if (x < 0) {
        x = 50.0;
        road[0].visible = false;
        road[1].visible = false;
        road[2].visible = false;
        road_index += 1;
        if (road_index > 2)
            road_index = 0;
        road[road_index].visible = true;
        var oidx = shield_index;
        var a = shields[oidx].alpha;
        a += 0.3;
        if (a > 2) 
        {
            a = 0.3;
            shield_index += 1;
            if (shield_index >= shields.length)
                shield_index = 0;
        }
        shields[oidx].alpha = a;
    }
    x -= delta;
    if (offBtnTimer > 0)
        offBtnTimer -= delta;
    else if (offBtnTimer < 0)
    {
        offBtnTimer = 0;
        doneBtn.interactive = true;
        doneBtn.visible = true;    
    }
    nextState(delta);
};


function showWinnerName()
{
    fxtimerplay('tend');
    var idx = seats[curPlayer];
    var pName = new PIXI.Text(seatNames[idx] + ' #' + winners.length, {
        fontFamily: 'Verdana',
        fontSize: 14,
        fill: 'white',
        align: 'right'
    });
    pName.anchor.x = 1.0;
    pName.x = 575;
    pName.y = curPlayer * 36 + 110;
    winnerNames.push(pName);
    container.addChild(pName);
}


////
////
var delayNextCity = 8;
var nextLocation = '';
var nextTargetYpos = 0;
var nextSteps = 0;
function nextCity(delta)
{
    if ((delayNextCity <= 0)  && (curPlayer >= 0) && (curPlayer < seats.length))
    {
        var idx = seats[curPlayer];
        var nama = 'avatar' + idx;
        var p = mavatars[nama];
        p.y -= delay;
        delayNextCity = 8;
        if (p.y < nextTargetYpos)
        {
            var city = curCities[idx];
            curCities[idx] = nextLocation;
            p.x = cities[nextLocation].x + xOffsets[idx];
            p.y = cities[nextLocation].y + yOffsets[idx];
            nextSteps -= 1;
            nextLocation = '';
            nextTargetYpos = 0;
            nextState = idle;
            ranks[curPlayer].x += 12;
            
            var pos = counters[curPlayer];
            var gotWinner = false;
            if (pos < 11)
            {
                pos += 1;
                counters[curPlayer] = pos;
                if (pos == 11)
                {
                    winners.push(curPlayer); // got a winner
                    gotWinner = true;
                }
            }
            if ((nextSteps < 1) || (pos >= 11))
            {
                nextSteps = 0;
                covidLoop.visible = false;
                setTimeout(function() {
                    p.zIndex = 0;
                    p.scale.set(1,1);
                    playerName.visible = false;
                    if (gotWinner)
                    {
                        p.alpha = 0.5;
                        showWinnerName();
                        setTimeout(function() {
                            thropyBtn.interactive = true;
                            thropyBtn.visible = true;
                            nextPlayer();
                        }, 3000);                        
                    }
                    else
                    {
                        nextPlayer();
                    }
                }, 2000);    
            }
            else
            {
                setTimeout(function() {
                    gotoNextCity();
                }, 1500);
            }
        }
    }
    delayNextCity -= delta;
}

function gotoNextCity() {
    if ((curPlayer < 0) || (curPlayer>seats.length))
        return;
    if (nextLocation != '')
        return;
    if (playing)
        fxplay('jump');
    var idx = seats[curPlayer];
    var nama = 'avatar' + idx;
    var city = curCities[idx];
    nextLocation = cities[city].next;
    var nama = 'avatar' + idx;
    var p = mavatars[nama];
    nextTargetYpos = p.y - 100;
    p.scale.set(1.3,1.3);
    p.zIndex = 1;
    nextState = nextCity;    
}


var delayNextPlayer = 10;
var nextPlayerYpos = 0;
function nextPlayerJumping(delta)
{
    if (delayNextPlayer < 0)
    {
        delayNextPlayer = 10;
        var idx = seats[curPlayer];
        var nama = 'avatar' + idx;
        var p = mavatars[nama];        
        p.y = nextPlayerYpos - Math.floor(Math.random() * 20); 
    }
    delayNextPlayer-= delta;
}


function stayAtHome()
{
    fxplay('ding1');
    stayAtHomeBtn.visible = false;
    stayAtHomeBtn.interactive = false;
    setTimeout(function() {
        nextPlayer()
    }, 1000);
}

function doTurn(retried)
{
    if (curPlayer < 0)
        return;
    if (curPlayer >= seats.length)
        return;
    var idx = seats[curPlayer];
    var px;
    for(var p in ranks)
    {
        if (counters[p] < 11)
        {
            px = ranks[p];
            px.alpha = 0.5;    
        }
    }
    px = ranks[curPlayer];
    px.alpha = 1.0;     
    covidLoop.visible = false;
    var city = seatOrigins[idx];
    playerName.text = seatNames[idx] + '\n' + city;
    playerName.visible = true;
    actg.visible = true;
    var nama = 'avatar' + idx;
    var p = mavatars[nama];
    delayNextPlayer = 8;
    nextPlayerYpos = p.y;

    animal.texture = app.loader.resources[city].texture;
    animal.visible = true;

    nextState = nextPlayerJumping;
    if (!retried)
        fxplay('letsdoit');
    setTimeout(function() {
        goBtn.interactive = true;
        goBtn.visible = true;    
    }, 1000);
}


function nextPlayer()
{
    if (!seats)
        return;
    if (curPlayer < 0)
        curPlayer = 0;
    else
        curPlayer++;        
    if (curPlayer >= seats.length)
        curPlayer = 0;
    if (counters[curPlayer] < 11)
        doTurn();
    else {
        for(var a in counters) {
            if (counters[a] < 11)
            {
                nextPlayer();
                break;
            }
        }
    }
}

////
////
var delay = 30;
var counter = 0;
function homePosition(delta)
{
    if (counter >= seats.length)
        return;
    var idx = seats[counter];
    var nama = 'avatar' + idx;
    var p = mavatars[nama];
    p.y = Math.round(delay) + 30;
    if (delay <= 0) {
        delay = 30;
        var city = seatOrigins[idx];
        curCities[idx] = city;
        counter += 1;
        //p.y = 50;
        p.x = cities[city].x;
        p.y = cities[city].y;
        p.zIndex = 0;
        if (counter >= seats.length) {
            nextState = idle;
            fxstop('roll1');
            setTimeout(function() {
                playing = true;
                nextPlayer();
            },1000);
        }
    }
    delay -= delta;
}

////
////
var timeout = 10;
var shuffled = 20;
function shufflePlayers(delta) {
    if (timeout < 0) {
        timeout = 10;
        if (shuffled < 0) {
            nextState = idle;
            var z = 0;
            for(n in seats) {
                var nama = 'avatar' + seats[n];
                var p = mavatars[nama];
                var p2 = new PIXI.Sprite(p.texture);
                p2.y = z * 38 + 96;
                p2.x = 444;
                p2.scale.set(0.6,0.6);
                p2.alpha = 0.5;
                ranks.push(p2);
                counters.push(0);
                container.addChild(p2);
                z++;
            }
            setTimeout(function() {
                nextState = homePosition;
            }, 1000);
            return;
        }
        shuffled -= 1;
        seats = shuffle(seats);
        for(n in seats) {
            var p = mavatars['avatar' + seats[n]];
            p.x = n * 50 + 40;
            p.visible = true;
        }
    }
    timeout -= delta;
}

function randomCity()
{
    if (nextSteps > 0)
        return;
    if (nextLocation != '')
        return;
    if ((lastDice > 0) || (lastDice < 5))
        nextSteps = lastDice;
    else    
        return;
    curPlayer = Math.floor(Math.random() * seats.length);
    setTimeout(function() {
        gotoNextCity();
    },1000);
}


var barTimerId = 0;
var barTimerCounter = 0;
function resetTimer(keep) 
{
    if (!keep)
    {
        fxtimerstop();
        fxstop();        
    }
    if (barTimerId > 0)
        clearInterval(barTimerId);
    barTimerId = 0;
    bar = document.getElementById('bar');
    if (bar) 
        bar.style.clip = 'rect(0,0,14px,0)';
    var e = document.getElementById('qurl');
    if (e) {
        e.removeEventListener('load', startQuizTimer);
        if (!keep)
            e.src = 'about:blank';
    }
}


var loaded = false;
var skipped = false;
function quizOK()
{
    if (!loaded)
        return;
    skipped = true;
    resetTimer();
    showSlide('#game');
    var n = Math.floor(Math.random()*2 + 1);
    var id = 'ok' + n.toString();
    fxplay(id);
    setTimeout(function() {
        bgMusic.fade(0,0.1,2000);
        gotoNextCity();
    },1000);    
}

function quizNOK()
{
    skipped = true;
    resetTimer();
    showSlide('#game');
    var n = Math.floor(Math.random()*2 + 1);
    var id = 'fail' + n.toString();
    fxplay(id);
    nextSteps = 0;
    setTimeout(function() {
        bgMusic.fade(0,0.1,2000);
        fxplay('stayathome');
        stayAtHomeBtn.interactive = true;
        stayAtHomeBtn.visible = true;
        //setTimeout(function() {
        //    stayAtHome();
        //},1000);        
    },2000);        
}

function updateQuizTimer()
{
    if (barTimerCounter >= 0)
    {
        if (barTimerCounter < 27)
        {
            if (!loaded)
            {
                var e = document.getElementById('tick');
                if (e) e.style.visibility = 'visible';
            }
            loaded = true;            
        }
        if (barTimerCounter == 3)
        {
            fxplay('countdown');
        }
        if (bar) 
        {
            var n = 300 - Math.round(barTimerCounter  * 300 / barCounter);
            var clip = 'rect(0, '+ n.toString() +'px, 14px, 0)';
            bar.style.clip = clip;
        }
    }
    if (barTimerCounter == 0)
    {
        skipped = false;
        fxtimerstop();    
        fxtimerplay("tnull");
        //quizNOK();
    }
    barTimerCounter--;
}
function startQuizTimer()
{
    resetTimer(true);
    barTimerCounter = barCounter;
    var e = document.getElementById('qurl');
    if (e) {
        if (e.src.indexOf('about:') >= 0)
            return;
    }
    if (skipped)
        return;
    barTimerId = setInterval(updateQuizTimer, 1000);
}

///
///
function getUrls() {
    var idx = nextSteps - 1;
    if (idx < 0 || idx > 3)
        return "about:blank";
    if (urls[idx].length < 1)
    {
        // re-initialize quizzes
        if (idx <= 0)
        {
            urls[idx] = shuffle(quizA);
        }
        else if (idx == 1)
        {
            urls[idx] = shuffle(quizT);            
        }
        else if (idx == 2)
        {
            urls[idx] = shuffle(quizC);                        
        }
        else if (idx >= 3)
        {
            urls[idx] = shuffle(quizG);                            
        }    
    }
    var s = urls[idx].pop();   
    var pos = s.lastIndexOf('/');;
    return s.substr(0,pos) + '/embed?start=false&loop=false&delayms=2000';
}

function showQuiz()
{
    bgMusic.fade(0.1, 0,2000);
    loaded = false;
    skipped = false;
    var e = document.getElementById('tick');
    if (e) e.style.visibility = 'hidden';
     e = document.getElementById('qurl');
    var url = getUrls();
    var x = Math.floor(Math.random()*intros.length);
    showSlide('#quiz');    
    setTimeout(function() {
        if (e) e.src = intros[x];
        var id = Math.floor(Math.random()*2);
        if (nextSteps > 3)
            id += nextSteps;
        else   
            id = nextSteps;
        var tid = 't' + id.toString();
        fxtimerloop(tid);
        setTimeout(function() {
            if (e)
            {
                e.addEventListener('load', startQuizTimer);
                e.src = url;
            } 
        },3000);        
    },1000);        
}


///
///


function doATCG(dice)
{
    if (nextSteps > 0)
        return;
    if (nextLocation != '')
        return;
    if (dice == 0)
    {
        fxplay('tryagain');
        doTurn(true);
        return;
    }
    if (dice == 2)
    {
        fxplay('stayathome');
        stayAtHomeBtn.interactive = true;
        stayAtHomeBtn.visible = true;
        return;
    }
    if ((dice > 0) || (dice < 5))
    {
        if (dice == 1)
        {
            fxplay('thymine');
            nextSteps = 2;
        }
        else if (dice == 3)
        {
            fxplay('cytosine');
            nextSteps = 3;
        }
        else if (dice == 4)
        {
            fxplay('adenine');
            nextSteps = 1;
        }
        else if (dice == 5)
        {
            fxplay('guanine');
            nextSteps = 4;
        }
        //gotoNextCity();
        showQuiz();
    }
    else    
        return;
    //nextPlayer();
}

//
//
//
function getDice() 
{
    var dice = Math.floor(Math.random() * 6);
    if (dice == 4)
    {
        // Adenine
        if (urls[0].length < 1)
        {
            if (urls[1].length > 0)
                dice = 1;
            else if (urls[2].length > 0)
                dice = 3;
            else if (urls[3].length > 0)
                dice = 5;
        }
    }
    else if (dice == 1)
    {
        // Thymine
        if (urls[1].length < 1)
        {
            if (urls[0].length > 0)
                dice = 4;
            else if (urls[2].length > 0)
                dice = 3;
            else if (urls[3].length > 0)
                dice = 5;
        }
    }
    else if (dice == 3)
    {
        // Cytosine
        if (urls[2].length < 1)
        {
            if (urls[1].length > 0)
                dice = 1;
            else if (urls[0].length > 0)
                dice = 4;
            else if (urls[3].length > 0)
                dice = 5;
        }
    }
    else if (dice == 5)
    {
        // Guanine
        if (urls[3].length < 1)
        {
            if (urls[1].length > 0)
                dice = 1;
            else if (urls[2].length > 0)
                dice = 3;
            else if (urls[0].length > 0)
                dice = 4;
        }
    }
    return dice;
}


var rollingDelay = 30;
var rollingCounter = 10;
var lastDice = 0;
function rollingATCG(delta)
{
    if (rollingDelay < 0) {
        rollingDelay = 30;
        if (rollingCounter < 0) {
            rollingCounter = 10;
            nextState = idle;
            covidLoop.stop();
            fxstop('bug');
            setTimeout(function() {
                fxstop();
                doATCG(lastDice);
            },500);
            return;
        }
        if (rollingCounter == 0)
            lastDice = getDice();
        else
            lastDice = Math.floor(Math.random() * 6);
        covidLoop.x = xDice[lastDice];
        covidLoop.y = yDice[lastDice];
        covidLoop.visible = true;
        rollingCounter -= 1;
    }
    rollingDelay -= delta;
}

function rollATCG()
{
    if (nextSteps > 0)
        return;
    if (nextLocation != '')
        return;
    fxloop('bug');
    covidLoop.play();
    goBtn.interactive = false;
    goBtn.visible = false;
    nextState = rollingATCG;    
}

function keepPlaying()
{
    showSlide('#game');
    var e = document.getElementById('quitpanel');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('quizpanel');
    if (e)
    e.style.display = 'block';
    e = document.getElementById('qcontainer');
    if (e)
    e.style.display = 'block';
}

var idWaiting = 0;

function endCredits()
{    
    fxstop();
    fxtimerstop();
    if (bgMusic)
        bgMusic.stop();
    if (endMusic)
        endMusic.play();
    var e = document.getElementById('qurl');
    if (e)
        e.src = "about:blank";
    e = document.getElementById('winner');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('quitpanel');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('quizpanel');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('qcontainer');
    if (e)
        e.style.display = 'block';

    var url = credits;
    var pos = url.lastIndexOf('/');;
    url = url.substr(0,pos) + '/embed?start=true&loop=true&delayms=2000';
    e = document.getElementById('qurl');
    if (e)
        e.src = url;
    setTimeout(function() {
        var e = document.getElementById('TGIF');
        e.style.visibility = 'visible';
    }, 10000);
}

var endCreditEnabled = false;
function showEndCredits()
{
    if (endCreditEnabled)
    {
        if (idWaiting)
        clearTimeout(idWaiting);
        idWaiting = 0;
        setTimeout(endCredits(), 100);
    }
}

function showThropy()
{
    fxstop();
    fxtimerstop();
    if (bgMusic)
        bgMusic.stop();
    fxtimerplay("tend");
    var winner_names = '';
    var counter = 0;
    for(var a in winners) 
    {
        var id = winners[a];
        winner_names += '<div class="glow2">' + seatNames[id];
        winner_names += '</div><div class="small">' + seatOrigins[id] + '</div>';
        counter++;
        if (counter >= 3)
            break;
    }
    var e = document.getElementById('winnerlist');
    if (e)
    {
        e.innerHTML = winner_names;
    }
    endCreditEnabled = true;
    idWaiting = setTimeout(function() {
        idWaiting = 0;
        endCredits();
    }, 20000);
}

function donePlaying()
{
    fxstop();
    fxtimerstop();
    if (bgMusic)
        bgMusic.stop();
    var e = document.getElementById('qurl');
    if (e)
        e.src = "about:blank";
    e = document.getElementById('quitpanel');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('quizpanel');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('qcontainer');
    if (e)
        e.style.display = 'none';
    e = document.getElementById('winner');
    if (e)
        e.style.display = 'block';
    fxloop('roll1');
    setTimeout(showThropy, 5000);
}

function quitPlaying()
{
    var e = document.getElementById('qurl');
    if (e)
        e.src = "about:blank";
    e = document.getElementById('quizpanel');
    if (e)
    e.style.display = 'none';
    e = document.getElementById('qcontainer');
    if (e)
    e.style.display = 'none';
    e = document.getElementById('quitpanel');
    if (e)
        e.style.display = 'block';
    showSlide('#quiz');        
}
function goBtnDown() 
{
    goBtn.texture = textureGoBtn1;
}
function goBtnUp() 
{
    resetTimer();
    fxplay('ding1');
    animal.visible = false;
    goBtn.texture = textureGoBtn0;
    var idx = seats[curPlayer];
    var nama = 'avatar' + idx;
    var p = mavatars[nama];
    p.y = nextPlayerYpos;
    nextState = idle;
    rollATCG();
}

function goBtnUp2() 
{
    goBtn.texture = textureGoBtn0;
}
function thropyBtnDown()
{
    thropyBtn.texture = app.loader.resources["thropy0"].texture;
}
function thropyBtnUp2()
{
    thropyBtn.texture = app.loader.resources["thropy"].texture;
}
function thropyBtnUp()
{
    thropyBtn.texture = app.loader.resources["thropy"].texture;
    quitPlaying();
}

var introTimerID = 0;
var introMsgDiv;
var introOpacity = 0;
function introMsg()
{
    introOpacity += 0.1;
    introMsgDiv.style.opacity = introOpacity;
    if (introOpacity >= 1.0)
    {
        if (introTimerID > 0)
            clearInterval(introTimerID);
        introTimerID = 0;
    }
}

function enableGo() 
{
    var enabled = false;
    var namas = document.getElementsByName("nama");
    var origins = document.getElementsByName("origin");
    for(var i=0;i<namas.length;i++)
    {       
        var nama = namas[i].value.trim(); 
        var origin = origins[i].value.trim();
        if ((nama.length > 0) && (origin.length > 0))
        {
            enabled = true;
            break;
        }
    }
    var e = document.getElementById("btnstop");
    if (e)
    {
        if (enabled) 
            e.setAttribute("style", "visibility:visible");
        else
            e.setAttribute("style", "visibility:hidden");
    }
}

var played = {}
function fxplay(n)
{
    if (!n)
        return;
    var id;
    if (n in played)
    {
        id = played[n];
        if (id > 0)
        {
            fx.stop(id);
            fx.stop(id);
            fx.stop(id);
            fx.stop(id);
            fx.stop(id);
        }
    }
    id = fx.play(n);
    fx.loop(false, id);
    played[n] = id;
}

function fxloop(n)
{
    if (!n)
        return;
    var id;
    if (n in played)
    {
        id = played[n];
        if (id > 0)
            return;
    }
    id = fx.play(n);
    fx.loop(true, id);
    played[n] = id;
}
function fxstop(n)
{
    if (!n) {
        played = {};
        fx.stop();
        fx.stop();
        fx.stop();
        fx.stop();
        fx.stop();
        return;
    }
    var id;
    if (n in played)
    {
        id = played[n];
        if (id > 0){
            fx.stop(id);
            fx.stop(id);
            fx.stop(id);
            fx.stop(id);
            fx.stop(id);
        }
    }
    played[n] = 0;
}

var timerplayed = {}
function fxtimerplay(n)
{
    if (!n)
        return;
    var id;
    if (n in timerplayed)
    {
        id = timerplayed[n];
        if (id > 0)
            fxtimer.stop(id);
    }
    id = fxtimer.play(n);
    fxtimer.loop(false, id);
    fxtimer.fade(1.0,fxLevel,5000,id);
    timerplayed[n] = id;
}
function fxtimerloop(n)
{
    if (!n)
        return;
    var id;
    if (n in timerplayed)
    {
        id = timerplayed[n];
        if (id > 0)
            return;
    }
    id = fxtimer.play(n);
    fxtimer.loop(true, id);
    fxtimer.fade(1.0,fxLevel,5000,id);
    timerplayed[n] = id;
}
function fxtimerstop(n)
{
    if (!n) {
        timerplayed = {};
        fxtimer.stop();
        fxtimer.stop();
        fxtimer.stop();
        fxtimer.stop();
        fxtimer.stop();
        fxtimerplay('tnull');
        return;
    }
    var id;
    if (n in timerplayed)
    {
        id = timerplayed[n];
        if (id > 0)
        {
            fxtimer.loop(false, id);
            fxtimer.stop(id);
            fxtimer.stop(id);
            fxtimer.stop(id);
            fxtimer.stop(id);
            fxtimer.stop(id);
        }
    }
    timerplayed[n] = 0;
    fxtimerplay('tnull');
}

function updateFx()
{
    switch(fxMode) {
        case "fun":
            fxLevel = 0.5;
        // t4 switch with t3
            fxtimer = new Howl({
                src: ['res/fx/atcg-timers.mp3'],
                sprite: {
                    t1: [0, 2300, true],
                    t2: [2830, 1720, true],
                    t3: [4860, 3450, true], 
                    t4: [9250, 4720, true],
                    t5: [14280, 1700, true],
                    tend: [16252, 50300, false],
                    tnull: [21600, 1000, false]
                },        
                html5: true,
                buffer:true,
                autoplay:false,
                preload:true,
                loop:false
            });
            break;
        case "relax":
            fxLevel = 0.5;
            fxtimer = new Howl({
                src: ['res/fx/atcg-fx-ukulele.mp3'],
                sprite: {
                    t1: [0, 6882, true],
                    t2: [7900, 6000, true],
                    t3: [14652, 6852, true],
                    t4: [22513, 6248, true],
                    t5: [30876, 1795, true],
                    tend: [34887, 50100, false],
                    tnull: [42500, 1000, false]
                },        
                html5: true,
                buffer:true,
                autoplay:false,
                preload:true,
                loop:false
            });
            break;
        default:
            fxLevel = 0.2;
            fxtimer = new Howl({
                src: ['res/fx/atcg-fx-funday.mp3'],
                sprite: {
                    t1: [0, 2889, true],
                    t2: [3900, 4650, true],
                    t3: [9324, 4868, true],
                    t4: [14861, 4182, true],
                    t5: [19800, 2700, true],
                    tend: [23452, 5100, false],
                    tnull: [28900, 1000, false]
                  },        
                html5: true,
                buffer:true,
                autoplay:false,
                preload:true,
                loop:false
            });
        }        
}

function startGame() 
{
    var ee = document.getElementsByName('theme')[0];
    fxMode = ee.value;
    updateFx();
    curCities = ["","","","","","","",""];
    ranks = [];
    counters = [];
    winners = [];
    winnerNames = [];
    seats = [];
    seatNames = [];
    seatOrigins = [];
    var namas = document.getElementsByName("nama");
    var origins = document.getElementsByName("origin");
    for(var i=0;i<namas.length;i++)
    {       
        var nama = namas[i].value.trim(); 
        var origin = origins[i].value.trim();
        if ((nama.length > 0) && (origin.length > 0))
            seats.push(i);
        seatNames.push(nama);
        seatOrigins.push(origin);
    }
    if (seats.length < 1)
    {
        console.log('*** no players');
        fxloop('fail1');
    }
    else
    {
        showSlide('#game');
        nextState = shufflePlayers;
        fxloop('roll1');
    }
}


var idStartMusic=0;
var idBgMusic=0;
var started = false;
function startToPlay()
{
    if (started)
        return;
    started = true;
    if (introTimerID > 0)
        clearInterval(introTimerID);
    introTimerID = 0;
    introMsgDiv.innerHTML = '<i>p r e s e n t s</i>';
    introMsgDiv.style.marginLeft =  "-76px";
    introMsgDiv.style.opacity = 1.0;

    bgMusic = new Howl({
        src: ['res/fx/mars-SDH.mp3'],
        sprite: {
            full: [0, 18100, false],
            bg: [7300, 17000, true]
          },        
        html5: true,
        buffer:true,
        autoplay:false,
        preload:true,
        loop:false,
        onload: function() {
            bgMusic.fade(0.2, 1.0,2000);
            idStartMusic = bgMusic.play('full');
        },
        onend: function(id) {
            if (id == idStartMusic)
                bgMusic.stop();
            if (idBgMusic == 0)
                idBgMusic = bgMusic.play('bg');            
        }
    });
    fx = new Howl({
        src: ['res/fx/atcg-fx.mp3'],
        sprite: {
            bug: [0, 850, true],
            ok: [1010, 1100, false],
            ding1: [2200, 300, false],
            ding2: [2590, 1000, false],
            roll1: [4000, 1000, true],
            ok1: [5700, 2340, false],
            fail1: [8340, 1900, false],
            fail2: [10355, 1210, false],
            ok2: [11810, 1990, false],
            countdown: [14690, 3316, false],
            stayathome: [18200, 1524, false],
            tryagain: [19834, 1083, false],
            adenine: [21441, 786, false],
            guanine: [22533, 710, false],
            thymine: [23710, 710, false],
            cytosine: [25092, 990, false],
            letsdoit: [26370, 1200, false],
            jump: [27650, 1000, false]
          },        
        html5: true,
        buffer:true,
        autoplay:false,
        preload:true,
        loop:false
    });
    updateFx();
    endMusic = new Howl({
        src: ['res/fx/atcg-ukulele.mp3'],
        html5: true,
        buffer:true,
        autoplay:false,
        preload:true,
        loop:false});

    setTimeout(function() {
        showSlide('#splash');
        bgMusic.fade(1.0, 0.1,4000);
        setTimeout(function() {
            showSlide('#rules');
        }, 5000);
    }, 3000);
 }


 function setup()
{
    introMsgDiv = document.getElementById('intromsg');
    introTimerID = setInterval(introMsg, 200);
    // Create a new texture
    var texture = app.loader.resources["bgmap"].texture;
    var bgmap = new PIXI.Sprite(texture);
    var sdhtexture = app.loader.resources["sdhmap"].texture;
    var sdhmap = new PIXI.Sprite(sdhtexture);
    road = [
        new PIXI.Sprite(app.loader.resources["line0"].texture),
        new PIXI.Sprite(app.loader.resources["line1"].texture),
        new PIXI.Sprite(app.loader.resources["line2"].texture)
    ];
    container.addChild(bgmap);
    road[0].visible = false;
    road[1].visible = false;
    road[2].visible = false;
    container.addChild(road[0]);
    container.addChild(road[1]);
    container.addChild(road[2]);
    container.addChild(sdhmap);

    textureGoBtn0 = app.loader.resources["go0"].texture;
    textureGoBtn1 = app.loader.resources["go1"].texture;
    goBtn = new PIXI.Sprite(textureGoBtn0);
    goBtn.interactive = false;
    goBtn.visible = false;
    goBtn.x = 270;
    goBtn.y = 140;
    goBtn
        .on("mousedown", goBtnDown)
        .on("touchstart", goBtnDown)
        .on("mouseout", goBtnUp2)
        .on("mouseup", goBtnUp)
        .on("touchend", goBtnUp);
    container.addChild(goBtn);

    thropyBtn = new PIXI.Sprite(app.loader.resources["thropy"].texture);
    thropyBtn.interactive = false;
    thropyBtn.visible = false;
    thropyBtn.x = 561;
    thropyBtn.y = 16;
    thropyBtn
        .on("mousedown", thropyBtnDown)
        .on("touchstart", thropyBtnDown)
        .on("mouseout", thropyBtnUp2)
        .on("mouseup", thropyBtnUp)
        .on("touchend", thropyBtnUp);
    container.addChild(thropyBtn);

    var actg_texture = app.loader.resources["atcg"].texture;
    actg = new PIXI.Sprite(actg_texture);
    actg.x = 30;
    actg.y = 30;
    actg,alpha = 0.1;
    actg.visible = false;
    container.addChild(actg);

    var covidSheet = app.loader.resources["covid"].spritesheet;
    covidLoop = new PIXI.AnimatedSprite(covidSheet.animations["covid"]);
    covidLoop.animationSpeed = 0.12;
    covidLoop.x = 200;
    covidLoop.y = 100;
    covidLoop.visible = false;
    //covidLoop.play();

    container.addChild(covidLoop);
    var sheet = app.loader.resources["mavatars"].spritesheet;
    var n = 0;
    for (t in sheet.textures) 
    {
        var p = new PIXI.Sprite(sheet.textures[t]);
        mavatars[t] = p;
        p.y = 100;
        p.x = n * 50 + 40;
        p.visible = false;
        container.addChild(p);
        n++;
        if (n > 7)
            break;
    }    
    sheet = app.loader.resources["shields"].spritesheet;
    n = 0;
    for (t in shieldNames) 
    {
        var p = new PIXI.Sprite(sheet.textures[shieldNames[t]]);
        shields.push(p);
        p.alpha = 0.3;
        p.y = 420;
        p.x = n * 50 + 43;
        p.scale.set(0.4,0.4);
        container.addChild(p);
        n++;
    }


    playerName = new PIXI.Text('Player Name\nLocation', {
        fontFamily: 'Verdana',
        fontSize: 18,
        fill: 'yellow',
        align: 'right'
    });
    playerName.anchor.x = 1.0;
    playerName.x = 430;
    playerName.y = 80;
    playerName.visible = false;
    container.addChild(playerName);

    var p = new PIXI.Sprite(shields[3].texture);
    p.y = 140;
    p.x = 260;
    p.visible = false;
    p.on("mousedown", stayAtHome);
    container.addChild(p);
    stayAtHomeBtn = p;

    animal = new PIXI.Sprite(app.loader.resources["Lippo Village"].texture);
    //animal.x = 522;
    //animal.y = 380;
    //animal.anchor.set(0.5,1);
    animal.x = 35;
    animal.y = 35;
    animal.scale.set(2.0,2.0);
    animal.anchor.set(0,0);
    animal,alpha = 0.2;
    animal.visible = false;
    container.addChild(animal);

    var div = document.getElementById('game');
    div.appendChild(app.view);
    app.stage.addChild(container);  
    window.onresize = resize;    
    resize();
    app.ticker.add(ticker);
}

 function init()  {
    mySlider = slider('.slides');
    barCounter = quizTimeoutInSeconds?quizTimeoutInSeconds:30; 
    urls = [];
    urls.push(shuffle(quizA));''
    urls.push(shuffle(quizT));''
    urls.push(shuffle(quizC));''
    urls.push(shuffle(quizG));''

    //return;

    app.loader    
    .add("sdhmap", "res/sdhmap.png")
    .add("bgmap", "res/bgmap.png")
    .add("atcg", "res/atcg.png")
    .add("covid", "res/covid.json")
    .add("shields", "res/shields.json")
    .add("line0", "res/line0.png")
    .add("line1", "res/line1.png")
    .add("line2", "res/line2.png")
    .add("go0", "res/go_off.png")
    .add("go1", "res/go_on.png")
    .add("done", "res/done.png")
    .add("off", "res/off.png")
    .add("thropy", "res/thropy.png")
    .add("thropy0", "res/thropy0.png")
    .add("mavatars", "res/mavatar.json")
    .add("Bangka", "res/animals/bangka.png")
    .add("Bogor", "res/animals/bogor.png")
    .add("Cikarang", "res/animals/cikarang.png")
    .add("Daan Mogot", "res/animals/daanmogot.png")
    .add("Holland Village", "res/animals/hollandvillage.png")
    .add("Kupang", "res/animals/kupang.png")
    .add("Lubuk Linggau", "res/animals/lubuklinggau.png")
    .add("Lippo Village", "res/animals/lippovillage.png")
    .add("Makassar", "res/animals/makassar.png")
    .add("Palembang", "res/animals/palembang.png")
    .add("Ranotana", "res/animals/ranotana.png")
    .load(setup);
    showSlide('#intro');
}

document.oncontextmenu = new Function("return false;");
document.onload = init();
