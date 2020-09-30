(this["webpackJsonpproject-5"]=this["webpackJsonpproject-5"]||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},29:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=(a(29),a(1)),i=a(2),s=a(4),m=a(3),u=a(8),h=a.n(u);a(31);h.a.initializeApp({apiKey:"AIzaSyBLZh-Oee3mkiDCJe6f5PuWeBJjshHBg8A",authDomain:"aaronclemensprojectfive.firebaseapp.com",databaseURL:"https://aaronclemensprojectfive.firebaseio.com",projectId:"aaronclemensprojectfive",storageBucket:"aaronclemensprojectfive.appspot.com",messagingSenderId:"680980271864",appId:"1:680980271864:web:34a33bf3a0935d2e3de10d"});var d=h.a,p=a(23),f=a.n(p),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleHoverOff=function(e){e.target.blur()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"flexContainer"},r.a.createElement("h1",null,"xkcd"),r.a.createElement("p",null,"comics by: ",r.a.createElement("a",{onMouseLeave:this.handleHoverOff,href:"https://twitter.com/xkcd?lang=en",target:"_blank",rel:"noopener noreferrer"},"Randall Patrick Munroe"))))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){console.log("clicked");var e=document.getElementsByClassName("recentlyViewed"),t=document.getElementsByClassName("screenDark");e[0].style.right="-100%",t[0].style.left="-100%"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",{className:"recentlyViewed"},r.a.createElement("button",{className:"closeList","aria-label":"Close recently viewed list",onClick:this.handleClick},"X"),r.a.createElement("h2",null,"Recently Viewed"),r.a.createElement("ol",{className:"recentList"},this.props.recentList.map((function(e,t){return r.a.createElement("li",{key:t},"".concat(e.recentComic.title," - "),r.a.createElement("span",null,"comic#".concat(e.recentComic.num)))})))),r.a.createElement("div",{className:"screenDark"}))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.openList=function(){var e=document.getElementsByClassName("recentlyViewed"),t=document.getElementsByClassName("screenDark");e[0].style.right=0,t[0].style.left=0},e.state={userInput:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"searchBar"},r.a.createElement("form",{id:"comicNumSearch",onSubmit:function(t){e.props.numberSearch(t,e.state.userInput)}},r.a.createElement("label",{htmlFor:"comicNum"},"Search comic #:"),r.a.createElement("input",{required:!0,type:"number",id:"comicNum",name:"comicNum",min:"1",max:this.props.maxNum,onChange:this.handleChange})),r.a.createElement("button",{type:"button",onClick:this.openList},"Recently Viewed"))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleHoverOff=function(e){e.target.blur()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.randomComic,a=e.firstComic,n=e.latestComic,c=e.previousComic,o=e.nextComic;return r.a.createElement("div",{className:"buttonBar"},r.a.createElement("button",{type:"button",onClick:t,onMouseLeave:this.handleHoverOff},"Random"),r.a.createElement("button",{type:"button",onClick:a,onMouseLeave:this.handleHoverOff},"First"),r.a.createElement("button",{type:"button",onClick:n,onMouseLeave:this.handleHoverOff},"Latest"),r.a.createElement("button",{type:"button",onClick:c,onMouseLeave:this.handleHoverOff},"Prev"),r.a.createElement("button",{type:"button",onClick:o,onMouseLeave:this.handleHoverOff},"Next"))}}]),a}(n.Component),E=["January","February","March","April","May","June","July","August","September","October","November","December"],g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=document.getElementsByClassName("overlay");return console.log(e[0].style.display),""===e[0].style.display?e[0].style.display="block":e[0].style.display=""}},{key:"handleEnter",value:function(e){if("Enter"===e.key){var t=document.getElementsByClassName("overlay");return console.log(t[0].style.display),""===t[0].style.display?t[0].style.display="block":t[0].style.display=""}}},{key:"render",value:function(){var e=this.props,t=e.latestNum,a=e.comicNum,n=e.title,c=e.url,o=e.transcript,l=e.year,i=e.month,s=e.day,m=e.bonusText;return r.a.createElement("div",{className:"displayComic",key:a},a===t?r.a.createElement("h2",null,"Latest Comic: #",a):r.a.createElement("h2",null,"Comic: #",a),r.a.createElement("p",null,r.a.createElement("time",{dateTime:"".concat(l,"-").concat(i,"-").concat(s)},E[parseInt(i)-1]," ",s,", ",l)),r.a.createElement("h3",null,n),r.a.createElement("div",{className:"imageContainer",tabIndex:"0",onClick:this.handleClick,onKeyPress:this.handleEnter},""!==o?r.a.createElement("img",{src:c,alt:o}):r.a.createElement("img",{src:c,alt:"A Comic by Randall Patrick Munroe. Transcript unavailable at this time"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,m))))}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleHoverOff=function(e){e.target.blur()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020",r.a.createElement("a",{onMouseLeave:this.handleHoverOff,href:"https://github.com/awsclemens",target:"_blank",rel:"noopener noreferrer"}," Aaron W.S. Clemens")," ||",r.a.createElement("a",{onMouseLeave:this.handleHoverOff,href:"https://junocollege.com/",target:"_blank",rel:"noopener noreferrer"}," Juno College"))))}}]),a}(n.Component),k=(a(49),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.loadComic(""),d.database().ref().on("value",(function(t){console.log("database:",t.val());var a=[],n=t.val();for(var r in n)console.log(r,n[r]),a.push({key:r,recentComic:n[r]});e.setState({recentComics:a})}))},e.loadComic=function(t){f()({method:"GET",url:"https://proxy.hackeryou.com",dataResponse:"json",params:{reqUrl:"https://xkcd.com/".concat(t,"info.0.json"),xmlToJSON:!1,useCache:!1}}).then((function(t){var a=[];if(a.push(t.data),e.setState({comic:a,currentComicNum:a[0].num}),0===e.state.latestNum)e.setState({latestNum:a[0].num});else{if(10===e.state.recentComics.length){var n=e.state.recentComics[0].key;d.database().ref().child(n).remove()}d.database().ref().push(e.state.comic[0])}console.log("current comic",e.state.comic),console.log("current comic #:",e.state.currentComicNum),console.log("latest num: ",e.state.latestNum)}))},e.numberSearch=function(t,a){t.preventDefault(),console.log("submitted"),e.loadComic("".concat(a,"/")),document.getElementById("comicNumSearch").reset()},e.randomComic=function(){var t=Math.floor(Math.random()*e.state.latestNum)+1;e.loadComic("".concat(t,"/"))},e.previousComic=function(){return e.state.currentComicNum>1?e.loadComic("".concat(e.state.currentComicNum-1,"/")):e.loadComic("1/")},e.nextComic=function(){return e.state.currentComicNum<e.state.latestNum?e.loadComic("".concat(e.state.currentComicNum+1,"/")):e.loadComic("".concat(e.state.latestNum,"/"))},e.state={comic:[],latestNum:0,currentComicNum:0,recentComics:[]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(C,{recentList:this.state.recentComics}),r.a.createElement(v,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("main",null,r.a.createElement(y,{maxNum:this.state.latestNum,numberSearch:this.numberSearch}),r.a.createElement(b,{randomComic:this.randomComic,firstComic:function(){return e.loadComic("1/")},latestComic:function(){return e.loadComic("")},previousComic:this.previousComic,nextComic:this.nextComic}),this.state.comic.map((function(t){return r.a.createElement(g,{key:t.num,latestNum:e.state.latestNum,comicNum:t.num,title:t.title,url:t.img,transcript:t.transcript,year:t.year,month:t.month,day:t.day,bonusText:t.alt})})),r.a.createElement(b,{randomComic:this.randomComic,firstComic:function(){return e.loadComic("1/")},latestComic:function(){return e.loadComic("")},previousComic:this.previousComic,nextComic:this.nextComic}))),r.a.createElement(N,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c0b84574.chunk.js.map