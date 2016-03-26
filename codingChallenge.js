//load in the JSON data
//Chrome has an issue with loading the data from a local file. There is a browser security issue that wont let chrome pull data from local files.
var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'code-test.json');
request.onreadystatechange = function() {
  if((request.readyState === 4) && (request.status === 200)) {
    var JSONObject = JSON.parse(request.responseText);
    var output = "<table><thead><th></th><th>Annual Percentage Yield</th><th>Est. Earnings for 1 Year<sup>*</sup></th></thead>";
    var i;
    //loop through json and output each item into a table
    for (i = 0; i < JSONObject.length; i++) {
      output += "<tr><td class='name'>" +
        JSONObject[i].name +
        "</td><td class='apy'>" +
        JSONObject[i].apy.toFixed(2) + " %" +
        "</td><td class='earnings'>" + "$" +
        JSONObject[i].earnings.toFixed(2) +
        "</td></tr>";
    }
    output += "</table>";
    document.getElementById("ratesTable").innerHTML = output;
    //add id's to particular table elements
    document.getElementsByTagName("tbody")[0].setAttribute("id", "data");
    document.getElementsByTagName("tr")[2].setAttribute("id", "first");
    //function to sort table with second row to first row
    var node = document.getElementById("first");
    var list = document.getElementById("data");
    list.insertBefore(node, list.childNodes[0])
  }
}
request.send(); 

//style second tab to look similar to when first tab is showing

document.getElementById('tab2Link').style.height = '27px';
document.getElementById('tab2Link').style.margin = '23px 0 0 0';
document.getElementById('tab2Link').style.border = '1px solid #ccc';
document.getElementById('tab2Link').style.background = '#ddebe1';
document.getElementById('tab2Link').style.color = '#328fc2';

//function for when the frist tab is clicked

function tab1(tab) {
  document.getElementById('tab2').style.display = 'none';
  document.getElementById('liTab1').setAttribute("class", "active");
  document.getElementById('liTab2').setAttribute("class", "");
  document.getElementById(tab).style.display = 'block';
  document.getElementById('tab2Link').style.height = '27px';
  document.getElementById('tab2Link').style.margin = '23px 0 0 0';
  document.getElementById('tab2Link').style.borderBottom = '1px solid #ccc';
  document.getElementById('tab2Link').style.background = '#ddebe1';
  document.getElementById('tab2Link').style.color = '#328fc2';
  document.getElementById('tab1Link').style.height = '35px';
  document.getElementById('tab1Link').style.margin = '16px 0 0 0';
  document.getElementById('tab1Link').style.borderBottom = 'none';
  document.getElementById('tab1Link').style.background = '#f5f5f5';
  document.getElementById('tab1Link').style.color = '#505050';
}   

//function for when the second tab is clicked

function tab2(tab) {
  document.getElementById('tab1').style.display = 'none';
  document.getElementById('liTab1').setAttribute("class", "");
  document.getElementById('liTab2').setAttribute("class", "active");
  document.getElementById(tab).style.display = 'block';
  document.getElementById('tab1Link').style.height = '27px';
  document.getElementById('tab1Link').style.margin = '23px 0 0 0';
  document.getElementById('tab1Link').style.border = '1px solid #ccc';
  document.getElementById('tab1Link').style.background = '#ddebe1';
  document.getElementById('tab1Link').style.color = '#328fc2';
  document.getElementById('tab2Link').style.height = '35px';
  document.getElementById('tab2Link').style.margin = '16px 0 0 0';
  document.getElementById('tab2Link').style.borderBottom = 'none';
  document.getElementById('tab2Link').style.background = '#f5f5f5';
  document.getElementById('tab2Link').style.color = '#505050';
}  

//function for the login button on the sidebar

function loginButton() {
  document.getElementById('loginContainer').style.display = 'block';
  document.getElementById('loginModal').style.display = 'block';
}

//function for the close button in the login modal

function modalClose() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('loginModal').style.display = 'none';
}


    
