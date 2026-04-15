---
title: "Java Fundamentals | FACEPrep"
info: "FACEPrep Java Programming Training - Session 02: Java Fundamentals"
author: FACEPrep
transition: slide-left
mdc: true
lineNumbers: true
layout: cover
---

<h1 style="font-size: 3.5rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #a78bfa); -webkit-background-clip: text; color: transparent; margin-bottom: 0.2em; line-height: 1.1;">
Java Fundamentals
</h1>
<p style="font-size: 1.4rem; color: #64748b; max-width: 600px; margin-top: 0.75em;">
Learn about Datatypes, Variables, Escape Sequences, Type Casting, and Operators
</p>
<div style="margin-top: 2em; display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">Session 02</span>
  <span style="padding: 0.3em 0.9em; background: rgba(167,139,250,0.1); color: #8b5cf6; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">Java Basics</span>
  <span style="padding: 0.3em 0.9em; background: rgba(16,185,129,0.1); color: #10b981; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">FACEPrep</span>
</div>

---
layout: default
title: "Variables in Java"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Variables in Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #3b82f6;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #3b82f6; font-weight: 700; text-transform: uppercase;">📚 Concept</h3>
    <ul style="margin: 0; padding-left: 1.25rem; line-height: 2; font-size: 0.95rem; color: #334155;">
      <li v-click>A variable is a container that holds a value.</li>
      <li v-click>Every variable must be declared with a data type before use.</li>
      <li v-click>Syntax: <code>DataType variableName = value;</code></li>
    </ul>
  </div>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div v-click style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #dc2626;">
      <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #dc2626; font-weight: 700;">❌ Naming Rules</h3>
      <p style="margin: 0; font-size: 0.9rem; color: #991b1b; line-height: 1.6;">Variable names cannot begin with a number, cannot contain spaces, and cannot be a Java keyword.</p>
    </div>
    <div v-click style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #16a34a;">
      <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #16a34a; font-weight: 700;">✅ Best Practice</h3>
      <p style="margin: 0; font-size: 0.9rem; color: #166534; line-height: 1.6;">Use meaningful variable names printed in camelCase (e.g., <code>studentAge</code>, <code>totalScore</code>).</p>
    </div>
  </div>
</div>

---
layout: default
title: "Exercise 1: Variables"
---

