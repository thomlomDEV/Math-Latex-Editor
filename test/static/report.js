function send_report()
{
    var data = window.__coverage__;
    console.log("Reporting", data);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    console.log("DONE!",xmlHttp.responseText);
	    var xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = function(){}
	    xhr.open("get", "/done"); 
	    xhr.send();
	    setTimeout(2000,function(){
		var iframe = document.getElementById("coverage");
		iframe.src = iframe.src;
	    });
	}
	else console.log("Reporting to coverage server failed", xmlHttp.readyState, xmlHttp.status);
    }
    xmlHttp.open("post", "/coverage/client"); 
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(data));
}
