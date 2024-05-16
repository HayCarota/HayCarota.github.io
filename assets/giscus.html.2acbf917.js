import{_ as i,r as o,o as l,c,a as e,w as a,d as p,b as s,e as n}from"./app.1e4adebc.js";const u={},d=p('<p><a href="https://www.npmjs.com/package/vuepress-plugin-giscus/v/next" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-plugin-giscus/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/giscus" target="_blank"><img src="https://img.shields.io/badge/GitHub-vuepress--plugin--giscus-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p><code>vuepress-plugin-giscus@next</code> \u63D2\u4EF6\uFF1A\u5728 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> \u4E2D\u4F7F\u7528\u57FA\u4E8E <a href="https://docs.github.com/en/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> \u7684\u8BC4\u8BBA\u7CFB\u7EDF <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">Giscus</a>\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>',3),g=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"install"),n(` vuepress-plugin-giscus@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` vuepress-plugin-giscus@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(` vuepress-plugin-giscus@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),k=p(`<h2 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h2><p>\u9996\u5148\u4F60\u9700\u8981\uFF1A</p><ul><li>\u5EFA\u4E00\u4E2A\u516C\u5F00\u7684 Github \u4ED3\u5E93\u5E76<a href="https://docs.github.com/cn/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository" target="_blank" rel="noopener noreferrer">\u542F\u7528 Discussions</a></li><li>\u5B89\u88C5 <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus app</a>\uFF0C\u5728\u9009\u62E9\u4ED3\u5E93\u65F6\u81F3\u5C11\u8981\u628A\u4E0A\u8FF0\u4ED3\u5E93\u9009\u8FDB\u53BB</li><li>\u67E5\u770B <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus \u5B98\u7F51</a>\u5E76\u5728\u4E0A\u9762\u751F\u6210\u4F60\u7684 repo id\u3001category id \u4EE5\u53CA\u522B\u7684\u5FC5\u8981\u4FE1\u606F</li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u5728 <code>.vuepress/config.js</code> \u4E2D\u5F15\u5165\u8FD9\u4E2A\u63D2\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> giscusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vuepress-plugin-giscus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">giscusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&quot;[\u4ED3\u5E93]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5FC5\u987B\uFF0Cstring\uFF0C\u683C\u5F0F\uFF1Auser_name/repo_name</span>
      <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">&quot;[\u4ED3\u5E93 ID]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5FC5\u987B\uFF0Cstring\uFF0C\u5728 Giscus \u5B98\u7F51\u4E0A\u751F\u6210</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&quot;[discussion \u5206\u7C7B\u540D]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5FC5\u987B\uFF0Cstring</span>
      <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">&quot;[discussion \u5206\u7C7B ID]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5FC5\u987B\uFF0Cstring\uFF0C\u5728 Giscus \u5B98\u7F51\u4E0A\u751F\u6210</span>
      <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">&quot;[\u9875\u9762 &lt;-&gt; discussion \u6620\u5C04]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u53EF\u9009\uFF0Cstring\uFF0Cdefault=&quot;title&quot;</span>
      <span class="token literal-property property">reactionsEnabled</span><span class="token operator">:</span> <span class="token string">&quot;[\u662F\u5426\u542F\u7528 reaction]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u53EF\u9009\uFF0Cboolean\uFF0Cdefault=true</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&quot;[\u4E3B\u9898]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u9009\uFF0Cstring\uFF0Cdefault=&quot;light&quot;</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;[\u8BED\u8A00]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u53EF\u9009\uFF0Cstring\uFF0Cdefault=&quot;auto&quot;\uFF08\u8DDF\u968F\u7F51\u7AD9\u8BED\u8A00\uFF0C\u5982\u679C Giscus \u4E0D\u652F\u6301\u4F60\u7684\u7F51\u7AD9\u7684\u8BED\u8A00\uFF0C\u5219\u4F1A\u4F7F\u7528 &quot;en&quot;\uFF09</span>
      <span class="token literal-property property">lazyLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u53EF\u9009\uFF0Cboolean\uFF0Cdefault=false\uFF08\u5982\u679C\u8BBE\u4E3A true\uFF0CGiscus \u7684\u52A0\u8F7D\u5C06\u5EF6\u8FDF\u5230\u7528\u6237\u6EDA\u52A8\u5230\u8BC4\u8BBA\u5BB9\u5668\u9644\u8FD1\uFF09</span>
      <span class="token literal-property property">crossorigin</span><span class="token operator">:</span> <span class="token string">&quot;[crossorigin]&quot;</span>  <span class="token comment">// \u53EF\u9009\uFF0Cstring\uFF0Cdefault=&quot;anonymous&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><p>\u8FD9\u65F6 <code>Giscus</code> \u5C31\u5DF2\u7ECF\u88AB\u6CE8\u518C\u4E3A\u4E00\u4E2A Vue \u7EC4\u4EF6\u4E86\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 Vuepress \u4E2D\u4F7F\u7528\u5B83\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165 props \u6765\u5B9E\u65F6\u6539\u53D8 Giscus \u7684\u4E3B\u9898\u3001\u8BED\u8A00\u548C\u542F\u7528\u6216\u5173\u95ED reaction\uFF08<a href="https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events" target="_blank" rel="noopener noreferrer">\u5DE5\u4F5C\u539F\u7406</a>\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Giscus :theme=&quot;theme&quot; :lang=&quot;lang&quot; :reactionsEnabled=&quot;reactionsEnabled&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5F00\u6E90\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,11);function b(v,f){const t=o("CodeGroupItem"),r=o("CodeGroup");return l(),c("div",null,[d,e(r,null,{default:a(()=>[e(t,{title:"PNPM",active:""},{default:a(()=>[g]),_:1}),e(t,{title:"YARN",active:""},{default:a(()=>[m]),_:1}),e(t,{title:"NPM"},{default:a(()=>[h]),_:1})]),_:1}),k])}var _=i(u,[["render",b],["__file","giscus.html.vue"]]);export{_ as default};
