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
```c++
Algoritmo boolean
	a <- 5 == 3
      // Desc: Compare if the number 5 and the number 3 are equals
      // a = FALSE

	b <- 4 <> 3
      // Desc: Compare if the number 4 and the number 4 are diferents
      // a = TRUE

	c <- 7 > 7
      // Desc: Compare if number 7 is greater than number 7
      // c = FALSE

	d <- 4 < 4
      // Descrip: Compare if number 4 is less than number 4
      // d = FALSE

	e <- 100 <= 90
      // Desc: Compare if the number 100 is less than equal to the number 90
      // e = FALSE

	f <- 40 >= 40
      // Desc: Compare if the number 40 is greater than or equal to the number 40
      // f = TRUE

FinAlgoritmo
```