import{_ as e,o as i,c as n,d as l}from"./app.cbfd26a5.js";const s={},r=l(`<ul><li>\u6982\u5FF5 <ul><li>Service Worker \u662F\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u80CC\u540E\u7684\u72EC\u7ACB\u7EBF\u7A0B\uFF0C\u4E00\u822C\u53EF\u4EE5\u7528\u6765\u5B9E\u73B0\u7F13\u5B58\u529F\u80FD\u3002 <ul><li>\u4F7F\u7528 Service Worker\u7684\u8BDD\uFF0C\u4F20\u8F93\u534F\u8BAE\u5FC5\u987B\u4E3A HTTPS\u3002\u56E0\u4E3A Service Worker \u4E2D\u6D89\u53CA\u5230\u8BF7\u6C42\u62E6\u622A\uFF0C\u6240\u4EE5\u5FC5\u987B\u4F7F\u7528 HTTPS \u534F\u8BAE\u6765\u4FDD\u969C\u5B89\u5168\u3002</li></ul></li></ul></li><li>\u8BE6\u7EC6 <ul><li>Service Worker \u5B9E\u73B0\u7F13\u5B58\u529F\u80FD\u4E00\u822C\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4\uFF1A <ul><li>\u9996\u5148\u9700\u8981\u5148\u6CE8\u518C Service Worker\uFF0C</li><li>\u7136\u540E\u76D1\u542C\u5230 install \u4E8B\u4EF6\u4EE5\u540E\u5C31\u53EF\u4EE5\u7F13\u5B58\u9700\u8981\u7684\u6587\u4EF6\uFF0C</li><li>\u90A3\u4E48\u5728\u4E0B\u6B21\u7528\u6237\u8BBF\u95EE\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u901A\u8FC7\u62E6\u622A\u8BF7\u6C42\u7684\u65B9\u5F0F\u67E5\u8BE2\u662F\u5426\u5B58\u5728\u7F13\u5B58\uFF0C\u5B58\u5728\u7F13\u5B58\u7684\u8BDD\u5C31\u53EF\u4EE5\u76F4\u63A5\u8BFB\u53D6\u7F13\u5B58\u6587\u4EF6\uFF0C\u5426\u5219\u5C31\u53BB\u8BF7\u6C42\u6570\u636E\u3002</li><li>\u4EE5\u4E0B\u662F\u8FD9\u4E2A\u6B65\u9AA4\u7684\u5B9E\u73B0\uFF1A</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // index.js
  if (navigator.serviceWorker) {
  navigator.serviceWorker
      .register(&#39;sw.js&#39;)
      .then(function(registration) {
      console.log(&#39;service worker \u6CE8\u518C\u6210\u529F&#39;)
      })
      .catch(function(err) {
      console.log(&#39;servcie worker \u6CE8\u518C\u5931\u8D25&#39;)
      })
  }
  // sw.js
  // \u76D1\u542C \`install\` \u4E8B\u4EF6\uFF0C\u56DE\u8C03\u4E2D\u7F13\u5B58\u6240\u9700\u6587\u4EF6
  self.addEventListener(&#39;install&#39;, e =&gt; {
  e.waitUntil(
      caches.open(&#39;my-cache&#39;).then(function(cache) {
      return cache.addAll([&#39;./index.html&#39;, &#39;./index.js&#39;])
      })
  )
  })
  // \u62E6\u622A\u6240\u6709\u8BF7\u6C42\u4E8B\u4EF6
  // \u5982\u679C\u7F13\u5B58\u4E2D\u5DF2\u7ECF\u6709\u8BF7\u6C42\u7684\u6570\u636E\u5C31\u76F4\u63A5\u7528\u7F13\u5B58\uFF0C\u5426\u5219\u53BB\u8BF7\u6C42\u6570\u636E
  self.addEventListener(&#39;fetch&#39;, e =&gt; {
  e.respondWith(
      caches.match(e.request).then(function(response) {
      if (response) {
          return response
      }
      console.log(&#39;fetch source&#39;)
      })
  )
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u6253\u5F00\u9875\u9762\uFF0C\u53EF\u4EE5\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u7684 Application \u770B\u5230 Service Worker \u5DF2\u7ECF\u542F\u52A8\u4E86\uFF1A
- ![](../../../../.vuepress/public/img/docs/front-end/computer-network/\u6D4F\u89C8\u5668\u539F\u7406/Service Worker \u5DF2\u7ECF\u542F\u52A8.png)
- \u5728 Cache \u4E2D\u4E5F\u53EF\u4EE5\u53D1\u73B0\u6240\u9700\u7684\u6587\u4EF6\u5DF2\u88AB\u7F13\u5B58\uFF1A
- ![](../../../../.vuepress/public/img/docs/front-end/computer-network/\u6D4F\u89C8\u5668\u539F\u7406/\u6587\u4EF6\u5DF2\u88AB\u7F13\u5B58.png)
</code></pre></li><li>\u6CE8\u610F</li></ul>`,1),c=[r];function d(v,a){return i(),n("div",null,c)}var u=e(s,[["render",d],["__file","\u5BF9Service Worker\u7684\u7406\u89E3.html.vue"]]);export{u as default};