<script setup>
const varCode = `public class VariablesExercise {
    public static void main(String[] args) {
        // TODO: Declare a String variable 'playerName' and assign it your favorite player's name
        
        // TODO: Declare an int variable 'score' and assign it 100
        
        // TODO: Print both variables in a sentence (e.g., "Player Name: [name], Score: [score]")
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Exercise 1</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Creating Variables</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Declare a String variable for a player's name and an integer variable for their score. Print them out."
    :initialCode="varCode" 
  />
</div>

---
layout: default
title: "Data Types in Java"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Data Types in Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #ff5900;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #ff5900; font-weight: 700;">Primitive Data Types</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.9rem; color: #334155; line-height: 1.6;">These store simple values directly in memory.</p>
    <ul style="margin: 0; padding-left: 1.25rem; line-height: 2; font-size: 0.9rem; color: #334155;">
      <li><strong>Whole Numbers:</strong> <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code></li>
      <li><strong>Decimals:</strong> <code>float</code>, <code>double</code></li>
      <li><strong>Character:</strong> <code>char</code></li>
      <li><strong>Boolean:</strong> <code>boolean</code></li>
    </ul>
  </div>
  
  <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #4A90D9;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #4A90D9; font-weight: 700;">Reference Data Types</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.9rem; color: #334155; line-height: 1.6;">These store the memory address of complex objects.</p>
    <ul style="margin: 0; padding-left: 1.25rem; line-height: 2; font-size: 0.9rem; color: #334155;">
      <li><code>String</code></li>
      <li>Arrays (e.g., <code>int[]</code>)</li>
      <li>Classes and Interfaces</li>
    </ul>
  </div>
</div>

---
layout: default
title: "Exercise 2: Data Types"
---

<script setup>
const dataTypeCode = `public class DataTypesExercise {
    public static void main(String[] args) {
        // TODO: Declare a boolean 'isJavaFun' and assign it true
        
        // TODO: Declare a double 'pi' and assign it 3.14159
        
        // TODO: Declare a char 'grade' and assign it 'A'
        
        // TODO: Print all variables on separate lines
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Exercise 2</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Using Different Data Types</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Declare and initialize boolean, double, and char variables, then print them."
    :initialCode="dataTypeCode" 
  />
</div>

---
layout: two-cols
title: "Escape Sequences"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Escape Sequences</h2>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem;">
  <p style="margin: 0 0 0.75rem; font-size: 0.95rem; color: #334155;">Escape sequences allow you to insert special characters inside a String.</p>
  <ul style="margin: 0; padding-left: 1.25rem; line-height: 2.1; font-size: 0.9rem; color: #334155;">
    <li v-click><code>\n</code> : New Line</li>
    <li v-click><code>\t</code> : Tab space</li>
    <li v-click><code>\"</code> : Double Quote</li>
    <li v-click><code>\\</code> : Backslash</li>
  </ul>
</div>

::right::

<div style="background: #1e293b; border-radius: 10px; padding: 1.25rem; margin-top: 3.5rem;">
  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
    <span style="display: inline-block; width: 10px; height: 10px; background: #ef4444; border-radius: 50%;"></span>
    <span style="display: inline-block; width: 10px; height: 10px; background: #f59e0b; border-radius: 50%;"></span>
    <span style="display: inline-block; width: 10px; height: 10px; background: #10b981; border-radius: 50%;"></span>
    <span style="margin-left: 0.5rem; color: #64748b; font-size: 0.8rem; font-family: monospace;">EscapeDemo.java</span>
  </div>
  <pre style="margin: 0; font-size: 0.8rem; line-height: 1.7; font-family: monospace; color: #86efac;">public class EscapeDemo {
    public static void main(String[] args) {
        System.out.println("Hello\nWorld");
        // Output:
        // Hello
        // World
        
        System.out.println("Teacher said \"Java is fun!\"");
        // Output: Teacher said "Java is fun!"
    }
}</pre>
</div>

---
layout: default
title: "Exercise 3: Escape Sequences"
---

<script setup>
const escapeCode = `public class EscapeExercise {
    public static void main(String[] args) {
        // TODO: Print the following exact output using ONE System.out.println statement:
        // Item	    Price
        // Apple	$1.00
        // Banana	$0.50
        
        // HINT: Use \\n for new line and \\t for tab spacing
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Exercise 3</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Formatting with Escape Sequences</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Format the output table nicely using '\\n' and '\\t'."
    :initialCode="escapeCode" 
  />
</div>

---
layout: default
title: "Type Casting"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Type Casting</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #10b981;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #10b981; font-weight: 700;">Implicit Casting (Widening)</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.9rem; color: #334155; line-height: 1.6;">Automatic conversion from a smaller type to a larger type.</p>
    <code style="font-size:0.8rem; background: #e2e8f0; padding: 4px; border-radius: 4px;">byte -> short -> int -> long -> float -> double</code>
    <pre style="margin-top: 0.75rem; font-size: 0.8rem; line-height: 1.7; font-family: monospace; background: #f1f5f9; padding: 8px; border-radius: 4px;">int myInt = 9;
double myDouble = myInt; // Automatic
// myDouble becomes 9.0</pre>
  </div>
  
  <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #f59e0b;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #f59e0b; font-weight: 700;">Explicit Casting (Narrowing)</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.9rem; color: #334155; line-height: 1.6;">Manual conversion from a larger type to a smaller type.</p>
    <code style="font-size:0.8rem; background: #e2e8f0; padding: 4px; border-radius: 4px;">double -> float -> long -> int -> short -> byte</code>
    <pre style="margin-top: 0.75rem; font-size: 0.8rem; line-height: 1.7; font-family: monospace; background: #f1f5f9; padding: 8px; border-radius: 4px;">double myDouble = 9.78;
int myInt = (int) myDouble; // Manual
// myInt becomes 9</pre>
  </div>
</div>

---
layout: default
title: "Exercise 4: Type Casting"
---

<script setup>
const castingCode = `public class CastingExercise {
    public static void main(String[] args) {
        double cost = 24.99;
        
        // TODO: Create an int variable 'roundedCost' and cast 'cost' to an int
        
        
        // TODO: Print both the original double and the casted int
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Exercise 4</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Downcasting a Double</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Cast the double value into an integer. What happens to the decimal portion?"
    :initialCode="castingCode" 
  />
</div>

---
layout: default
title: "Java Operators"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Java Operators</h2>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem;">
  <div v-click style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">➕</div>
    <h4 style="margin: 0 0 0.4rem; color: #1d4ed8; font-size: 0.95rem;">Arithmetic</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;"><code>+, -, *, /, %</code> <br> Used for mathematical operations. Check out modulo (<code>%</code>) for remainders!</p>
  </div>
  <div v-click style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🟰</div>
    <h4 style="margin: 0 0 0.4rem; color: #166534; font-size: 0.95rem;">Assignment</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;"><code>=, +=, -=, *=, /=</code> <br> Assigns values to variables.</p>
  </div>
  <div v-click style="background: #fdf4ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">⚖️</div>
    <h4 style="margin: 0 0 0.4rem; color: #6d28d9; font-size: 0.95rem;">Relational</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;"><code>==, !=, >, <, >=, <=</code> <br> Compares two values. Returns <code>true</code> or <code>false</code>.</p>
  </div>
  <div v-click style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🔀</div>
    <h4 style="margin: 0 0 0.4rem; color: #c2410c; font-size: 0.95rem;">Logical</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;"><code>&&, ||, !</code> <br> Logic gates to combine conditions (AND, OR, NOT).</p>
  </div>
  <div v-click style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📈</div>
    <h4 style="margin: 0 0 0.4rem; color: #991b1b; font-size: 0.95rem;">Unary</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;"><code>++, --</code> <br> Increments or decrements a value by 1.</p>
  </div>
</div>

---
layout: default
title: "Exercise 5: Operators"
---

<script setup>
const operatorCode = `public class OperatorExercise {
    public static void main(String[] args) {
        int minutesPassed = 125;
        
        // TODO: Calculate how many complete hours have passed (use division)
        
        
        // TODO: Calculate the remaining minutes (use modulo %)
        
        
        // TODO: Print the result in this format "Hours: X, Minutes: Y"
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Exercise 5</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Arithmetic and Modulo</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Use arithmetic operators to calculate the hours and remaining minutes."
    :initialCode="operatorCode" 
  />
</div>

---
layout: center
title: "End of Session Challenges"
---

<div style="text-align: center; max-width: 800px; margin: 0 auto;">
  <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem; background: linear-gradient(135deg, #ff5900, #4A90D9); -webkit-background-clip: text; color: transparent;">Final Challenges</h2>
  
  <div style="background: rgba(255, 89, 0, 0.05); border: 2px solid rgba(255, 89, 0, 0.2); border-radius: 15px; padding: 2rem; margin: 2rem 0;">
    <p style="font-size: 1.2rem; line-height: 1.6; color: #334155; margin: 0;">It's time to test your knowledge! Complete the next three challenging exercises combining everything taught in this session.</p>
  </div>
</div>

---
layout: default
title: "Challenge 1: Temperature Conversion"
---

<script setup>
const challenge1 = `public class TempConverter {
    public static void main(String[] args) {
        double fahrenheit = 98.6;
        
        // Formula: Celsius = (Fahrenheit - 32) * 5/9
        // TODO: Calculate the celsius temperature
        
        
        // TODO: Print: 'X degrees Fahrenheit is Y degrees Celsius'
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Challenge 1</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Temperature Conversion</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Convert a temperature from Fahrenheit to Celsius using proper variables and arithmetic brackets."
    :initialCode="challenge1" 
  />
</div>

---
layout: default
title: "Challenge 2: Swap Two Variables"
---

<script setup>
const challenge2 = `public class SwapVariables {
    public static void main(String[] args) {
        int a = 15;
        int b = 27;
        
        System.out.println("Before => a: " + a + ", b: " + b);
        
        // TODO: Swap the values of a and b using a temporary variable
        
        
        
        System.out.println("After => a: " + a + ", b: " + b);
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(255,89,0,0.1); color: #ff5900; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Challenge 2</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Swap Variables</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Swap the content of two variables. Hint: Create an extra 'temp' variable."
    :initialCode="challenge2" 
  />
</div>

---
layout: default
title: "Challenge 3: Simple Interest Calculator"
---

<script setup>
const challenge3 = `public class InterestCalculator {
    public static void main(String[] args) {
        double principal = 1000.50;
        int years = 5;
        double rate = 4.5;
        
        // TODO: Calculate simple interest -> (P * R * T) / 100
        
        
        // TODO: Calculate total amount -> Principal + Interest
        
        
        // TODO: Explicitly cast the final total amount to an integer and print it
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(16,185,129,0.1); color: #10b981; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Challenge 3</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Interest Calculator</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Calculate the simple interest and final amount, then downcast the total to an int."
    :initialCode="challenge3" 
  />
</div>

---
layout: cover
title: "Summary"
---

<h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 1.25rem;">Session 02 — Summary</h2>

<div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 1.5rem; max-width: 700px;">
  <ul style="margin: 0; padding-left: 1.4rem; line-height: 2.1; font-size: 1rem; color: inherit;">
    <li v-click>✅ Stored values securely inside appropriately typed **variables**.</li>
    <li v-click>✅ Differentiated between **primitive** and **reference** Data Types.</li>
    <li v-click>✅ Navigated tricky text formatting using **escape sequences**.</li>
    <li v-click>✅ Mastered type conversions (both implicit and explicit **casting**).</li>
    <li v-click>✅ Played around with Arithmetic, Assigment, Unary, and Relational **operators**.</li>
  </ul>
</div>

<div style="margin-top: 2rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <span style="padding: 0.4em 1em; background: rgba(59,130,246,0.15); color: #93c5fd; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">Next: Session 03 (Control Flow)</span>
  <span style="padding: 0.4em 1em; background: rgba(16,185,129,0.15); color: #86efac; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">FACEPrep Java Training</span>
</div>