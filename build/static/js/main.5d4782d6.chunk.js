(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),o=n.n(c),r=n(8),l=n(1),s=n(2),h=n(4),u=n(3),p=n(5);var m={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},d=function(e){return i.a.createElement("header",{style:m},i.a.createElement("h1",null,"SCOTUS Game"),i.a.createElement("h3",null,"Of the 113 Supreme Court justices in US history, all but 6 have been white men. Can you tell these men apart?"),i.a.createElement("h3",null,"Score:  ",e.count," "))},w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).getStyle=function(){return{width:"300px",height:"300px"}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{onClick:this.props.handleBtnClick.bind(this,this.props.whiteman.id)},i.a.createElement("img",{src:this.props.whiteman.photo,alt:this.props.whiteman.name,style:this.getStyle()}))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.whitemen.map(function(t){return i.a.createElement(w,{key:t.id,whiteman:t,handleBtnClick:e.props.handleBtnClick})})}}]),t}(a.Component),k=(n(15),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={count:0,whitemen:[{id:1,photo:"https://upload.wikimedia.org/wikipedia/commons/9/99/US_Supreme_Court_Justice_Lewis_Powell_-_1976_official_portrait.jpg",name:"Lewis Powell",clicked:!1},{id:2,photo:"https://upload.wikimedia.org/wikipedia/commons/0/04/Earl_Warren.jpg",name:"Earl Warren",clicked:!1},{id:3,photo:"http://cdn.loc.gov/service/pnp/cph/3b00000/3b07000/3b07800/3b07876r.jpg",name:"Harry Blackmun",clicked:!1},{id:4,photo:"https://upload.wikimedia.org/wikipedia/commons/6/6b/John_Marshall_Harlan_II_official.jpg",name:"John Marshall Harlan II",clicked:!1},{id:5,photo:"https://www.senate.gov/artandhistory/history/resources/graphic/xlarge/AbeFortas.jpg",name:"Abe Fortas",clicked:!1},{id:7,photo:"https://www.nysfda.org/images/PageImages/2019Additions/Justice_John_Paul_Stevens_III.jpg",name:"John Paul Stevens",clicked:!1},{id:8,photo:"https://www.conservapedia.com/images/a/a2/Rehnquist.jpg",name:"John William Rehnquist",clicked:!1},{id:9,photo:"https://s3.amazonaws.com/libapps/accounts/2491/images/por_11073_p2.jpg",name:"Warren E Burger",clicked:!1}]},n.handleBtnClick=function(e){var t=n.state.whitemen.find(function(t){return t.id===e});console.log(t),n.gameLogic(t),n.shuffle()},n.shuffle=function(){for(var e=n.state.whitemen,t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}n.setState({whitemen:Object(r.a)(e)})},n.gameLogic=function(e){!1===e.clicked?(console.log("he has not been clicked yet"),n.markClicked(e.id),n.incrementScore()):(console.log("he has been clicked"),n.resetScoreZero(),n.resetClicked(),alert("You lose!"))},n.incrementScore=function(){n.setState({count:n.state.count+1}),console.log(n.state.count)},n.resetScoreZero=function(){n.setState({count:0})},n.markClicked=function(e){n.setState({whitemen:n.state.whitemen.map(function(t){return t.id===e&&(t.clicked=!t.clicked),t})})},n.resetClicked=function(){n.setState({whitemen:n.state.whitemen.map(function(e){return!0===e.clicked&&(e.clicked=!e.clicked),e})})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"container"},i.a.createElement(d,{count:this.state.count}),i.a.createElement(f,{whitemen:this.state.whitemen,handleBtnClick:this.handleBtnClick})))}}]),t}(a.Component));o.a.render(i.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5d4782d6.chunk.js.map