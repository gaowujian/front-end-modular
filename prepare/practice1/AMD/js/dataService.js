define(function () {
  const name = "tony";
  function getName() {
    return name;
  }
  //   return 模块，  这个模块返回的就是一个对象
  return {
    getName,
  };
});
