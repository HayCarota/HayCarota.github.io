import{_ as l,o as i,c as s,d as e}from"./app.7113da28.js";const t={},c=e("<ul><li>\u6982\u5FF5</li><li>\u8BE6\u7EC6 <ul><li>TCP\u7684\u62E5\u585E\u63A7\u5236\u673A\u5236\u4E3B\u8981\u662F\u4EE5\u4E0B\u56DB\u79CD\u673A\u5236\uFF1A <ul><li>\u6162\u542F\u52A8\uFF08\u6162\u5F00\u59CB\uFF09</li><li>\u62E5\u585E\u907F\u514D</li><li>\u5FEB\u901F\u91CD\u4F20</li><li>\u5FEB\u901F\u6062\u590D</li></ul></li><li>\uFF081\uFF09\u6162\u542F\u52A8\uFF08\u6162\u5F00\u59CB\uFF09 <ul><li>\u5728\u5F00\u59CB\u53D1\u9001\u7684\u65F6\u5019\u8BBE\u7F6Ecwnd = 1\uFF08cwnd\u6307\u7684\u662F\u62E5\u585E\u7A97\u53E3\uFF09</li><li>\u601D\u8DEF\uFF1A\u5F00\u59CB\u7684\u65F6\u5019\u4E0D\u8981\u53D1\u9001\u5927\u91CF\u6570\u636E\uFF0C\u800C\u662F\u5148\u6D4B\u8BD5\u4E00\u4E0B\u7F51\u7EDC\u7684\u62E5\u585E\u7A0B\u5EA6\uFF0C\u7531\u5C0F\u5230\u5927\u589E\u52A0\u62E5\u585E\u7A97\u53E3\u7684\u5927\u5C0F\u3002</li><li>\u4E3A\u4E86\u9632\u6B62cwnd\u589E\u957F\u8FC7\u5927\u5F15\u8D77\u7F51\u7EDC\u62E5\u585E\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u6162\u5F00\u59CB\u95E8\u9650(ssthresh \u72B6\u6001\u53D8\u91CF) <ul><li>\u5F53cnwd &lt; ssthresh\uFF0C\u4F7F\u7528\u6162\u5F00\u59CB\u7B97\u6CD5</li><li>\u5F53cnwd = ssthresh\uFF0C\u65E2\u53EF\u4F7F\u7528\u6162\u5F00\u59CB\u7B97\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u62E5\u585E\u907F\u514D\u7B97\u6CD5</li><li>\u5F53cnwd &gt; ssthresh\uFF0C\u4F7F\u7528\u62E5\u585E\u907F\u514D\u7B97\u6CD5</li></ul></li></ul></li><li>\uFF082\uFF09\u62E5\u585E\u907F\u514D <ul><li>\u62E5\u585E\u907F\u514D\u672A\u5FC5\u80FD\u591F\u5B8C\u5168\u907F\u514D\u62E5\u585E\uFF0C\u662F\u8BF4\u5728\u62E5\u585E\u907F\u514D\u9636\u6BB5\u5C06\u62E5\u585E\u7A97\u53E3\u63A7\u5236\u4E3A\u6309\u7EBF\u6027\u589E\u957F\uFF0C\u4F7F\u7F51\u7EDC\u4E0D\u5BB9\u6613\u51FA\u73B0\u963B\u585E\u3002</li><li>\u601D\u8DEF\uFF1A \u8BA9\u62E5\u585E\u7A97\u53E3cwnd\u7F13\u6162\u7684\u589E\u5927\uFF0C\u5373\u6BCF\u7ECF\u8FC7\u4E00\u4E2A\u8FD4\u56DE\u65F6\u95F4RTT\u5C31\u628A\u53D1\u9001\u65B9\u7684\u62E5\u585E\u63A7\u5236\u7A97\u53E3\u52A0\u4E00</li><li>\u65E0\u8BBA\u662F\u5728\u6162\u5F00\u59CB\u9636\u6BB5\u8FD8\u662F\u5728\u62E5\u585E\u907F\u514D\u9636\u6BB5\uFF0C\u53EA\u8981\u53D1\u9001\u65B9\u5224\u65AD\u7F51\u7EDC\u51FA\u73B0\u62E5\u585E\uFF0C\u5C31\u628A\u6162\u5F00\u59CB\u95E8\u9650\u8BBE\u7F6E\u4E3A\u51FA\u73B0\u62E5\u585E\u65F6\u7684\u53D1\u9001\u7A97\u53E3\u5927\u5C0F\u7684\u4E00\u534A\u3002\u7136\u540E\u628A\u62E5\u585E\u7A97\u53E3\u8BBE\u7F6E\u4E3A1\uFF0C\u6267\u884C\u6162\u5F00\u59CB\u7B97\u6CD5\u3002\u5982\u56FE\u6240\u793A:</li><li>\u5176\u4E2D\uFF0C\u5224\u65AD\u7F51\u7EDC\u51FA\u73B0\u62E5\u585E\u7684\u6839\u636E\u5C31\u662F\u6CA1\u6709\u6536\u5230\u786E\u8BA4\uFF0C\u867D\u7136\u6CA1\u6709\u6536\u5230\u786E\u8BA4\u53EF\u80FD\u662F\u5176\u4ED6\u539F\u56E0\u7684\u5206\u7EC4\u4E22\u5931\uFF0C\u4F46\u662F\u56E0\u4E3A\u65E0\u6CD5\u5224\u5B9A\uFF0C\u6240\u4EE5\u90FD\u5F53\u505A\u62E5\u585E\u6765\u5904\u7406\u3002</li></ul></li><li>\uFF083\uFF09\u5FEB\u901F\u91CD\u4F20 <ul><li>\u5FEB\u91CD\u4F20\u8981\u6C42\u63A5\u6536\u65B9\u5728\u6536\u5230\u4E00\u4E2A\u5931\u5E8F\u7684\u62A5\u6587\u6BB5\u540E\u5C31\u7ACB\u5373\u53D1\u51FA\u91CD\u590D\u786E\u8BA4(\u4E3A\u7684\u662F\u4F7F\u53D1\u9001\u65B9\u53CA\u65E9\u77E5\u9053\u6709\u62A5\u6587\u6BB5\u6CA1\u6709\u5230\u8FBE\u5BF9\u65B9)\u3002\u53D1\u9001\u65B9\u53EA\u8981\u8FDE\u7EED\u6536\u5230\u4E09\u4E2A\u91CD\u590D\u786E\u8BA4\u5C31\u7ACB\u5373\u91CD\u4F20\u5BF9\u65B9\u5C1A\u672A\u6536\u5230\u7684\u62A5\u6587\u6BB5\uFF0C\u800C\u4E0D\u5FC5\u7EE7\u7EED\u7B49\u5F85\u8BBE\u7F6E\u7684\u91CD\u4F20\u8BA1\u65F6\u5668\u65F6\u95F4\u5230\u671F\u3002</li><li>\u7531\u4E8E\u4E0D\u9700\u8981\u7B49\u5F85\u8BBE\u7F6E\u7684\u91CD\u4F20\u8BA1\u65F6\u5668\u5230\u671F\uFF0C\u80FD\u5C3D\u65E9\u91CD\u4F20\u672A\u88AB\u786E\u8BA4\u7684\u62A5\u6587\u6BB5\uFF0C\u80FD\u63D0\u9AD8\u6574\u4E2A\u7F51\u7EDC\u7684\u541E\u5410\u91CF</li></ul></li><li>\uFF084\uFF09\u5FEB\u901F\u6062\u590D <ul><li>\u5F53\u53D1\u9001\u65B9\u8FDE\u7EED\u6536\u5230\u4E09\u4E2A\u91CD\u590D\u786E\u8BA4\u65F6\uFF0C\u5C31\u6267\u884C\u201C\u4E58\u6CD5\u51CF\u5C0F\u201D\u7B97\u6CD5\uFF0C\u628Assthresh\u95E8\u9650\u51CF\u534A\u3002\u4F46\u662F\u63A5\u4E0B\u53BB\u5E76\u4E0D\u6267\u884C\u6162\u5F00\u59CB\u7B97\u6CD5\u3002</li><li>\u8003\u8651\u5230\u5982\u679C\u7F51\u7EDC\u51FA\u73B0\u62E5\u585E\u7684\u8BDD\u5C31\u4E0D\u4F1A\u6536\u5230\u597D\u51E0\u4E2A\u91CD\u590D\u7684\u786E\u8BA4\uFF0C\u6240\u4EE5\u53D1\u9001\u65B9\u73B0\u5728\u8BA4\u4E3A\u7F51\u7EDC\u53EF\u80FD\u6CA1\u6709\u51FA\u73B0\u62E5\u585E\u3002\u6240\u4EE5\u6B64\u65F6\u4E0D\u6267\u884C\u6162\u5F00\u59CB\u7B97\u6CD5\uFF0C\u800C\u662F\u5C06cwnd\u8BBE\u7F6E\u4E3Assthresh\u7684\u5927\u5C0F\uFF0C\u7136\u540E\u6267\u884C\u62E5\u585E\u907F\u514D\u7B97\u6CD5\u3002</li></ul></li></ul></li><li>\u6CE8\u610F</li></ul>",1),_=[c];function u(n,r){return i(),s("div",null,_)}var d=l(t,[["render",u],["__file","TCP\u7684\u62E5\u585E\u63A7\u5236\u673A\u5236.html.vue"]]);export{d as default};
