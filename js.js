window.onload = function() {
    document.getElementById('buttonid').onclick = function(){
        document.getElementById("outputid").value = "pradzia";
        document.getElementById("outputid").value += document.getElementById("inputid").value;
        document.getElementById("outputid").value += "pabaiga";
    };
  };
