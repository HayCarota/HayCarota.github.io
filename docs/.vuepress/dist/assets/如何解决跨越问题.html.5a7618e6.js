import{_ as i,o as e,c as n,d as l}from"./app.cbfd26a5.js";const s={},d=l(`<ul><li><p>\u6982\u5FF5</p></li><li><p>\u8BE6\u7EC6</p><ul><li><strong>\uFF081\uFF09CORS</strong><ul><li><strong>CORS\u7684\u5B9A\u4E49\uFF1A</strong><ul><li>\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB(CORS) \u662F\u4E00\u79CD\u673A\u5236\uFF0C</li><li>\u5B83\u4F7F\u7528\u989D\u5916\u7684 HTTP \u5934\u6765\u544A\u8BC9\u6D4F\u89C8\u5668</li><li>\u8BA9\u8FD0\u884C\u5728\u4E00\u4E2A origin (domain)\u4E0A\u7684Web\u5E94\u7528\u88AB\u51C6\u8BB8\u8BBF\u95EE\u6765\u81EA\u4E0D\u540C\u6E90\u670D\u52A1\u5668\u4E0A\u7684\u6307\u5B9A\u7684\u8D44\u6E90\u3002</li><li>\u5F53\u4E00\u4E2A\u8D44\u6E90\u4ECE\u4E0E\u8BE5\u8D44\u6E90\u672C\u8EAB\u6240\u5728\u7684\u670D\u52A1\u5668\u4E0D\u540C\u7684\u57DF\u3001\u534F\u8BAE\u6216\u7AEF\u53E3\u8BF7\u6C42\u4E00\u4E2A\u8D44\u6E90\u65F6\uFF0C\u8D44\u6E90\u4F1A\u53D1\u8D77\u4E00\u4E2A\u8DE8\u57DFHTTP \u8BF7\u6C42\u3002</li></ul></li><li><strong>\u7528\u6CD5</strong><ul><li>CORS\u9700\u8981\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u540C\u65F6\u652F\u6301\uFF0C\u6574\u4E2ACORS\u8FC7\u7A0B\u90FD\u662F\u6D4F\u89C8\u5668\u5B8C\u6210\u7684\uFF0C\u65E0\u9700\u7528\u6237\u53C2\u4E0E\u3002</li><li>\u56E0\u6B64\u5B9E\u73B0CORS\u7684\u5173\u952E\u5C31\u662F\u670D\u52A1\u5668\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u5B9E\u73B0\u4E86CORS\u8BF7\u6C42\uFF0C\u5C31\u53EF\u4EE5\u8DE8\u6E90\u901A\u4FE1\u4E86\u3002</li></ul></li><li><strong>\u6D4F\u89C8\u5668\u5C06CORS\u5206\u4E3A\u7B80\u5355\u8BF7\u6C42\u548C\u975E\u7B80\u5355\u8BF7\u6C42</strong>\uFF1A <ul><li>\u7B80\u5355\u8BF7\u6C42\u4E0D\u4F1A\u89E6\u53D1CORS\u9884\u68C0\u8BF7\u6C42\u3002\u82E5\u8BE5\u8BF7\u6C42\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u4E2A\u6761\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u770B\u4F5C\u662F\u7B80\u5355\u8BF7\u6C42\uFF1A <ul><li>1\uFF09\u8BF7\u6C42\u65B9\u6CD5\u662F\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\u4E4B\u4E00\uFF1A <ul><li>HEAD</li><li>GET</li><li>POST</li></ul></li><li>2\uFF09HTTP\u7684\u5934\u4FE1\u606F\u4E0D\u8D85\u51FA\u4EE5\u4E0B\u51E0\u79CD\u5B57\u6BB5\uFF1A <ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Last-Event-ID</li><li>Content-Type\uFF1A <ul><li>\u53EA\u9650\u4E8E\u4E09\u4E2A\u503Capplication/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain</li></ul></li></ul></li><li>\u82E5\u4E0D\u6EE1\u8DB3\u4EE5\u4E0A\u6761\u4EF6\uFF0C\u5C31\u5C5E\u4E8E\u975E\u7B80\u5355\u8BF7\u6C42\u4E86\u3002</li></ul></li></ul></li><li><strong>\uFF081\uFF09\u7B80\u5355\u8BF7\u6C42\u8FC7\u7A0B\uFF1A</strong><ul><li>\u5BF9\u4E8E\u7B80\u5355\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u76F4\u63A5\u53D1\u51FACORS\u8BF7\u6C42\uFF0C <ul><li>\u5B83\u4F1A\u5728\u8BF7\u6C42\u7684\u5934\u4FE1\u606F\u4E2D\u589E\u52A0\u4E00\u4E2AOrign\u5B57\u6BB5\uFF0C</li><li>\u8BE5\u5B57\u6BB5\u7528\u6765\u8BF4\u660E\u672C\u6B21\u8BF7\u6C42\u6765\u81EA\u54EA\u4E2A\u6E90\uFF08\u534F\u8BAE+\u7AEF\u53E3+\u57DF\u540D\uFF09\uFF0C</li><li>\u670D\u52A1\u5668\u4F1A\u6839\u636E\u8FD9\u4E2A\u503C\u6765\u51B3\u5B9A\u662F\u5426\u540C\u610F\u8FD9\u6B21\u8BF7\u6C42\u3002</li><li>\u5982\u679COrign\u6307\u5B9A\u7684\u57DF\u540D\u5728\u8BB8\u53EF\u8303\u56F4\u4E4B\u5185\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u5C31\u4F1A\u591A\u51FA\u4EE5\u4E0B\u4FE1\u606F\u5934\uFF1A</li></ul></li></ul></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  Access-Control-Allow-Origin: http://api.bob.com  // \u548COrign\u4E00\u76F4
  Access-Control-Allow-Credentials: true   // \u8868\u793A\u662F\u5426\u5141\u8BB8\u53D1\u9001Cookie
  Access-Control-Expose-Headers: FooBar   // \u6307\u5B9A\u8FD4\u56DE\u5176\u4ED6\u5B57\u6BB5\u7684\u503C
  Content-Type: text/html; charset=utf-8   // \u8868\u793A\u6587\u6863\u7C7B\u578B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u5982\u679COrign\u6307\u5B9A\u7684\u57DF\u540D\u4E0D\u5728\u8BB8\u53EF\u8303\u56F4\u4E4B\u5185\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6B63\u5E38\u7684HTTP\u56DE\u5E94\uFF0C\u6D4F\u89C8\u5668\u53D1\u73B0\u6CA1\u6709\u4E0A\u9762\u7684Access-Control-Allow-Origin\u5934\u90E8\u4FE1\u606F\uFF0C\u5C31\u77E5\u9053\u51FA\u9519\u4E86\u3002
- \u8FD9\u4E2A\u9519\u8BEF\u65E0\u6CD5\u901A\u8FC7\u72B6\u6001\u7801\u8BC6\u522B\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u53EF\u80FD\u662F200\u3002
- \u5728\u7B80\u5355\u8BF7\u6C42\u4E2D\uFF0C\u5728\u670D\u52A1\u5668\u5185\uFF0C\u81F3\u5C11\u9700\u8981\u8BBE\u7F6E\u5B57\u6BB5\uFF1A**Access-Control-Allow-Origin**
</code></pre><ul><li><strong>\uFF082\uFF09\u975E\u7B80\u5355\u8BF7\u6C42\u8FC7\u7A0B</strong><ul><li>\u975E\u7B80\u5355\u8BF7\u6C42\u662F\u5BF9\u670D\u52A1\u5668\u6709\u7279\u6B8A\u8981\u6C42\u7684\u8BF7\u6C42\uFF0C <ul><li>\u6BD4\u5982\u8BF7\u6C42\u65B9\u6CD5\u4E3ADELETE\u6216\u8005PUT\u7B49\u3002</li></ul></li><li>\u975E\u7B80\u5355\u8BF7\u6C42\u7684CORS\u8BF7\u6C42\u4F1A\u5728\u6B63\u5F0F\u901A\u4FE1\u4E4B\u524D\u8FDB\u884C\u4E00\u6B21HTTP\u67E5\u8BE2\u8BF7\u6C42\uFF0C<strong>\u79F0\u4E3A\u9884\u68C0\u8BF7\u6C42\u3002</strong></li><li></li><li>\u6D4F\u89C8\u5668\u4F1A\u8BE2\u95EE\u670D\u52A1\u5668\uFF0C\u5F53\u524D\u6240\u5728\u7684\u7F51\u9875\u662F\u5426\u5728\u670D\u52A1\u5668\u5141\u8BB8\u8BBF\u95EE\u7684\u8303\u56F4\u5185\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9BHTTP\u8BF7\u6C42\u65B9\u5F0F\u548C\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C</li><li>\u53EA\u6709\u5F97\u5230\u80AF\u5B9A\u7684\u56DE\u590D\uFF0C\u624D\u4F1A\u8FDB\u884C\u6B63\u5F0F\u7684HTTP\u8BF7\u6C42\uFF0C\u5426\u5219\u5C31\u4F1A\u62A5\u9519\u3002</li><li><strong>\u9884\u68C0\u8BF7\u6C42\u4F7F\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5</strong><ul><li>\u662FOPTIONS\uFF0C\u8868\u793A\u8FD9\u4E2A\u8BF7\u6C42\u662F\u6765\u8BE2\u95EE\u7684\u3002</li><li>\u4ED6\u7684\u5934\u4FE1\u606F\u4E2D\u7684\u5173\u952E\u5B57\u6BB5\u662FOrign\uFF0C\u8868\u793A\u8BF7\u6C42\u6765\u81EA\u54EA\u4E2A\u6E90\u3002</li><li>\u9664\u6B64\u4E4B\u5916\uFF0C\u5934\u4FE1\u606F\u4E2D\u8FD8\u5305\u62EC\u4E24\u4E2A\u5B57\u6BB5\uFF1A <ul><li>Access-Control-Request-Method\uFF1A\u8BE5\u5B57\u6BB5\u662F\u5FC5\u987B\u7684\uFF0C\u7528\u6765\u5217\u51FA\u6D4F\u89C8\u5668\u7684CORS\u8BF7\u6C42\u4F1A\u7528\u5230\u54EA\u4E9BHTTP\u65B9\u6CD5\u3002</li><li>Access-Control-Request-Headers\uFF1A \u8BE5\u5B57\u6BB5\u662F\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u6307\u5B9A\u6D4F\u89C8\u5668CORS\u8BF7\u6C42\u4F1A\u989D\u5916\u53D1\u9001\u7684\u5934\u4FE1\u606F\u5B57\u6BB5\u3002</li></ul></li><li>\u670D\u52A1\u5668\u5728\u6536\u5230\u6D4F\u89C8\u5668\u7684\u9884\u68C0\u8BF7\u6C42\u4E4B\u540E\uFF0C\u4F1A\u6839\u636E\u5934\u4FE1\u606F\u7684\u4E09\u4E2A\u5B57\u6BB5\u6765\u8FDB\u884C\u5224\u65AD\uFF0C <ul><li>\u5982\u679C\u8FD4\u56DE\u7684\u5934\u4FE1\u606F\u5728\u4E2D\u6709Access-Control-Allow-Origin\u8FD9\u4E2A\u5B57\u6BB5\u5C31\u662F\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\uFF0C</li><li>\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u662F\u4E0D\u540C\u610F\u8FD9\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</li></ul></li></ul></li><li><strong>\u670D\u52A1\u5668\u56DE\u5E94\u7684CORS\u7684\u5B57\u6BB5\u5982\u4E0B\uFF1A</strong></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  Access-Control-Allow-Origin: http://api.bob.com  // \u5141\u8BB8\u8DE8\u57DF\u7684\u6E90\u5730\u5740
  Access-Control-Allow-Methods: GET, POST, PUT // \u670D\u52A1\u5668\u652F\u6301\u7684\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5
  Access-Control-Allow-Headers: X-Custom-Header  // \u670D\u52A1\u5668\u652F\u6301\u7684\u6240\u6709\u5934\u4FE1\u606F\u5B57\u6BB5
  Access-Control-Allow-Credentials: true   // \u8868\u793A\u662F\u5426\u5141\u8BB8\u53D1\u9001Cookie
  Access-Control-Max-Age: 1728000  // \u7528\u6765\u6307\u5B9A\u672C\u6B21\u9884\u68C0\u8BF7\u6C42\u7684\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u4E3A\u79D2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u53EA\u8981\u670D\u52A1\u5668\u901A\u8FC7\u4E86\u9884\u68C0\u8BF7\u6C42\uFF0C\u5728\u4EE5\u540E\u6BCF\u6B21\u7684CORS\u8BF7\u6C42\u90FD\u4F1A\u81EA\u5E26\u4E00\u4E2AOrigin\u5934\u4FE1\u606F\u5B57\u6BB5\u3002
  - \u670D\u52A1\u5668\u7684\u56DE\u5E94\uFF0C\u4E5F\u90FD\u4F1A\u6709\u4E00\u4E2AAccess-Control-Allow-Origin\u5934\u4FE1\u606F\u5B57\u6BB5\u3002
- **\u5728\u975E\u7B80\u5355\u8BF7\u6C42\u4E2D\uFF0C\u81F3\u5C11\u9700\u8981\u8BBE\u7F6E\u4EE5\u4E0B\u5B57\u6BB5\uFF1A**
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &#39;Access-Control-Allow-Origin&#39;  
  &#39;Access-Control-Allow-Methods&#39;
  &#39;Access-Control-Allow-Headers&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- **\u51CF\u5C11OPTIONS\u8BF7\u6C42\u6B21\u6570\uFF1A**
  - OPTIONS\u8BF7\u6C42\u6B21\u6570\u8FC7\u591A\u5C31\u4F1A\u635F\u8017\u9875\u9762\u52A0\u8F7D\u7684\u6027\u80FD\uFF0C\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u5EA6\u3002
  - \u6240\u4EE5\u5C3D\u91CF\u8981\u51CF\u5C11OPTIONS\u8BF7\u6C42\u6B21\u6570\uFF0C
  - \u53EF\u4EE5\u540E\u7AEF\u5728\u8BF7\u6C42\u7684\u8FD4\u56DE\u5934\u90E8\u6DFB\u52A0\uFF1AAccess-Control-Max-Age\uFF1Anumber\u3002\u5B83\u8868\u793A\u9884\u68C0\u8BF7\u6C42\u7684\u8FD4\u56DE\u7ED3\u679C\u53EF\u4EE5\u88AB\u7F13\u5B58\u591A\u4E45\uFF0C\u5355\u4F4D\u662F\u79D2\u3002\u8BE5\u5B57\u6BB5\u53EA\u5BF9\u5B8C\u5168\u4E00\u6837\u7684URL\u7684\u7F13\u5B58\u8BBE\u7F6E\u751F\u6548\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u4E86\u7F13\u5B58\u65F6\u95F4\uFF0C\u5728\u8FD9\u4E2A\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u518D\u6B21\u53D1\u9001\u8BF7\u6C42\u5C31\u4E0D\u9700\u8981\u8FDB\u884C\u9884\u68C0\u8BF7\u6C42\u4E86\u3002
</code></pre><ul><li><strong>CORS\u4E2DCookie\u76F8\u5173\u95EE\u9898\uFF1A</strong><ul><li>\u5728CORS\u8BF7\u6C42\u4E2D\uFF0C\u5982\u679C\u60F3\u8981\u4F20\u9012Cookie\uFF0C\u5C31\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u4E09\u4E2A\u6761\u4EF6\uFF1A <ul><li>\u5728\u8BF7\u6C42\u4E2D\u8BBE\u7F6E <strong>withCredentials</strong><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5728\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u662F\u4E0D\u5E26 cookie \u7684\u3002\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E withCredentials \u6765\u8FDB\u884C\u4F20\u9012 cookie.</li></ul></li></ul></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // \u539F\u751F xml \u7684\u8BBE\u7F6E\u65B9\u5F0F
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  // axios \u8BBE\u7F6E\u65B9\u5F0F
  axios.defaults.withCredentials = true;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>  - Access-Control-Allow-Credentials \u8BBE\u7F6E\u4E3A true
  - Access-Control-Allow-Origin \u8BBE\u7F6E\u4E3A\u975E *****
</code></pre><ul><li><strong>\uFF082\uFF09JSONP</strong><ul><li><strong>jsonp\u7684\u539F\u7406</strong><ul><li>\u5C31\u662F\u5229\u7528&lt; script&gt;\u6807\u7B7E\u6CA1\u6709\u8DE8\u57DF\u9650\u5236\uFF0C</li><li>\u901A\u8FC7&lt; script&gt;\u6807\u7B7Esrc\u5C5E\u6027\uFF0C\u53D1\u9001\u5E26\u6709callback\u53C2\u6570\u7684GET\u8BF7\u6C42\uFF0C</li><li>\u670D\u52A1\u7AEF\u5C06\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u62FC\u51D1\u5230callback\u51FD\u6570\u4E2D\uFF0C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C</li><li>\u6D4F\u89C8\u5668\u89E3\u6790\u6267\u884C\uFF0C\u4ECE\u800C\u524D\u7AEF\u62FF\u5230callback\u51FD\u6570\u8FD4\u56DE\u7684\u6570\u636E\u3002</li></ul></li><li><strong>1\uFF09\u539F\u751FJS\u5B9E\u73B0\uFF1A</strong></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;script&gt;
      var script = document.createElement(&#39;script&#39;);
      script.type = &#39;text/javascript&#39;;
      // \u4F20\u53C2\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u540D\u7ED9\u540E\u7AEF\uFF0C\u65B9\u4FBF\u540E\u7AEF\u8FD4\u56DE\u65F6\u6267\u884C\u8FD9\u4E2A\u5728\u524D\u7AEF\u5B9A\u4E49\u7684\u56DE\u8C03\u51FD\u6570
      script.src = &#39;http://www.domain2.com:8080/login?user=admin&amp;callback=handleCallback&#39;;
      document.head.appendChild(script);
      // \u56DE\u8C03\u6267\u884C\u51FD\u6570
      function handleCallback(res) {
          alert(JSON.stringify(res));
      }
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u670D\u52A1\u7AEF\u8FD4\u56DE\u5982\u4E0B\uFF08\u8FD4\u56DE\u65F6\u5373\u6267\u884C\u5168\u5C40\u51FD\u6570\uFF09\uFF1A</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  handleCallback({&quot;success&quot;: true, &quot;user&quot;: &quot;admin&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>2\uFF09Vue axios\u5B9E\u73B0\uFF1A</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  this.$http = axios;
  this.$http.jsonp(&#39;http://www.domain2.com:8080/login&#39;, {
      params: {},
      jsonp: &#39;handleCallback&#39;
  }).then((res) =&gt; {
      console.log(res); 
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u540E\u7AEFnode.js\u4EE3\u7801\uFF1A</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var querystring = require(&#39;querystring&#39;);
  var http = require(&#39;http&#39;);
  var server = http.createServer();
  server.on(&#39;request&#39;, function(req, res) {
      var params = querystring.parse(req.url.split(&#39;?&#39;)[1]);
      var fn = params.callback;
      // jsonp\u8FD4\u56DE\u8BBE\u7F6E
      res.writeHead(200, { &#39;Content-Type&#39;: &#39;text/javascript&#39; });
      res.write(fn + &#39;(&#39; + JSON.stringify(params) + &#39;)&#39;);
      res.end();
  });
  server.listen(&#39;8080&#39;);
  console.log(&#39;Server is running at port 8080...&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>JSONP\u7684\u7F3A\u70B9\uFF1A</strong><ul><li>\u5177\u6709\u5C40\u9650\u6027\uFF0C \u4EC5\u652F\u6301get\u65B9\u6CD5</li><li>\u4E0D\u5B89\u5168\uFF0C\u53EF\u80FD\u4F1A\u906D\u53D7XSS\u653B\u51FB</li></ul></li><li><strong>\uFF083\uFF09postMessage \u8DE8\u57DF</strong><ul><li>postMessage\u662FHTML5 XMLHttpRequest Level 2\u4E2D\u7684API\uFF0C\u4E14\u662F\u4E3A\u6570\u4E0D\u591A\u53EF\u4EE5\u8DE8\u57DF\u64CD\u4F5C\u7684window\u5C5E\u6027\u4E4B\u4E00\uFF0C</li><li><strong>\u5B83\u53EF\u7528\u4E8E\u89E3\u51B3\u4EE5\u4E0B\u65B9\u9762\u7684\u95EE\u9898\uFF1A</strong><ul><li>\u9875\u9762\u548C\u5176\u6253\u5F00\u7684\u65B0\u7A97\u53E3\u7684\u6570\u636E\u4F20\u9012</li><li>\u591A\u7A97\u53E3\u4E4B\u95F4\u6D88\u606F\u4F20\u9012</li><li>\u9875\u9762\u4E0E\u5D4C\u5957\u7684iframe\u6D88\u606F\u4F20\u9012</li><li>\u4E0A\u9762\u4E09\u4E2A\u573A\u666F\u7684\u8DE8\u57DF\u6570\u636E\u4F20\u9012</li></ul></li><li>**\u7528\u6CD5\uFF1A**postMessage(data,origin)\u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A <ul><li>data\uFF1A <ul><li>html5\u89C4\u8303\u652F\u6301\u4EFB\u610F\u57FA\u672C\u7C7B\u578B\u6216\u53EF\u590D\u5236\u7684\u5BF9\u8C61\uFF0C\u4F46\u90E8\u5206\u6D4F\u89C8\u5668\u53EA\u652F\u6301\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u4F20\u53C2\u65F6\u6700\u597D\u7528JSON.stringify()\u5E8F\u5217\u5316\u3002</li></ul></li><li>origin\uFF1A <ul><li>\u534F\u8BAE+\u4E3B\u673A+\u7AEF\u53E3\u53F7\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A&quot;*&quot;\uFF0C\u8868\u793A\u53EF\u4EE5\u4F20\u9012\u7ED9\u4EFB\u610F\u7A97\u53E3\uFF0C\u5982\u679C\u8981\u6307\u5B9A\u548C\u5F53\u524D\u7A97\u53E3\u540C\u6E90\u7684\u8BDD\u8BBE\u7F6E\u4E3A&quot;/&quot;\u3002</li></ul></li></ul></li><li><strong>1\uFF09a.html\uFF1A</strong>(domain1.com/a.html)</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;iframe id=&quot;iframe&quot; src=&quot;http://www.domain2.com/b.html&quot; style=&quot;display:none;&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;       
      var iframe = document.getElementById(&#39;iframe&#39;);
      iframe.onload = function() {
          var data = {
              name: &#39;aym&#39;
          };
          // \u5411domain2\u4F20\u9001\u8DE8\u57DF\u6570\u636E
          iframe.contentWindow.postMessage(JSON.stringify(data), &#39;http://www.domain2.com&#39;);
      };
      // \u63A5\u53D7domain2\u8FD4\u56DE\u6570\u636E
      window.addEventListener(&#39;message&#39;, function(e) {
          alert(&#39;data from domain2 ---&gt; &#39; + e.data);
      }, false);
  &lt;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>2\uFF09b.html\uFF1A</strong>(domain2.com/b.html)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;script&gt;
      // \u63A5\u6536domain1\u7684\u6570\u636E
      window.addEventListener(&#39;message&#39;, function(e) {
          alert(&#39;data from domain1 ---&gt; &#39; + e.data);
          var data = JSON.parse(e.data);
          if (data) {
              data.number = 16;
              // \u5904\u7406\u540E\u518D\u53D1\u56DEdomain1
              window.parent.postMessage(JSON.stringify(data), &#39;http://www.domain1.com&#39;);
          }
      }, false);
  &lt;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\uFF084\uFF09nginx\u4EE3\u7406\u8DE8\u57DF</strong><ul><li>nginx\u4EE3\u7406\u8DE8\u57DF\uFF0C\u5B9E\u8D28\u548CCORS\u8DE8\u57DF\u539F\u7406\u4E00\u6837\uFF0C <ul><li>\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E\u8BF7\u6C42\u54CD\u5E94\u5934Access-Control-Allow-Origin\u2026\u7B49\u5B57\u6BB5\u3002</li></ul></li><li><strong>1\uFF09nginx\u914D\u7F6E\u89E3\u51B3iconfont\u8DE8\u57DF</strong></li><li>\u6D4F\u89C8\u5668\u8DE8\u57DF\u8BBF\u95EEjs\u3001css\u3001img\u7B49\u5E38\u89C4\u9759\u6001\u8D44\u6E90\u88AB\u540C\u6E90\u7B56\u7565\u8BB8\u53EF\uFF0C\u4F46iconfont\u5B57\u4F53\u6587\u4EF6(eot|otf|ttf|woff|svg)\u4F8B\u5916\uFF0C\u6B64\u65F6\u53EF\u5728nginx\u7684\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668\u4E2D\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E\u3002</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  location / {
  add_header Access-Control-Allow-Origin *;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>2\uFF09nginx\u53CD\u5411\u4EE3\u7406\u63A5\u53E3\u8DE8\u57DF</strong><ul><li>\u8DE8\u57DF\u95EE\u9898\uFF1A <ul><li>\u540C\u6E90\u7B56\u7565\u4EC5\u662F\u9488\u5BF9\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u7B56\u7565\u3002\u670D\u52A1\u5668\u7AEF\u8C03\u7528HTTP\u63A5\u53E3\u53EA\u662F\u4F7F\u7528HTTP\u534F\u8BAE\uFF0C\u4E0D\u9700\u8981\u540C\u6E90\u7B56\u7565\uFF0C\u4E5F\u5C31\u4E0D\u5B58\u5728\u8DE8\u57DF\u95EE\u9898\u3002</li></ul></li><li>\u5B9E\u73B0\u601D\u8DEF\uFF1A <ul><li>\u901A\u8FC7Nginx\u914D\u7F6E\u4E00\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\u57DF\u540D\u4E0Edomain1\u76F8\u540C\uFF0C\u7AEF\u53E3\u4E0D\u540C\uFF09\u505A\u8DF3\u677F\u673A\uFF0C\u53CD\u5411\u4EE3\u7406\u8BBF\u95EEdomain2\u63A5\u53E3\uFF0C\u5E76\u4E14\u53EF\u4EE5\u987A\u4FBF\u4FEE\u6539cookie\u4E2Ddomain\u4FE1\u606F\uFF0C\u65B9\u4FBF\u5F53\u524D\u57DFcookie\u5199\u5165\uFF0C\u5B9E\u73B0\u8DE8\u57DF\u8BBF\u95EE\u3002</li></ul></li><li>nginx\u5177\u4F53\u914D\u7F6E\uFF1A</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  #proxy\u670D\u52A1\u5668
  server {
      listen       81;
      server_name  www.domain1.com;
      location / {
          proxy_pass   http://www.domain2.com:8080;  #\u53CD\u5411\u4EE3\u7406
          proxy_cookie_domain www.domain2.com www.domain1.com; #\u4FEE\u6539cookie\u91CC\u57DF\u540D
          index  index.html index.htm;
          # \u5F53\u7528webpack-dev-server\u7B49\u4E2D\u95F4\u4EF6\u4EE3\u7406\u63A5\u53E3\u8BBF\u95EEnignx\u65F6\uFF0C\u6B64\u65F6\u65E0\u6D4F\u89C8\u5668\u53C2\u4E0E\uFF0C\u6545\u6CA1\u6709\u540C\u6E90\u9650\u5236\uFF0C\u4E0B\u9762\u7684\u8DE8\u57DF\u914D\u7F6E\u53EF\u4E0D\u542F\u7528
          add_header Access-Control-Allow-Origin http://www.domain1.com;  #\u5F53\u524D\u7AEF\u53EA\u8DE8\u57DF\u4E0D\u5E26cookie\u65F6\uFF0C\u53EF\u4E3A*
          add_header Access-Control-Allow-Credentials true;
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\uFF085\uFF09nodejs \u4E2D\u95F4\u4EF6\u4EE3\u7406\u8DE8\u57DF</strong><ul><li>node\u4E2D\u95F4\u4EF6\u5B9E\u73B0\u8DE8\u57DF\u4EE3\u7406\uFF0C</li><li><strong>\u539F\u7406</strong><ul><li>\u5927\u81F4\u4E0Enginx\u76F8\u540C\uFF0C\u90FD\u662F\u901A\u8FC7\u542F\u4E00\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5B9E\u73B0\u6570\u636E\u7684\u8F6C\u53D1\uFF0C</li><li>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6EcookieDomainRewrite\u53C2\u6570\u4FEE\u6539\u54CD\u5E94\u5934\u4E2Dcookie\u4E2D\u57DF\u540D\uFF0C\u5B9E\u73B0\u5F53\u524D\u57DF\u7684cookie\u5199\u5165\uFF0C\u65B9\u4FBF\u63A5\u53E3\u767B\u5F55\u8BA4\u8BC1\u3002</li></ul></li><li><strong>1\uFF09\u975Evue\u6846\u67B6\u7684\u8DE8\u57DF</strong><ul><li>\u4F7F\u7528node + express + http-proxy-middleware\u642D\u5EFA\u4E00\u4E2Aproxy\u670D\u52A1\u5668\u3002</li><li>\u524D\u7AEF\u4EE3\u7801\uFF1A</li></ul></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var xhr = new XMLHttpRequest();
  // \u524D\u7AEF\u5F00\u5173\uFF1A\u6D4F\u89C8\u5668\u662F\u5426\u8BFB\u5199cookie
  xhr.withCredentials = true;
  // \u8BBF\u95EEhttp-proxy-middleware\u4EE3\u7406\u670D\u52A1\u5668
  xhr.open(&#39;get&#39;, &#39;http://www.domain1.com:3000/login?user=admin&#39;, true);
  xhr.send();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u4E2D\u95F4\u4EF6\u670D\u52A1\u5668\u4EE3\u7801\uFF1A
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var express = require(&#39;express&#39;);
  var proxy = require(&#39;http-proxy-middleware&#39;);
  var app = express();
  app.use(&#39;/&#39;, proxy({
      // \u4EE3\u7406\u8DE8\u57DF\u76EE\u6807\u63A5\u53E3
      target: &#39;http://www.domain2.com:8080&#39;,
      changeOrigin: true,
      // \u4FEE\u6539\u54CD\u5E94\u5934\u4FE1\u606F\uFF0C\u5B9E\u73B0\u8DE8\u57DF\u5E76\u5141\u8BB8\u5E26cookie
      onProxyRes: function(proxyRes, req, res) {
          res.header(&#39;Access-Control-Allow-Origin&#39;, &#39;http://www.domain1.com&#39;);
          res.header(&#39;Access-Control-Allow-Credentials&#39;, &#39;true&#39;);
      },
      // \u4FEE\u6539\u54CD\u5E94\u4FE1\u606F\u4E2D\u7684cookie\u57DF\u540D
      cookieDomainRewrite: &#39;www.domain1.com&#39;  // \u53EF\u4EE5\u4E3Afalse\uFF0C\u8868\u793A\u4E0D\u4FEE\u6539
  }));
  app.listen(3000);
  console.log(&#39;Proxy server is listen at port 3000...&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>2\uFF09vue\u6846\u67B6\u7684\u8DE8\u57DF</strong><ul><li>node + vue + webpack + webpack-dev-server\u642D\u5EFA\u7684\u9879\u76EE\uFF0C\u8DE8\u57DF\u8BF7\u6C42\u63A5\u53E3\uFF0C\u76F4\u63A5\u4FEE\u6539webpack.config.js\u914D\u7F6E\u3002\u5F00\u53D1\u73AF\u5883\u4E0B\uFF0Cvue\u6E32\u67D3\u670D\u52A1\u548C\u63A5\u53E3\u4EE3\u7406\u670D\u52A1\u90FD\u662Fwebpack-dev-server\u540C\u4E00\u4E2A\uFF0C\u6240\u4EE5\u9875\u9762\u4E0E\u4EE3\u7406\u63A5\u53E3\u4E4B\u95F4\u4E0D\u518D\u8DE8\u57DF\u3002</li><li><strong>webpack.config.js\u90E8\u5206\u914D\u7F6E\uFF1A</strong></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    module.exports = {
    entry: {},
    module: {},
    ...
    devServer: {
        historyApiFallback: true,
        proxy: [{
            context: &#39;/login&#39;,
            target: &#39;http://www.domain2.com:8080&#39;,  // \u4EE3\u7406\u8DE8\u57DF\u76EE\u6807\u63A5\u53E3
            changeOrigin: true,
            secure: false,  // \u5F53\u4EE3\u7406\u67D0\u4E9Bhttps\u670D\u52A1\u62A5\u9519\u65F6\u7528
            cookieDomainRewrite: &#39;www.domain1.com&#39;  // \u53EF\u4EE5\u4E3Afalse\uFF0C\u8868\u793A\u4E0D\u4FEE\u6539
        }],
        noInfo: true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\uFF086\uFF09document.domain + iframe\u8DE8\u57DF</strong><ul><li>\u6B64\u65B9\u6848\u4EC5\u9650\u4E3B\u57DF\u76F8\u540C\uFF0C\u5B50\u57DF\u4E0D\u540C\u7684\u8DE8\u57DF\u5E94\u7528\u573A\u666F\u3002</li><li><strong>\u5B9E\u73B0\u539F\u7406\uFF1A</strong><ul><li>\u4E24\u4E2A\u9875\u9762\u90FD\u901A\u8FC7js\u5F3A\u5236\u8BBE\u7F6Edocument.domain\u4E3A\u57FA\u7840\u4E3B\u57DF\uFF0C\u5C31\u5B9E\u73B0\u4E86\u540C\u57DF\u3002</li></ul></li><li><strong>1\uFF09\u7236\u7A97\u53E3\uFF1A</strong>(domain.com/a.html)</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;iframe id=&quot;iframe&quot; src=&quot;http://child.domain.com/b.html&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;
      document.domain = &#39;domain.com&#39;;
      var user = &#39;admin&#39;;
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>1\uFF09\u5B50\u7A97\u53E3\uFF1A</strong>(child.domain.com/a.html)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;script&gt;
      document.domain = &#39;domain.com&#39;;
      // \u83B7\u53D6\u7236\u7A97\u53E3\u4E2D\u53D8\u91CF
      console.log(&#39;get js data from parent ---&gt; &#39; + window.parent.user);
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\uFF087\uFF09location.hash + iframe\u8DE8\u57DF</strong><ul><li><strong>\u5B9E\u73B0\u539F\u7406\uFF1A</strong><ul><li>a\u6B32\u4E0Eb\u8DE8\u57DF\u76F8\u4E92\u901A\u4FE1\uFF0C\u901A\u8FC7\u4E2D\u95F4\u9875c\u6765\u5B9E\u73B0\u3002</li><li>\u4E09\u4E2A\u9875\u9762\uFF0C\u4E0D\u540C\u57DF\u4E4B\u95F4\u5229\u7528iframe\u7684location.hash\u4F20\u503C\uFF0C\u76F8\u540C\u57DF\u4E4B\u95F4\u76F4\u63A5js\u8BBF\u95EE\u6765\u901A\u4FE1\u3002</li></ul></li><li><strong>\u5177\u4F53\u5B9E\u73B0\uFF1A</strong><ul><li>A\u57DF\uFF1Aa.html -&gt; B\u57DF\uFF1Ab.html -&gt; A\u57DF\uFF1Ac.html\uFF0C</li><li>a\u4E0Eb\u4E0D\u540C\u57DF\u53EA\u80FD\u901A\u8FC7hash\u503C\u5355\u5411\u901A\u4FE1\uFF0C</li><li>b\u4E0Ec\u4E5F\u4E0D\u540C\u57DF\u4E5F\u53EA\u80FD\u5355\u5411\u901A\u4FE1\uFF0C</li><li>\u4F46c\u4E0Ea\u540C\u57DF\uFF0C\u6240\u4EE5c\u53EF\u901A\u8FC7parent.parent\u8BBF\u95EEa\u9875\u9762\u6240\u6709\u5BF9\u8C61\u3002</li></ul></li><li><strong>1\uFF09a.html\uFF1A</strong>(domain1.com/a.html)</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;iframe id=&quot;iframe&quot; src=&quot;http://www.domain2.com/b.html&quot; style=&quot;display:none;&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;
      var iframe = document.getElementById(&#39;iframe&#39;);
      // \u5411b.html\u4F20hash\u503C
      setTimeout(function() {
          iframe.src = iframe.src + &#39;#user=admin&#39;;
      }, 1000);
      
      // \u5F00\u653E\u7ED9\u540C\u57DFc.html\u7684\u56DE\u8C03\u65B9\u6CD5
      function onCallback(res) {
          alert(&#39;data from c.html ---&gt; &#39; + res);
      }
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>2\uFF09b.html\uFF1A</strong>(.domain2.com/b.html)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;iframe id=&quot;iframe&quot; src=&quot;http://www.domain1.com/c.html&quot; style=&quot;display:none;&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;
      var iframe = document.getElementById(&#39;iframe&#39;);
      // \u76D1\u542Ca.html\u4F20\u6765\u7684hash\u503C\uFF0C\u518D\u4F20\u7ED9c.html
      window.onhashchange = function () {
          iframe.src = iframe.src + location.hash;
      };
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>3\uFF09c.html\uFF1A</strong>(http://www.domain1.com/c.html)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;script&gt;
      // \u76D1\u542Cb.html\u4F20\u6765\u7684hash\u503C
      window.onhashchange = function () {
          // \u518D\u901A\u8FC7\u64CD\u4F5C\u540C\u57DFa.html\u7684js\u56DE\u8C03\uFF0C\u5C06\u7ED3\u679C\u4F20\u56DE
          window.parent.parent.onCallback(&#39;hello: &#39; + location.hash.replace(&#39;#user=&#39;, &#39;&#39;));
      };
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\uFF088\uFF09window.name + iframe\u8DE8\u57DF</strong><ul><li>window.name\u5C5E\u6027\u7684\u72EC\u7279\u4E4B\u5904\uFF1A <ul><li>name\u503C\u5728\u4E0D\u540C\u7684\u9875\u9762\uFF08\u751A\u81F3\u4E0D\u540C\u57DF\u540D\uFF09\u52A0\u8F7D\u540E\u4F9D\u65E7\u5B58\u5728\uFF0C\u5E76\u4E14\u53EF\u4EE5\u652F\u6301\u975E\u5E38\u957F\u7684 name \u503C\uFF082MB\uFF09\u3002</li></ul></li><li><strong>1\uFF09a.html\uFF1A</strong>(domain1.com/a.html)</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var proxy = function(url, callback) {
      var state = 0;
      var iframe = document.createElement(&#39;iframe&#39;);
      // \u52A0\u8F7D\u8DE8\u57DF\u9875\u9762
      iframe.src = url;
      // onload\u4E8B\u4EF6\u4F1A\u89E6\u53D12\u6B21\uFF0C\u7B2C1\u6B21\u52A0\u8F7D\u8DE8\u57DF\u9875\uFF0C\u5E76\u7559\u5B58\u6570\u636E\u4E8Ewindow.name
      iframe.onload = function() {
          if (state === 1) {
              // \u7B2C2\u6B21onload(\u540C\u57DFproxy\u9875)\u6210\u529F\u540E\uFF0C\u8BFB\u53D6\u540C\u57DFwindow.name\u4E2D\u6570\u636E
              callback(iframe.contentWindow.name);
              destoryFrame();
          } else if (state === 0) {
              // \u7B2C1\u6B21onload(\u8DE8\u57DF\u9875)\u6210\u529F\u540E\uFF0C\u5207\u6362\u5230\u540C\u57DF\u4EE3\u7406\u9875\u9762
              iframe.contentWindow.location = &#39;http://www.domain1.com/proxy.html&#39;;
              state = 1;
          }
      };
      document.body.appendChild(iframe);
      // \u83B7\u53D6\u6570\u636E\u4EE5\u540E\u9500\u6BC1\u8FD9\u4E2Aiframe\uFF0C\u91CA\u653E\u5185\u5B58\uFF1B\u8FD9\u4E5F\u4FDD\u8BC1\u4E86\u5B89\u5168\uFF08\u4E0D\u88AB\u5176\u4ED6\u57DFframe js\u8BBF\u95EE\uFF09
      function destoryFrame() {
          iframe.contentWindow.document.write(&#39;&#39;);
          iframe.contentWindow.close();
          document.body.removeChild(iframe);
      }
  };
  // \u8BF7\u6C42\u8DE8\u57DFb\u9875\u9762\u6570\u636E
  proxy(&#39;http://www.domain2.com/b.html&#39;, function(data){
      alert(data);
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>2\uFF09proxy.html\uFF1A</strong>(domain1.com/proxy.html)</li><li>\u4E2D\u95F4\u4EE3\u7406\u9875\uFF0C\u4E0Ea.html\u540C\u57DF\uFF0C\u5185\u5BB9\u4E3A\u7A7A\u5373\u53EF\u3002</li><li><strong>3\uFF09b.html\uFF1A</strong>(domain2.com/b.html)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;script&gt;
      window.name = &#39;This is domain2 data!&#39;;
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7iframe\u7684src\u5C5E\u6027\u7531\u5916\u57DF\u8F6C\u5411\u672C\u5730\u57DF\uFF0C\u8DE8\u57DF\u6570\u636E\u5373\u7531iframe\u7684window.name\u4ECE\u5916\u57DF\u4F20\u9012\u5230\u672C\u5730\u57DF\u3002\u8FD9\u4E2A\u5C31\u5DE7\u5999\u5730\u7ED5\u8FC7\u4E86\u6D4F\u89C8\u5668\u7684\u8DE8\u57DF\u8BBF\u95EE\u9650\u5236\uFF0C\u4F46\u540C\u65F6\u5B83\u53C8\u662F\u5B89\u5168\u64CD\u4F5C\u3002</li><li><strong>\uFF089\uFF09WebSocket\u534F\u8BAE\u8DE8\u57DF</strong><ul><li>WebSocket protocol\u662FHTML5\u4E00\u79CD\u65B0\u7684\u534F\u8BAE\u3002\u5B83\u5B9E\u73B0\u4E86\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u5168\u53CC\u5DE5\u901A\u4FE1\uFF0C\u540C\u65F6\u5141\u8BB8\u8DE8\u57DF\u901A\u8BAF\uFF0C\u662Fserver push\u6280\u672F\u7684\u4E00\u79CD\u5F88\u597D\u7684\u5B9E\u73B0\u3002</li><li>\u539F\u751FWebSocket API\u4F7F\u7528\u8D77\u6765\u4E0D\u592A\u65B9\u4FBF\uFF0C<strong>\u6211\u4EEC\u4F7F\u7528Socket.io\uFF0C\u5B83\u5F88\u597D\u5730\u5C01\u88C5\u4E86webSocket\u63A5\u53E3\uFF0C\u63D0\u4F9B\u4E86\u66F4\u7B80\u5355\u3001\u7075\u6D3B\u7684\u63A5\u53E3\uFF0C\u4E5F\u5BF9\u4E0D\u652F\u6301webSocket\u7684\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u5411\u4E0B\u517C\u5BB9\u3002</strong></li><li><strong>1\uFF09\u524D\u7AEF\u4EE3\u7801\uFF1A</strong></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;div&gt;user input\uFF1A&lt;input type=&quot;text&quot;&gt;&lt;/div&gt;
  &lt;script src=&quot;https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js&quot;&gt;&lt;/script&gt;
  &lt;script&gt;
  var socket = io(&#39;http://www.domain2.com:8080&#39;);
  // \u8FDE\u63A5\u6210\u529F\u5904\u7406
  socket.on(&#39;connect&#39;, function() {
      // \u76D1\u542C\u670D\u52A1\u7AEF\u6D88\u606F
      socket.on(&#39;message&#39;, function(msg) {
          console.log(&#39;data from server: ---&gt; &#39; + msg); 
      });
      // \u76D1\u542C\u670D\u52A1\u7AEF\u5173\u95ED
      socket.on(&#39;disconnect&#39;, function() { 
          console.log(&#39;Server socket has closed.&#39;); 
      });
  });
  document.getElementsByTagName(&#39;input&#39;)[0].onblur = function() {
      socket.send(this.value);
  };
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>2\uFF09Nodejs socket\u540E\u53F0\uFF1A</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var http = require(&#39;http&#39;);
  var socket = require(&#39;socket.io&#39;);
  // \u542Fhttp\u670D\u52A1
  var server = http.createServer(function(req, res) {
      res.writeHead(200, {
          &#39;Content-type&#39;: &#39;text/html&#39;
      });
      res.end();
  });
  server.listen(&#39;8080&#39;);
  console.log(&#39;Server is running at port 8080...&#39;);
  // \u76D1\u542Csocket\u8FDE\u63A5
  socket.listen(server).on(&#39;connection&#39;, function(client) {
      // \u63A5\u6536\u4FE1\u606F
      client.on(&#39;message&#39;, function(msg) {
          client.send(&#39;hello\uFF1A&#39; + msg);
          console.log(&#39;data from client: ---&gt; &#39; + msg);
      });
      // \u65AD\u5F00\u5904\u7406
      client.on(&#39;disconnect&#39;, function() {
          console.log(&#39;Client socket has closed.&#39;); 
      });
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6CE8\u610F</p></li></ul>`,1),r=[d];function t(a,c){return e(),n("div",null,r)}var v=i(s,[["render",t],["__file","\u5982\u4F55\u89E3\u51B3\u8DE8\u8D8A\u95EE\u9898.html.vue"]]);export{v as default};
