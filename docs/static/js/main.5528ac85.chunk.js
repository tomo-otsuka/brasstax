(this.webpackJsonpbrasstax=this.webpackJsonpbrasstax||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(9),c=a.n(i),l=(a(14),a(1)),s=a(3),u=a(4),o=a(6),d=a(5),b=(a(15),Object.freeze({SINGLE:{name:"single",readable:"Single"},MARRIED_FILING_JOINTLY:{name:"married-filing-jointly",readable:"Married Filing Jointly"},MARRIED_FILING_SEPARATELY:{name:"married-filing-separately",readable:"Married Filing Separately"},HEAD_OF_HOUSEHOLD:{name:"head-of-household",readable:"Head of Household"}})),h=Object.freeze({FIRST:{name:0,readable:"1/1 - 3/31"},SECOND:{name:1,readable:"1/1 - 5/31"},THIRD:{name:2,readable:"1/1 - 8/31"},FOURTH:{name:3,readable:"1/1 - 12/31"}}),j=a(8);function O(e,t,a,n,r,i,c){n<0&&(a+=n,n=0),a<0&&(t+=Math.max(a,-3e3),a=0);var s=0;"standard"===r?s=function(e){var t;return(t={},Object(l.a)(t,b.SINGLE.name,12400),Object(l.a)(t,b.MARRIED_FILING_JOINTLY.name,25100),Object(l.a)(t,b.MARRIED_FILING_SEPARATELY.name,12550),Object(l.a)(t,b.HEAD_OF_HOUSEHOLD.name,18800),t)[e]}(e):"itemized"===r&&(s=i);var u=function(e,t,a){var n,r,i=(n={},Object(l.a)(n,b.SINGLE.name,[{bracketStart:518400,rate:.37,cumulative:156235},{bracketStart:207350,rate:.35,cumulative:47367.5},{bracketStart:163300,rate:.32,cumulative:33271.5},{bracketStart:85525,rate:.24,cumulative:14605.5},{bracketStart:40125,rate:.22,cumulative:4617.5},{bracketStart:9875,rate:.12,cumulative:987.5},{bracketStart:0,rate:.1,cumulative:0}]),Object(l.a)(n,b.MARRIED_FILING_JOINTLY.name,[{bracketStart:622050,rate:.37,cumulative:167307.5},{bracketStart:414700,rate:.35,cumulative:94735},{bracketStart:326600,rate:.32,cumulative:66543},{bracketStart:171050,rate:.24,cumulative:29211},{bracketStart:80250,rate:.22,cumulative:9235},{bracketStart:19750,rate:.12,cumulative:1975},{bracketStart:0,rate:.1,cumulative:0}]),Object(l.a)(n,b.MARRIED_FILING_SEPARATELY.name,[{bracketStart:311025,rate:.37,cumulative:83653.75},{bracketStart:207350,rate:.35,cumulative:47367.5},{bracketStart:163300,rate:.32,cumulative:33271.5},{bracketStart:85525,rate:.24,cumulative:14605.5},{bracketStart:40125,rate:.22,cumulative:4617.5},{bracketStart:9875,rate:.12,cumulative:987.5},{bracketStart:0,rate:.1,cumulative:0}]),Object(l.a)(n,b.HEAD_OF_HOUSEHOLD.name,[{bracketStart:518400,rate:.37,cumulative:154793.5},{bracketStart:207350,rate:.35,cumulative:45926},{bracketStart:163300,rate:.32,cumulative:31830},{bracketStart:85500,rate:.24,cumulative:13158},{bracketStart:53700,rate:.22,cumulative:6162},{bracketStart:14100,rate:.12,cumulative:1410},{bracketStart:0,rate:.1,cumulative:0}]),n)[e],c=t+a,s=0,u=Object(j.a)(i);try{for(u.s();!(r=u.n()).done;){var o=r.value;if(!(c<o.bracketStart)){s+=o.cumulative,s+=(c-o.bracketStart)*o.rate;break}}}catch(d){u.e(d)}finally{u.f()}return s}(e,t=Math.max(0,t-s),a);return u+=function(e,t,a,n){var r,i,c=(r={},Object(l.a)(r,b.SINGLE.name,[{bracketEnd:40400,rate:0},{bracketEnd:445850,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(l.a)(r,b.MARRIED_FILING_JOINTLY.name,[{bracketEnd:80800,rate:0},{bracketEnd:501600,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(l.a)(r,b.MARRIED_FILING_SEPARATELY.name,[{bracketEnd:40400,rate:0},{bracketEnd:250800,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(l.a)(r,b.HEAD_OF_HOUSEHOLD.name,[{bracketEnd:54100,rate:0},{bracketEnd:473750,rate:.15},{bracketEnd:1/0,rate:.2}]),r)[e],s=t+a,u=0,o=n,d=Object(j.a)(c);try{for(d.s();!(i=d.n()).done;){var h=i.value;if(!(h.bracketEnd<t+a)){var O=Math.min(o,h.bracketEnd-s);u+=O*h.rate,o-=O,s+=O}}}catch(m){d.e(m)}finally{d.f()}return u}(e,t,a,n),u+=function(e){return.062*Math.min(e,142800)}(t),u+=function(e,t){var a=e===b.MARRIED_FILING_JOINTLY.name?25e4:2e5,n=Math.max(0,t-a);return.0145*t+.009*n}(e,t),u+=function(e,t,a){var n,r=(n={},Object(l.a)(n,b.SINGLE.name,2e5),Object(l.a)(n,b.MARRIED_FILING_JOINTLY.name,25e4),Object(l.a)(n,b.MARRIED_FILING_SEPARATELY.name,125e3),Object(l.a)(n,b.HEAD_OF_HOUSEHOLD.name,2e5),n)[e];return.038*Math.max(0,Math.min(t+a-r,a))}(e,t,a+n),u-=c,u=Math.max(0,u)}var m=a(0),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.selectOptions.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.readable})}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:[this.props.label,": "]}),Object(m.jsx)("select",{onChange:function(t){return e.props.onChange(t)},children:t})]})}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{for:"deduction-type",children:"Deduction Type: "}),Object(m.jsxs)("select",{id:"deduction-type",onChange:function(t){return e.props.onChange(t)},children:[Object(m.jsx)("option",{value:"standard",children:"Standard"}),Object(m.jsx)("option",{value:"itemized",children:"Itemized"})]})]})}}]),a}(r.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox",checked:this.props.checked,onChange:function(t){return e.props.onChange(t)}}),Object(m.jsx)("label",{children:"Include prior year calculation"})]})}}]),a}(r.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:this.props.label+": "}),Object(m.jsx)("input",{type:"text",onChange:function(t){return e.props.onChange(t)},disabled:this.props.disabled})]})}}]),a}(r.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:this.props.label+": "}),Object(m.jsx)("span",{children:this.props.value})]})}}]),a}(r.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={filingStatus:b.SINGLE.name,timePeriod:h.FIRST.name,ordinaryIncome:0,shortTermCapitalGains:0,longTermCapitalGains:0,deductionType:"standard",itemizedDeductions:0,taxCreditsAnnual:0,includePriorYearCalculation:!1,priorYearAgi:0,priorYearTax:0,withholding:0},n}return Object(u.a)(a,[{key:"handleStateChange",value:function(e,t){e in this.state?this.setState(Object(l.a)({},e,t)):alert("incorrect state variable: ".concat(e))}},{key:"_calculateObligationBasedOnPriorYear",value:function(){var e=this.state.filingStatus!==b.MARRIED_FILING_SEPARATELY.name?15e4:75e3,t=this.state.priorYearAgi<=e?1:1.1;return this.state.priorYearTax*t}},{key:"_calculateAnnualizedIncome",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,n=e*this.state.longTermCapitalGains;return t+Math.max(a+n,-3e3)}},{key:"_calculateObligationBasedOnCurrentYear",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,n=e*this.state.longTermCapitalGains;return.9*O(this.state.filingStatus,t,a,n,this.state.deductionType,e*this.state.itemizedDeductions,this.state.taxCreditsAnnual)}},{key:"_calculateObligationDuringTimePeriod",value:function(){var e=[.25,.5,.75,1][this.state.timePeriod];return this._getAnnualizedObligation()*e}},{key:"_calculateTaxesOwed",value:function(){return this._calculateObligationDuringTimePeriod()-this.state.withholding}},{key:"_getAnnualizedObligation",value:function(){var e=[this._calculateObligationBasedOnCurrentYear()];return this.state.includePriorYearCalculation&&e.push(this._calculateObligationBasedOnPriorYear()),Math.min.apply(Math,e)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"App App-header",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(v,{onChange:function(t){return e.handleStateChange("filingStatus",t.target.value)},label:"Filing Status",selectOptions:Object.values(b)}),Object(m.jsx)(v,{onChange:function(t){return e.handleStateChange("timePeriod",t.target.value)},label:"Time Period",selectOptions:Object.values(h)})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"column",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(x,{label:"Ordinary Income",onChange:function(t){return e.handleStateChange("ordinaryIncome",t.target.value)}}),Object(m.jsx)(x,{label:"Short Term Capital Gains",onChange:function(t){return e.handleStateChange("shortTermCapitalGains",t.target.value)}}),Object(m.jsx)(x,{label:"Long Term Capital Gains",onChange:function(t){return e.handleStateChange("longTermCapitalGains",t.target.value)}}),Object(m.jsx)(g,{onChange:function(t){return e.handleStateChange("deductionType",t.target.value)}}),"itemized"===this.state.deductionType&&Object(m.jsx)(x,{label:"Itemized Deductions",onChange:function(t){return e.handleStateChange("itemizedDeductions",t.target.value)}}),Object(m.jsx)(x,{label:"Tax Credits (Annual)",onChange:function(t){return e.handleStateChange("taxCreditsAnnual",t.target.value)}})]}),Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(f,{label:"Annualized Income",value:this._calculateAnnualizedIncome().toFixed(2)}),Object(m.jsx)(f,{label:"Obligation based on current year",value:this._calculateObligationBasedOnCurrentYear().toFixed(2)})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(p,{checked:this.state.includePriorYearCalculation,onChange:function(t){return e.handleStateChange("includePriorYearCalculation",t.target.checked)}}),Object(m.jsx)(x,{label:"Prior Year AGI",onChange:function(t){return e.handleStateChange("priorYearAgi",t.target.value)},disabled:!this.state.includePriorYearCalculation}),Object(m.jsx)(x,{label:"Prior Year Tax",onChange:function(t){return e.handleStateChange("priorYearTax",t.target.value)},disabled:!this.state.includePriorYearCalculation})]}),Object(m.jsx)("div",{className:"bordered",children:Object(m.jsx)(f,{label:"Obligation based on prior year",value:this._calculateObligationBasedOnPriorYear().toFixed(2)})})]})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(f,{label:"Annualized Obligation",value:this._getAnnualizedObligation().toFixed(2)}),Object(m.jsx)(f,{label:"Obligation in time period",value:this._calculateObligationDuringTimePeriod().toFixed(2)}),Object(m.jsx)(x,{label:"Withholding",onChange:function(t){return e.handleStateChange("withholding",t.target.value)}}),Object(m.jsx)(f,{label:"Taxes Owed",value:this._calculateTaxesOwed().toFixed(2)})]})}),Object(m.jsxs)("span",{className:"footer",children:["This is not financial advice. ",Object(m.jsx)("br",{}),"This tool is meant to estimate the estimated payments, and is provided without any guarantees. ",Object(m.jsx)("br",{}),"The author is not a CPA nor did any CPA review this. Please use at your own risk. ",Object(m.jsx)("br",{}),"If you would like to inspect the calculations or make any contributions, please review the source code"," ",Object(m.jsx)("a",{href:"https://github.com/tomo-otsuka/brasstax",children:"here"}),"."]})]})}}]),a}(r.a.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.5528ac85.chunk.js.map