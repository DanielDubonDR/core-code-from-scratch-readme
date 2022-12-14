# Statement
---
For this challenge you will be performing a simple calculator, this calculator can perform the following operations:

1. Sum (+)
2. Subtract (-)
3. Multiplication (\*)
4. Division (/)

The calculator must ask the user for two numbers, after asking for the two numbers, you must ask for the operation to be performed, keep in mind that you must show the user the options available (+, -, \*, /). The first thing that must be done is to validate that the operation that the user entered is valid, if it is not a valid option, the user must be shown an error message, for example: `⚠️ La operación no es valida` and terminate the program. If the operation is valid, show the message: `Procesando: <OPERACIÓN A REALIZAR>` For, example: if the user has entered the numbers 10 and 15 as well as the operation \*, the message should read: `Procesando: 10 * 15`. After this message the result of the operation must be displayed, following the previous example, the result of operating 10 \* 15 is 150, so the program should return: `Resultado: 150`. Remember to use conditionals to identify which operations you should execute.

# Solution
---
### Pseudocode

```python
Algoritmo simpleCalculator
	Escribir 'Enter the first number'
	Leer number1
	Escribir 'Enter the second number'
	Leer number2
	Escribir 'Enter an operation: +,-,*,/'
	Leer operation
	Si operation=='+' O operation=='-' O operation=='*' O operation=='/' Entonces
		Si operation=='+' Entonces
			Escribir 'Processing: ',number1,' + ',number2
			Escribir 'Result: ',number1+number2
		SiNo
			Si operation=='-' Entonces
				Escribir 'Processing: ',number1,' - ',number2
				Escribir 'Result: ',number1-number2
			SiNo
				Si operation=='*' Entonces
					Escribir 'Processing: ',number1,' * ',number2
					Escribir 'Result: ',number1*number2
				SiNo
					Si operation=='/' Entonces
						Si number1>0 Entonces
							Escribir 'Processing: ',number1,' / ',number2
							Escribir 'Result: ',number1/number2
						SiNo
							Escribir 'Cannot be divided by 0'
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	SiNo
		Escribir 'Invalid operation'
	FinSi
FinAlgoritmo
```
### Result

<img src="./../Images/simpleCalculator.gif" alt="drawing" style="width:350px;"/><br>