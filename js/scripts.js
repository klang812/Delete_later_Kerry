
$(document).ready(function () {
  $("#entry").submit(function (event) {
    let COUNTTO = $("input#countTo").val();
    let COUNTFOR = $("input#countFor").val();
    alert(COUNTTO);
    alert(COUNTFOR);
    event.preventDefault();
  });
});
