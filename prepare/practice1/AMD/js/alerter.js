define(["dataService"], function (dataService) {
  const data = dataService.getName();
  function showData() {
    console.log(data);
  }
  return { showData };
});
