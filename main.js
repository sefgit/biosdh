const barCounter = 30; // Quiz timer in seconds
var urls = [
    "https://docs.google.com/presentation/d/e/2PACX-1vTGdBLuSIuIV73slEqnihNi66yMPpAJJSzJ_oPKXfS4TPd568lo2_clWvnqtArJvChgpGoxwCpJz2fr/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vS2IFKjooQqyw5YmFLF1MYE9pT_KOsAtS5pCDCVK8AZ9fGgg-Pu9KPNAJuCxKZVUh0xbIHDfOexvBSk/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vR9VSrrmLnaO0-1MxGARXbm7Tt1a0CGMw4pJ1G7rrzHpJKHCa9ECZukwoQWz-RCwq51Ft6aPv3H9RaS/pub?start=false&loop=false&delayms=3000",  
    "https://docs.google.com/presentation/d/e/2PACX-1vQirgZFRex9uobvbxRdlJ6KTbdhUkeZBhOGCqOAiQgn5gHkGqYtYqrzIaUGhXR3H2UploMtuUTChldq/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRSyQW8NEJ0yx1xN43s2YOVWyFAC58yaHH9OuClAT-Ol6Dt21d3-46T4eTlBuRPzSnmEXQn2zyiGF5i/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vR8_WKAa7G-E8OZ23j3Ndt5LWjVzVa-ahhYH6nwnzQn4UdFYCgu5iyZE4ttJQZo36RGwgyVpWYkrHMm/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vQkgvpAgwUsOyZG52AJgA4Sr6tPKIKL04OTv4fTd64ORjWdR0v_PsIhIvDG1aOn6sDdjYA5B5hkOKoM/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vSa1oXb9QF94pEIbDOZvhBufrxMWt7M0Ipn8F2VxasS61qn8hG716YZgCRmB2_UuynFZEgnyxsoZR_l/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vSclI-T5uHs-ieQRuLyetRn0yzCwgRMPksu9X_a02WfYZdhG8e44ZEcB6XEYbpvw9MfOzyXCMNnToIy/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vQDgNN_ZzHtzuQE4IEU-ct0J9nThm5KSahA6k_YJv3bOrdRycnDswGHDLWXvcoAeDLrRkevyvLS78kT/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vRf0thtm89v8p_CS_7n-_GI8bPtUw0sGufkbAV3vzi-_krAiOk_8nY_Aa-wDb88o46yZ1BD_ZdQhKru/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vTu3qQjnacAIqqJ-9WanHxrqxcyCJvkWO_901KXKCIBdNHiW0toENZbsNPU4Ct5LU7u_OHbIiCKDmGs/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vR8n7sCdsqdilAoumAvs6UWejPaNhqmy37zcuoYr2uDQagiKhJjciza_SkGdURMXO8OtsF_qWbF3IhZ/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vSeEvS3VKdnIcXzLVCzaLo3Sjto-VHpHzn2qJC2cFKjED8Cvr4XMHF9I7xo342IFxF4jbmx1clxa6uB/pub?start=false&loop=false&delayms=3000",    
    "https://docs.google.com/presentation/d/e/2PACX-1vQLaVDpZtiTIfOqJ8saftVPNfWLrZnBUwLxuwJyL_6umugvNLk9ZZmB6J40-y2bVP7G9yjDPQf5azB6/pub?start=false&loop=false&delayms=3000",        
];


var intros = [
    "https://docs.google.com/presentation/d/e/2PACX-1vQVNZqPHj6lYEfLlXDkUftHw5LQ9nRf7Jmslzmife9zkB_w95Y43qM_16F62wm8Sl9GOizOwIpB_EMi/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQ5f8fhzrxR0EjPJWdB6OU1VTUTtHd0lvk8zs8GBrvW7xIwi1kDCNKYAIxW5YgQU4uWVIXujfkEM78n/embed?start=false&loop=false&delayms=3000"
    ];


document.oncontextmenu = new Function("return false;");
var default_shield_info='save lives, save your loved ones';

function newInfo(info) {
    var e = document.getElementById('shield_info');
    if (e)
    {
        if (info) 
            e.innerHTML=info;
        else
            e.innerHTML =default_shield_info;
    }
}

