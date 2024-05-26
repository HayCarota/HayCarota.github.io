---
title: Nginx的概念及其工作原理
date: YYYY-MM-DD
---
- 概念
  - Nginx 是一款轻量级的 Web 服务器，使用异步事件驱动的方法来处理请求，是一款面向性能设计的 HTTP 服务器。
  - 也可以用于反向代理、负载平衡和 HTTP 缓存等。
- 详细
  - 传统的 Web 服务器如 Apache 是 process-based 模型的，
  - 而 Nginx 是基于event-driven模型的。
  - 正是这个主要的区别
    - 带给了 Nginx 在性能上的优势。
  - Nginx 架构的最顶层是一个 master process，
    - 这个 master process 用于产生其他的 worker process，
    - 这一点和Apache 非常像，
    - 但是 Nginx 的 worker process 可以同时处理大量的HTTP请求，而每个 Apache process 只能处理一个。
- 注意