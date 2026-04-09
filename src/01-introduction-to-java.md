---
title: "Introduction to Java | FACEPrep"
info: "FACEPrep Java Programming Training - Session 01: Introduction to Java"
author: FACEPrep
transition: slide-left
mdc: true
lineNumbers: true
layout: cover
---

<h1 style="font-size: 3.5rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #a78bfa); -webkit-background-clip: text; color: transparent; margin-bottom: 0.2em; line-height: 1.1;">
Introduction to Java
</h1>
<p style="font-size: 1.4rem; color: #64748b; max-width: 600px; margin-top: 0.75em;">
The world's most popular language for enterprise applications
</p>
<div style="margin-top: 2em; display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">Session 01</span>
  <span style="padding: 0.3em 0.9em; background: rgba(167,139,250,0.1); color: #8b5cf6; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">Foundations</span>
  <span style="padding: 0.3em 0.9em; background: rgba(16,185,129,0.1); color: #10b981; border-radius: 50px; font-weight: 600; font-size: 0.85rem;">FACEPrep</span>
</div>

---
layout: default
title: "What is Java?"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">What is Java?</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; border-left: 4px solid #3b82f6;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #3b82f6; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">📚 The Fundamentals</h3>
    <ul style="margin: 0; padding-left: 1.25rem; line-height: 2; font-size: 0.95rem; color: #334155;">
      <li v-click>Java is a <strong>high-level, object-oriented</strong> language developed by <strong>James Gosling</strong> at Sun Microsystems in <strong>1995</strong></li>
      <li v-click>Originally called <strong>"Oak"</strong>, later renamed to <strong>Java</strong> ☕</li>
      <li v-click>Sun Microsystems was acquired by <strong>Oracle Corporation</strong> in <strong>2010</strong></li>
      <li v-click>Follows the principle: <strong>"Write Once, Run Anywhere" (WORA)</strong></li>
      <li v-click>Used by <strong>over 9 million developers</strong> worldwide</li>
    </ul>
  </div>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div v-click style="background: linear-gradient(135deg, #3b82f6, #6366f1); border-radius: 10px; padding: 1.25rem; color: white;">
      <p style="margin: 0; font-size: 1rem; font-weight: 600; line-height: 1.6;">Java is not just a language — it's a <strong>complete platform</strong> with its own runtime (JVM), libraries, and tools.</p>
    </div>
    <div v-click style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 1.25rem;">
      <p style="margin: 0; font-size: 0.9rem; color: #166534;">💡 <strong>Fun Fact:</strong> Java was named after Java coffee, which was a favorite of the development team!</p>
    </div>
  </div>
</div>

---
layout: default
title: "A Brief History of Java"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">A Brief History of Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #6366f1; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">⏳ Timeline</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem;">
      <tbody>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #3b82f6; white-space: nowrap;">1991</td><td style="padding: 0.4rem 0.6rem; color: #334155;">James Gosling starts the "Green Project"</td></tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #3b82f6; white-space: nowrap;">1995</td><td style="padding: 0.4rem 0.6rem; color: #334155;">Java 1.0 released by Sun Microsystems</td></tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #3b82f6; white-space: nowrap;">1998</td><td style="padding: 0.4rem 0.6rem; color: #334155;">Java 2 (J2SE, J2EE, J2ME)</td></tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #3b82f6; white-space: nowrap;">2004</td><td style="padding: 0.4rem 0.6rem; color: #334155;">Java 5 — Generics, Annotations, Enums</td></tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #3b82f6; white-space: nowrap;">2010</td><td style="padding: 0.4rem 0.6rem; color: #334155;">Oracle acquires Sun Microsystems</td></tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #3b82f6; white-space: nowrap;">2014</td><td style="padding: 0.4rem 0.6rem; color: #334155;">Java 8 — Lambda, Streams</td></tr>
        <tr v-click><td style="padding: 0.4rem 0.6rem; font-weight: 700; color: #10b981; white-space: nowrap;">2023</td><td style="padding: 0.4rem 0.6rem; color: #334155;">Java 21 LTS (latest LTS)</td></tr>
      </tbody>
    </table>
  </div>
  <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); border-radius: 10px; padding: 1.5rem; color: white; display: flex; flex-direction: column; justify-content: center;" v-click>
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; font-weight: 700;">🔑 Key Takeaway</h3>
    <p style="margin: 0; font-size: 0.95rem; line-height: 1.7;">Java has been evolving for <strong>30+ years</strong> and continues to innovate with new features every 6 months.</p>
    <p style="margin: 0.75rem 0 0; font-size: 0.9rem; opacity: 0.9;">Oracle provides <strong>Long-Term Support (LTS)</strong> releases every 2 years.</p>
  </div>
