function Promise(excutor) {
    this.promiseState = 'pending';
    this.promiseResult = null;
    let _this = this;
    this.callBacks = []; //用来保存回调函数
    // console.log(this) //Promise对象

    //定义resolve
    function resolve(data) {
        //判断状态 状态只能修改一次
        if (_this.promiseState !== 'pending') return;
        //修改promise对象状态
        _this.promiseState = 'fulfilled';
        //设置promise对象结果值
        _this.promiseResult = data;
        //执行回调函数
        _this.callBacks.forEach(item => {
            item.onResolved(data)
        });
        // console.log(this) // window对象
    }
    // 定义reject
    function reject(data) {
        if (_this.promiseState !== 'pending') return;
        _this.promiseState = 'rejected';
        _this.promiseResult = data;
        //执行回调函数
        _this.callBacks.forEach(item => {
            item.onRejected(data)
        });
    }
    //同步执行 执行器函数  抛出异常:用try...catch包裹
    try {
        excutor(resolve, reject)
    } catch (error) {
        //修改promise状态
        reject(error)
    }

}
//添加then()
Promise.prototype.then = function (onResolved, onRejected) {
    //then方法返回一个promise
    const _this = this;
    return new Promise((resolve, reject) => {
        //封装函数
        function callBack(type){
            try {
                //保存回调函数的值
                const res = type(_this.promiseResult) //res 是一个promise对象
                if (res instanceof Promise) {
                    res.then(v => {
                        console.log(v)
                        resolve(v)
                    }, r => {
                        console.log(r)
                        reject(r)
                    })
                } else {                    
                    resolve(res) //返回非promise类型
                }
            } catch (error) {
                reject(error)
            }
        }
        //调用回调函数  同步成功
        if (this.promiseState === 'fulfilled') {
            //then()方法 抛出异常处理
            callBack(onResolved)
        }
        //同步失败
        if (this.promiseState === 'rejected') {
            callBack(onRejected)
        }
        //保存回调函数
        if (this.promiseState === 'pending') {
            this.callBacks.push({
                //异步成功
                onResolved: function () {
                    callBack(onResolved)
                },
                //异步失败
                onRejected: function () {
                    callBack(onRejected)
                },
            })
        }
    })
}