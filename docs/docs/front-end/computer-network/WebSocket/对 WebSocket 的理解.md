---
title: 对 WebSocket 的理解
date: YYYY-MM-DD
---
- 概念
  - WebSocket
    - 是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议。
      - 全双工通信技术是一种允许在同一频段内同时进行上行和下行数据传输的网络技术。这种技术通过使用不同的频率或时间分割技术来实现双向通信，从而提高了通信效率和实时性
    - 它基于TCP传输协议，并复用HTTP的握手通道。
    - 浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。
  - 作用
    - WebSocket 的出现就解决了半双工通信的弊端。
      - 半双工通信是一种数据传输方式，其中数据可以在两个方向上传送，但同一时刻只能在一个方向上传输。这种通信方式通常需要通过物理开关或电子开关来控制数据的发送和接收方向
    - 它最大的特点是：
      - 服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。
- 详细
  - WebSocket原理：
    - 客户端向 WebSocket 服务器通知（notify）一个带有所有接收者ID（recipients IDs）的事件（event），
    - 服务器接收后立即通知所有活跃的（active）客户端，只有ID在接收者ID序列中的客户端才会处理这个事件。
  - WebSocket 特点的如下：
    - 支持双向通信，实时性更强
    - 可以发送文本，也可以发送二进制数据
    - 建立在TCP协议之上，服务端的实现比较容易
    - 数据格式比较轻量，性能开销小，通信高效
    - 没有同源限制，客户端可以与任意服务器通信
    - 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL
    - 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
  - Websocket的使用方法如下：
    - Websocket的使用方法如下：
  ```
    // 在index.html中直接写WebSocket，设置服务端的端口号为 9999
    let ws = new WebSocket('ws://localhost:9999');
    // 在客户端与服务端建立连接后触发
    ws.onopen = function() {
        console.log("Connection open."); 
        ws.send('hello');
    };
    // 在服务端给客户端发来消息的时候触发
    ws.onmessage = function(res) {
        console.log(res);       // 打印的是MessageEvent对象
        console.log(res.data);  // 打印的是收到的消息
    };
    // 在客户端与服务端建立关闭后触发
    ws.onclose = function(evt) {
    console.log("Connection closed.");
    };
  ```
- 注意