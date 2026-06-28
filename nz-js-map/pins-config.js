var nzjspinsconfig = {
  "pins":[
  {
    "hover": "AUCKLAND",// Info of the popup
    "pos_X": 424,// Position on the X-Axis
    "pos_Y": 175,// Position on the Y-Axis
    "size": 0,// Size of the Pin in px
    "upColor": "#FF0000",// Default Color
    "overColor": "#FFCC00",// Hover Color
    "url": "",// Link to any webpage
    "target": "same_page",// Use "same_page", "new_page", or "none"
    "active": true //true/false to set it as Active/Inactive
  },
  {
    "hover": "WELLINGTON",
    "pos_X": 419,
    "pos_Y": 475,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CHRISTCHURCH",
    "pos_X": 314,
    "pos_Y": 628,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY4",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY5",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY6",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY7",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY8",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY9",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY10",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY11",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY12",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY13",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY14",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "BLANK",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },// Feel free to add more pins
  ]
};

// The following is the script for pins interaction DON'T EDIT !!! //
(function(){"use strict";function isTouchEnabled(){return('ontouchstart' in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}
document.addEventListener('DOMContentLoaded',function(){let pins_len=nzjspinsconfig.pins.length;if(pins_len>0){let xmlns="http://www.w3.org/2000/svg";let tsvgpin=document.getElementById("nzjspins");let svg_circle;for(let i=0;i<pins_len;i++){svg_circle=document.createElementNS(xmlns,"circle");svg_circle.setAttribute("cx",nzjspinsconfig.pins[i].pos_X+1);svg_circle.setAttribute("cy",nzjspinsconfig.pins[i].pos_Y+1);svg_circle.setAttribute("r",nzjspinsconfig.pins[i].size/2);svg_circle.setAttribute("fill","rgba(0, 0, 0, 0.5)");tsvgpin.appendChild(svg_circle);svg_circle=document.createElementNS(xmlns,"circle");svg_circle.setAttribute("id","nzjspins_"+i);svg_circle.setAttribute("cx",nzjspinsconfig.pins[i].pos_X);svg_circle.setAttribute("cy",nzjspinsconfig.pins[i].pos_Y);svg_circle.setAttribute("r",nzjspinsconfig.pins[i].size/2);svg_circle.setAttribute("fill",nzjspinsconfig.pins[i].upColor);svg_circle.setAttribute("stroke","#333333");svg_circle.setAttribute("stroke-width",1);tsvgpin.appendChild(svg_circle);addEvent(i)}}});function addEvent(id){const nzPin=document.getElementById("nzjspins_"+id);const nzTip=document.getElementById('nzjstip');const downColor='#595959';if(nzjspinsconfig.pins[id].active){if(isTouchEnabled()){let touchmoved;nzPin.addEventListener('touchstart',function(e){touchmoved=!1;nzTip.style.display='none';nzPin.setAttribute("fill",nzjspinsconfig.pins[id].upColor)});nzPin.addEventListener('touchmove',function(){touchmoved=!0});nzPin.addEventListener('touchend',function(e){if(!touchmoved){nzTip.style.display='none';nzPin.setAttribute("fill",nzjspinsconfig.pins[id].upColor);if(nzjspinsconfig.pins[id].target==='new_page'){window.open(nzjspinsconfig.pins[id].url)}else if(nzjspinsconfig.pins[id].target==='same_page'){window.location.href=nzjspinsconfig.pins[id].url}}})}else{nzPin.style.cursor="pointer";nzPin.addEventListener('mouseenter',function(){nzPin.setAttribute("fill",nzjspinsconfig.pins[id].overColor)});nzPin.addEventListener('mouseleave',function(){nzTip.style.display='none';nzPin.setAttribute("fill",nzjspinsconfig.pins[id].upColor)});if(nzjspinsconfig.pins[id].target!=='none'){nzPin.addEventListener('mousedown',function(){nzPin.setAttribute('fill',downColor)})}
nzPin.addEventListener('mouseup',function(){nzTip.style.display='none';nzPin.setAttribute("fill",nzjspinsconfig.pins[id].overColor);if(nzjspinsconfig.pins[id].target==='new_page'){window.open(nzjspinsconfig.pins[id].url)}else if(nzjspinsconfig.pins[id].target==='same_page'){window.location.href=nzjspinsconfig.pins[id].url}});nzPin.addEventListener('mousemove',function(e){nzTip.style.display='block';nzTip.innerHTML=nzjspinsconfig.pins[id].hover;let x=e.pageX+10,y=e.pageY+15;let nzTipWidth=nzTip.offsetWidth,nzTipHeight=nzTip.offsetHeight;x=(x+nzTipWidth>window.innerWidth+window.scrollX)?x-nzTipWidth-20:x;y=(y+nzTipHeight>window.innerHeight+window.scrollY)?window.innerHeight+window.scrollY-nzTipHeight-10:y;nzTip.style.left=x+'px';nzTip.style.top=y+'px'})}}}})()
