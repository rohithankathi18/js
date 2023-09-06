let a=[14,11,12]

function inc(a){
    for(i=0;i<a.length;i++){
        a[i]=a[i]+1;
        console.log(a[i])
    }
}
const b=function(a){
    for(i=0;i<a.length;i++){
        a[i]=a[i]+1;
        console.log(a[i])
    }
}

const c=(a)=>{
    for(i=0;i<a.length;i++){
        a[i]=a[i]+1;
    
    }
}
//inc(a)
//console.log(a)

function fm(...params){
    let m=params.max
    console.log(m)
    
}

fm(10,5,6,8,3)