</div>

---
layout: default
title: "Why Learn Java?"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Why Learn Java?</h2>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem;">
  <div v-click style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🏢</div>
    <h4 style="margin: 0 0 0.4rem; color: #1d4ed8; font-size: 0.95rem;">Industry Demand</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;">Java ranks in the <strong>Top 3</strong> most in-demand languages. Google, Amazon, Netflix all rely on it.</p>
  </div>
  <div v-click style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🌍</div>
    <h4 style="margin: 0 0 0.4rem; color: #166534; font-size: 0.95rem;">Platform Independent</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;">Runs on <strong>any OS</strong> — Windows, Mac, Linux — without modification, thanks to the JVM.</p>
  </div>
  <div v-click style="background: #fdf4ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📚</div>
    <h4 style="margin: 0 0 0.4rem; color: #6d28d9; font-size: 0.95rem;">Rich Ecosystem</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;">Massive collection of libraries, frameworks (Spring, Hibernate), and a huge community.</p>
  </div>
  <div v-click style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🔒</div>
    <h4 style="margin: 0 0 0.4rem; color: #c2410c; font-size: 0.95rem;">Secure & Robust</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;">Built-in security, strong memory management, and exception handling make Java reliable.</p>
  </div>
  <div v-click style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🧵</div>
    <h4 style="margin: 0 0 0.4rem; color: #991b1b; font-size: 0.95rem;">Multithreaded</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;">Java supports <strong>concurrent programming</strong> out of the box for modern applications.</p>
  </div>
  <div v-click style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 1rem;">
    <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">💼</div>
    <h4 style="margin: 0 0 0.4rem; color: #166534; font-size: 0.95rem;">Career Growth</h4>
    <p style="margin: 0; font-size: 0.85rem; color: #334155; line-height: 1.5;">Average salary ranges from <strong>₹4 LPA to ₹25+ LPA</strong> depending on experience.</p>
  </div>
</div>

---
layout: default
title: "Features of Java"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Features of Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #3b82f6; font-weight: 700;">⚙️ Core Characteristics</h3>
    <ul style="margin: 0; padding-left: 1.25rem; line-height: 2.1; font-size: 0.9rem; color: #334155;">
      <li v-click><strong>🎯 Simple</strong> — Clean syntax inspired by C/C++, removes pointers</li>
      <li v-click><strong>📦 Object-Oriented</strong> — Encapsulation, Inheritance, Polymorphism</li>
      <li v-click><strong>🌐 Platform Independent</strong> — Compiles to bytecode, runs on any JVM</li>
      <li v-click><strong>🔒 Secure</strong> — No explicit pointers, bytecode verifier</li>
      <li v-click><strong>💪 Robust</strong> — Garbage collection, exception handling</li>
    </ul>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem;">
    <h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: #6366f1; font-weight: 700;">🚀 Advanced Characteristics</h3>
    <ul style="margin: 0; padding-left: 1.25rem; line-height: 2.1; font-size: 0.9rem; color: #334155;">
      <li v-click><strong>🧵 Multithreaded</strong> — Built-in concurrent execution support</li>
      <li v-click><strong>🏗️ Architecture Neutral</strong> — Bytecode not dependent on machine</li>
      <li v-click><strong>📡 Distributed</strong> — Built-in TCP/IP, RMI support</li>
      <li v-click><strong>⚡ High Performance</strong> — JIT compiler optimizes bytecode to native code</li>
    </ul>
  </div>
</div>

