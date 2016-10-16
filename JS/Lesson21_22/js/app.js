describe ("pow",function(){
  describe ("возводит x в степень n", function(){

  function makeTest(x){
    var expected = x*x*x;
    it ("когда возводим" + x + "в степень" + expected, function(){
      assert.equal(pow(x,3),expected);
    });
  }
   for (var x=1;x<=5;x++){
     makeTest(x);
   }
});
   it ("когда возводим в отрицательную степень результат NaN", function(){
     assert(isNaN(pow(2,-1)));
   });
   it ("когда возводим в дробную степень результат NaN", function(){
     assert(isNaN(pow(2,1.5)));
   });

  describe ("любое число кроме 0 в степени 0 равно 1", function(){
    function makeTest(x){
      it ("при возведении " + x + "в степень 0 результат будет 1", function(){
        assert.equal(pow(x,0),1);
      });
    }
    for (var x=-5;x<=5;x+=2){
      makeTest(x);
    }
  });

  it ("ноль в нулевой степени дает NaN", function(){
    assert(isNaN(pow(0,0)));
  });
});
