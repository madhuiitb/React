const obj={
  a:1,
  b:{
    c:2,
    d:3,
  },
  e:4,
  f:{
    g:5,
    h:{
      i:6,
      j:7,
    },
  },
  k:8,
}

/* OUT PUT
 a: 1,
  b.c: 2,
  b.d: 3,
  e: 4,
  f.g: 5,
  f.h.i: 6,
  f.h.j: 7,
  k: 8
*/

let result = {};
const flatObj = (obj, prefix='')=> {
  
  for(let key in obj){
    let newObj = obj[key];
    let newKey = prefix ==='' ? key : prefix + '.' + key;
    if(typeof newObj === 'object'){
      //console.log(newObj);
      flatObj(newObj, newKey);
    }
    else{
      result[newKey]=newObj;
      //console.log(result);
    }
  }
}
flatObj(obj);
console.log(result);
