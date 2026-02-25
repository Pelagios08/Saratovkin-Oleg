# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  Doshirak Level System

**What does your calculator do?**  
This calculator translates a user's name, height, and weight into "Doshirak" noodle units to evaluate their physical stats in a fun, post-apocalyptic context. It calculates the body's equivalent in noodle packages and estimates a "Survival Forecast" in days based on caloric energy reserves. The system then uses if/else logic to categorize the user into survival ranks

---

## 2. Inputs
User Name, Height (cm), Weight (kg).

| Input Name | Unit | What it Represents |
|---|---|---|
|  Weight | kg | User body weight |
| Height | cm | User height |

I chose name, height, and weight as inputs because they are the most basic human data. Height and weight serve as the raw data needed for the calculation. These inputs are important because they allow the script to transform abstract human metrics into tangible real-world objects (like noodle packages).

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  

1. Height Formula (linear measurement):
We take the user's height in centimeters and divide it by 12 (the average length of one noodle block in centimeters). The result tells us how many noodles would need to be laid out in a row to reach the top of the user's head.

2. Weight Formula (mass measurement):
We take the user's body weight in kilograms and divide it by 0.09 (the standard weight of one noodle block is 90 grams, converted to kilograms). This tells us how many noodle blocks would balance the user on the scale.

*steps
Get input values ​​from HTML:
Using the document.getElementById().value method, the program retrieves the username (userName), as well as numeric data about height (heightInput) and weight (weightInput) from the input fields on the page.

Convert values ​​if needed:
The entered values ​​are converted from text to numeric format using parseFloat(). Logical filtering also occurs here: if the user entered height in centimeters, the program is ready to use them to divide by the length of the brick (12 cm). 

Store results in variables:
Calculation results are saved in new variables (heightInDosh, weightInDosh, survivalDays). This allows this data to be used later for displaying text on the screen and for the if/else conditions that determine the user's final rank (verdict).

---

## 4. Conditional Logic (if / else)



The program interprets the result based on the FinalWeight variable, which is your weight converted into the number of packs of Doshirak.

If finalWeight > 1000 → Rank SS (Abnormally high rate)
If finalWeight 701 - 1000 → Rank A (Master system)
If finalWeight ≤ 700 → Rank B (Newbie)
Why I chose these ranges:
I chose these thresholds (700 and 1000) based on the average human weight and game balance:

Realistic baseline: An average adult weighing 70-80 kg is approximately 770-880 packs of noodles. I set the limits so that most normal people would fall into Rank A. This makes the results "fair" for the average user.

Elite (1000+) effect: The threshold of 1000 packs (corresponding to a weight of 90 kg and above) is chosen as the "legendary" level. This creates a sense of rarity for the highest SS rank, similar to anime or RPG games.

Game progression: The lower threshold of up to 700 packs is reserved for Rank B.

---

## 5. Output

What the program displays
Calculated values: The program displays two specific results that correspond to real-world data:

Height in units: The user's height in centimeters, divided by the length of one noodle block (12 cm).

Weight in units: The user's weight in kilograms, divided by the mass of one package (0.09 kg).

Category or interpretation: The program assigns a rank (SS, A, or B).

Conclusions

State 0 (Hidden): The results container remains invisible (display: none) by default or in case of an error.

State 1 (Visible): The results container appears (display: block) only after a successful calculation, signaling the user that the process is complete.

---

## 6. Edge Cases / Unusual Inputs

Error detection: The program checks the entered data. If it detects a zero, a negative number, or an empty field, it considers the data "invalid."

A pop-up window appears on the screen, warning the user to enter valid numbers to perform the calculation correctly.

The program immediately terminates the process. No calculations are performed, and the results window remains hidden.

This protects against unrealistic results.

---

## 7. Optional Features (If You Added Any)

1. The program manages the user interface state.
It specifically checks for "false" values ​​(empty input fields) and logical impossibilities (zero or negative numbers).

Visual Precision: By rounding "Noodle Height" to one decimal place and "Noodle Weight" to a whole number, I made the data much more readable and user-friendly.

3.
I added a Status System: By converting mass into a "rank" (SS, A, or B). It's like a minigame.

---

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes 

If yes, explain briefly:
 I asked AI to create a calculator skeleton. I didn't know how to write a formula in code, and I also hadn't studied JavaScript before my studies. But the HTML and some of the CSS were done by myself because I studied them in school.
I now fully understand how components work, but I can't write the code itself from scratch because I don't know the syntax.
I used AI to search for the font.

---

## 10. Reflection

I learned how to make a working website, what a JavaScript is, understood the logic behind creating a calculator, and learned that you can use a font without downloading it to your device. I also learned a lot about CSS.
I like the site's logic, but I don't like writing it.

(2–4 sentences)