---
layout: default
title: "Java Editions"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Java Editions</h2>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;">
  <div v-click style="background: linear-gradient(160deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe; border-radius: 12px; padding: 1.5rem; position: relative; overflow: hidden;">
    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">☕</div>
    <h3 style="margin: 0 0 0.4rem; color: #1d4ed8; font-size: 1.1rem; font-weight: 700;">Java SE</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.8rem; color: #3b82f6; font-weight: 600; text-transform: uppercase;">Standard Edition</p>
    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.88rem; color: #334155; line-height: 1.8;">
      <li>Core Java language</li>
      <li>Desktop applications</li>
      <li>Basic APIs (I/O, Collections)</li>
    </ul>
    <div style="margin-top: 1rem;">
      <span style="padding: 0.25em 0.75em; background: rgba(59,130,246,0.15); color: #3b82f6; border-radius: 50px; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">This Course</span>
    </div>
  </div>
  <div v-click style="background: linear-gradient(160deg, #f5f3ff, #ede9fe); border: 1px solid #c4b5fd; border-radius: 12px; padding: 1.5rem;">
    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏢</div>
    <h3 style="margin: 0 0 0.4rem; color: #6d28d9; font-size: 1.1rem; font-weight: 700;">Java EE</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.8rem; color: #8b5cf6; font-weight: 600; text-transform: uppercase;">Enterprise Edition</p>
    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.88rem; color: #334155; line-height: 1.8;">
      <li>Web applications</li>
      <li>Enterprise services</li>
      <li>Servlets, JSP, EJB</li>
    </ul>
    <div style="margin-top: 1rem;">
      <span style="padding: 0.25em 0.75em; background: rgba(139,92,246,0.12); color: #8b5cf6; border-radius: 50px; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">Advanced</span>
    </div>
  </div>
  <div v-click style="background: linear-gradient(160deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 1.5rem;">
    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📱</div>
    <h3 style="margin: 0 0 0.4rem; color: #166534; font-size: 1.1rem; font-weight: 700;">Java ME</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase;">Micro Edition</p>
    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.88rem; color: #334155; line-height: 1.8;">
      <li>Mobile devices</li>
      <li>Embedded systems</li>
      <li>IoT applications</li>
    </ul>
    <div style="margin-top: 1rem;">
      <span style="padding: 0.25em 0.75em; background: rgba(16,185,129,0.12); color: #10b981; border-radius: 50px; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">Specialized</span>
    </div>
  </div>
</div>

---
layout: default
title: "Setting Up Java"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Setting Up Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="display: flex; flex-direction: column; gap: 0.85rem;">
    <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem; display: flex; gap: 0.75rem; align-items: flex-start;">
      <div style="background: #3b82f6; color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0;">1</div>
      <div><h4 style="margin: 0 0 0.3rem; font-size: 0.95rem; color: #0f172a;">Download JDK</h4><p style="margin: 0; font-size: 0.85rem; color: #475569;">Visit <code style="background: #e2e8f0; padding: 0.1em 0.4em; border-radius: 4px; font-size: 0.82rem;">oracle.com/java/downloads</code> and download JDK 21 LTS.</p></div>
    </div>
    <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem; display: flex; gap: 0.75rem; align-items: flex-start;">
      <div style="background: #6366f1; color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0;">2</div>
      <div><h4 style="margin: 0 0 0.3rem; font-size: 0.95rem; color: #0f172a;">Install JDK</h4><p style="margin: 0; font-size: 0.85rem; color: #475569;">Run installer. Note path: <code style="background: #e2e8f0; padding: 0.1em 0.4em; border-radius: 4px; font-size: 0.82rem;">C:\Program Files\Java\jdk-21</code></p></div>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.85rem;">
    <div v-click style="background: #1e293b; border-radius: 10px; padding: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem;">
        <div style="background: #6366f1; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; flex-shrink: 0;">3</div>
        <span style="color: #94a3b8; font-size: 0.8rem; font-weight: 600;">Environment Variables</span>
      </div>
      <pre style="margin: 0; color: #86efac; font-size: 0.8rem; line-height: 1.6; font-family: monospace;"># Set JAVA_HOME (Windows)
setx JAVA_HOME "C:\Program Files\Java\jdk-21"
setx PATH "%PATH%;%JAVA_HOME%\bin"</pre>
    </div>
    <div v-click style="background: #1e293b; border-radius: 10px; padding: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem;">
        <div style="background: #10b981; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; flex-shrink: 0;">4</div>
        <span style="color: #94a3b8; font-size: 0.8rem; font-weight: 600;">Verify Installation</span>
      </div>
      <pre style="margin: 0; color: #86efac; font-size: 0.8rem; line-height: 1.6; font-family: monospace;">java -version
javac -version</pre>
    </div>
  </div>
</div>

---
layout: default
title: "Understanding the Main Method"
---

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Understanding the Main Method</h2>

