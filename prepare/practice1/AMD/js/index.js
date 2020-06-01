(function () {
  require.config({
    //基本路径
    baseUrl: "js/",
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      alerter: "./alerter",
      dataService: "./dataService",

      //库模块
      jquery: "libs/jquery-1.10.1",
    },
  });
  //引入模块使用
  require(["alerter", "jquery"], function (myOwn, $) {
    myOwn.showData();
    $("body").css("background", "lightpink");
  });
})();
