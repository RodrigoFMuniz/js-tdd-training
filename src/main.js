module.exports ={
  sum:function(a,b){
    return a+b
  },
  sub:function(a,b){
    return a-b
  },
  mult:function(a,b){
    return a*b
  },
  div:function(a,b){
    if(b==0) return 0
    if(typeof b !=="number") return 0
    return a/b
  }
}