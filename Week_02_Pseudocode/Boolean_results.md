# Statement
---
You have been assigned to verify and explain a code created by one of your colleagues, the idea is that you can describe the value that each variable has within the code as well as what was done for each line. What is expected of you is that you add comments below each line showing the value that the variable would have and a short explanation of how that value is reached.

This is the code:

```python
Algoritmo boolean
	a <- 5 == 3
	b <- 4 <> 3
	c <- 7 > 7
	d <- 4 < 4
	e <- 100 <= 90
	f <- 40 >= 40
FinAlgoritmo
```

# Solution
---
```python
Algoritmo boolean
	a <- 5 == 3
  // a = FALSO
  // Descrip: Se esta comparando si 5 es igual a 3, lo que da como resultado FALSO
	b <- 4 <> 3
  // a = VERDADERO
  // Descrip: Se esta comparando si 4 es diferente a 3, lo que da como resultado VERDADERO
	c <- 7 > 7
  // c = FALSO
  // Descrip: Se esta comparando si 7 es mayor a 7, lo que da como resultado FALSO
	d <- 4 < 4
  // d = FALSO
  // Descrip: Se esta comparando si 4 es menor a 4, lo que da como resultado FALSO
	e <- 100 <= 90
  // e = FALSO
  // Descrip: Se esta comparando si 100 es menor o igual a 90, lo que da como resultado FALSO
	f <- 40 >= 40
  // f = VERDADERO
  // Descrip: Se esta comparando si 40 es mayor o igual a 40, lo que da como resutlado VERDADERO
FinAlgoritmo
```