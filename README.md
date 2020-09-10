# flentas-coding-assignment-lakshya
Coding Assignment for Flentas

* This assignment is coded in javascript and uses Node.JS and is solved using dynamic programming and bit masking.
* For providing input, either replace input in ```input.txt``` file
* OR create a new text file with valid input and provide path in the code file in 2nd line from top.
---
---
## Problem Statements

There are N people in village, who wants to visit Temple outside the village. To reach the temple, villagers
need to cross the river. So, they hire the only available boat which can carry at most two people. Villagers
decided to hire this boat to reach safely by sailing it by themselves. Every part of journey from village to
temple and temple to village has some cost associated with it which is given by an array A[] elements. Array
A[] has n elements, where A(i) represents the cost ith person has to pay if they sail the boat alone. If two
people sail the vehicle, the cost of travel will be the maximum of cost of two people. Calculate the minimum
total cost so that all N people can reach Temple safely.
Input Format
The first line contains, T, denoting the number of test cases. Each test case contains 2 lines each. The first line
has an integer N, denoting the number of persons. Next line contains N space separated distinct integers
denoting the cost of ith person.
---
### Constraints
1 ≤ T ≤ 10
1 ≤ N ≤ 100000
1 ≤ A[i] ≤ 1000000
---
### Output Format
For each test case, print the minimum cost required so that all people can reach kingdom.

---

```Sample Input```
4
4
300 400 600 700
2
1321 2450
3
500 123 873
4
600 800 150 700

---

```Sample Output```
2200
2450
1496
2400
