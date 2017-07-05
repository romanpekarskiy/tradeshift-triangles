# Triangle challenge

## Task:
Write a program that will determine the type of a triangle. It should
take the lengths of the triangle's three sides as input, and return
whether the triangle is equilateral, isosceles or scalene.

## Result:
```javascript
getTriangleInfo(Number, Number, Number)
```

Returns
```javascript
{
  scalene:  Boolean
  equilateral:  Boolean
  isosceles:  Boolean
}
```


Error types
------

```javascript
NotEnoughArgumentsError
```
Throws when not all 3 arguments are passed to method

```javascript
WrongArgumentTypeError
```
Throws when some of passed arguments are not Number type

```javascript
NegativeNumberError
```
Throws when some of triangle edge lenghts are negative number. Triangle cannot be built with negative edge length

```javascript
ZeroNumberError
```
Throws when some of triangle edge lenghts are zero. Triangle points must not been on a one line

```javascript
WrongEdgeLenghtsError
```
Throws when triangle cannot be built with that lengts, ex. some of edge lenghts are Infitite,
or 2 smaller edge lenght are less or equal to biggest one.

