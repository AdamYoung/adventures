import{m,S as C,r as x,n as k,o as f,c as _,F as w,p as P,t as S,q as b,a as A,b as $,u as B,s as E}from"./BkuF1YRv.js";import{_ as v}from"./DlAUqK2U.js";const N={__name:"machine-gun",props:{text:{type:String,default:""},maxLength:{type:Number,default:12},speed:{type:Number,default:4},loop:{type:Boolean,default:!1},repeat:{type:Number,default:0},onComplete:{type:Function,default:()=>{}}},setup(y){m.registerPlugin(C);const e=y,d=x(null),o=x([]);(e.speed<1||e.speed>10)&&(e.speed=5),e.loop&&(e.repeat=-1);const h=.05+(10-e.speed)*(.4-.05)/9,u=/(\.|\?|!)$/g,g=(a,p)=>{if(typeof p>"u")return a.split(" ");const n=a.split(" "),s=n.length;let l=[];const c=[];for(let r=0;r<s;r++)l.push(n[r]),(u.test(n[r])||r===s-1||l.join(" ").length+n[r+1].length>p)&&(c.push(l.join(" ")),l=[]);return c},i=async()=>{const a=g(e.text,e.maxlength);console.log(a);for(let t=0;t<a.length;t++)o.value.push({text:a[t],id:t}),console.log(a[t]);await b();const p=m.timeline({delay:.6,repeat:e.repeat,repeatDelay:4,onComplete:e.onComplete});let n=0,s,l,c,r;for(let t=0;t<o.value.length;t++)s=o.value[t],console.log(s),r=u.test(s.text)||t===o.value.length-1,l=d.value.children[t],c=Math.max(.5,s.text.length*h),r&&(c+=.6),m.set(l,{autoAlpha:0,scale:0,z:.01}),p.to(l,{duration:c,scale:1.2,ease:"slow(0.25, 0.9)"},n).to(l,{duration:c,autoAlpha:1,ease:"slow(0.25, 0.9, true)"},n),n+=c-.05};return k(()=>{i()}),(a,p)=>(f(),_("div",{ref_key:"demo",ref:d,class:"textContainer"},[(f(!0),_(w,null,P(o.value,(n,s)=>(f(),_("h3",{key:s,class:"textChunk"},S(n.text),1))),128))],512))}},M=v(N,[["__scopeId","data-v-ceb0555f"]]),T={class:"home"},D=6,F=2.5,I={__name:"index",setup(y){const e=B(),d=i=>[{type:"image",src:`/page${i}.png`},{type:"audio",src:`/page${i}.mp3`},{type:"video",src:`/page${i}.mp4`}];let o=1;const h=()=>{o<=D&&e.queueBatch(d(o),()=>{console.log(`Page ${o} loaded`),o++,h()})};h();const u=x(null),g=()=>{m.to(u.value,{height:0,opacity:0,duration:F,onComplete:()=>E("/story")})};return(i,a)=>{const p=M;return f(),_("div",T,[A("div",{ref_key:"textContainer",ref:u,class:"text-container"},[$(p,{text:"A world of wonder awaits. Get ready for the epic adventures of Mya and Khita!",speed:6,loop:!1,repeat:0,"max-length":50,"on-complete":g})],512)])}}},q=v(I,[["__scopeId","data-v-fbc85969"]]);export{q as default};
