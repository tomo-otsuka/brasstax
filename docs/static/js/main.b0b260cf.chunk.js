(this.webpackJsonpbrasstax=this.webpackJsonpbrasstax||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(2),i=a.n(r),n=a(11),c=a.n(n),l=(a(16),a(3)),u=a(1),s=a(4),o=a(5),d=a(7),b=a(6),m=(a(17),a(0));function h(e){var t=e.selectOptions.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.readable})}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:[e.label,": "]}),Object(m.jsx)("select",{onChange:e.onChange,children:t})]})}function j(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox",checked:e.checked,onChange:e.onChange}),Object(m.jsx)("label",{children:e.label})]})}var v=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={value:""},e.onChange=function(t){var a=t.target.value;a.match(/[^\d\.\-]/)?e.setState({value:a.replace(/[^\d\.\-]/g,"")}):(e.setState({value:a}),e.props.onChange(t))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:this.props.label+": "}),Object(m.jsx)("input",{type:"text",onChange:this.onChange,disabled:this.props.disabled,value:this.state.value})]})}}]),a}(i.a.Component);function O(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:e.label+": "}),Object(m.jsx)("span",{children:e.value})]})}var S,I,x,g,k=Object.freeze({FEDERAL:{name:"federal",readable:"Federal"},CALIFORNIA:{name:"california",readable:"CA"}}),A=Object.freeze({SINGLE:{name:"single",readable:"Single"},MARRIED_FILING_JOINTLY:{name:"married-filing-jointly",readable:"Married Filing Jointly"},MARRIED_FILING_SEPARATELY:{name:"married-filing-separately",readable:"Married Filing Separately"},HEAD_OF_HOUSEHOLD:{name:"head-of-household",readable:"Head of Household"}}),f=Object.freeze({FIRST:{name:0,readable:"1/1 - 3/31"},SECOND:{name:1,readable:"1/1 - 5/31"},THIRD:{name:2,readable:"1/1 - 8/31"},FOURTH:{name:3,readable:"1/1 - 12/31"}}),T=Object.freeze({STANDARD:{name:"standard",readable:"Standard"},ITEMIZED:{name:"itemized",readable:"Itemized"}}),E=a(10),_=new Set([k.CALIFORNIA.name]),p=(S={},Object(u.a)(S,A.SINGLE.name,[{bracketStart:518400,rate:.37,cumulative:156235},{bracketStart:207350,rate:.35,cumulative:47367.5},{bracketStart:163300,rate:.32,cumulative:33271.5},{bracketStart:85525,rate:.24,cumulative:14605.5},{bracketStart:40125,rate:.22,cumulative:4617.5},{bracketStart:9875,rate:.12,cumulative:987.5},{bracketStart:0,rate:.1,cumulative:0}]),Object(u.a)(S,A.MARRIED_FILING_JOINTLY.name,[{bracketStart:622050,rate:.37,cumulative:167307.5},{bracketStart:414700,rate:.35,cumulative:94735},{bracketStart:326600,rate:.32,cumulative:66543},{bracketStart:171050,rate:.24,cumulative:29211},{bracketStart:80250,rate:.22,cumulative:9235},{bracketStart:19750,rate:.12,cumulative:1975},{bracketStart:0,rate:.1,cumulative:0}]),Object(u.a)(S,A.MARRIED_FILING_SEPARATELY.name,[{bracketStart:311025,rate:.37,cumulative:83653.75},{bracketStart:207350,rate:.35,cumulative:47367.5},{bracketStart:163300,rate:.32,cumulative:33271.5},{bracketStart:85525,rate:.24,cumulative:14605.5},{bracketStart:40125,rate:.22,cumulative:4617.5},{bracketStart:9875,rate:.12,cumulative:987.5},{bracketStart:0,rate:.1,cumulative:0}]),Object(u.a)(S,A.HEAD_OF_HOUSEHOLD.name,[{bracketStart:518400,rate:.37,cumulative:154793.5},{bracketStart:207350,rate:.35,cumulative:45926},{bracketStart:163300,rate:.32,cumulative:31830},{bracketStart:85500,rate:.24,cumulative:13158},{bracketStart:53700,rate:.22,cumulative:6162},{bracketStart:14100,rate:.12,cumulative:1410},{bracketStart:0,rate:.1,cumulative:0}]),S),C=(I={},Object(u.a)(I,A.SINGLE.name,[{bracketStart:1e6,rate:.133,cumulative:107549.37},{bracketStart:599012,rate:.123,cumulative:58227.85},{bracketStart:359407,rate:.113,cumulative:31152.48},{bracketStart:299508,rate:.103,cumulative:24982.88},{bracketStart:58634,rate:.093,cumulative:2581.6},{bracketStart:46394,rate:.08,cumulative:1602.4},{bracketStart:33421,rate:.06,cumulative:824.02},{bracketStart:21175,rate:.04,cumulative:334.18},{bracketStart:8932,rate:.02,cumulative:89.32},{bracketStart:0,rate:.01,cumulative:0}]),Object(u.a)(I,A.MARRIED_FILING_JOINTLY.name,[{bracketStart:1198024,rate:.133,cumulative:118435.92},{bracketStart:1e6,rate:.123,cumulative:94078.97},{bracketStart:718814,rate:.113,cumulative:62304.95},{bracketStart:599016,rate:.103,cumulative:49965.76},{bracketStart:117268,rate:.093,cumulative:5163.2},{bracketStart:92788,rate:.08,cumulative:3204.8},{bracketStart:66842,rate:.06,cumulative:1648.04},{bracketStart:42350,rate:.04,cumulative:668.36},{bracketStart:17864,rate:.02,cumulative:178.64},{bracketStart:0,rate:.01,cumulative:0}]),Object(u.a)(I,A.MARRIED_FILING_SEPARATELY.name,[{bracketStart:1e6,rate:.133,cumulative:107549.37},{bracketStart:599012,rate:.123,cumulative:58227.85},{bracketStart:359407,rate:.113,cumulative:31152.48},{bracketStart:299508,rate:.103,cumulative:24982.88},{bracketStart:58634,rate:.093,cumulative:2581.6},{bracketStart:46394,rate:.08,cumulative:1602.4},{bracketStart:33421,rate:.06,cumulative:824.02},{bracketStart:21175,rate:.04,cumulative:334.18},{bracketStart:8932,rate:.02,cumulative:89.32},{bracketStart:0,rate:.01,cumulative:0}]),Object(u.a)(I,A.HEAD_OF_HOUSEHOLD.name,[{bracketStart:1e6,rate:.133,cumulative:101385.48},{bracketStart:814658,rate:.123,cumulative:78588.41},{bracketStart:488796,rate:.113,cumulative:41776},{bracketStart:407329,rate:.103,cumulative:33374.9},{bracketStart:79812,rate:.093,cumulative:2915.82},{bracketStart:67569,rate:.08,cumulative:1936.38},{bracketStart:54597,rate:.06,cumulative:1158.06},{bracketStart:42353,rate:.04,cumulative:668.3},{bracketStart:17876,rate:.02,cumulative:178.76},{bracketStart:0,rate:.01,cumulative:0}]),I),L=(x={},Object(u.a)(x,k.FEDERAL.name,p),Object(u.a)(x,k.CALIFORNIA.name,C),x),N=(g={},Object(u.a)(g,A.SINGLE.name,[{bracketEnd:40400,rate:0},{bracketEnd:445850,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(u.a)(g,A.MARRIED_FILING_JOINTLY.name,[{bracketEnd:80800,rate:0},{bracketEnd:501600,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(u.a)(g,A.MARRIED_FILING_SEPARATELY.name,[{bracketEnd:40400,rate:0},{bracketEnd:250800,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(u.a)(g,A.HEAD_OF_HOUSEHOLD.name,[{bracketEnd:54100,rate:0},{bracketEnd:473750,rate:.15},{bracketEnd:1/0,rate:.2}]),g);function R(e,t,a,r,i,n,c){return i<0&&(r+=i,i=0),r<0&&(a+=Math.max(r,-3e3),r=0),(a-=D(e,t,n,c))<0&&(r+=a),r<0&&(i+=r),[a=Math.max(0,a),r=Math.max(0,r),i=Math.max(0,i)]}function D(e,t,a,r){var i=0;return a===T.STANDARD.name?i=function(e,t){var a,r,i;return(i={},Object(u.a)(i,k.FEDERAL.name,(a={},Object(u.a)(a,A.SINGLE.name,12400),Object(u.a)(a,A.MARRIED_FILING_JOINTLY.name,25100),Object(u.a)(a,A.MARRIED_FILING_SEPARATELY.name,12550),Object(u.a)(a,A.HEAD_OF_HOUSEHOLD.name,18800),a)),Object(u.a)(i,k.CALIFORNIA.name,(r={},Object(u.a)(r,A.SINGLE.name,4601),Object(u.a)(r,A.MARRIED_FILING_JOINTLY.name,9202),Object(u.a)(r,A.MARRIED_FILING_SEPARATELY.name,4601),Object(u.a)(r,A.HEAD_OF_HOUSEHOLD.name,9202),r)),i)[e][t]}(e,t):a===T.ITEMIZED.name&&(i=r),i}function F(e,t,a,r,i){var n=L[e][t],c=a+r;_.has(e)&&(c+=i);var l,u=0,s=Object(E.a)(n);try{for(s.s();!(l=s.n()).done;){var o=l.value;if(!(c<o.bracketStart)){u+=o.cumulative,u+=(c-o.bracketStart)*o.rate;break}}}catch(d){s.e(d)}finally{s.f()}return u}function y(e,t,a,r,i){if(_.has(e))return 0;var n,c=N[t],l=a+r,u=0,s=i,o=Object(E.a)(c);try{for(o.s();!(n=o.n()).done;){var d=n.value;if(!(d.bracketEnd<a+r)){var b=Math.min(s,d.bracketEnd-l);u+=b*d.rate,s-=b,l+=b}}}catch(m){o.e(m)}finally{o.f()}return u}function G(e,t){var a=e===A.MARRIED_FILING_JOINTLY.name?25e4:2e5;return.009*Math.max(0,t-a)}function z(e,t,a){var r,i=(r={},Object(u.a)(r,A.SINGLE.name,2e5),Object(u.a)(r,A.MARRIED_FILING_JOINTLY.name,25e4),Object(u.a)(r,A.MARRIED_FILING_SEPARATELY.name,125e3),Object(u.a)(r,A.HEAD_OF_HOUSEHOLD.name,2e5),r)[e];return.038*Math.max(0,Math.min(t+a-i,a))}var M=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={jurisdiction:k.FEDERAL.name,filingStatus:A.SINGLE.name,timePeriod:f.FIRST.name,ordinaryIncome:0,shortTermCapitalGains:0,longTermCapitalGains:0,deductionType:T.STANDARD.name,itemizedDeductions:0,taxCreditsAnnual:0,includePriorYearCalculation:!1,priorYearAgi:0,priorYearTax:0,withholding:0},r}return Object(o.a)(a,[{key:"handleStateChange",value:function(e,t){e in this.state?this.setState(Object(u.a)({},e,t)):alert("incorrect state variable: ".concat(e))}},{key:"_calculateObligationBasedOnPriorYear",value:function(){var e=this.state.filingStatus!==A.MARRIED_FILING_SEPARATELY.name?15e4:75e3,t=this.state.priorYearAgi<=e?1:1.1;return this.state.priorYearTax*t}},{key:"_calculateAnnualizedIncome",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,r=e*this.state.longTermCapitalGains;return t+Math.max(a+r,-3e3)}},{key:"_calculateTotalTaxBasedOnAnnualizedIncome",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,r=e*this.state.longTermCapitalGains;return function(e,t,a,r,i,n,c,u){var s=R(e,t,a,r,i,n,c),o=Object(l.a)(s,3),d=F(e,t,a=o[0],r=o[1],i=o[2]);return d+=y(e,t,a,r,i),e===k.FEDERAL.name&&(d+=G(t,a),d+=z(t,a,r+i)),d-=u,Math.max(0,d)}(this.state.jurisdiction,this.state.filingStatus,t,a,r,this.state.deductionType,e*this.state.itemizedDeductions,this.state.taxCreditsAnnual)}},{key:"_calculateAnnualizedAdjustedIncomes",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,r=e*this.state.longTermCapitalGains,i=e*this.state.itemizedDeductions;return R(this.state.jurisdiction,this.state.filingStatus,t,a,r,this.state.deductionType,i)}},{key:"_calculateDeduction",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod]*this.state.itemizedDeductions;return D(this.state.jurisdiction,this.state.filingStatus,this.state.deductionType,e)}},{key:"_calculateIncomeTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(l.a)(e,3),a=t[0],r=t[1],i=t[2];return F(this.state.jurisdiction,this.state.filingStatus,a,r,i)}},{key:"_calculateLongTermCapitalGainsTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(l.a)(e,3),a=t[0],r=t[1],i=t[2];return y(this.state.jurisdiction,this.state.filingStatus,a,r,i)}},{key:"_calculateAdditionalMedicareTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(l.a)(e,3),a=t[0];t[1],t[2];return G(this.state.filingStatus,a)}},{key:"_calculateNetInvestmentIncomeTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(l.a)(e,3),a=t[0],r=t[1],i=t[2];return z(this.state.filingStatus,a,r+i)}},{key:"_calculateObligationBasedOnAnnualizedIncome",value:function(){return.9*this._calculateTotalTaxBasedOnAnnualizedIncome()}},{key:"_calculateObligationDuringTimePeriod",value:function(){var e=[.25,.5,.75,1];this.state.jurisdiction===k.CALIFORNIA.name&&(e=[.3,.7,.7,1]);var t=e[this.state.timePeriod];return this._calculateAnnualizedObligation()*t}},{key:"_calculateTaxesOwed",value:function(){return this._calculateObligationDuringTimePeriod()-this.state.withholding}},{key:"_calculateAnnualizedObligation",value:function(){var e=[this._calculateObligationBasedOnAnnualizedIncome()];return this.state.includePriorYearCalculation&&(this.state.jurisdiction===k.CALIFORNIA.name&&this._calculateAnnualizedIncome()>1e6||e.push(this._calculateObligationBasedOnPriorYear())),Math.min.apply(Math,e)}},{key:"_calculateAnnualizedEffectiveTaxRate",value:function(){return this._calculateTotalTaxBasedOnAnnualizedIncome()/this._calculateAnnualizedIncome()||0}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"App App-header",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(h,{onChange:function(t){return e.handleStateChange("jurisdiction",t.target.value)},label:"Jurisdiction",selectOptions:Object.values(k)}),Object(m.jsx)(h,{onChange:function(t){return e.handleStateChange("filingStatus",t.target.value)},label:"Filing Status",selectOptions:Object.values(A)}),Object(m.jsx)(h,{onChange:function(t){return e.handleStateChange("timePeriod",t.target.value)},label:"Time Period",selectOptions:Object.values(f)})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"column",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(v,{label:"Ordinary Income",onChange:function(t){return e.handleStateChange("ordinaryIncome",t.target.value)}}),Object(m.jsx)(v,{label:"Short Term Capital Gains",onChange:function(t){return e.handleStateChange("shortTermCapitalGains",t.target.value)}}),Object(m.jsx)(v,{label:"Long Term Capital Gains",onChange:function(t){return e.handleStateChange("longTermCapitalGains",t.target.value)}}),Object(m.jsx)(h,{onChange:function(t){return e.handleStateChange("deductionType",t.target.value)},label:"Deduction Type",selectOptions:Object.values(T)}),"itemized"===this.state.deductionType&&Object(m.jsx)(v,{label:"Itemized Deductions",onChange:function(t){return e.handleStateChange("itemizedDeductions",t.target.value)}}),Object(m.jsx)(v,{label:"Tax Credits (Annual)",onChange:function(t){return e.handleStateChange("taxCreditsAnnual",t.target.value)}})]}),Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(O,{label:"Annualized Income",value:this._calculateAnnualizedIncome().toFixed(2)}),Object(m.jsx)("div",{className:"small",children:Object(m.jsx)(O,{label:"Deduction",value:this._calculateDeduction().toFixed(2)})}),this.state.jurisdiction===k.FEDERAL.name&&Object(m.jsxs)("div",{className:"small",children:[Object(m.jsx)(O,{label:"Income Tax",value:this._calculateIncomeTax().toFixed(2)}),Object(m.jsx)(O,{label:"Long Term Capital Gains Tax",value:this._calculateLongTermCapitalGainsTax().toFixed(2)}),Object(m.jsx)(O,{label:"Additional Medicare Tax",value:this._calculateAdditionalMedicareTax().toFixed(2)}),Object(m.jsx)(O,{label:"Net Investment Tax",value:this._calculateNetInvestmentIncomeTax().toFixed(2)})]}),Object(m.jsx)(O,{label:"Total Tax",value:this._calculateTotalTaxBasedOnAnnualizedIncome().toFixed(2)+" ("+(100*this._calculateAnnualizedEffectiveTaxRate()).toFixed(2)+"%)"}),Object(m.jsx)(O,{label:"Obligation based on annualized income",value:this._calculateObligationBasedOnAnnualizedIncome().toFixed(2)})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(j,{label:"Include prior year calculation",checked:this.state.includePriorYearCalculation,onChange:function(t){return e.handleStateChange("includePriorYearCalculation",t.target.checked)}}),Object(m.jsx)(v,{label:"Prior Year AGI",onChange:function(t){return e.handleStateChange("priorYearAgi",t.target.value)},disabled:!this.state.includePriorYearCalculation}),Object(m.jsx)(v,{label:"Prior Year Tax",onChange:function(t){return e.handleStateChange("priorYearTax",t.target.value)},disabled:!this.state.includePriorYearCalculation})]}),Object(m.jsx)("div",{className:"bordered",children:Object(m.jsx)(O,{label:"Obligation based on prior year",value:this._calculateObligationBasedOnPriorYear().toFixed(2)})})]})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"bordered",children:[Object(m.jsx)(O,{label:"Annualized Obligation",value:this._calculateAnnualizedObligation().toFixed(2)}),Object(m.jsx)(O,{label:"Obligation in time period",value:this._calculateObligationDuringTimePeriod().toFixed(2)}),Object(m.jsx)(v,{label:"Withholding ($)",onChange:function(t){return e.handleStateChange("withholding",t.target.value)}}),Object(m.jsx)(O,{label:"Taxes Owed",value:this._calculateTaxesOwed().toFixed(2)})]})}),Object(m.jsxs)("span",{className:"footer",children:["This is not financial advice. ",Object(m.jsx)("br",{}),"This tool is meant to estimate the estimated payments, and is provided without any guarantees. ",Object(m.jsx)("br",{}),"The author is not a CPA nor did any CPA review this. Please use at your own risk. ",Object(m.jsx)("br",{}),"If you would like to inspect the calculations or make any contributions, please review the source code"," ",Object(m.jsx)("a",{href:"https://github.com/tomo-otsuka/brasstax",children:"here"}),". ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Privacy: This tool does not collect any sensitive data. ",Object(m.jsx)("br",{}),"In fact, after retrieving the initial static assets to display this page, ",Object(m.jsx)("br",{}),"it does not communicate to a server whatsoever."]})]})}}]),a}(i.a.Component),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),i(e),n(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),P()}},[[19,1,2]]]);
//# sourceMappingURL=main.b0b260cf.chunk.js.map