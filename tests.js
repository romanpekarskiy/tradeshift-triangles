QUnit.test("Test metdod throws wrong input errors", function( assert ) {
    assert.throws(() => getTriangleInfo([5, 10, 25]),   getTriangleInfo.NotEnoughArgumentsError);
    assert.throws(() => getTriangleInfo(5),             getTriangleInfo.NotEnoughArgumentsError);
    assert.throws(() => getTriangleInfo(5, 5),          getTriangleInfo.NotEnoughArgumentsError);

    assert.throws(() => getTriangleInfo(5, 5, null),    getTriangleInfo.WrongArgumentTypeError);
    assert.throws(() => getTriangleInfo(5, 5, '5'),     getTriangleInfo.WrongArgumentTypeError);
    assert.throws(() => getTriangleInfo(5, 5, [5]),     getTriangleInfo.WrongArgumentTypeError);
    assert.throws(() => getTriangleInfo(5, {}, 5),      getTriangleInfo.WrongArgumentTypeError);

    assert.throws(() => getTriangleInfo(-50, 25, 35),   getTriangleInfo.NegativeNumberError);
    assert.throws(() => getTriangleInfo(50, -25, 35),   getTriangleInfo.NegativeNumberError);
    assert.throws(() => getTriangleInfo(50, 25, -35),   getTriangleInfo.NegativeNumberError);

    assert.throws(() => getTriangleInfo(0, 25, 35),     getTriangleInfo.ZeroNumberError);
    assert.throws(() => getTriangleInfo(25, 0, 35),     getTriangleInfo.ZeroNumberError);
    assert.throws(() => getTriangleInfo(25, 35, 0),     getTriangleInfo.ZeroNumberError);
});

QUnit.test("Test metdod throws wrong edge lenghts errors", function( assert ) {
    assert.throws(() => getTriangleInfo(10, 15, 35),                   getTriangleInfo.WrongEdgeLenghtsError);
    assert.throws(() => getTriangleInfo(10, 15, 55),                   getTriangleInfo.WrongEdgeLenghtsError);
    assert.throws(() => getTriangleInfo(25, 25, 50),                   getTriangleInfo.WrongEdgeLenghtsError);
    assert.throws(() => getTriangleInfo(1, 1, 5),                      getTriangleInfo.WrongEdgeLenghtsError);
    assert.throws(() => getTriangleInfo(Infinity, 1, 5),               getTriangleInfo.WrongEdgeLenghtsError);
    assert.throws(() => getTriangleInfo(Infinity, Infinity, 5),        getTriangleInfo.WrongEdgeLenghtsError);
    assert.throws(() => getTriangleInfo(Infinity, Infinity, Infinity), getTriangleInfo.WrongEdgeLenghtsError);
});

QUnit.test("Test triangles", function( assert ) {
    assert.deepEqual(getTriangleInfo(25, 15, 35),              {scalene: true});
    assert.deepEqual(getTriangleInfo(25.12, 15.1234, 35.2134), {scalene: true});
    assert.deepEqual(getTriangleInfo(0.2, 0.3, 0.4),           {scalene: true});

    assert.deepEqual(getTriangleInfo(25, 25, 25),        {isosceles: true, equilateral: true});
    assert.deepEqual(getTriangleInfo(15, 15, 15),        {isosceles: true, equilateral: true});
    assert.deepEqual(getTriangleInfo(0.56, 0.56, 0.56),  {isosceles: true, equilateral: true});

    assert.deepEqual(getTriangleInfo(0.56, 0.56, 0.1),   {isosceles: true});

    assert.deepEqual(getTriangleInfo(50, 50, 1),         {isosceles: true});
    assert.deepEqual(getTriangleInfo(50, 1, 50),         {isosceles: true});
    assert.deepEqual(getTriangleInfo(1, 50, 50),         {isosceles: true});

    assert.deepEqual(getTriangleInfo(10, 10, 15),        {isosceles: true});
    assert.deepEqual(getTriangleInfo(10, 15, 10),        {isosceles: true});
    assert.deepEqual(getTriangleInfo(15, 10, 10),        {isosceles: true});
});