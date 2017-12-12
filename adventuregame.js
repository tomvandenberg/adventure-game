
var  body = document.getElementById('body');
var  head1 = document.getElementById('head1');
var  head2 = document.getElementById('head2');
var  zwaard = document.getElementById('zwaard');
var  sleutel = document.getElementById('sleutel');
var  button_1 = document.getElementById('button_1');
var  button_2 = document.getElementById('button_2');
var  sleutel2 = document.getElementById('sleutel2');
//inventory items

var doorKeepOpen = false;
var  key = false;
var  keyin = false;
function inventory11() {
  if (keyin==true)
  {
    sleutel2.style.display = 'inline';
  }
  else
  {
    sleutel2.style.display = 'none';
  }
}
function levelaf(){
   body.style.backgroundImage =  'url(./achtergrond/dood.png)';
   button_1.innerHTML = 'Begin op nieuw';
   button_1.onclick = level0;
   button_2.style.display = 'none';
   head1.innerHTML = 'Je bent af';
   head2.innerHTML = 'Druk op de button om treug te gaan';
   head1.style.color = 'white';
   head2.style.color = 'white';
}

function level0(){
  head1.innerHTML  = 'Je bent in een huis er zit een beest achter je aan';
  head2.innerHTML  = 'Je moet kiezen tussen naar buiten of in het huis verstoppen';
  button_1.innerHTML  = 'Naar buiten';
  button_2.innerHTML  = 'Verstoppen';
  head1.style.color = 'black';
  head2.style.color = 'black';
  button_1.onclick = level1;
  button_2.onclick = levelaf;
  button_2.style.display = 'inline-block';
  body.style.backgroundImage =  'url(./achtergrond/deur.png)';
}

level0();

function level1(){
  head1.innerHTML  = 'Je bent voor een bord';
  head2.innerHTML  = 'Ga je naar het bos of de stad';
  button_1.innerHTML  = 'Het bos';
  button_2.innerHTML  = 'De stad';
  button_1.onclick = levelbos;
  button_2.onclick = levelstad;
  body.style.backgroundImage =  'url(./achtergrond/bord.png)';
}

function levelstad(){
  head1.innerHTML  = 'Je bent in de stad';
  head2.innerHTML  = 'Je naar het plein of de kerk';
  button_1.innerHTML  = 'Het plein';
  button_2.innerHTML  = 'De kerk';
  button_1.onclick = levelplein;
  button_2.onclick = levelkerk;
  button_2.style.display = 'inline';
  body.style.backgroundImage =  'url(./achtergrond/stad.png)';
}

function levelbos(){
  head1.innerHTML  = 'Je bent in het bos';
  head2.innerHTML  = 'Ga je verder het bos in of ga je naar de boerderij';
  button_1.innerHTML  = 'De boerderij';
  button_2.innerHTML  = 'Dieper het bos in';
  button_1.onclick = levelboerderij;
  button_2.onclick = leveldiepbos;
  body.style.backgroundImage =  'url(./achtergrond/bos.png)';
}

function leveldiepbos(){
  head1.innerHTML  = 'Je bent verdaalt in het bos';
  head2.innerHTML  = 'Druk op de knop om door te gaan';
  head1.style.color = 'white';
  head2.style.color = 'white';
  button_1.innerHTML  = 'De knop';
  button_2.style.display = 'none';
  button_1.onclick = levelaf;
  body.style.backgroundImage =  'url(./achtergrond/diepbos.png)';
}

function levelboerderij(){
  head1.innerHTML  = 'Je bent op de boerderij';
  head2.innerHTML  = 'Gaan naar de traktor';
  button_1.innerHTML  = 'De traktor';
  button_2.innerHTML  = 'Naar binnen';
  button_1.onclick = leveltraktor;
  button_2.onclick = levelbinnenfarm;
  button_2.style.display = 'inline-block';
  body.style.backgroundImage =  'url(./achtergrond/farm.png)';
  sleutel.style.display = 'none';
}

function leveltraktor(){
  head1.innerHTML  = 'Je bent bij een traktor';
  head2.innerHTML  = 'Ga met de traktor naar de stad';
  button_1.innerHTML  = 'Naar de stad';
  button_2.innerHTML  = 'Terug';
  button_1.onclick = levelstad;
  button_2.onclick = levelboerderij;
  body.style.backgroundImage =  'url(./achtergrond/traktor.png)';
}
function levelplein(){
  head1.innerHTML  = 'je bent in op het plein';
  head2.innerHTML  = 'Ga terug of pak de taxi naar het bord';
  button_1.innerHTML  = 'Terug';
  button_2.innerHTML  = 'Pak de taxi';
  button_1.onclick = levelstad;
  button_2.onclick = level1;
  body.style.backgroundImage =  'url(./achtergrond/plein.png)';
}

