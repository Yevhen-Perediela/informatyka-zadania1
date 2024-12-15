function choinka1(){
    console.log('choinka 1')
    let choinka = ''
    for (let i = 0; i < 11; i++) {
       choinka+='*' 
    }  
    console.log(choinka);
}

function choinka2(){
    console.log('choinka 2')
    for (let i = 0; i < 7; i++) {
        console.log('*')
    }
}

function choinka3(len){
    console.log('choinka3');
    let str = ''
    for (let j = 0; j < len; j++) {
        str+='*'  
    } 
    for (let i = 0; i < len; i++) {  
        console.log(str);     
    }
}

function choinka4(len){
    console.log('choinka 4')
    let str = ''
    for (let i = 0; i < len; i++) {
        str+='*'
        console.log(str)
    }
    return str
}
function choinka5(len){
    console.log('choinka 5');
    for (let i = 6; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
    
    
}

choinka1()
choinka2()
choinka3(4)
choinka4(6)
choinka5(6)