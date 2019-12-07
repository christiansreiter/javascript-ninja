function disemvowel(str) {
    let vogais = {
        a: true,
        A: true,
        e: true,
        E: true,
        i: true,
        I: true,
        o: true,
        O: true,
        u: true,
        U: true,
    };
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if(!vogais[str[i]]) {
            result += str[i];
        } else {
            '';
        }
    }
    return result;
  }


  console.log( disemvowel( 'asdad   jad  oa wp  djawda  ouiuiyuiyswdoawodp' ) )