arr=[202,89,112,88]
res=[]
for (i of arr){
    istr = String(i)
    emp=[]
    for (j of istr){
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
    res.push(istr.length == emp.length)
}
console.log(res)

arr = [568,89,112,88,571]
res=[]
for(i of arr){
    istr = String(i)
    c=0
    for(j=0;j<istr.length-1;j++){
        if(istr[j+1]>istr[j]){
            c++
        }
    }
    res.push(istr.length-1 ==c)
}
console.log(res)



arr = [ 538, 111, 200, 652]
res=[]
for(i of arr){
    istr = String(i)
    c=0
    for(j=0;j<istr.length-1;j++){
        if(istr[j+1]<istr[j]){
            c++
        }
    }
    res.push(istr.length-1 ==c)
}
console.log(res)


arr=[23, 33, 200, 785]
unq="";
dup="";
for (i of arr){
    istr = String(i).split("").map(Number)
    emp=[]
    for (j of istr){
        // console.log(j)
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
    // console.log(emp)
    for(x of emp){
        c=0;
        for(z of istr){
            if(x==z){
                c++;
            }
        }
        if(c==1){
            unq=unq+x+" "
        }
        else{
            dup=dup+x+""
        }
    }
}
console.log(dup) 
