module.exports={
    indexUser : function(req, res, next){
        res.send('index user')
    },
    test : function(req, res, next){
        console.log('test')
    }
}

// const data = (req, res, next)=>{
//     res.send('arrow function')
// }

// function appData (req, res, next){
//     res.send('function standar')
// }

// module.exports={
//     dataFunction : data,
//     standarFunction : appData
// }
