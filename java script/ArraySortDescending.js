let arr=[22,76,-2,91,43,3,0]
for(let i=0;i<arr.length;i++){
    for(let l=i+1;l<arr.length;l++){
        if(arr[i]<arr[l]){
            let temp=arr[i]
            arr[i]=arr[l]
            arr[l]=temp
        }
    }
}
console.log(arr);