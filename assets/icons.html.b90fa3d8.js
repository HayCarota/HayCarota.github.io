import{_ as o,r as l,o as i,c,b as n,a,d as e,e as t}from"./app.1e4adebc.js";const p={},u=e('<p>Gungnir uses Vue icon component <code>oh-vue-icons</code> (my another project lol) for icon support. <code>oh-vue-icons</code> is for including inline SVG icons from different popular icon packs easily.</p><p>See <a href="https://github.com/Renovamen/oh-vue-icons" target="_blank" rel="noopener noreferrer">here</a> for documentation and other details of <code>oh-vue-icons</code>.</p><h2 id="import-icons" tabindex="-1"><a class="header-anchor" href="#import-icons" aria-hidden="true">#</a> Import Icons</h2><p><code>oh-vue-icons</code> supports tree-shaking, icons that are not imported will not be included in your site&#39;s bundle files. So you can only import the icons you need to reduce the bundle size.</p><p>Gungnir has already imported the following icons:</p>',5),r=n("code",null,"FaRegularUser",-1),d=t(": "),m=n("code",null,"FaRegularCalendar",-1),h=t(": "),_=n("code",null,"FaSun",-1),k=t(": "),v=n("code",null,"FaMoon",-1),f=t(": "),g=n("code",null,"FaMagic",-1),b=t(": "),q=n("code",null,"FaChevronLeft",-1),y=t(": "),F=n("code",null,"FaChevronRight",-1),w=t(": "),x=n("code",null,"FaChevronUp",-1),R=t(": "),C=n("code",null,"FaChevronDown",-1),j=t(": "),S=n("code",null,"FaListUl",-1),I=t(": "),L=n("code",null,"FaPencilAlt",-1),B=t(": "),G=n("code",null,"FaCircle",-1),T=t(": "),V=n("code",null,"FaGithubAlt",-1),N=t(": "),U=n("code",null,"FaLinkedinIn",-1),z=t(": "),M=n("code",null,"FaFacebookF",-1),O=t(": "),A=n("code",null,"FaTwitter",-1),E=t(": "),H=n("code",null,"FaEnvelope",-1),D=t(": "),P=n("code",null,"RiWeiboFill",-1),W=t(": "),Z=n("code",null,"RiZhihuLine",-1),J=t(": "),K=n("code",null,"RiRssFill",-1),Q=t(": "),X=n("code",null,"RiSearch2Line",-1),Y=t(": "),$=n("code",null,"RiTimerLine",-1),nn=t(": "),sn=n("code",null,"HiTranslate",-1),an=t(": "),tn=n("code",null,"BiLayoutSidebarInset",-1),en=t(": "),on=e(`<p>To import other icons, you may need to search for icons&#39; names <a href="https://oh-vue-icons.js.org" target="_blank" rel="noopener noreferrer">here</a> and globally import theme in your <code>.vuepress/client.js</code> file (create one if it dosen&#39;t exist):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .vuepress/client.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addIcons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;oh-vue-icons&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// import the icons you need</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OiGitCompare<span class="token punctuation">,</span> RiBook2Fill <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;oh-vue-icons/icons&quot;</span><span class="token punctuation">;</span>
<span class="token function">addIcons</span><span class="token punctuation">(</span>OiGitCompare<span class="token punctuation">,</span> RiBook2Fill<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or you can also locally import them in your custom components.</p><h2 id="use-icons" tabindex="-1"><a class="header-anchor" href="#use-icons" aria-hidden="true">#</a> Use Icons</h2><p>Then you can use these icons in Markdown or your custom components:</p>`,5),ln=t(),cn=e(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oi-git-compare<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ri-book-2-fill<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>oh-vue-icons</code> also supports many other features, like editting icon&#39;s color, size, animation, flip and so on. Here are some examples:</p>`,2),pn=t(),un=t(),rn=t(),dn=e(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oi-git-compare<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oi-git-compare<span class="token punctuation">&quot;</span></span> <span class="token attr-name">flip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oi-git-compare<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>orange<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oi-git-compare<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://oh-vue-icons.js.org/docs" target="_blank" rel="noopener noreferrer">documentation</a> of <code>oh-vue-icons</code> for more features and examples.</p>`,2);function mn(hn,_n){const s=l("v-icon");return i(),c("div",null,[u,n("ul",null,[n("li",null,[r,d,a(s,{name:"fa-regular-user"})]),n("li",null,[m,h,a(s,{name:"fa-regular-calendar"})]),n("li",null,[_,k,a(s,{name:"fa-sun"})]),n("li",null,[v,f,a(s,{name:"fa-moon"})]),n("li",null,[g,b,a(s,{name:"fa-magic"})]),n("li",null,[q,y,a(s,{name:"fa-chevron-left"})]),n("li",null,[F,w,a(s,{name:"fa-chevron-right"})]),n("li",null,[x,R,a(s,{name:"fa-chevron-up"})]),n("li",null,[C,j,a(s,{name:"fa-chevron-down"})]),n("li",null,[S,I,a(s,{name:"fa-list-ul"})]),n("li",null,[L,B,a(s,{name:"fa-pencil-alt"})]),n("li",null,[G,T,a(s,{name:"fa-circle"})]),n("li",null,[V,N,a(s,{name:"fa-github-alt"})]),n("li",null,[U,z,a(s,{name:"fa-linkedin-in"})]),n("li",null,[M,O,a(s,{name:"fa-facebook-f"})]),n("li",null,[A,E,a(s,{name:"fa-twitter"})]),n("li",null,[H,D,a(s,{name:"fa-envelope"})]),n("li",null,[P,W,a(s,{name:"ri-weibo-fill"})]),n("li",null,[Z,J,a(s,{name:"ri-zhihu-line"})]),n("li",null,[K,Q,a(s,{name:"ri-rss-fill"})]),n("li",null,[X,Y,a(s,{name:"ri-search-2-line"})]),n("li",null,[$,nn,a(s,{name:"ri-timer-line"})]),n("li",null,[sn,an,a(s,{name:"hi-translate"})]),n("li",null,[tn,en,a(s,{name:"bi-layout-sidebar-inset"})])]),on,a(s,{name:"oi-git-compare"}),ln,a(s,{name:"ri-book-2-fill"}),cn,a(s,{name:"oi-git-compare",scale:"2"}),pn,a(s,{name:"oi-git-compare",flip:"vertical"}),un,a(s,{name:"oi-git-compare",fill:"orange"}),rn,a(s,{name:"oi-git-compare",animation:"flash"}),dn])}var vn=o(p,[["render",mn],["__file","icons.html.vue"]]);export{vn as default};