function levelkerk(){
  head1.innerHTML  = 'Je bent bij de kerk';
  head2.innerHTML  = 'Ga je naar binnen of ga je naar het pein';
  button_1.innerHTML  = 'Ga naar binnen';
  button_2.innerHTML  = 'Terug';
  button_2.style.display = 'inline-block';
  if (key==true)
  {
    button_1.onclick = levelbinnenkerk;
  }
  else if (key==false)
  {
    alert("je moet eerst de sleutel vinden!!")
  }
  if (keyin==false)
    {
      button_1.onclick = levelkerk;
    }
    else if (keyin==true)
    {
      button_1.onclick = levelbinnenkerk;
      doorKeepOpen = true;
    }
  button_2.onclick = levelstad;
  body.style.backgroundImage =  'url(./achtergrond/kerk.png)';

}
function levelbinnenfarm(){
  head1.innerHTML  = 'Je bent binnen pak de sleutel';
  head2.innerHTML  = '';
  button_1.innerHTML  = 'Ga naar buiten';
  button_2.style.display = 'none';
  button_1.onclick = levelboerderij;
  body.style.backgroundImage =  'url(./achtergrond/binnenfarm.png)';

  if (key==false)
  {
    sleutel.style.display = 'inline';
    sleutel.onclick = goaway;
  }

}
function goaway(){
  key = true;
  keyin = true;
  if (key==true)
  {
    sleutel.style.display = 'none';
    alert("dit is DE SLEUTel");
  }
  if (keyin==true)
  {
    sleutel2.style.display = 'inline';
  }
  else
  {
    sleutel2.style.display = 'none';
  }
  }
    sleutel.style.display = 'none';
    sleutel2.style.display = 'none';

  function levelbinnenkerk(){
    head1.innerHTML  = 'Je bent in de kerk';
    head2.innerHTML  = 'Pak het zwaard';
    button_1.style.display = 'none';
    button_2.style.display = 'none';
    zwaard.style.display = 'inline-block';
    button_1.onclick = null;
    button_2.style.display = 'inline';
    body.style.backgroundImage =  'url(./achtergrond/binnenkerk.png)';
    head1.style.color = 'blue';
    head2.style.color = 'blue';
    zwaard.onclick = levelzwaard;
    if (doorKeepOpen==false)
  {

  }
  else if (doorKeepOpen==true)
  {

  }
  }

  function levelbossficht(){
    head1.innerHTML  = 'De baas valt je aan vecht treug';
    head2.innerHTML  = 'Versla de baas';
    button_1.innerHTML = 'steek hem neer';
    button_2.style.display = 'none';
    button_1.onclick = levelwinficht;
    button_2.style.display = 'none';
    body.style.backgroundImage =  'url(./achtergrond/bosficht.png)';
    head1.style.color = 'white';
    head2.style.color = 'white';
  }
    zwaard.style.display = 'none';

   function levelzwaard(){
    head1.innerHTML  = 'Je heb het zwaard';
    head2.innerHTML  = 'Druk op de knop om de boss ficht te doen';
    button_1.innerHTML  = 'ga verder';
    button_1.onclick = levelbossficht;
    button_1.style.display = 'inline';
    button_2.style.display = 'none';
    body.style.backgroundImage =  'url(./achtergrond/binnenkerk.png)';
    head1.style.color = 'white';
    head2.style.color = 'white';
    zwaard.style.display = 'none';
  }
  function levelwinficht(){
    head1.innerHTML  = 'Je heb het gevecht gewonnen';
    head2.innerHTML  = 'Ga naar de het plein om feest te vieren';
    button_1.innerHTML  = 'Het plein';
    button_1.onclick = levelwin;
    button_2.style.display = 'none';
    body.style.backgroundImage =  'url(./achtergrond/boswin.png)';
    head1.style.color = 'white';
    head2.style.color = 'white';
  }

  function levelwin(){
    head1.innerHTML  = 'Je hebt gewonnen';
    head2.innerHTML  = 'Gefeliciteerd ';
    button_1.style.display = 'none';
    button_2.style.display = 'none';
    body.style.backgroundImage =  'url(./achtergrond/pleinwin.png)';
    head1.style.color = 'white';
    head2.style.color = 'white';
  }
