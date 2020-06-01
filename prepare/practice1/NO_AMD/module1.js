// 使用IIFE

((window) => {
  var _privateData = "我是一个私有数据";
  var _exposedData = "暴露给其他模块的数据";
  function showMsg() {
    console.log(_privateData);
  }
  function showData() {
    console.log(_exposedData);
  }
  window.showMsg = showMsg;
  window.showData = showData;
  window.showMsg();
})(window);
