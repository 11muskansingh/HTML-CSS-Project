var co = null;
function sign(element, paragraph) {
  var var1 = document.getElementById(element);
  var var2 = document.getElementById(paragraph);
  if (co && co.var1 !== element) {
    document.getElementById(co.var2).style.display = "none";
    document.getElementById(co.var1).innerHTML = "+";
  }
  if (var1.innerHTML === "+") {
    var1.innerHTML = "&#10006;";
    var2.style.display = "block";
    co = { var1: element, var2: paragraph };
  } else {
    var1.innerHTML = "+";
    var2.style.display = "none";
    co = null;
  }
}
