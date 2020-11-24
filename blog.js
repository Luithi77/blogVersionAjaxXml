
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "blog.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>L\'éducation du chiot</th><th>Des techniques pour dresser son chien</th><th>Astuces pour le bien/-être de votre chien</th></tr>";
    var x = xmlDoc.getElementsByTagName("BLOC");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("UN")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("DEUX")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TROIS")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }



   function loadXMLDoc() {
  var xhttpp = new XMLHttpRequest();
  xhttpp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dema").innerHTML =
      this.responseText;
    }
  };
  xhttpp.open("GET", "blog2.xml", true);
  xhttpp.send();
}
