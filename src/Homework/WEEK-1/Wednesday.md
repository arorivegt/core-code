- [Back Homework](../Homework.md)
Decimal (base 10): 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.
Binario (base 2): 0 y 1.
Hexadecimal (base 16): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E y F.

- Translate the year you where born to binary, decimal and hexadecimal

| Sistema     |	Número	    | Base |
|-------------|-------------|------|
| Decimal	  | 1987        | 10   |
| Binario	  | 11111000011 | 2    |
| Hexadecimal | 7c3         | 16   |

- Translate 51966 into hexadecimal and binary

| Sistema     |	Número	            | Base |
|-------------|---------------------|------|
| Decimal	  | 51966               | 10   |
| Binario	  | 1100101011111110    | 2    |
| Hexadecimal | cafe                | 16   |

- Create a program to add two numbers given by the user 
```sh
.data
	number1: .asciiz "\n\n Enter the First Number:"
	number2: .asciiz "Enter the Second Number:"
	result: .asciiz "the sum is: "
.text
main:
        #first number
        li $v0, 4 
        la $a0, number1
        syscall

        li $v0, 5 
        syscall
        move $t0, $v0  
    
    	#second number
    	li $v0, 4
    	la $a0, number2
    	syscall

    	li $v0,5        
    	syscall
    	move $t1,$v0

    	#print out sum of $t2
    	li $v0, 4
    	la $a0, result
    	syscall
	
	#add two numbers
    	add $a0, $t1, $t0
    	li $v0, 1
    	syscall

    	li $v0, 10
    	syscall
```
- Create a program that display your name
```sh

.data 
out_string: .asciiz "\nAnibal Jose Rodriguez Orive\n"
.text 
main:
li $v0, 4 
la $a0, out_string 
syscall 
li $v0, 10
syscall

```