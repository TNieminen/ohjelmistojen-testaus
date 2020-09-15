# Task 1

## Question

Consider the parameters in methods asetaPaiva(setDay), asetaKK (setMonth)and asetaVuosi(setYear). Each of the method takes one parameter, either the new day, month or year, depending which function you are calling. From the point of view of the application field (NOT implementation, consider withblack box view for this task), list the equivalent classes for the input values of each parameter

### Equivalence partitioning 

or equivalence class partitioning (ECP)[1] is a software testing technique that divides the input data of a software unit into partitions of equivalent data from which test cases can be derived. In principle, test cases are designed to cover each partition at least once. 

The divided sets are called Equivalence Partitions or Equivalence Classes. Then we pick only one value from each partition for testing. The hypothesis behind this technique is that if one condition/value in a partition passes all others will also pass. Likewise, if one condition in a partition fails, all other conditions in that partition will fail.

This literally just means that if for instance an input cannot be a negative value, rather
than resting with -1, -2, -3 , -4 and so on, we just test with one, such as -1


### Boundary Value Analysis

https://www.guru99.com/equivalence-partitioning-boundary-value-analysis.html

In our earlier example instead of checking, one value for each partition you will check the values at the partitions like 0, 1, 10, 11 and so on. As you may observe, you test values at both valid and invalid boundaries. Boundary Value Analysis is also called range checking.

Equivalence partitioning and boundary value analysis(BVA) are closely related and can be used together at all levels of testing.

Test boundary values


### Black Box Testing
Writing a test only caring about input and output, not the internal implementation

https://www.guru99.com/black-box-testing.html


## Answer

asetaPaiva
 - should be > 0, test with 0 and 1
 - should be <= 31, test with 31 and 32, this depends on the month (test for 28,29,30,31)
 - should be a number

asetaKK
 - should be > 0, test with 0 and 1
 - should be <= 12, test with 12 and 13
 - should be a number

asetaVuosi
 - should be >= 0, test with -1 and 0
 - should be a number

## Corrected answer

Because we are using Gregorian calendar
v < 1754
v >= 1754
leap year / no leap year

Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)

# Task 2

## Question

Using boundary value analysis, list the testable boundary values for the same parameters

## Answer
Already included in the previous point, the boundary values are what I'm testing at the boundary,
such as the number 12 at asetaKK


# Task 3

## Question

Consider now the constructor of the Paivays -class. It has 3 parameters, day, month and year. Sometimes problems manifest only when the combination of the values is erroneous. As the amount of possible combinations grows fast, pairwise testing can be used to reduce the combinations. So, in this example, instead of testing all possible combinations of the 3 parameters, tests are written to cover each pair at least once. Create the pairwise combinations for testing the constructor.You can use https://pairwise.teremokgames.com/4s8/to check your combinations

## Answer

```c++
// Laiton vuosi, kuukausi tai päivä, tai päivä on liian suuri kuukauteen
 Paivays(unsigned int p, unsigned int k, unsigned int v);
```
- Test day with month (too large or small for a month)
- Test month (1-12)
- Test year (0 - infinity)



# Task 4

## Question
You can use equivalent classes for internal details of the methods too. Consider etene(advance)-method and the parameter n. What kind of value ranges cause the control structure to choose different pathsRemember to consider the combinations of parameter and the member variables.

## Answer

```c++
  /*!
   * \brief etene siirtää päiväystä eteenpäin. etene (advance) moves date forward.
   * \param n montako päivää siirrytään. How many days will be moved
   * \pre -
   * \post Päiväystä on siirretty n päivää eteenpäin. Date has moved n days forward.
   */
    void etene(unsigned int n)
```

if n < 0 throw exception

if this.day + n > maxDaysInMonth(this.month) 
  then 
    this.month += 1
    if(this.month > 12)
      then
        this.month = 1
        this.year += 1
    this.day = this.day + n - maxDaysInMonth

else
  this.day += n


# Task 5

## Question

Sometimes it can be useful to use the methods for return values instead of parameters. After identifying the test cases from return values, one must find out the suitable input values to test that the output is produced properly. Consider annaViikonpaiva(getDayOfTheWeek)-method and generate tests from the return values’ point of view

## Answer


Test with date sep 15 2020, which we know is Tuesday
Test with date sep 14 2020, which we know is W