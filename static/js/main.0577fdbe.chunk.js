(this.webpackJsonpmp3_player=this.webpackJsonpmp3_player||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/taste.1c965186.mp3"},,,,,function(e,t,a){e.exports=a.p+"static/media/sound.d3cc93dd.svg"},function(e,t,a){e.exports=a.p+"static/media/play.c363353e.svg"},function(e,t,a){e.exports=a.p+"static/media/stop.a54fda48.svg"},function(e,t,a){e.exports=a.p+"static/media/line.1482722a.svg"},function(e,t,a){e.exports=a.p+"static/media/line3.f311fb90.svg"},function(e,t,a){e.exports=a.p+"static/media/line2.31778624.svg"},function(e,t,a){e.exports=a.p+"static/media/angel.c4bce75a.mp3"},function(e,t,a){e.exports=a.p+"static/media/music_taste.a325636b.jpg"},function(e,t,a){e.exports=a.p+"static/media/music_angel.dd17ae50.jpg"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cover_.004446f3.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cover_2.1e22244a.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),c=a.n(s),o=(a(22),a(1)),l=a(2),r=a(5),m=a(4),d=a(3),u=a.n(d),v=(a(23),a(24),a(8)),p=a.n(v),h=a(9),f=a.n(h),g=a(10),y=a.n(g),E=a(11),S=a.n(E),N=a(12),x=a.n(N),T=a(13),b=a.n(T),C=a(14),L=a.n(C),k=a(15),w=a.n(k),A=a(16),B=a.n(A),I={voice:50,init:!0,cycleState:!1,playState:!1,audio:null,durationText:null,currentTimeText:"00:00",duration:0,currentTime:0,index:0},j=[u.a,L.a],M=["immaculate taste","Angel With A Shotgun"],D=["engelwood","The Cab"],O=[w.a,B.a],H=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addAudioComponent=function(e){n.state.index;var t=document.createElement("audio");t.src=e,t.preload="metadata",t.volume=.5,t.onloadedmetadata=function(){var e=Math.floor(t.duration);n.setState({durationText:n.msToTime(e),duration:e})},n.currentTimeInterval=setInterval((function(){var e=n.msToTime(Math.floor(t.currentTime));n.setState({currentTimeText:e,currentTime:t.currentTime})}),500),n.setState({audio:t})},n.updateAudioComponent=function(e){var t=n.state,a=t.audio;t.playState?(a.pause(),a.src=e,a.volume=.5,a.currentTime=0,a.load(),a.play(),n.setState({currentTimeText:"00:00",currentTime:0})):(a.src=e,a.volume=.5,a.currentTime=0,a.load(),n.setState({currentTimeText:"00:00",currentTime:0}))},n.msToTime=function(e){var t=(e%60).toLocaleString(),a=Math.floor(e/60).toLocaleString();return(a=1===a.length?"0"+a:a)+":"+(t=1===t.length?"0"+t:t)},n.play=function(){var e=n.state,t=e.playState,a=e.audio;e.init&&n.setState({init:!1}),t?(a.pause(),n.setState({playState:!1})):(a.play(),n.setState({playState:!0}))},n.cycle=function(){n.state.cycleState?n.setState({cycleState:!1}):n.setState({cycleState:!0})},n.getCycleState=function(){if(n.state.cycleState){var e=document.createElement("style");return e.innerHTML=".cycleButton:after{visibility: hidden}",document.head.appendChild(e),{border:"4px solid #000",transform:"translate(3px, 2px)",backgroundColor:"#E0E0E0"}}var t=document.createElement("style");return t.innerHTML=".cycleButton:after{visibility: visible}",document.head.appendChild(t),{backgroundColor:"white"}},n.getPlayAnimation=function(){var e=n.state,t=e.playState;if(!e.init)return t?{animation:"forwards playAnimation 0.2s linear"}:{animation:"stopAnimation 0.2s linear"}},n.next=function(){var e=n.state,t=e.index;e.audio;t+1<j.length?(n.updateAudioComponent(j[t+1]),n.setState({index:t+1})):(n.updateAudioComponent(j[0]),n.setState({index:0}))},n.last=function(){var e=n.state,t=e.index;e.audio;t-1>=0?(n.updateAudioComponent(j[t-1]),n.setState({index:t-1})):(n.updateAudioComponent(j[j.length-1]),n.setState({index:j.length-1}))},n.voice=function(){var e=n.state.audio,t=document.getElementById("voice");e.volume=t.value/100,n.setState({voice:t.value})},n.currentTime=function(){var e=n.state.audio,t=document.getElementById("music");e.currentTime=t.value,n.setState({currentTime:t.value})},n.getHiddenCDAnimation=function(){var e=n.props,t=e.hidden;if(!e.hiddenInit)return t?{animation:"forwards hiddenCD 0.5s ease-out"}:{animation:"forwards showCD 0.5s ease-out"}},n.state=I,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.addAudioComponent(j[0])}},{key:"componentWillUnmount",value:function(){this.state.audio.pause()}},{key:"render",value:function(){var e=this.state,t=e.playState,a=e.cycleState,n=e.voice,s=e.durationText,c=e.currentTimeText,o=e.currentTime,l=e.duration,r=e.index,m=this.props;m.musicName,m.author;return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"player",style:this.getHiddenCDAnimation()},i.a.createElement("div",{className:"CDBlock"},i.a.createElement("div",null,i.a.createElement("img",{className:"rightLine",src:S.a,alt:"logo",style:{visibility:t?"visible":"hidden"}})),i.a.createElement("div",{className:"CD",style:{animationPlayState:t?"running":"paused",backgroundImage:"url("+O[r]+")"}},i.a.createElement("div",{className:"CDCenter"})),i.a.createElement("div",null,i.a.createElement("img",{className:"leftLine",src:x.a,alt:"logo",style:{visibility:t?"visible":"hidden"}})),i.a.createElement("div",null,i.a.createElement("img",{className:"leftLine",src:b.a,alt:"logo",style:{visibility:t?"visible":"hidden"}})),i.a.createElement("div",{className:"buttons"},i.a.createElement("div",null,i.a.createElement("div",{className:"nextButton",onClick:this.next}),i.a.createElement("div",{className:"lastButton",onClick:this.last})),i.a.createElement("div",{className:"cycleBlock"},i.a.createElement("div",{className:"cycleButton",onClick:this.cycle,style:this.getCycleState()}),i.a.createElement("div",{style:{width:"0.4vw",height:"0.4vw",backgroundColor:"black",borderRadius:"100%",visibility:a?"visible":"hidden"}})))),i.a.createElement("div",{className:"controlBlock"},i.a.createElement("div",{className:"controlVoiceBlock"},i.a.createElement("div",{className:"musicInfo"},i.a.createElement("div",{className:"musicName"},M[r]),i.a.createElement("div",null,D[r])),i.a.createElement("div",{className:"playerComponentBlock"},i.a.createElement("div",{className:"playButton",onClick:this.play},i.a.createElement("img",{src:t?y.a:f.a,className:"playButtonImg",alt:"logo"})),i.a.createElement("div",{className:"playerComponent",style:this.getPlayAnimation()})),i.a.createElement("div",{className:"controlSound"},i.a.createElement("input",{id:"voice",className:"slider",type:"range",min:"0",max:"100",value:n,onChange:this.voice}),i.a.createElement("img",{src:p.a,className:"soundImg",alt:"logo"}))),i.a.createElement("div",{className:"controlmusicBlock"},i.a.createElement("div",{style:{marginLeft:"5px",fontWeight:"bolder"}},c),i.a.createElement("input",{id:"music",className:"musicSlider",type:"range",min:"0",max:l,value:o,onChange:this.currentTime}),i.a.createElement("div",{style:{marginRight:"5px",fontWeight:"bolder"}},s)))))}}]),a}(i.a.Component),W=(a(25),{hiddenList:!1,init:!0}),_=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).hiddenList=function(){var e=a.state,t=e.hiddenList;e.init&&a.setState({init:!1}),t?a.setState({hiddenList:!1}):a.setState({hiddenList:!0})},a.getHiddenSearchListAnimation=function(){var e=a.state,t=e.hiddenList;if(!e.init)return t?{animation:"forwards hiddenSearchList 0.5s ease-out"}:{animation:"forwards showSearchList 0.5s ease-out"}},a.getMusicListAnimation=function(){var e=a.state,t=e.hiddenList;if(!e.init)return t?{animation:"forwards hiddenMusicList 0.5s ease-out"}:{animation:"forwards showMusicList 0.5s ease-out"}},a.state=W,a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.hiddenList,n=e.init;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"listBlock"},i.a.createElement("div",{className:"searchList",style:this.getHiddenSearchListAnimation()},"456"),i.a.createElement("div",{className:"musicList",style:this.getMusicListAnimation()},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"titleText"},"\u5de5\u4f5c\u6b4c\u55ae"),i.a.createElement("div",{className:"listButton",onClick:this.hiddenList},"List",i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line"}))),i.a.createElement("div",{className:"list"},i.a.createElement("div",null,"list")),i.a.createElement("div",{className:"cover"},i.a.createElement("div",{className:"coverImg",style:{backgroundImage:"url("+a(26)+")"}})))),i.a.createElement(H,{mp3:u.a,musicName:"immaculate taste",author:"engelwood",hidden:t,hiddenInit:n}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.0577fdbe.chunk.js.map