(this.webpackJsonpbrasstax=this.webpackJsonpbrasstax||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r,n,i,c,l=a(1),s=a.n(l),u=a(26),o=a.n(u),d=(a(32),a(17)),b=a(2),h=a(3),m=a(4),j=a(6),v=a(5),O=(a(33),a(21)),x=a(8),S=a(14),g=Object.freeze({FEDERAL:{name:"federal",readable:"Federal"},CALIFORNIA:{name:"california",readable:"CA"}}),I=Object.freeze({SINGLE:{name:"single",readable:"Single"},MARRIED_FILING_JOINTLY:{name:"married-filing-jointly",readable:"Married Filing Jointly"},MARRIED_FILING_SEPARATELY:{name:"married-filing-separately",readable:"Married Filing Separately"},HEAD_OF_HOUSEHOLD:{name:"head-of-household",readable:"Head of Household"}}),f=Object.freeze({FIRST:{name:0,readable:"1/1 - 3/31"},SECOND:{name:1,readable:"1/1 - 5/31"},THIRD:{name:2,readable:"1/1 - 8/31"},FOURTH:{name:3,readable:"1/1 - 12/31"}}),k=Object.freeze({STANDARD:{name:"standard",readable:"Standard"},ITEMIZED:{name:"itemized",readable:"Itemized"}}),A=a(7),p=new Set([g.CALIFORNIA.name]),T=(r={},Object(b.a)(r,I.SINGLE.name,[{bracketStart:518400,rate:.37,cumulative:156235},{bracketStart:207350,rate:.35,cumulative:47367.5},{bracketStart:163300,rate:.32,cumulative:33271.5},{bracketStart:85525,rate:.24,cumulative:14605.5},{bracketStart:40125,rate:.22,cumulative:4617.5},{bracketStart:9875,rate:.12,cumulative:987.5},{bracketStart:0,rate:.1,cumulative:0}]),Object(b.a)(r,I.MARRIED_FILING_JOINTLY.name,[{bracketStart:622050,rate:.37,cumulative:167307.5},{bracketStart:414700,rate:.35,cumulative:94735},{bracketStart:326600,rate:.32,cumulative:66543},{bracketStart:171050,rate:.24,cumulative:29211},{bracketStart:80250,rate:.22,cumulative:9235},{bracketStart:19750,rate:.12,cumulative:1975},{bracketStart:0,rate:.1,cumulative:0}]),Object(b.a)(r,I.MARRIED_FILING_SEPARATELY.name,[{bracketStart:311025,rate:.37,cumulative:83653.75},{bracketStart:207350,rate:.35,cumulative:47367.5},{bracketStart:163300,rate:.32,cumulative:33271.5},{bracketStart:85525,rate:.24,cumulative:14605.5},{bracketStart:40125,rate:.22,cumulative:4617.5},{bracketStart:9875,rate:.12,cumulative:987.5},{bracketStart:0,rate:.1,cumulative:0}]),Object(b.a)(r,I.HEAD_OF_HOUSEHOLD.name,[{bracketStart:518400,rate:.37,cumulative:154793.5},{bracketStart:207350,rate:.35,cumulative:45926},{bracketStart:163300,rate:.32,cumulative:31830},{bracketStart:85500,rate:.24,cumulative:13158},{bracketStart:53700,rate:.22,cumulative:6162},{bracketStart:14100,rate:.12,cumulative:1410},{bracketStart:0,rate:.1,cumulative:0}]),r),E=(n={},Object(b.a)(n,I.SINGLE.name,[{bracketStart:1e6,rate:.133,cumulative:107549.37},{bracketStart:599012,rate:.123,cumulative:58227.85},{bracketStart:359407,rate:.113,cumulative:31152.48},{bracketStart:299508,rate:.103,cumulative:24982.88},{bracketStart:58634,rate:.093,cumulative:2581.6},{bracketStart:46394,rate:.08,cumulative:1602.4},{bracketStart:33421,rate:.06,cumulative:824.02},{bracketStart:21175,rate:.04,cumulative:334.18},{bracketStart:8932,rate:.02,cumulative:89.32},{bracketStart:0,rate:.01,cumulative:0}]),Object(b.a)(n,I.MARRIED_FILING_JOINTLY.name,[{bracketStart:1198024,rate:.133,cumulative:118435.92},{bracketStart:1e6,rate:.123,cumulative:94078.97},{bracketStart:718814,rate:.113,cumulative:62304.95},{bracketStart:599016,rate:.103,cumulative:49965.76},{bracketStart:117268,rate:.093,cumulative:5163.2},{bracketStart:92788,rate:.08,cumulative:3204.8},{bracketStart:66842,rate:.06,cumulative:1648.04},{bracketStart:42350,rate:.04,cumulative:668.36},{bracketStart:17864,rate:.02,cumulative:178.64},{bracketStart:0,rate:.01,cumulative:0}]),Object(b.a)(n,I.MARRIED_FILING_SEPARATELY.name,[{bracketStart:1e6,rate:.133,cumulative:107549.37},{bracketStart:599012,rate:.123,cumulative:58227.85},{bracketStart:359407,rate:.113,cumulative:31152.48},{bracketStart:299508,rate:.103,cumulative:24982.88},{bracketStart:58634,rate:.093,cumulative:2581.6},{bracketStart:46394,rate:.08,cumulative:1602.4},{bracketStart:33421,rate:.06,cumulative:824.02},{bracketStart:21175,rate:.04,cumulative:334.18},{bracketStart:8932,rate:.02,cumulative:89.32},{bracketStart:0,rate:.01,cumulative:0}]),Object(b.a)(n,I.HEAD_OF_HOUSEHOLD.name,[{bracketStart:1e6,rate:.133,cumulative:101385.48},{bracketStart:814658,rate:.123,cumulative:78588.41},{bracketStart:488796,rate:.113,cumulative:41776},{bracketStart:407329,rate:.103,cumulative:33374.9},{bracketStart:79812,rate:.093,cumulative:2915.82},{bracketStart:67569,rate:.08,cumulative:1936.38},{bracketStart:54597,rate:.06,cumulative:1158.06},{bracketStart:42353,rate:.04,cumulative:668.3},{bracketStart:17876,rate:.02,cumulative:178.76},{bracketStart:0,rate:.01,cumulative:0}]),n),C=(i={},Object(b.a)(i,g.FEDERAL.name,T),Object(b.a)(i,g.CALIFORNIA.name,E),i),_=(c={},Object(b.a)(c,I.SINGLE.name,[{bracketEnd:40400,rate:0},{bracketEnd:445850,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(b.a)(c,I.MARRIED_FILING_JOINTLY.name,[{bracketEnd:80800,rate:0},{bracketEnd:501600,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(b.a)(c,I.MARRIED_FILING_SEPARATELY.name,[{bracketEnd:40400,rate:0},{bracketEnd:250800,rate:.15},{bracketEnd:1/0,rate:.2}]),Object(b.a)(c,I.HEAD_OF_HOUSEHOLD.name,[{bracketEnd:54100,rate:0},{bracketEnd:473750,rate:.15},{bracketEnd:1/0,rate:.2}]),c);function y(e,t,a,r,n,i,c){return n<0&&(r+=n,n=0),r<0&&(a+=Math.max(r,-3e3),r=0),(a-=L(e,t,i,c))<0&&(r+=a),r<0&&(n+=r),[a=Math.max(0,a),r=Math.max(0,r),n=Math.max(0,n)]}function L(e,t,a,r){var n=0;return a===k.STANDARD.name?n=function(e,t){var a,r,n;return(n={},Object(b.a)(n,g.FEDERAL.name,(a={},Object(b.a)(a,I.SINGLE.name,12400),Object(b.a)(a,I.MARRIED_FILING_JOINTLY.name,25100),Object(b.a)(a,I.MARRIED_FILING_SEPARATELY.name,12550),Object(b.a)(a,I.HEAD_OF_HOUSEHOLD.name,18800),a)),Object(b.a)(n,g.CALIFORNIA.name,(r={},Object(b.a)(r,I.SINGLE.name,4601),Object(b.a)(r,I.MARRIED_FILING_JOINTLY.name,9202),Object(b.a)(r,I.MARRIED_FILING_SEPARATELY.name,4601),Object(b.a)(r,I.HEAD_OF_HOUSEHOLD.name,9202),r)),n)[e][t]}(e,t):a===k.ITEMIZED.name&&(n=r),n}function R(e,t,a,r,n){var i=C[e][t],c=a+r;p.has(e)&&(c+=n);var l,s=0,u=Object(A.a)(i);try{for(u.s();!(l=u.n()).done;){var o=l.value;if(!(c<o.bracketStart)){s+=o.cumulative,s+=(c-o.bracketStart)*o.rate;break}}}catch(d){u.e(d)}finally{u.f()}return s}function N(e,t,a,r,n){if(p.has(e))return 0;var i,c=_[t],l=a+r,s=0,u=n,o=Object(A.a)(c);try{for(o.s();!(i=o.n()).done;){var d=i.value;if(!(d.bracketEnd<a+r)){var b=Math.min(u,d.bracketEnd-l);s+=b*d.rate,u-=b,l+=b}}}catch(h){o.e(h)}finally{o.f()}return s}function D(e,t){var a=e===I.MARRIED_FILING_JOINTLY.name?25e4:2e5;return.009*Math.max(0,t-a)}function F(e,t,a){var r,n=(r={},Object(b.a)(r,I.SINGLE.name,2e5),Object(b.a)(r,I.MARRIED_FILING_JOINTLY.name,25e4),Object(b.a)(r,I.MARRIED_FILING_SEPARATELY.name,125e3),Object(b.a)(r,I.HEAD_OF_HOUSEHOLD.name,2e5),r)[e];return.038*Math.max(0,Math.min(t+a-n,a))}var G=a(0);function M(e){var t=e.selectOptions.map((function(e){return Object(G.jsx)("option",{value:e.name,children:e.readable})}));return Object(G.jsxs)("div",{children:[Object(G.jsxs)("label",{children:[e.label,": "]}),Object(G.jsx)("select",{onChange:e.onChange,children:t})]})}function z(e){return Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{type:"checkbox",checked:e.checked,onChange:e.onChange}),Object(G.jsx)("label",{children:e.label})]})}var P=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={value:""},e.onChange=function(t){var a=t.target.value;a.match(/[^\d\.\-]/)?e.setState({value:a.replace(/[^\d\.\-]/g,"")}):(e.setState({value:a}),e.props.onChange(t))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)("label",{children:this.props.label+": "}),Object(G.jsx)("input",{type:"text",onChange:this.onChange,disabled:this.props.disabled,value:this.state.value})]})}}]),a}(s.a.Component);function Y(e){return Object(G.jsxs)("div",{children:[Object(G.jsx)("label",{children:e.label+": "}),Object(G.jsx)("span",{children:e.value})]})}S.d.register(S.e,S.c,S.g,S.h,S.f,S.a,S.b);var H=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).chartRef=s.a.createRef(),r.state={filingStatus:I.SINGLE.name,chart:null},r}return Object(m.a)(a,[{key:"handleStateChange",value:function(e,t){e in this.state?this.setState(Object(b.a)({},e,t)):alert("incorrect state variable: ".concat(e))}},{key:"calculateTax",value:function(e){var t,a=g.FEDERAL.name,r=this.state.filingStatus,n=L(a,r,k.STANDARD.name,0),i=Math.max(0,e-n);return R(a,r,i,0,0)+(t=e,.062*Math.min(t,142800))+function(e,t){return.0145*t+D(e,t)}(r,e)+R(g.CALIFORNIA.name,r,i,0,0)}},{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d"),t=Array.from({length:1e3},(function(e,t){return 1e3*t})),a=new S.d(e,{data:{labels:t,datasets:[{type:"line",yAxisID:"left-y-axis"},{type:"bar",spanGaps:!1,showLine:!0,pointRadius:1,backgroundColor:"rgba(199, 242, 175)",yAxisID:"left-y-axis"}]},options:{scales:{"left-y-axis":{type:"linear",position:"left"}}}});this.setState({chart:a})}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.chart.data.labels,a=t.map((function(t,a,r){return(e.calculateTax(t)-e.calculateTax(r[a-1]))/1e3})),r=t.map((function(a,r){return e.calculateTax(a)/t[r]}));this.state.chart.data.datasets[0].data=r,this.state.chart.data.datasets[1].data=a,this.state.chart.update("active")}},{key:"render",value:function(){var e=this;return Object(G.jsxs)("div",{className:"App App-header",children:[Object(G.jsx)(M,{onChange:function(t){return e.handleStateChange("filingStatus",t.target.value)},label:"Filing Status",selectOptions:Object.values(I)}),Object(G.jsx)("canvas",{id:"myChart",ref:this.chartRef})]})}}]),a}(s.a.Component),w=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={jurisdiction:g.FEDERAL.name,filingStatus:I.SINGLE.name,timePeriod:f.FIRST.name,ordinaryIncome:0,shortTermCapitalGains:0,longTermCapitalGains:0,deductionType:k.STANDARD.name,itemizedDeductions:0,taxCreditsAnnual:0,includePriorYearCalculation:!1,priorYearAgi:0,priorYearTax:0,withholding:0},r}return Object(m.a)(a,[{key:"handleStateChange",value:function(e,t){e in this.state?this.setState(Object(b.a)({},e,t)):alert("incorrect state variable: ".concat(e))}},{key:"_calculateObligationBasedOnPriorYear",value:function(){var e=this.state.filingStatus!==I.MARRIED_FILING_SEPARATELY.name?15e4:75e3,t=this.state.priorYearAgi<=e?1:1.1;return this.state.priorYearTax*t}},{key:"_calculateAnnualizedIncome",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,r=e*this.state.longTermCapitalGains;return t+Math.max(a+r,-3e3)}},{key:"_calculateTotalTaxBasedOnAnnualizedIncome",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,r=e*this.state.longTermCapitalGains;return function(e,t,a,r,n,i,c,l){var s=y(e,t,a,r,n,i,c),u=Object(d.a)(s,3),o=R(e,t,a=u[0],r=u[1],n=u[2]);return o+=N(e,t,a,r,n),e===g.FEDERAL.name&&(o+=D(t,a),o+=F(t,a,r+n)),o-=l,Math.max(0,o)}(this.state.jurisdiction,this.state.filingStatus,t,a,r,this.state.deductionType,e*this.state.itemizedDeductions,this.state.taxCreditsAnnual)}},{key:"_calculateAnnualizedAdjustedIncomes",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod],t=e*this.state.ordinaryIncome,a=e*this.state.shortTermCapitalGains,r=e*this.state.longTermCapitalGains,n=e*this.state.itemizedDeductions;return y(this.state.jurisdiction,this.state.filingStatus,t,a,r,this.state.deductionType,n)}},{key:"_calculateDeduction",value:function(){var e=[4,2.4,1.5,1][this.state.timePeriod]*this.state.itemizedDeductions;return L(this.state.jurisdiction,this.state.filingStatus,this.state.deductionType,e)}},{key:"_calculateIncomeTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(d.a)(e,3),a=t[0],r=t[1],n=t[2];return R(this.state.jurisdiction,this.state.filingStatus,a,r,n)}},{key:"_calculateLongTermCapitalGainsTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(d.a)(e,3),a=t[0],r=t[1],n=t[2];return N(this.state.jurisdiction,this.state.filingStatus,a,r,n)}},{key:"_calculateAdditionalMedicareTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(d.a)(e,3),a=t[0];t[1],t[2];return D(this.state.filingStatus,a)}},{key:"_calculateNetInvestmentIncomeTax",value:function(){var e=this._calculateAnnualizedAdjustedIncomes(),t=Object(d.a)(e,3),a=t[0],r=t[1],n=t[2];return F(this.state.filingStatus,a,r+n)}},{key:"_calculateObligationBasedOnAnnualizedIncome",value:function(){return.9*this._calculateTotalTaxBasedOnAnnualizedIncome()}},{key:"_calculateObligationDuringTimePeriod",value:function(){var e=[.25,.5,.75,1];this.state.jurisdiction===g.CALIFORNIA.name&&(e=[.3,.7,.7,1]);var t=e[this.state.timePeriod];return this._calculateAnnualizedObligation()*t}},{key:"_calculateTaxesOwed",value:function(){return this._calculateObligationDuringTimePeriod()-this.state.withholding}},{key:"_calculateAnnualizedObligation",value:function(){var e=[this._calculateObligationBasedOnAnnualizedIncome()];return this.state.includePriorYearCalculation&&(this.state.jurisdiction===g.CALIFORNIA.name&&this._calculateAnnualizedIncome()>1e6||e.push(this._calculateObligationBasedOnPriorYear())),Math.min.apply(Math,e)}},{key:"_calculateAnnualizedEffectiveTaxRate",value:function(){return this._calculateTotalTaxBasedOnAnnualizedIncome()/this._calculateAnnualizedIncome()||0}},{key:"render",value:function(){var e=this;return Object(G.jsxs)("div",{className:"App App-header",children:[Object(G.jsx)("div",{className:"row",children:Object(G.jsxs)("div",{className:"bordered",children:[Object(G.jsx)(M,{onChange:function(t){return e.handleStateChange("jurisdiction",t.target.value)},label:"Jurisdiction",selectOptions:Object.values(g)}),Object(G.jsx)(M,{onChange:function(t){return e.handleStateChange("filingStatus",t.target.value)},label:"Filing Status",selectOptions:Object.values(I)}),Object(G.jsx)(M,{onChange:function(t){return e.handleStateChange("timePeriod",t.target.value)},label:"Time Period",selectOptions:Object.values(f)})]})}),Object(G.jsx)("div",{className:"row",children:Object(G.jsxs)("div",{className:"column",children:[Object(G.jsxs)("div",{className:"row",children:[Object(G.jsxs)("div",{className:"bordered",children:[Object(G.jsx)(P,{label:"Ordinary Income",onChange:function(t){return e.handleStateChange("ordinaryIncome",t.target.value)}}),Object(G.jsx)(P,{label:"Short Term Capital Gains",onChange:function(t){return e.handleStateChange("shortTermCapitalGains",t.target.value)}}),Object(G.jsx)(P,{label:"Long Term Capital Gains",onChange:function(t){return e.handleStateChange("longTermCapitalGains",t.target.value)}}),Object(G.jsx)(M,{onChange:function(t){return e.handleStateChange("deductionType",t.target.value)},label:"Deduction Type",selectOptions:Object.values(k)}),"itemized"===this.state.deductionType&&Object(G.jsx)(P,{label:"Itemized Deductions",onChange:function(t){return e.handleStateChange("itemizedDeductions",t.target.value)}}),Object(G.jsx)(P,{label:"Tax Credits (Annual)",onChange:function(t){return e.handleStateChange("taxCreditsAnnual",t.target.value)}})]}),Object(G.jsxs)("div",{className:"bordered",children:[Object(G.jsx)(Y,{label:"Annualized Income",value:this._calculateAnnualizedIncome().toFixed(2)}),Object(G.jsx)("div",{className:"small",children:Object(G.jsx)(Y,{label:"Deduction",value:this._calculateDeduction().toFixed(2)})}),this.state.jurisdiction===g.FEDERAL.name&&Object(G.jsxs)("div",{className:"small",children:[Object(G.jsx)(Y,{label:"Income Tax",value:this._calculateIncomeTax().toFixed(2)}),Object(G.jsx)(Y,{label:"Long Term Capital Gains Tax",value:this._calculateLongTermCapitalGainsTax().toFixed(2)}),Object(G.jsx)(Y,{label:"Additional Medicare Tax",value:this._calculateAdditionalMedicareTax().toFixed(2)}),Object(G.jsx)(Y,{label:"Net Investment Tax",value:this._calculateNetInvestmentIncomeTax().toFixed(2)})]}),Object(G.jsx)(Y,{label:"Total Tax",value:this._calculateTotalTaxBasedOnAnnualizedIncome().toFixed(2)+" ("+(100*this._calculateAnnualizedEffectiveTaxRate()).toFixed(2)+"%)"}),Object(G.jsx)(Y,{label:"Obligation based on annualized income",value:this._calculateObligationBasedOnAnnualizedIncome().toFixed(2)})]})]}),Object(G.jsxs)("div",{className:"row",children:[Object(G.jsxs)("div",{className:"bordered",children:[Object(G.jsx)(z,{label:"Include prior year calculation",checked:this.state.includePriorYearCalculation,onChange:function(t){return e.handleStateChange("includePriorYearCalculation",t.target.checked)}}),Object(G.jsx)(P,{label:"Prior Year AGI",onChange:function(t){return e.handleStateChange("priorYearAgi",t.target.value)},disabled:!this.state.includePriorYearCalculation}),Object(G.jsx)(P,{label:"Prior Year Tax",onChange:function(t){return e.handleStateChange("priorYearTax",t.target.value)},disabled:!this.state.includePriorYearCalculation})]}),Object(G.jsx)("div",{className:"bordered",children:Object(G.jsx)(Y,{label:"Obligation based on prior year",value:this._calculateObligationBasedOnPriorYear().toFixed(2)})})]})]})}),Object(G.jsx)("div",{className:"row",children:Object(G.jsxs)("div",{className:"bordered",children:[Object(G.jsx)(Y,{label:"Annualized Obligation",value:this._calculateAnnualizedObligation().toFixed(2)}),Object(G.jsx)(Y,{label:"Obligation in time period",value:this._calculateObligationDuringTimePeriod().toFixed(2)}),Object(G.jsx)(P,{label:"Withholding ($)",onChange:function(t){return e.handleStateChange("withholding",t.target.value)}}),Object(G.jsx)(Y,{label:"Taxes Owed",value:this._calculateTaxesOwed().toFixed(2)})]})}),Object(G.jsxs)("span",{className:"footer",children:["This is not financial advice. ",Object(G.jsx)("br",{}),"This tool is meant to estimate the estimated payments, and is provided without any guarantees. ",Object(G.jsx)("br",{}),"The author is not a CPA nor did any CPA review this. Please use at your own risk. ",Object(G.jsx)("br",{}),"If you would like to inspect the calculations or make any contributions, please review the source code"," ",Object(G.jsx)("a",{href:"https://github.com/tomo-otsuka/brasstax",children:"here"}),". ",Object(G.jsx)("br",{}),Object(G.jsx)("br",{}),"Privacy: This tool does not collect any sensitive data. ",Object(G.jsx)("br",{}),"In fact, after retrieving the initial static assets to display this page, ",Object(G.jsx)("br",{}),"it does not communicate to a server whatsoever."]})]})}}]),a}(s.a.Component),B=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(G.jsx)(O.a,{children:Object(G.jsxs)("div",{className:"row",children:[Object(G.jsx)("div",{className:"nav",children:Object(G.jsx)("nav",{children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:Object(G.jsx)(O.b,{to:"/brasstax/estimated-taxes",children:"Estimated Taxes"})}),Object(G.jsx)("li",{children:Object(G.jsx)(O.b,{to:"/brasstax/tax-chart",children:"Tax Chart"})})]})})}),Object(G.jsx)("div",{className:"main",children:Object(G.jsxs)(x.c,{children:[Object(G.jsx)(x.a,{path:"/brasstax/estimated-taxes",children:Object(G.jsx)(w,{})}),Object(G.jsx)(x.a,{path:"/brasstax/tax-chart",children:Object(G.jsx)(H,{})})]})})]})})}}]),a}(s.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};o.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(B,{})}),document.getElementById("root")),J()}},[[43,1,2]]]);
//# sourceMappingURL=main.b92ba263.chunk.js.map