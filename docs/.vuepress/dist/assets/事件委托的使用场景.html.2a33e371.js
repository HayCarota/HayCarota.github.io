import{_ as e,o as i,c as l,d as n}from"./app.cbfd26a5.js";const a={},d=n(`<ul><li><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2></li><li>\u8BE6\u7EC6 <ul><li>\u573A\u666F\uFF1A <ul><li>\u7ED9\u9875\u9762\u7684\u6240\u6709\u7684a\u6807\u7B7E\u6DFB\u52A0click\u4E8B\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  document.addEventListener(&quot;click&quot;, function(e) {
      if (e.target.nodeName == &quot;A&quot;)
          console.log(&quot;a&quot;);
  }, false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F46\u662F\u8FD9\u4E9Ba\u6807\u7B7E\u53EF\u80FD\u5305\u542B\u4E00\u4E9B\u50CFspan\u3001img\u7B49\u5143\u7D20\uFF0C <ul><li>\u5982\u679C\u70B9\u51FB\u5230\u4E86\u8FD9\u4E9Ba\u6807\u7B7E\u4E2D\u7684\u5143\u7D20\uFF0C\u5C31\u4E0D\u4F1A\u89E6\u53D1click\u4E8B\u4EF6\uFF0C</li><li>\u56E0\u4E3A\u4E8B\u4EF6\u7ED1\u5B9A\u4E0A\u5728a\u6807\u7B7E\u5143\u7D20\u4E0A\uFF0C\u800C\u89E6\u53D1\u8FD9\u4E9B\u5185\u90E8\u7684\u5143\u7D20\u65F6\uFF0Ce.target\u6307\u5411\u7684\u662F\u89E6\u53D1click\u4E8B\u4EF6\u7684\u5143\u7D20\uFF08span\u3001img\u7B49\u5176\u4ED6\u5143\u7D20\uFF09\u3002</li></ul></li><li>\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E8B\u4EF6\u59D4\u6258\u6765\u5904\u7406\uFF0C <ul><li>\u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5728a\u6807\u7B7E\u7684\u5185\u90E8\u5143\u7D20\u4E0A\uFF0C</li><li>\u5F53\u70B9\u51FB\u5B83\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u9010\u7EA7\u5411\u4E0A\u67E5\u627E\uFF0C</li><li>\u76F4\u9053\u627E\u5230a\u6807\u7B7E\u4E3A\u6B62\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  document.addEventListener(&quot;click&quot;, function(e) {
      var node = e.target;
      while (node.parentNode.nodeName != &quot;BODY&quot;) {
          if (node.nodeName == &quot;A&quot;) {
              console.log(&quot;a&quot;);
              break;
          }
          node = node.parentNode;
      }
  }, false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u6CE8\u610F</li></ul>`,1),s=[d];function t(u,c){return i(),l("div",null,s)}var r=e(a,[["render",t],["__file","\u4E8B\u4EF6\u59D4\u6258\u7684\u4F7F\u7528\u573A\u666F.html.vue"]]);export{r as default};