function newStyle(e, newClass) {
    e.setAttribute("class", newClass);
}

function shuffle(arra1) {
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
var curPlayer = -1;
const mavatars = {};
var players = {};
var winners;
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
//specify display list component
const container = new PIXI.Container();
container.sortableChildren = true;

const resize = function() {
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
// Listen for animate update
function ticker(delta) {
    if (x < 0) {
        x = 50.0;
        road[0].visible = false;
        road[1].visible = false;
        road[2].visible = false;
        road_index += 1;
        if (road_index > 2)
            road_index = 0;
        road[road_index].visible = true;
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
                        showWinnerName();
                    }
                    nextPlayer();
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
        p.y = nextPlayerYpos - Math.round(Math.random() * 20); 
    }
    delayNextPlayer-= delta;
}


function stayAtHome()
{
    stayAtHomeBtn.visible = false;
    stayAtHomeBtn.interactive = false;
    setTimeout(function() {
        nextPlayer()
    }, 1000);
}

function doTurn()
{
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
    playerName.text = seatNames[idx] + '\n' + seatOrigins[idx];
    playerName.visible = true;
    actg.visible = true;
    var nama = 'avatar' + idx;
    var p = mavatars[nama];
    delayNextPlayer = 8;
    nextPlayerYpos = p.y;
    nextState = nextPlayerJumping;
    setTimeout(function() {
        goBtn.interactive = true;
        goBtn.visible = true;    
    }, 1000);
}


function nextPlayer()
{
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
            setTimeout(function() {
                nextPlayer();
            },1000);
        }
    }
    //p.scale = 0.5;
    //p.visible = true;
    delay -= delta;
}

////
////
var timeout = 63;
var shuffled = 5;
function shufflePlayers(delta) {
    if (timeout < 0) {
        timeout = 30;
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
    //nextSteps = Math.floor(Math.random() * 4 + 1);
    setTimeout(function() {
        gotoNextCity();
    },1000);
}


var barTimerId = 0;
var barTimerCounter = 0;
function resetTiimer() 
{
    if (barTimerId > 0)
        clearInterval(barTimerId);
    barTimerId = 0;
}

function quizOK()
{
    resetTiimer();
    showSlide('#game');
    var e = document.getElementById('qurl');
    if (e) e.src = 'about:blank';
    setTimeout(function() {
        gotoNextCity();
    },1000);    
}

function quizNOK()
{
    resetTiimer();
    showSlide('#game');
    nextSteps = 0;
    var e = document.getElementById('qurl');
    if (e) e.src = 'about:blank';
    setTimeout(function() {
        //gotoNextCity();
        stayAtHomeBtn.interactive = true;
        stayAtHomeBtn.visible = true;
        //setTimeout(function() {
        //    stayAtHome();
        //},1000);        
    },1000);        
}

function updateQuizTimer()
{
    if (barTimerCounter > 0)
    {
        barTimerCounter--;
    }
    if (bar) 
    {
        var n = 100 - Math.round(barTimerCounter  * 100 / barCounter);
        bar.style.width = n + "%";
    }
    if (barTimerCounter <= 0)
    {
        quizNOK();
    }
}

function resetQuizTimer()
{
    resetTiimer();
    bar = document.getElementById('bar');
    if (bar) {
        bar.style.width = "0";
        //bar.setAttribute("width","0%");
    }
}

function startQuizTimer()
{
    resetQuizTimer();
    barTimerCounter = barCounter;
    barTimerId = setInterval(updateQuizTimer, 1000);
}

///
///
function getUrls() {
    var n = urls.length;
    var x = Math.round(Math.random()* n);
    var s = urls[x];
    urls.splice(x, 1);
    var pos = s.lastIndexOf('/');;
    return s.substr(0,pos) + '/embed?start=false&loop=false&delayms=2000';
}

function showQuiz()
{
    var e = document.getElementById('qurl');
    var url = getUrls();
    var x = Math.round(Math.random()*intros.length);
    showSlide('#quiz');    
    if (e) e.src = intros[x];
    setTimeout(function() {
        if (e) e.src = url;
        startQuizTimer();
    },3000);        
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
        doTurn();
        return;
    }
    if (dice == 2)
    {
        stayAtHomeBtn.interactive = true;
        stayAtHomeBtn.visible = true;
        return;
    }
    if ((dice > 0) || (dice < 5))
    {
        if (dice == 1)
            nextSteps = 2;
        else if (dice == 3)
            nextSteps = 3;
        else if (dice == 4)
            nextSteps = 1;
        else if (dice == 5)
            nextSteps = 4;
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
            setTimeout(function() {
                doATCG(lastDice);
            },2000);
            return;
        }
        lastDice = Math.floor(Math.random() * 6);
        //dice = 3;
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
    nextState = rollingATCG;    
    covidLoop.play();
    goBtn.interactive = false;
    goBtn.visible = false;
    resetQuizTimer();
}