<div style="background: #1e293b; border-radius: 10px; padding: 1.25rem; margin-bottom: 1rem;" v-click>
  <pre style="margin: 0; color: #93c5fd; font-size: 1.05rem; font-family: monospace;">public static void main(String[] args)</pre>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem;">
    <h3 style="margin: 0 0 0.75rem; color: #3b82f6; font-size: 0.95rem; font-weight: 700;">🔍 Keyword Breakdown</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
      <tbody>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #3b82f6; font-weight: 700; white-space: nowrap;">public</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Accessible by the JVM from outside</td>
        </tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #8b5cf6; font-weight: 700;">static</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Can be called without creating an object</td>
        </tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #10b981; font-weight: 700;">void</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Returns nothing to the caller</td>
        </tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #f59e0b; font-weight: 700;">main</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Special name recognized by the JVM</td>
        </tr>
        <tr v-click>
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #ef4444; font-weight: 700; white-space: nowrap;">String[] args</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Accepts command-line arguments</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-click style="background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 10px; padding: 1.25rem; color: white; display: flex; flex-direction: column; justify-content: center;">
    <h3 style="margin: 0 0 0.75rem; font-size: 0.95rem; font-weight: 700;">💡 Why <code style="background: rgba(255,255,255,0.2); padding: 0.1em 0.4em; border-radius: 4px;">static</code>?</h3>
    <p style="margin: 0 0 0.75rem; font-size: 0.9rem; line-height: 1.6; opacity: 0.9;">Without <code style="background: rgba(255,255,255,0.2); padding: 0.1em 0.3em; border-radius: 4px;">static</code>, the JVM would need to create an object first:</p>
    <pre style="background: rgba(0,0,0,0.25); border-radius: 6px; padding: 0.75rem; margin: 0; font-size: 0.8rem; color: #c4b5fd; font-family: monospace;">HelloWorld obj = new HelloWorld();
obj.main(args);</pre>
    <p style="margin: 0.75rem 0 0; font-size: 0.88rem; opacity: 0.9;">With <code style="background: rgba(255,255,255,0.2); padding: 0.1em 0.3em; border-radius: 4px;">static</code>, JVM directly calls <code style="background: rgba(255,255,255,0.2); padding: 0.1em 0.3em; border-radius: 4px;">HelloWorld.main(args)</code></p>
  </div>
</div>

---
layout: default
title: "Print Methods in Java"
---

<script setup>
const printDemo = `System.out.println("Hello");   // new line
System.out.println("World");

System.out.print("Hello ");    // no newline
System.out.print("World\\n");

String name = "FACEPrep";
System.out.printf("Welcome to %s!", name);`;
</script>

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Print Methods in Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem;">
    <h3 style="margin: 0 0 0.75rem; color: #3b82f6; font-size: 0.95rem; font-weight: 700;">🖨️ Output Methods</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
      <thead>
        <tr style="background: #e2e8f0;">
          <th style="padding: 0.5rem 0.75rem; text-align: left; color: #475569; font-size: 0.8rem; text-transform: uppercase;">Method</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; color: #475569; font-size: 0.8rem; text-transform: uppercase;">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #3b82f6; font-weight: 600;">println()</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Prints with a <strong>new line</strong></td>
        </tr>
        <tr v-click style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #8b5cf6; font-weight: 600;">print()</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;">Prints <strong>without</strong> a new line</td>
        </tr>
        <tr v-click>
          <td style="padding: 0.5rem 0.75rem; font-family: monospace; color: #10b981; font-weight: 600;">printf()</td>
          <td style="padding: 0.5rem 0.75rem; color: #334155;"><strong>Formatted</strong> output with placeholders</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-click style="background: #1e293b; border-radius: 10px; padding: 1.25rem;">
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
      <span style="display: inline-block; width: 10px; height: 10px; background: #ef4444; border-radius: 50%;"></span>
      <span style="display: inline-block; width: 10px; height: 10px; background: #f59e0b; border-radius: 50%;"></span>
      <span style="display: inline-block; width: 10px; height: 10px; background: #10b981; border-radius: 50%;"></span>
      <span style="margin-left: 0.5rem; color: #64748b; font-size: 0.8rem; font-family: monospace;">PrintDemo.java</span>
    </div>
    <pre v-text="printDemo" style="margin: 0; font-size: 0.8rem; line-height: 1.7; font-family: monospace; color: #86efac;"></pre>
  </div>
</div>

---
layout: default
title: "Comments in Java"
---

<script setup>
const commentDemo = `// Single-line comment
System.out.println("Hello!");

/* Multi-line comment
   spanning multiple lines */
System.out.println("World!");

/**
 * Javadoc comment
 * Used to generate API documentation
 */
public class CommentDemo { ... }`;  
</script>

<h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem;">Comments in Java</h2>

