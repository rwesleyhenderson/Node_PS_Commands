var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["wmic DISKDRIVE get SerialNumber /format:list"]);
child.stdout.on("data",function(data){
    console.log(("" + data).slice(19,-13));
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.stdin.end(); //end input