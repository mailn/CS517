var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res){
	var result = {"courseInfo":[
		{"CourseID" : "CS551","HomeworkID" : "1","Score" : "84"},
		{"CourseID" : "CS551","HomeworkID" : "2","Score" : "93"},
		{"CourseID" : "CS551", "HomeworkID" : "3","Score" : "88"},
		{"CourseID" : "CS557","HomeworkID" : "1","Score" : "90"},
		{"CourseID" : "CS557","HomeworkID" : "2", "Score" : "85"}
		]}
	if(result){
		res.writeHead(200,{'Content-Type':'application/json'})
		res.end(JSON.stringify(result))
	} else{
		res.writeHead(404)
		res.end()
	}
})
server.listen(Number(process.argv[2]))