<div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 1rem;">
  <div style="display: flex; flex-direction: column; gap: 0.85rem;">
    <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 0.4rem; color: #3b82f6; font-size: 0.9rem; font-weight: 700;">//  Single-line Comment</h4>
      <p style="margin: 0; font-size: 0.85rem; color: #475569;">Used for short explanations on a single line. Ignored by the compiler.</p>
    </div>
    <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 0.4rem; color: #8b5cf6; font-size: 0.9rem; font-weight: 700;">/* */ Multi-line Comment</h4>
      <p style="margin: 0; font-size: 0.85rem; color: #475569;">Used for longer explanations that span multiple lines.</p>
    </div>
    <div v-click style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 0.4rem; color: #10b981; font-size: 0.9rem; font-weight: 700;">/** */ Javadoc Comment</h4>
      <p style="margin: 0; font-size: 0.85rem; color: #475569;">Used to generate <strong>API documentation</strong> automatically.</p>
    </div>
  </div>
  <div v-click style="background: #1e293b; border-radius: 10px; padding: 1.25rem;">
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
      <span style="display: inline-block; width: 10px; height: 10px; background: #ef4444; border-radius: 50%;"></span>
      <span style="display: inline-block; width: 10px; height: 10px; background: #f59e0b; border-radius: 50%;"></span>
      <span style="display: inline-block; width: 10px; height: 10px; background: #10b981; border-radius: 50%;"></span>
      <span style="margin-left: 0.5rem; color: #64748b; font-size: 0.8rem; font-family: monospace;">CommentDemo.java</span>
    </div>
    <pre v-text="commentDemo" style="margin: 0; font-size: 0.8rem; line-height: 1.7; font-family: monospace; color: #86efac;"></pre>
  </div>
</div>

---
layout: default
title: "Program 1: Hello World"
---

<script setup>
const helloCode = `public class Main {
    public static void main(String[] args) {
        // Print a greeting message
        System.out.println("Hello, World!");
        System.out.println("Welcome to FACEPrep Java Training!");
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em;">Program 1 of 3</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Hello World</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Write a Java program that prints 'Hello, World!' and 'Welcome to FACEPrep Java Training!' on separate lines using System.out.println()."
    :initialCode="helloCode" 
  />
</div>

---
layout: default
title: "Program 2: Print Methods"
---

<script setup>
const printCode = `public class Main {
    public static void main(String[] args) {
        // Use println, print, and printf
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(139,92,246,0.1); color: #8b5cf6; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em;">Program 2 of 3</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Print Methods</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Using all three print methods (println, print, printf), demonstrate their differences. Print your name using printf with a format specifier like: printf('My name is %s', name)."
    :initialCode="printCode" 
  />
</div>

---
layout: default
title: "Program 3: Personal Introduction"
---

<script setup>
const introCode = `public class Main {
    public static void main(String[] args) {
        // Print your personal introduction
        // Name, College, Favorite Subject, Year
        
    }
}`;
</script>

<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
  <span style="padding: 0.3em 0.9em; background: rgba(16,185,129,0.1); color: #10b981; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em;">Program 3 of 3</span>
  <h2 style="margin: 0; font-size: 1.6rem; font-weight: 700;">Personal Introduction</h2>
</div>

<div class="overflow-y-auto" style="max-height: 450px; padding-bottom: 1rem;">
  <JavaRunner 
    question="Write a Java program that prints your Name, College, Favorite Subject, and the current Year — each on a new line. Use System.out.println() for each detail."
    :initialCode="introCode" 
  />
</div>

---
layout: cover
title: "Summary"
---

<h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 1.25rem;">Session 01 — Summary</h2>

<div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 1.5rem; max-width: 700px;">
  <ul style="margin: 0; padding-left: 1.4rem; line-height: 2.1; font-size: 1rem; color: inherit;">
    <li v-click>✅ <strong>Java</strong> is a high-level, object-oriented, platform-independent language</li>
    <li v-click>✅ Created by <strong>James Gosling</strong> in <strong>1995</strong> at Sun Microsystems</li>
    <li v-click>✅ <strong>"Write Once, Run Anywhere"</strong> — Java bytecode runs on any JVM</li>
    <li v-click>✅ Three editions: <strong>SE</strong>, <strong>EE</strong>, <strong>ME</strong></li>
    <li v-click>✅ Every program requires a <strong>class</strong> and a <strong>main method</strong> as the entry point</li>
    <li v-click>✅ <code style="background: rgba(255,255,255,0.15); padding: 0.1em 0.5em; border-radius: 4px;">System.out.println()</code> prints output with a new line</li>
  </ul>
</div>

<div style="margin-top: 2.5rem; opacity: 0.7; font-size: 1rem;" v-click>
  <strong>Next Session →</strong> How Java Works — JDK, JRE, JVM, Compilation & Bytecode
</div>
