(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),s=(a(13),a(1)),c=a(2),o=a(4),d=a(3),u=a(5),m=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"filterUpdate",value:function(){var e=this.myValue.value;this.props.filterUpdate(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{type:"text",ref:function(t){return e.myValue=t},placeholder:"Enter last name",onChange:this.filterUpdate.bind(this)}))}}]),t}(n.Component),f=function(e){var t=e.data,a=e.filterText,n=e.selectStudent,i=t.map(function(e){return a.toLowerCase()===e.lastName.toLowerCase()?r.a.createElement("li",{key:e.id,className:"students-found-li",onClick:function(){return n(e.id)}},e.firstName," ",e.lastName):null});return r.a.createElement("div",null,r.a.createElement("p",{className:"title"},r.a.createElement("strong",null," Students Found: ")),r.a.createElement("ul",null,i))},b=function(e){var t=e.data,a=e.selectedStudent,n=r.a.createElement("tr",{key:"0"}),i=parseInt(a),l={firstName:"",lastName:""};return i<=t.length&&(n=(l=t[i]).courses.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.subject),r.a.createElement("td",null,e.grade))})),r.a.createElement("div",null,r.a.createElement("p",{className:"title"},r.a.createElement("strong",null," Grades for ",l.firstName," ",l.lastName,":")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Course"),r.a.createElement("th",null,"Grade")),n)))},g=(a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={filterText:"",selectedStudent:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"filterUpdate",value:function(e){this.setState({filterText:e})}},{key:"selectStudent",value:function(e){console.log(e),this.setState({selectedStudent:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"outter-box"},r.a.createElement("div",{className:"top-box"},r.a.createElement(m,{filterText:this.state.filterText,filterUpdate:this.filterUpdate.bind(this)})),r.a.createElement("div",{className:"bottom-box"},r.a.createElement("div",{className:"bottom-left-box"},r.a.createElement(f,{data:this.props.data,filterText:this.state.filterText,selectStudent:this.selectStudent.bind(this)})),r.a.createElement("div",{className:"bottom-right-box"},r.a.createElement(b,{data:this.props.data,selectedStudent:this.state.selectedStudent}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,{data:[{id:0,firstName:"Carmine",lastName:"Infusino",courses:[{id:0,subject:"Theory of Computation",grade:"A"},{id:1,subject:"Software Design",grade:"A"},{id:3,subject:"Software Testing",grade:"A"},{id:4,subject:"Web Programming and Data Management",grade:"A"}]},{id:1,firstName:"Daniel",lastName:"Domingo",courses:[{id:0,subject:"Web Programming and Data Management",grade:"A"},{id:1,subject:"Game Programming",grade:"B"},{id:2,subject:"Philosophy",grade:"A"}]},{id:2,firstName:"Jared",lastName:"Fipps",courses:[{id:0,subject:"Web Programming and Data Management",grade:"A"},{id:1,subject:"Mobile Application Development",grade:"B"},{id:2,subject:"Artificial Intelligence",grade:"A"}]},{id:3,firstName:"Carl",lastName:"Fipps",courses:[{id:0,subject:"Math",grade:"D"},{id:1,subject:"English",grade:"A"},{id:2,subject:"Science",grade:"D"}]},{id:4,firstName:"Jillian",lastName:"Infusino",courses:[{id:0,subject:"Health Science",grade:"A"},{id:1,subject:"Biology",grade:"A"},{id:2,subject:"Medical",grade:"A"}]}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.1bd89aec.chunk.js.map