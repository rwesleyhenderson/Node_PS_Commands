var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["(Get-CimInstance -Class Win32_ComputerSystemProduct).UUID"]);
child.stdout.on("data",function(data){
    console.log(("" + data).slice(0,-2));
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.stdin.end(); //end input