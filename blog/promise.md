# Promise

1. 没有考虑异步版本

```js
const PENING ="PENDING"
const FULFLLED = "FULFILLED"
const REJECTED = "REJECTED"
class Promise(){
  constructor(executor){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
  }
  resolve =(value) =>{
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
    }
  }
  reject = (reason) =>{
    if(this.status===PENDING){
      this.status = REJECTED;
      this.reason = reason;
    }
  }
  try{
    excutor(resolve,reject)
  }catch(error){
    reject(error)
  }
  then(onFulfilled,onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      OnRejected(this.reason)
    }
  }
}
```

2. 异步

发布订阅模式 收集依赖 -> 触发通知 -> 取出依赖执行

```javascript
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class Promise{
  constructor(executor){
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
  }
  let resolve = (value) =>{
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
    }
  }
  let reject = (reason)=>{
    if(this.status === PENDING){
      this.status = REJECTED;
      this.reason = reason;
    }
  }
  try{
    executor(resolve,reject)
  }catch(error){
    reject(errod)
  }
	then(onFulfilled,onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      onRejacted(this.reason)
    }
    if(this.status ===PENDING){
      this.onReslovedCallbacks.push(()=>{
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(())=>{
        onRejected(this.reason)
      }
    }
  }
}
```
