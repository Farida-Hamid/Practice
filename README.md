# Practice

## 1. [Two Sum](https://leetcode.com/problems/two-sum/):
Given an array of integer nums and an integer target, I built a function that returns indices of the two numbers such that they add up to the target without using the same element twice. I assumed that each input would have exactly one solution.

#### Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    
#### Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    
#### Example 3:  
    Input: nums = [3,3], target = 6
    Output: [0,1]

## 2. [Palindrome Number](https://leetcode.com/problems/palindrome-number/):

Given an integer x, I built a function that returns true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same forward and backward. For example, 121 is a palindrome while 123 is not.

#### Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

#### Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

#### Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## 3. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/):
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

#### Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.

#### Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.

#### Example 3:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


## 4. Array Quadruplet

Given an unsorted array of integers and a number, I wrote a function findArrayQuadruplet that finds four numbers (quadruplets) in the array that sum up to the given number. The function should return an array of these numbers in ascending order. If such a quadruplet doesn’t exist, empty array otherwise.

There may be more than one quadruplet in the array that sum to the given number. I will return the first one you encounter (considering the results are sorted).

#### Example:

    input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
    output: [0, 4, 7, 9]

## 5. Smallest Substring of All Characters

Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

#### Example:

    input:  arr = ['x','y','z'], str = "xyyzyzyx"
    output: "zyx"
