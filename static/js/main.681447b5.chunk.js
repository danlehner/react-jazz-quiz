(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),i=(a(10),a(1)),c=a(2),l=(a(11),Object(n.createContext)()),u=Object(n.createContext)();var m=function(e){var t=Object(n.useContext)(l),a=Object(n.useContext)(u),s=a.index,o=e.quizData,i=e.quizData[s];function c(e){i.correctAnswer===e.target.value?(t({type:"point"}),t({type:"rightAnswer",set:i.options,right:i.correctAnswer,value:e.target.value}),t({type:"rightQuestionLister",value:i.question})):(t({type:"wrongAnswer",set:i.options,value:e.target.value}),t({type:"correcting",value:i.correctAnswer}),t({type:"wrongQuestionLister",value:i.question}))}return r.a.createElement("div",{className:"question-box"},r.a.createElement("h1",{className:"question-text brick-red"},"Question #",a.index+1," of ",o.length),r.a.createElement("p",{className:"hint-prompt"},"(hover towards the top of the image for a hint)"),r.a.createElement("p",{className:"hint-prompt-mobile"},"(tap the top of the image for a hint)"),r.a.createElement("div",{className:"image-box"},r.a.createElement("img",{className:"quiz-image",src:i.image,alt:"jazz musician"}),r.a.createElement("div",{className:"hint"},r.a.createElement("p",{className:"hint-text"},i.hint,r.a.createElement("span",{className:"hint-close"},"(tap outside to close)")))),r.a.createElement("h1",{className:"initial-question"},i.question),r.a.createElement("ul",{className:"option-box"},i.options.map((function(e,a){return r.a.createElement("button",{className:"option",onClick:function(e){return function(e){o.length===s+1?(t({type:"finish"}),c(e)):(t({type:"test"}),t({type:"increase"}),c(e))}(e)},key:a,value:e},e)}))))};var g=function(e){var t=Object(n.useContext)(l),a=Object(n.useContext)(u),s=e.quizData,o=Object(c.a)({percent:0,scoreText:"",scoreImage:""}),m=Object(i.a)(o,2),g=m[0],h=m[1];return console.log(g.percent,g.scoreText,g.scoreImage),Object(n.useEffect)((function(){var e=a.score/s.length,t=Math.round(100*e);switch(h((function(e){e.percent=t})),g.percent){case 100:return void h((function(e){e.scoreText="you're the jazz master! Killin' em",e.scoreImage="https://billyanddad.files.wordpress.com/2011/12/30-irving-penn-duke-ellington-1971.jpg"}));case 80:return void h((function(e){e.scoreText="nice, we see you up there!",e.scoreImage="https://theroyalroomseattle.com/wp-content/uploads/2019/10/coupon-1558093340-1-1.jpg"}));case 60:return void h((function(e){e.scoreText="eh, could be better",e.scoreImage="https://images.squarespace-cdn.com/content/v1/5b969012a2772ce98cf09575/1552157164009-PLEVJYNJ22FSPXRZ0MQ6/ke17ZwdGBToddI8pDm48kEszLLvtNl8QidyH8Q9qkm97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USQWHM0FZ7G-w1xOdgIJngg9H5UdLJLiNe4snqQkppnzst5bHR_ieXZcSc96uHG9Cg/WROACM01_1500.jpg"}));case 40:return void h((function(e){e.scoreText="you really gotta get back to the woodshed",e.scoreImage="https://images.squarespace-cdn.com/content/5e7e21afd5867b7bafbf8cd6/1586903196225-UJQ3WEOEBB05L9RGX8FM/image-asset.jpeg?content-type=image%2Fjpeg"}));case 20:return void h((function(e){e.scoreText="You REALLY gotta get back to the shed, man",e.scoreImage="https://media.wnyc.org/i/1000/563/l/80/1/milesdavis_getty_wide.jpg"}));case 0:return void h((function(e){e.scoreText="just quit now",e.scoreImage="https://i.pinimg.com/originals/e0/93/a8/e093a8480061afc770a08043dd0a7fda.jpg"}));default:return}})),r.a.createElement("div",{className:"results"},r.a.createElement("h1",null,"We're done!"),r.a.createElement("div",{className:"score-box"},r.a.createElement("p",{className:"score-text"},"You got ",a.score," correct out of ",s.length,", which is ",g.percent,"% - ",g.scoreText,"."),r.a.createElement("img",{className:"results-image",src:g.scoreImage,alt:"jazz musician"})),r.a.createElement("h2",null,"What you got right:"),r.a.createElement("div",{className:"right-and-wrong-box"},0===a.score?r.a.createElement("div",{className:"fail-box"},r.a.createElement("h3",{className:"failure"},"Wow, you're not good at this...")):r.a.createElement("div",{className:"right-and-wrong right-questions"},a.rightQuestionList.map((function(e){return r.a.createElement("div",{className:"result-q-cont"},r.a.createElement("h3",{className:"question"},e))}))),r.a.createElement("div",{className:"right-and-wrong"},a.rightAnswers.map((function(e){return r.a.createElement("div",{className:"result-a-cont"},r.a.createElement("h3",{className:"result-answer"},e))})))),r.a.createElement("h2",null,"What you got wrong:"),a.score===e.quizData.length?r.a.createElement("div",{className:"flawless-box"},r.a.createElement("h3",{className:"flawless"},"Flawless Victory!")):r.a.createElement("div",{className:"right-and-wrong-box"},r.a.createElement("div",{className:"right-and-wrong"},a.wrongQuestionList.map((function(e){return r.a.createElement("div",{className:"result-q-cont"},r.a.createElement("h3",{className:"question"},e))}))),r.a.createElement("div",{className:"right-and-wrong"},a.wrongAnswers.map((function(e){return r.a.createElement("div",{className:"result-wa-cont"},r.a.createElement("h3",{className:"result-answer wrong"},e))}))),r.a.createElement("div",{className:"right-and-wrong"},a.correctionArray.map((function(e){return r.a.createElement("div",{className:"result-container"},r.a.createElement("h3",{className:"result-answer"},e))})))),r.a.createElement("button",{className:"option start-over",onClick:function(){t({type:"reset"})}},"START OVER"))};var h=function(){var e=Object(n.useContext)(l);return r.a.createElement("div",{className:"intro-screen-box"},r.a.createElement("div",{className:"intro-screen"},r.a.createElement("h1",{className:"brick-red txt-shd-wt"},"Welcome to the Jazz Quiz!"),r.a.createElement("h2",{className:"darker-sea-blue txt-shd-wt"},"Are you ready to test your jazz knowledge?"),r.a.createElement("img",{className:"intro-image",src:"https://i.redd.it/dqtks77lzdgz.jpg"}),r.a.createElement("button",{className:"play-button",onClick:function(){e({type:"gameStarter"})}},"Let's play!")))};var p=function(){var e=[{index:0,question:"What's Sonny Rollins's real first name?",options:["Theodore","John","Kenneth","Scott"],correctAnswer:"Theodore",image:"https://www.wallofsoundgallery.com/immagini_prodotti/arch/3126.jpg",hint:"Hint: it's a presidential name."},{index:1,question:"Who did NOT play saxophone in a Miles Davis ensemble?",options:["George Coleman","John Coltrane","Art Pepper","Kenny Garrett"],correctAnswer:"Art Pepper",image:"https://static01.nyt.com/images/2016/03/13/fashion/13MILES/13MILES-articleLarge.jpg?quality=75&auto=webp&disable=upscale",hint:"Hint: the correct answer DID, ironically, use Miles' rhythm section on a recording."},{index:2,question:"Thad Jones got his start in whose big band?",options:["Duke Ellington","Count Basie","Fletcher Henderson","Tommy Dorsey"],correctAnswer:"Count Basie",image:"https://thadjones.jazzgiants.net/wp-content/uploads/2015/05/thad_jones2.jpg",hint:"Hint: he was a Jersey boy..."},{index:3,question:"How old was Miles Davis when he started playing with Charlie Parker?",options:["17","18","19","20"],correctAnswer:"18",image:"https://media.gq-magazine.co.uk/photos/5d13ac7f533a23557ac639b9/master/w_1280,c_limit/miles-davis-03-gq-26apr19_getty_b.jpg",hint:"Hint: he could buy a cigarette."},{index:4,question:"Who was frequently referred to as 'the Angry Man of Jazz'?",options:["Charles Mingus","Miles Davis","Art Blakey","Fats Waller"],correctAnswer:"Charles Mingus",image:"https://pbs.twimg.com/media/DqJP0pJXgAA3DpG.jpg",hint:"Hint: he infamously punched one of his musicians in the mouth!"}],t=Object(c.b)((function(e,t){switch(t.type){case"gameStarter":return void(e.isIntroUp=!1);case"point":e.score++;break;case"increase":e.index++;break;case"finish":return void(e.quizDone=!0);case"rightAnswer":return e.rightSets.push(t.set),void e.rightAnswers.push(t.value);case"wrongAnswer":return e.wrongSets.push(t.set),void e.wrongAnswers.push(t.value);case"correcting":return void e.correctionArray.push(t.value);case"rightQuestionLister":return void e.rightQuestionList.push(t.value);case"wrongQuestionLister":return void e.wrongQuestionList.push(t.value);case"reset":return e.score=0,e.index=0,e.isIntroUp=!0,e.quizDone=!1,e.rightSets=[],e.rightAnswers=[],e.wrongSets=[],e.wrongAnswers=[],e.correctionArray=[],e.rightQuestionList=[],void(e.wrongQuestionList=[]);default:return}}),{score:0,index:0,isIntroUp:!0,quizDone:!1,rightSets:[],rightAnswers:[],wrongSets:[],wrongAnswers:[],correctionArray:[],rightQuestionList:[],wrongQuestionList:[]}),a=Object(i.a)(t,2),n=a[0],s=a[1];return r.a.createElement(u.Provider,{value:n},r.a.createElement(l.Provider,{value:s},n.isIntroUp?r.a.createElement(h,null):r.a.createElement("div",{className:"App"},n.quizDone?r.a.createElement(g,{quizData:e}):r.a.createElement("div",{className:"gameplay"},r.a.createElement(m,{quizData:e})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.681447b5.chunk.js.map