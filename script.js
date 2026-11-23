var WA='201000000000';
var FL=['ديب 72%','ميلك ناعمة','فستق وكراميل','بندق برالين','أبيض بالتوت','لوز محمّص','قهوة وكاكاو','ملح بحري','برتقال مسكّر','جوز هند','كراميل مالح','زبدة فول سوداني'];
var PR=[
{id:1,n:'ديب 72% سادة',c:'ألواح',p:65,d:'مرّة خفيفة بنهاية فاكهية. 100 جم.',a:'#4a2218',b:'#2b120c'},
{id:2,n:'ميلك ناعمة',c:'ألواح',p:55,d:'حلاوة متوازنة وقوام كريمي. 100 جم.',a:'#8a5238',b:'#5e3524'},
{id:3,n:'أبيض بالتوت',c:'ألواح',p:70,d:'شوكولاتة بيضاء مع قطع توت مجفف. 100 جم.',a:'#f1e2cf',b:'#c2305a'},
{id:4,n:'فستق وكراميل',c:'محشوّة',p:75,d:'قلب كراميل وفستق حلبي مطحون. 100 جم.',a:'#6a3a28',b:'#9db17c'},
{id:5,n:'بندق برالين',c:'محشوّة',p:80,d:'برالين بندق محمّص في غلاف ميلك. 100 جم.',a:'#7a4630',b:'#c99a3b'},
{id:6,n:'علبة هدايا 12 قطعة',c:'علب هدايا',p:220,d:'12 قطعة من نكهات مشكّلة في علبة مغلقة.',a:'#c2305a',b:'#3a1d17'},
{id:7,n:'علبة فاخرة 24 قطعة',c:'علب هدايا',p:400,d:'24 قطعة بطبقتين، مناسبة للمناسبات والشركات.',a:'#c99a3b',b:'#3a1d17'}];
var cat='الكل',cart={};
var bar=document.getElementById('bar'),cap=document.getElementById('cap');
var PZ=[['ديب 72%','#3a1b14','d'],['ميلك ناعمة','#7a4630','w'],['فستق وكراميل','#5a2e22','p'],['أبيض بالتوت','#f1e2cf','r'],['بندق برالين','#6a3a28','h'],['كراميل مالح','#8a5238','s']];
function tp(t,x,y){
 if(t=='d')return '<circle cx="'+(x-12)+'" cy="'+(y-10)+'" r="3.5" fill="#e8c46a"/><circle cx="'+(x+10)+'" cy="'+(y+2)+'" r="3" fill="#e8c46a"/><circle cx="'+(x-3)+'" cy="'+(y+16)+'" r="2.5" fill="#e8c46a"/>';
 if(t=='w')return '<path d="M'+(x-26)+' '+(y-8)+'q9 -11 17 0t17 0t17 0M'+(x-26)+' '+(y+10)+'q9 -11 17 0t17 0t17 0" fill="none" stroke="#f1d9b8" stroke-width="4" stroke-linecap="round"/>';
 if(t=='p')return '<rect x="'+(x-18)+'" y="'+(y-14)+'" width="10" height="7" rx="3" fill="#9db17c" transform="rotate(-20 '+x+' '+y+')"/><rect x="'+(x+4)+'" y="'+(y-6)+'" width="10" height="7" rx="3" fill="#b9cb98" transform="rotate(25 '+x+' '+y+')"/><rect x="'+(x-10)+'" y="'+(y+8)+'" width="10" height="7" rx="3" fill="#9db17c"/>';
 if(t=='r')return '<path d="M'+(x-28)+' '+(y-14)+'l56 28M'+(x-28)+' '+(y+4)+'l40 20M'+(x-10)+' '+(y-28)+'l38 19" stroke="#c2305a" stroke-width="4" stroke-linecap="round"/>';
 if(t=='h')return '<ellipse cx="'+x+'" cy="'+y+'" rx="16" ry="19" fill="#c99a3b"/><ellipse cx="'+(x-4)+'" cy="'+(y-5)+'" rx="6" ry="8" fill="#e0b866"/>';
 return '<path d="M'+(x-26)+' '+(y+14)+'L'+(x+10)+' '+(y-26)+'M'+(x-8)+' '+(y+26)+'L'+(x+28)+' '+(y-14)+'" stroke="#e8c46a" stroke-width="6" stroke-linecap="round"/>';
}
var xs=[70,180,290],ys=[75,175];
bar.innerHTML='<svg viewBox="0 0 360 250" aria-hidden="false"><rect x="6" y="6" width="348" height="238" rx="24" fill="#2a130e"/><rect x="16" y="16" width="328" height="218" rx="18" fill="none" stroke="#c99a3b" stroke-opacity=".5" stroke-width="2"/>'+PZ.map(function(z,i){var x=xs[i%3],y=ys[Math.floor(i/3)];return '<g class="pz" tabindex="0" role="button" data-i="'+i+'" aria-label="'+z[0]+'"><circle cx="'+x+'" cy="'+y+'" r="52" fill="#c99a3b" fill-opacity=".28"/><circle class="rg" cx="'+x+'" cy="'+y+'" r="56" fill="none" stroke="#e46b8e" stroke-width="4"/><circle cx="'+x+'" cy="'+y+'" r="44" fill="'+z[1]+'"/><ellipse cx="'+(x-15)+'" cy="'+(y-20)+'" rx="14" ry="7" fill="#fff" fill-opacity=".16" transform="rotate(-30 '+(x-15)+' '+(y-20)+')"/>'+tp(z[2],x,y)+'</g>'}).join('')+'</svg>';
bar.querySelectorAll('.pz').forEach(function(g){var go=function(){bar.querySelectorAll('.pz').forEach(function(o){o.classList.remove('on')});g.classList.add('on');cap.textContent=PZ[g.dataset.i][0]};g.onclick=go;g.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}});
function draw(){
 var cs=['الكل'].concat(PR.map(function(x){return x.c}).filter(function(c,i,a){return a.indexOf(c)===i}));
 document.getElementById('tabs').innerHTML=cs.map(function(c){return '<button class="tab" data-c="'+c+'" aria-pressed="'+(c===cat)+'">'+c+'</button>'}).join('');
 document.getElementById('grid').innerHTML=PR.filter(function(x){return cat==='الكل'||x.c===cat}).map(function(x){return '<div class="card"><div class="sw" style="background:linear-gradient(120deg,'+x.a+' 60%,'+x.b+')"></div><h3>'+x.n+'</h3><p>'+x.d+'</p><div class="row"><span class="pr">'+x.p+' ج.م</span><div class="qty"><button data-m="'+x.id+'" aria-label="إنقاص">−</button><b>'+(cart[x.id]||0)+'</b><button data-a="'+x.id+'" aria-label="زيادة">+</button></div></div></div>'}).join('');
 document.querySelectorAll('[data-c]').forEach(function(b){b.onclick=function(){cat=b.dataset.c;draw()}});
 document.querySelectorAll('[data-a]').forEach(function(b){b.onclick=function(){cart[b.dataset.a]=(cart[b.dataset.a]||0)+1;draw();sum()}});
 document.querySelectorAll('[data-m]').forEach(function(b){b.onclick=function(){var i=b.dataset.m;if(cart[i]){cart[i]--;if(!cart[i])delete cart[i]}draw();sum()}});
}
function sum(){
 var n=0,t=0,l=[];PR.forEach(function(x){var q=cart[x.id];if(q){n+=q;t+=q*x.p;l.push(x.n+' × '+q)}});
 var ob=document.getElementById('ob');ob.style.display=n?'block':'none';
 document.getElementById('os').textContent=n+' منتج — '+t.toLocaleString('ar-EG')+' ج.م';
 document.getElementById('ol').href='https://wa.me/'+WA+'?text='+encodeURIComponent('مرحبًا، أريد طلب:\n'+l.join('\n')+'\nالإجمالي: '+t+' ج.م');
}
var PK=[['ديب 72%','#c2305a'],['ميلك ناعمة','#2f6f8f'],['فستق وكراميل','#5c7a3a'],['أبيض بالتوت','#7a2f6b'],['بندق برالين','#a8541f']],pi=0;
function zz(top){var p='';for(var x=80;x<=280;x+=10){var o=(x/10)%2?8:0;p+=x+','+(top?52+o:290-o)+' '}return p+(top?'280,64 80,64':'280,278 80,278')}
function pk(i){
 var n=PK[i][0],c=PK[i][1];
 bar.innerHTML='<svg viewBox="0 0 360 310" role="img" aria-label="باكيت شوكولاتة دار الكاكاو نكهة '+n+'"><ellipse cx="180" cy="302" rx="112" ry="8" fill="#000" fill-opacity=".35"/><g transform="rotate(-4 180 160)">'+
 '<rect x="96" y="8" width="168" height="64" rx="5" fill="#4a2218"/><path d="M138 8V72M180 8V72M222 8V72" stroke="#2b120c" stroke-width="3"/><rect x="100" y="12" width="160" height="56" rx="4" fill="none" stroke="#6d3a2b" stroke-width="2"/>'+
 '<rect x="90" y="38" width="180" height="34" rx="4" fill="#d8b04e"/><path d="M96 46H264" stroke="#f2d98b" stroke-width="3" stroke-linecap="round"/>'+
 '<rect x="80" y="60" width="200" height="224" rx="4" fill="'+c+'"/>'+
 '<polygon points="'+zz(true)+'" fill="'+c+'"/><polygon points="'+zz(true)+'" fill="#000" fill-opacity=".18"/><polygon points="'+zz(false)+'" fill="'+c+'"/><polygon points="'+zz(false)+'" fill="#000" fill-opacity=".18"/>'+
 '<rect x="80" y="60" width="22" height="224" fill="#fff" fill-opacity=".12"/>'+
 '<ellipse cx="180" cy="98" rx="15" ry="10" fill="#3a1d17" transform="rotate(-25 180 98)"/><path d="M167 104q13 -12 26 -12" stroke="#c99a3b" stroke-width="2" fill="none"/>'+
 '<text x="180" y="150" text-anchor="middle" direction="rtl" font-family="Aref Ruqaa,serif" font-weight="700" font-size="38" fill="#fbeee4">دار الكاكاو</text>'+
 '<rect x="80" y="172" width="200" height="46" fill="#c99a3b"/><text x="180" y="203" text-anchor="middle" direction="rtl" font-family="Aref Ruqaa,serif" font-weight="700" font-size="24" fill="#3a1d17">'+n+'</text>'+
 '<text x="180" y="252" text-anchor="middle" direction="rtl" font-family="Tajawal,sans-serif" font-size="15" fill="#fbeee4">شوكولاتة مصنوعة على مهل · 100 جم</text></g></svg>';
 cap.textContent=n+' — اضغط على الباكيت لتغيير النكهة';
}
bar.setAttribute('role','button');bar.setAttribute('aria-label','باكيت شوكولاتة، اضغط لتغيير النكهة');bar.tabIndex=0;bar.style.cursor='pointer';
bar.onclick=function(){pi=(pi+1)%PK.length;pk(pi)};bar.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();bar.onclick()}};
pk(0);
draw();