function goBtnDown() 
{
    goBtn.texture = textureGoBtn1;
}

function goBtnUp() 
{
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

function setup()
{
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
    goBtn.x = 260;
    goBtn.y = 130;
    goBtn
        .on("mousedown", goBtnDown)
        .on("touchstart", goBtnDown)
        .on("mouseout", goBtnUp2)
        .on("mouseup", goBtnUp)
        .on("touchend", goBtnUp);
    container.addChild(goBtn);


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
    /*
    var covid_texture = app.loader.resources["covid"].texture;
    const covid = new PIXI.Sprite(covid_texture);
    covid.x = 130;
    covid.y = 50;
    container.addChild(covid);
    */    
        /*
    var dnaSheet = app.loader.resources["dna"].spritesheet;
    var dnaLoop = new PIXI.AnimatedSprite(dnaSheet.animations["dna"]);
    dnaLoop.animationSpeed = 0.12;
    dnaLoop.play();
    container.addChild(dnaLoop);
    */
    var sheet = app.loader.resources["mavatars"].spritesheet;
    var n = 0;
    for (t in sheet.textures) 
    {
        var p = new PIXI.Sprite(sheet.textures[t]);
        //var p2 = new PIXI.Sprite(sheet.textures[t]);
        mavatars[t] = p;
        //players[t] = p2;
        //seats.push(t);
        p.y = 100;
        p.x = n * 50 + 40;
        p.visible = false;
        //p2.visible = false;
        container.addChild(p);
        //container.addChild(p2);
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

    /*
    offBtn = new PIXI.Sprite(app.loader.resources["off"].texture);
    //offBtn.interactive = false;
    //offBtn.visible = false;
    offBtn.x = 553;
    offBtn.y = 16;
    //offBtn
    //    .on("mouseup", offBtnUp)
    //    .on("touchend", offBtnUp);
    container.addChild(offBtn);

    doneBtn = new PIXI.Sprite(app.loader.resources["done"].texture);
    doneBtn.interactive = false;
    doneBtn.visible = false;
    doneBtn.x = 553;
    doneBtn.y = 16;
    //doneBtn
    //    .on("mouseup", doneBtnUp)
    //    .on("touchend", doneBtnUp);
    container.addChild(doneBtn);
*/



    var p = new PIXI.Sprite(shields[3].texture);
    p.y = 140;
    p.x = 260;
    p.visible = false;
    p.on("mousedown", stayAtHome);
    container.addChild(p);
    stayAtHomeBtn = p;

    //container.on("mouseup",  rollATCG);
    //randomCity);
    var div = document.getElementById('game');
    //document.body.appendChild(app.view);
    div.appendChild(app.view);
    app.stage.addChild(container);  
    window.onresize = resize;    
    resize();
    app.ticker.add(ticker);
}

function init()  {
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
    .add("mavatars", "res/mavatar.json")
    .load(setup);

    /*
    setTimeout(function() {
        mySlider.gotoSlide('#game');
        setTimeout(function() {
            mySlider.gotoSlide('#end');
        }, 3000);    
    }, 3000);
    */
   startQuizTimer();
}

document.onload = init();

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

function startGame() 
{
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
        console.log('*** no players');
    else
    {
        nextState = shufflePlayers;
        showSlide('#game');
    }
}

