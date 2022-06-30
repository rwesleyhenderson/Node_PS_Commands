var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["(wmic csproduct get UUID /format:list)"]);
child.stdout.on("data",function(data){
    console.log(("" + data).slice(11,-16));
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.stdin.end(); //end input