

const library_N5 =
[
    ["one","一"],
    ["two","二"],
    ["three","三"],
    ["four","四"],
    ["five","五"],
    ["six","六"],
    ["seven","七"],
    ["eight","八"],
    ["nine","九"],
    ["ten","十"],
    ["hundred","百"],
    ["thousand","千"],
    ["ten thousand","万"],
    ["Mon. / month / moon","月"],
    ["Tue. / fire","火"],
    ["Wed. / water","水"],
    ["Thu. / tree","木"],
    ["Fri. / gold","金"],
    ["Sat. / soil","土"],
    ["Sun. / day","日"],
    ["week","週"],
    ["year","年"],
    ["now","今"],
    ["every","毎"],
    ["noon","午"],
    ["minutes","分"],
    ["time","時"],
    ["while / between","間"],
    ["person","人"],
    ["man","男"],
    ["woman","女"],
    ["father","父"],
    ["mother","母"],
    ["child","子"],
    ["ahead","先"],
    ["life","生"],
    ["friend","友"],
    ["eye","目"],
    ["mouth","口"],
    ["ear","耳"],
    ["hand","手"],
    ["leg","足"],
    ["strength","力"],
    ["up","上"],
    ["down","下"],
    ["left","左"],
    ["right","右"],
    ["east","東"],
    ["west","西"],
    ["south","南"],
    ["north","北"],
    ["inside","中"],
    ["outside","外"],
    ["front / before","前"],
    ["behind / later","後"],
    ["mountain","山"],
    ["river","川"],
    ["flower","花"],
    ["rain","雨"],
    ["sky","空"],
    ["heaven","天"],
    ["air",""],
    ["big","大"],
    ["small","小"],
    ["new","新"],
    ["old","古"],
    ["high","高"],
    ["comfort",""],
    ["many","多"],
    ["few","少"],
    ["long","長"],
    ["early","早"],
    ["white","白"],
    ["go","行"],
    ["come","来"],
    ["eat","食"],
    ["drink","飲"],
    ["write","書"],
    ["look","見"],
    ["say","言"],
    ["stand","立"],
    ["go out","出"],
    ["enter","入"],
    ["read","読"],
    ["speak","話"],
    ["language","語"],
    ["buy","買"],
    ["listen","聞"],
    ["rest","休"],
    ["cow","牛"],
    ["horse","馬"],
    ["fish","魚"],
    ["station","駅"],
    ["shop","店"],
    ["meet","会"],
    ["company","社"],
    ["study","学"],
    ["school","校"],
    ["country","国"],
    ["way",""],
    ["car","車"],
    ["half","半"],
    ["name","名"],
    ["yen","円"],
    ["what","何"],
    ["electricity","電"],
    ["book","本"]
];

const library_N4 =
[
    ["not","いいえ"],
    ["yet","まだ"],
    ["finished","終わり"]
]
function shuffleArray(array)
{
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--)
    {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log(shuffled.length);
    // console.log(shuffled);
    return shuffled;
}

let randomizedArray;

let currentIndex = 0;
let language = "japanese";

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const current_english = document.getElementById("english");
const current_japanese = document.getElementById("japanese");
const showButton = document.getElementById("showButton");

function updateDisplay() {
    current_english.textContent = randomizedArray[currentIndex][0];
    current_japanese.textContent = randomizedArray[currentIndex][1];
    hide();
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateDisplay();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < randomizedArray.length - 1) {
    currentIndex++;
    updateDisplay();
  }
  else if(currentIndex == randomizedArray.length-1)
  {
    current_english.textContent = "you've finished";
    current_japanese.textContent = "終わった";
    show();
  }
});

showButton.addEventListener("click", () => {
    show();
});

toggleButton.addEventListener("click", () => {
    toggleLanguage();
});

function toggleLanguage(x)
{
    if(language == "japanese")
    {
        language = "english";
        toggleButton.innerHTML = "ENG is hidden";
    }
    else
    {
        language = "japanese";
        toggleButton.innerHTML = "JPN is hidden";
    }
    hide();
}

function hide()
{
    if(language == "japanese")
    {current_japanese.style.color="#B9A3E3"; current_english.style.color="#000000";}
    else {current_english.style.color="#B9A3E3"; current_japanese.style.color="#000000";}
}

function show()
{
    current_japanese.style.color="#000000";
    current_english.style.color="#000000";
}

function handleKeyPress(event)
{
    let x = event.keyCode
    if (x==65||x==37) {prevButton.click();}
    else if (x==68||x==39) {nextButton.click();}
    else if (x==38||x==87) {toggleButton.click();}
    else if (x==40||x==83||x==32) {showButton.click();}
}
document.addEventListener("keydown", handleKeyPress);

function getHTMLFileName()
{
    const pathArray = window.location.pathname.split('/');
    const fileName = pathArray[pathArray.length - 1];
    return fileName;
}

function generateElements()
{
    const container = document.querySelector(".section1");
  
    const div_levelDesc = document.createElement("div");
    div_levelDesc.textContent = "LEVEL";
    div_levelDesc.id = "levelDesc";
    container.appendChild(div_levelDesc);
  
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "hidden";
    toggleButton.id = "toggleButton";
    container.appendChild(toggleButton);
  
    const div_languageDisplay = document.createElement("div");
    div_languageDisplay.className = "languageDisplay";
    container.appendChild(div_languageDisplay);
  
    const span_english = document.createElement("span");
    span_english.textContent = "Eng";
    span_english.id = "english";
    div_languageDisplay.appendChild(span_english);
  
    const span_japanese = document.createElement("span");
    span_japanese.textContent = "Jap";
    span_japanese.id = "japanese";
    div_languageDisplay.appendChild(span_japanese);
  
    const div_mainButtons = document.createElement("div");
    div_mainButtons.className = "mainButtons";
    container.appendChild(div_mainButtons);
  
    const prevButton = document.createElement("button");
    prevButton.textContent = "<";
    prevButton.id = "prevButton";
    div_mainButtons.appendChild(prevButton);
  
    const showButton = document.createElement("button");
    showButton.textContent = "Show";
    showButton.id = "showButton";
    div_mainButtons.appendChild(showButton);
  
    const nextButton = document.createElement("button");
    nextButton.textContent = ">";
    nextButton.id = "nextButton";
    div_mainButtons.appendChild(nextButton);
}
    
document.addEventListener("DOMContentLoaded", function()
{
    console.log("setting up");
    // generateElements();
    const htmlFileName = getHTMLFileName();
    if (htmlFileName.includes("n5"))
    {
        document.getElementById("levelDesc").textContent = "Level : N5";
        randomizedArray = shuffleArray(library_N5);
    }
    else if (htmlFileName.includes("n4"))
    {
        document.getElementById("levelDesc").textContent = "Level : N4";
        randomizedArray = shuffleArray(library_N4);
    }
    updateDisplay();
});


  
/*
const library_N5 =
[
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
];
*/