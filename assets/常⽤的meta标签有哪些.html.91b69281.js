import{_ as e,o as i,c as n,d as l}from"./app.7113da28.js";const s={},t=l(`<h2 id="\u5E38\u7528\u7684meta\u6807\u7B7E\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684meta\u6807\u7B7E\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u5E38\u2F64<strong>\u7684meta\u6807\u7B7E\u6709\u54EA\u4E9B</strong></h2><ul><li><p>\u6982\u5FF5</p><ul><li>meta \u6807\u7B7E\u7531 name \u548C content \u5C5E\u6027\u5B9A\u4E49\uFF0C\u7528\u6765\u63CF\u8FF0\u7F51\u9875\u6587\u6863\u7684\u5C5E\u6027</li><li>\u6BD4\u5982\u7F51\u9875\u7684\u4F5C\u8005\uFF0C\u7F51\u9875\u63CF\u8FF0\uFF0C\u5173\u952E\u8BCD\u7B49\uFF0C\u9664\u4E86HTTP\u6807\u51C6\u56FA\u5B9A\u4E86\u4E00\u4E9Bname\u4F5C\u4E3A\u5927\u5BB6\u4F7F\u7528\u7684\u5171\u8BC6\uFF0C\u5F00\u53D1\u8005\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49name\u3002</li></ul></li><li><p>\u8BE6\u7EC6\u5185\u5BB9</p><ul><li>\u5E38\u7528\u7684meta\u6807\u7B7E\uFF1A<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// charset, \u7528\u6765\u63CF\u8FF0HTML\u6587\u6863\u7F16\u7801\u7C7B\u578B 
&lt;meta charset=&quot;UTF-8&quot;&gt;

// keywords, \u9875\u9762\u5173\u952E\u8BCD
&lt;meta name=&quot;keywords&quot; content=&quot;your keywords&quot;&gt;

// description, \u9875\u9762\u63CF\u8FF0
&lt;meta name=&quot;description&quot; content=&quot;\u9875\u9762\u63CF\u8FF0\u5185\u5BB9&quot;&gt;

// refresh, \u9875\u9762\u91CD\u5B9A\u5411\u548C\u5237\u65B0
&lt;meta http-equiv=&quot;refresh&quot; content=&quot;0;url=&quot;&gt;

// viewport, \u9002\u914D\u79FB\u52A8\u7AEF\uFF0C\u63A7\u5236\u7A97\u53E3\u7684\u5927\u5C0F\u548C\u6BD4\u4F8B
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1,maximum-scale=1&quot;&gt;

- \u5176\u4E2D\uFF0Ccontent \u53C2\u6570\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A
- width viewport \uFF1A\u5BBD\u5EA6(\u6570\u503C/device-width)
- height viewport \uFF1A\u9AD8\u5EA6(\u6570\u503C/device-height)
- initial-scale \uFF1A\u521D\u59CB\u7F29\u653E\u6BD4\u4F8B
- maximum-scale \uFF1A\u6700\u5927\u7F29\u653E\u6BD4\u4F8B
- minimum-scale \uFF1A\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B
- user-scalable \uFF1A\u662F\u5426\u5141\u8BB8\u7528\u6237\u7F29\u653E ( yes/no\uFF09

// robots,\u641C\u7D22\u5F15\u64CE\u7D22\u5F15\u65B9\u5F0F
&lt;meta name=&quot;robots&quot; content=&quot;index,follow&quot;&gt;

- \u5176\u4E2D\uFF0Ccontent \u53C2\u6570\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A
all\uFF1A\u6587\u4EF6\u5C06\u88AB\u68C0\u7D22\uFF0C\u4E14\u9875\u9762\u4E0A\u7684\u94FE\u63A5\u53EF\u4EE5\u88AB\u67E5\u8BE2\uFF1B
\u25CF
none\uFF1A\u6587\u4EF6\u5C06\u4E0D\u88AB\u68C0\u7D22\uFF0C\u4E14\u9875\u9762\u4E0A\u7684\u94FE\u63A5\u4E0D\u53EF\u4EE5\u88AB\u67E5\u8BE2\uFF1B
\u25CF
index\uFF1A\u6587\u4EF6\u5C06\u88AB\u68C0\u7D22\uFF1B
\u25CF
follow\uFF1A\u9875\u9762\u4E0A\u7684\u94FE\u63A5\u53EF\u4EE5\u88AB\u67E5\u8BE2\uFF1B
\u25CF
noindex\uFF1A\u6587\u4EF6\u5C06\u4E0D\u88AB\u68C0\u7D22\uFF1B
\u25CF
nofollow\uFF1A\u9875\u9762\u4E0A\u7684\u94FE\u63A5\u4E0D\u53EF\u4EE5\u88AB\u67E5\u8BE2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u6CE8\u610F</p></li></ul>`,2),d=[t];function a(v,r){return i(),n("div",null,d)}var c=e(s,[["render",a],["__file","\u5E38\u2F64\u7684meta\u6807\u7B7E\u6709\u54EA\u4E9B.html.vue"]]);export{c as default};
