import{_ as i,o as e,c as l,d as n}from"./app.cbfd26a5.js";var s="/assets/\u62A5\u9519\u4FE1\u606F.24eb8029.png",a="/assets/\u62A5\u9519\u4FE1\u606F1.0b8d2773.png";const r={},t=n(`<ul><li><p>\u6982\u5FF5</p><ul><li>\u6267\u884C\u6808\uFF08Execution Stack\uFF09\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u8C03\u7528\u6808\uFF08Call Stack\uFF09\uFF0C\u662F\u4E00\u79CD\u540E\u8FDB\u5148\u51FA\uFF08LIFO\uFF0CLast In, First Out\uFF09\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u4E8E\u5B58\u50A8\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u4E2D\u521B\u5EFA\u7684\u6240\u6709\u6267\u884C\u4E0A\u4E0B\u6587\u3002</li><li>\u5728JavaScript\u4E2D\uFF0C\u5F53\u5F15\u64CE\u5F00\u59CB\u6267\u884C\u811A\u672C\u65F6\uFF0C <ul><li>\u5B83\u4F1A\u521B\u5EFA\u4E00\u4E2A \u5168\u5C40\u6267\u884C \u4E0A\u4E0B\u6587 \u5E76\u5C06\u5176 \u538B\u5165 \u6267\u884C\u6808\u4E2D\u3002</li><li>\u6BCF\u5F53\u5F15\u64CE\u9047\u5230\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u65F6\uFF0C\u5B83\u4F1A\u4E3A\u8BE5\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5E76\u5C06\u5176\u538B\u5165\u6267\u884C\u6808\u4E2D</li></ul></li></ul></li><li><p>\u8BE6\u7EC6</p><ul><li>\u53EF\u4EE5\u628A\u6267\u884C\u6808\u8BA4\u4E3A\u662F\u4E00\u4E2A\u5B58\u50A8\u51FD\u6570\u8C03\u7528\u7684\u6808\u7ED3\u6784\uFF0C\u9075\u5FAA\u5148\u8FDB\u540E\u51FA\u7684\u539F\u5219\u3002</li><li>\u5F53\u5F00\u59CB\u6267\u884C JS \u4EE3\u7801\u65F6\uFF0C\u6839\u636E\u5148\u8FDB\u540E\u51FA\u7684\u539F\u5219\uFF0C\u540E\u6267\u884C\u7684\u51FD\u6570\u4F1A\u5148\u5F39\u51FA\u6808\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0Cfoo \u51FD\u6570\u540E\u6267\u884C\uFF0C\u5F53\u6267\u884C\u5B8C\u6BD5\u540E\u5C31\u4ECE\u6808\u4E2D\u5F39\u51FA\u4E86\u3002</li><li>\u5E73\u65F6\u5728\u5F00\u53D1\u4E2D\uFF0C\u53EF\u4EE5\u5728\u62A5\u9519\u4E2D\u627E\u5230\u6267\u884C\u6808\u7684\u75D5\u8FF9\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function foo() {
  throw new Error(&#39;error&#39;)
  }
  function bar() {
  foo()
  }
  bar()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt=""></p><ul><li>\u53EF\u4EE5\u770B\u5230\u62A5\u9519\u5728 foo \u51FD\u6570\uFF0Cfoo \u51FD\u6570\u53C8\u662F\u5728 bar \u51FD\u6570\u4E2D\u8C03\u7528\u7684\u3002</li><li>\u5F53\u4F7F\u7528\u9012\u5F52\u65F6\uFF0C\u56E0\u4E3A\u6808\u53EF\u5B58\u653E\u7684\u51FD\u6570\u662F\u6709\u9650\u5236\u7684\uFF0C\u4E00\u65E6\u5B58\u653E\u4E86\u8FC7\u591A\u7684\u51FD\u6570\u4E14\u6CA1\u6709\u5F97\u5230\u91CA\u653E\u7684\u8BDD\uFF0C\u5C31\u4F1A\u51FA\u73B0\u7206\u6808\u7684\u95EE\u9898</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  function bar() {
  bar()
  }
  bar()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+'" alt=""></p></li><li><p>\u6CE8\u610F</p></li></ul>',1),d=[t];function c(u,o){return e(),l("div",null,d)}var m=i(r,[["render",c],["__file","\u4EC0\u4E48\u662F\u6267\u884C\u6808.html.vue"]]);export{m as default};
