(this.webpackJsonpmp3_player=this.webpackJsonpmp3_player||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cover_.004446f3.jpg"},,function(e,t,a){e.exports=a.p+"static/media/taste.1c965186.mp3"},function(e,t,a){e.exports=a.p+"static/media/sound.d3cc93dd.svg"},function(e,t,a){e.exports=a.p+"static/media/play.c363353e.svg"},function(e,t,a){e.exports=a.p+"static/media/stop.a54fda48.svg"},function(e,t,a){e.exports=a.p+"static/media/line.1482722a.svg"},function(e,t,a){e.exports=a.p+"static/media/line3.f311fb90.svg"},function(e,t,a){e.exports=a.p+"static/media/line2.31778624.svg"},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(7),c=a.n(s),l=(a(20),a(1)),o=a(2),r=a(4),m=a(3),d=a(8),u=a.n(d),v=(a(6),a(21),a(9)),p=a.n(v),h=a(10),y=a.n(h),f=a(11),E=a.n(f),g=a(12),N=a.n(g),S=a(13),b=a.n(S),L=a(14),T=a.n(L),C={voice:50,init:!0,cycleState:!1,playState:!1,audio:null,durationText:null,currentTimeText:"00:00",duration:0,currentTime:0},x=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).addAudioComponent=function(){var e=i.props.mp3,t=document.createElement("audio");t.src=e,t.preload="metadata",t.volume=.5,t.onloadedmetadata=function(){var e=Math.floor(t.duration);i.setState({durationText:i.msToTime(e),duration:e})},i.currentTimeInterval=setInterval((function(){var e=i.msToTime(Math.floor(t.currentTime));i.setState({currentTimeText:e,currentTime:t.currentTime})}),500),i.setState({audio:t})},i.msToTime=function(e){var t=(e%60).toLocaleString(),a=Math.floor(e/60).toLocaleString();return(a=1===a.length?"0"+a:a)+":"+(t=1===t.length?"0"+t:t)},i.play=function(){var e=i.state,t=e.playState,a=e.audio;e.init&&i.setState({init:!1}),t?(a.pause(),i.setState({playState:!1})):(a.play(),i.setState({playState:!0}))},i.cycle=function(){i.state.cycleState?i.setState({cycleState:!1}):i.setState({cycleState:!0})},i.getCycleState=function(){if(i.state.cycleState){var e=document.createElement("style");return e.innerHTML=".cycleButton:after{visibility: hidden}",document.head.appendChild(e),{border:"4px solid #000",transform:"translate(3px, 2px)",backgroundColor:"#E0E0E0"}}var t=document.createElement("style");return t.innerHTML=".cycleButton:after{visibility: visible}",document.head.appendChild(t),{backgroundColor:"white"}},i.getPlayAnimation=function(){var e=i.state,t=e.playState;if(!e.init)return t?{animation:"forwards playAnimation 0.2s linear"}:{animation:"stopAnimation 0.2s linear"}},i.voice=function(){var e=i.state.audio,t=document.getElementById("voice");e.volume=t.value/100,i.setState({voice:t.value})},i.currentTime=function(){var e=i.state.audio,t=document.getElementById("music");e.currentTime=t.value,i.setState({currentTime:t.value})},i.getHiddenCDAnimation=function(){var e=i.props,t=e.hidden;if(!e.hiddenInit)return t?{animation:"forwards hiddenCD 0.5s ease-out"}:{animation:"forwards showCD 0.5s ease-out"}},i.state=C,i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.addAudioComponent()}},{key:"componentWillUnmount",value:function(){this.state.audio.pause()}},{key:"render",value:function(){var e=this.state,t=e.playState,a=e.cycleState,i=e.voice,s=e.durationText,c=e.currentTimeText,l=e.currentTime,o=e.duration,r=this.props,m=r.musicName,d=r.author;return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"player",style:this.getHiddenCDAnimation()},n.a.createElement("div",{className:"CDBlock"},n.a.createElement("div",null,n.a.createElement("img",{className:"rightLine",src:N.a,alt:"logo",style:{visibility:t?"visible":"hidden"}})),n.a.createElement("div",{className:"CD",style:{animationPlayState:t?"running":"paused"}},n.a.createElement("div",{className:"CDCenter"})),n.a.createElement("div",null,n.a.createElement("img",{className:"leftLine",src:b.a,alt:"logo",style:{visibility:t?"visible":"hidden"}})),n.a.createElement("div",null,n.a.createElement("img",{className:"leftLine",src:T.a,alt:"logo",style:{visibility:t?"visible":"hidden"}})),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",null,n.a.createElement("div",{className:"nextButton"}),n.a.createElement("div",{className:"lastButton"})),n.a.createElement("div",{className:"cycleBlock"},n.a.createElement("div",{className:"cycleButton",onClick:this.cycle,style:this.getCycleState()}),n.a.createElement("div",{style:{width:"0.4vw",height:"0.4vw",backgroundColor:"black",borderRadius:"100%",visibility:a?"visible":"hidden"}})))),n.a.createElement("div",{className:"controlBlock"},n.a.createElement("div",{className:"controlVoiceBlock"},n.a.createElement("div",{className:"musicInfo"},n.a.createElement("div",{className:"musicName"},m),n.a.createElement("div",null,d)),n.a.createElement("div",{className:"playerComponentBlock"},n.a.createElement("div",{className:"playButton",onClick:this.play},n.a.createElement("img",{src:t?E.a:y.a,className:"playButtonImg",alt:"logo"})),n.a.createElement("div",{className:"playerComponent",style:this.getPlayAnimation()})),n.a.createElement("div",{className:"controlSound"},n.a.createElement("input",{id:"voice",className:"slider",type:"range",min:"0",max:"100",value:i,onChange:this.voice}),n.a.createElement("img",{src:p.a,className:"soundImg",alt:"logo"}))),n.a.createElement("div",{className:"controlmusicBlock"},n.a.createElement("div",{style:{marginLeft:"5px",fontWeight:"bolder"}},c),n.a.createElement("input",{id:"music",className:"musicSlider",type:"range",min:"0",max:o,value:l,onChange:this.currentTime}),n.a.createElement("div",{style:{marginRight:"5px",fontWeight:"bolder"}},s)))))}}]),a}(n.a.Component),k=(a(22),{hiddenList:!1,init:!0}),w=function(e){Object(r.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(l.a)(this,i),(a=t.call(this,e)).hiddenList=function(){var e=a.state,t=e.hiddenList;e.init&&a.setState({init:!1}),t?a.setState({hiddenList:!1}):a.setState({hiddenList:!0})},a.getHiddenSearchListAnimation=function(){var e=a.state,t=e.hiddenList;if(!e.init)return t?{animation:"forwards hiddenSearchList 0.5s ease-out"}:{animation:"forwards showSearchList 0.5s ease-out"}},a.getMusicListAnimation=function(){var e=a.state,t=e.hiddenList;if(!e.init)return t?{animation:"forwards hiddenMusicList 0.5s ease-out"}:{animation:"forwards showMusicList 0.5s ease-out"}},a.state=k,a}return Object(o.a)(i,[{key:"render",value:function(){var e=this.state,t=e.hiddenList,i=e.init;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"listBlock"},n.a.createElement("div",{className:"searchList",style:this.getHiddenSearchListAnimation()},"456"),n.a.createElement("div",{className:"musicList",style:this.getMusicListAnimation()},n.a.createElement("div",{className:"title"},n.a.createElement("div",{className:"titleText"},"\u5de5\u4f5c\u6b4c\u55ae"),n.a.createElement("div",{className:"listButton",onClick:this.hiddenList},"List",n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}))),n.a.createElement("div",{className:"list"},n.a.createElement("div",null,"list")),n.a.createElement("div",{className:"cover"},n.a.createElement("div",{className:"coverImg",style:{backgroundImage:"url("+a(6)+")"}})))),n.a.createElement(x,{mp3:u.a,musicName:"immaculate taste",author:"engelwood",hidden:t,hiddenInit:i}))}}]),i}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.04e2b9f2.chunk.js.map