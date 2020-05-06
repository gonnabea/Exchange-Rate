

fetch("http://data.fixer.io/api/latest?access_key=93deb45a9c28f0304629b9d89704a555").then(function(res, req){
    res.json().then(function(data){
        console.log(data)
    })
    
})