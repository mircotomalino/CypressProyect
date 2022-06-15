// describe('Cuentas', function(){
//     let a =1+1;
//     let b=2;
//     it('vamos a ver si suma bien', function(){
//       expect(a==b).to.equal(true)
// });
// it('vamos a ver que reste bien', function(){
//     expect(a-b).to.equal(0)
// })
// })


// -------------------------------- asserts con chai---------------------

describe('cuentas', function(){
    var a= 1;
    it('vamos a ver una igualdad', function(){
       expect(1==1).to.equal(true); 
    })
    it('vamos a ver que no haya igualdad', function(){
        expect(1==2).to.equal(false);
    })
    it('vamos a ver que una resta este bien',function(){
        expect(1-1).to.equal(0);
    })
    it('tiene que ser verdader',function(){
        expect(1-1).to.not.equal(2);
    })
    it('tiene que ser verader', function(){
        expect(2==2).to.be.true
    })
    it('tiene que ser falso',function(){
        expect(2==1).to.be.false;
    })
    it('la variable existe', function(){
        expect(a).to.exist;
    })
    it('es menor a 10',function(){
        expect(a).to.be.lessThan(10);
    })
    it('es mayor a 10',function(){
        expect(25).to.be.greaterThan(10)
    })
})