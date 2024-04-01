# 2024/04/01

## 监控Pac相关文件的变化，自动请求PacUrl进行更新

### 单独开发一个服务，在本地部署，通过http long polling暴露一个api，用来返回Pac相关文件变化的信息

[服务实现的一个例子](git@github.com:zhangw/rs-v2ray-pac-watcher-server.git)

### 在插件内，新增http long polling的请求实现，并借助故意暴露的OmegaOptions对象，执行更新操作
