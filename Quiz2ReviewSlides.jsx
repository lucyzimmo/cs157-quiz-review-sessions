// CS157 Quiz 2 Review Session Slides
// Copy these slides and paste them into your App.jsx slides array

// Slide 1: Title Slide
<TitleSlide
  title="CS157 Quiz 2 Review"
  subtitle="Relational Logic & Fitch Proofs"
  instructor="Quiz 2 Review Session"
/>,

// Slide 2: Overview
<ContentSlide title="Today's Topics">
  <div style={{ fontSize: '32px', lineHeight: '2' }}>
    <p>We'll cover everything you need for Quiz 2:</p>
    <ul style={{ marginTop: '30px' }}>
      <li>Relational logic structure and evaluation</li>
      <li>Model evaluation with quantifiers</li>
      <li>Validity vs. contingency vs. unsatisfiability</li>
      <li>True/False entailment problems</li>
      <li>Fitch proofs with ∀, ∃, ↔</li>
      <li><strong>Special focus:</strong> Existential Elimination (∃ Elimination)</li>
    </ul>
  </div>
</ContentSlide>,

// Slide 3: Section Divider
<SectionSlide
  title="Part 1: Relational Logic"
  subtitle="Models, Evaluation & Classification"
/>,

// Slide 4: Relational Logic Setup
<ContentSlide title="Relational Logic Setup">
  <div style={{ fontSize: '28px', lineHeight: '1.8' }}>
    <p><strong>Key Components:</strong></p>
    <ul style={{ marginTop: '20px', marginBottom: '30px' }}>
      <li><strong>Object constants:</strong> a, b, c (individuals in the domain)</li>
      <li><strong>Relation constants:</strong> p(·), q(·,·) (properties and relations)
        <ul style={{ fontSize: '24px', marginTop: '10px' }}>
          <li><strong>Arity</strong> = number of arguments: unary p(·), binary q(·,·), ternary r(·,·,·)</li>
        </ul>
      </li>
      <li><strong>Variables:</strong> x, y (placeholders for quantification)</li>
      <li><strong>Quantifiers:</strong> ∀x (all objects), ∃x (some object)</li>
    </ul>

    <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <p><strong>Example Model:</strong></p>
      <p style={{ fontFamily: 'monospace', fontSize: '26px', marginTop: '15px' }}>
        Domain = {'{a, b}'}<br/>
        p(a) = T, p(b) = F<br/>
        q(a,a) = T, q(a,b) = T, q(b,a) = T, q(b,b) = F
      </p>
    </div>
  </div>
</ContentSlide>,

// Slide 5: Practice Evaluation
<ContentSlide title="Practice: Evaluate in the Model">
  <div style={{ fontSize: '28px', lineHeight: '1.8' }}>
    <div style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
      <p style={{ fontFamily: 'monospace' }}>
        Domain = {'{a, b}'}<br/>
        p(a) = T, p(b) = F<br/>
        q(a,a) = T, q(a,b) = T, q(b,a) = T, q(b,b) = F
      </p>
    </div>

    <p><strong>What is the truth value of each formula?</strong></p>
    <ol style={{ marginTop: '25px', fontSize: '32px', lineHeight: '2' }}>
      <li>∀x p(x)</li>
      <li>∃x p(x)</li>
      <li>∀x∃y q(x,y)</li>
      <li>∃x∀y q(x,y)</li>
    </ol>
  </div>
</ContentSlide>,

// Slide 6: Practice Evaluation - Answers
<ContentSlide title="Practice: Evaluate in the Model (Answers)">
  <div style={{ fontSize: '26px', lineHeight: '1.6' }}>
    <div style={{ backgroundColor: '#fff3e0', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
      <p style={{ fontFamily: 'monospace', fontSize: '22px' }}>
        Domain = {'{a, b}'}, p(a) = T, p(b) = F, q(a,a) = T, q(a,b) = T, q(b,a) = T, q(b,b) = F
      </p>
    </div>

    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#2196f3', color: 'white' }}>
          <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Formula</th>
          <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Expansion</th>
          <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Truth</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#e3f2fd' }}>
          <td style={{ padding: '12px', fontSize: '28px' }}>∀x p(x)</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>p(a) ∧ p(b)</td>
          <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f' }}>False</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', fontSize: '28px' }}>∃x p(x)</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>p(a) ∨ p(b)</td>
          <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c' }}>True</td>
        </tr>
        <tr style={{ backgroundColor: '#e3f2fd' }}>
          <td style={{ padding: '12px', fontSize: '28px' }}>∀x∃y q(x,y)</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>(q(a,a)∨q(a,b)) ∧ (q(b,a)∨q(b,b))</td>
          <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c' }}>True</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', fontSize: '28px' }}>∃x∀y q(x,y)</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>(q(a,a)∧q(a,b)) ∨ (q(b,a)∧q(b,b))</td>
          <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f' }}>False</td>
        </tr>
      </tbody>
    </table>
  </div>
</ContentSlide>,

// Slide 7: Quantifiers Explained
<ContentSlide title="Understanding Quantifiers">
  <div style={{ fontSize: '28px', lineHeight: '1.8' }}>
    <div style={{ backgroundColor: '#e8eaf6', padding: '22px', borderRadius: '8px', marginBottom: '25px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>Universal Quantification (∀):</p>
      <p style={{ marginBottom: '10px' }}>Asserts that <strong>all objects</strong> have a certain property.</p>
      <p style={{ fontFamily: 'monospace', fontSize: '26px', backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '5px' }}>
        ∀x.(p(x) ⇒ q(x,x))
      </p>
      <p style={{ fontSize: '24px', marginTop: '10px', fontStyle: 'italic' }}>
        "If p holds of any object, then q holds of that object and itself"
      </p>
    </div>

    <div style={{ backgroundColor: '#f3e5f5', padding: '22px', borderRadius: '8px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>Existential Quantification (∃):</p>
      <p style={{ marginBottom: '10px' }}>Asserts that <strong>some object</strong> has a certain property.</p>
      <p style={{ fontFamily: 'monospace', fontSize: '26px', backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '5px' }}>
        ∃x.(p(x) ∧ q(x,x))
      </p>
      <p style={{ fontSize: '24px', marginTop: '10px', fontStyle: 'italic' }}>
        "There exists an object that satisfies p and, when paired with itself, satisfies q"
      </p>
    </div>
  </div>
</ContentSlide>,

// Slide 8: Valid / Contingent / Unsatisfiable
<ContentSlide title="Classification: Valid / Contingent / Unsatisfiable">
  <div style={{ fontSize: '26px', lineHeight: '1.7' }}>
    <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>Three Disjoint Categories:</p>

    <div style={{ backgroundColor: '#e8f5e9', padding: '18px', borderRadius: '8px', marginBottom: '15px' }}>
      <p><strong>Valid:</strong> Satisfied by every truth assignment (always true)</p>
    </div>
    <div style={{ backgroundColor: '#fff9c4', padding: '18px', borderRadius: '8px', marginBottom: '15px' }}>
      <p><strong>Contingent:</strong> Satisfied by some truth assignments, falsified by others</p>
    </div>
    <div style={{ backgroundColor: '#ffebee', padding: '18px', borderRadius: '8px', marginBottom: '25px' }}>
      <p><strong>Unsatisfiable:</strong> Not satisfied by any truth assignment (always false)</p>
    </div>

    <div style={{ backgroundColor: '#e3f2fd', padding: '18px', borderRadius: '8px', fontSize: '24px' }}>
      <p><strong>Also note:</strong></p>
      <p style={{ marginTop: '10px' }}><strong>Satisfiable</strong> = valid OR contingent (true in ≥1 model)</p>
      <p style={{ marginTop: '8px' }}><strong>Falsifiable</strong> = contingent OR unsatisfiable (false in ≥1 model)</p>
    </div>
  </div>
</ContentSlide>,

// Slide 8: Classification Examples
<ContentSlide title="Classification Examples">
  <div style={{ fontSize: '24px' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#673ab7', color: 'white' }}>
          <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Sentence</th>
          <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Classification</th>
          <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#f3e5f5' }}>
          <td style={{ padding: '12px', fontSize: '26px' }}>p(a) ∨ ¬p(a)</td>
          <td style={{ padding: '12px', textAlign: 'center' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show classification</summary>
              <span style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#388e3c', fontSize: '26px' }}>Valid</span>
            </details>
          </td>
          <td style={{ padding: '12px' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show reason</summary>
              <span style={{ display: 'block', marginTop: '8px' }}>Always true (tautology)</span>
            </details>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '12px', fontSize: '26px' }}>p(a) ∧ ¬p(a)</td>
          <td style={{ padding: '12px', textAlign: 'center' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show classification</summary>
              <span style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#d32f2f', fontSize: '26px' }}>Unsatisfiable</span>
            </details>
          </td>
          <td style={{ padding: '12px' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show reason</summary>
              <span style={{ display: 'block', marginTop: '8px' }}>Always false (contradiction)</span>
            </details>
          </td>
        </tr>
        <tr style={{ backgroundColor: '#f3e5f5' }}>
          <td style={{ padding: '12px', fontSize: '26px' }}>p(a) ∨ p(b)</td>
          <td style={{ padding: '12px', textAlign: 'center' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show classification</summary>
              <span style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#f57c00', fontSize: '26px' }}>Contingent</span>
            </details>
          </td>
          <td style={{ padding: '12px' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show reason</summary>
              <span style={{ display: 'block', marginTop: '8px' }}>Depends on model</span>
            </details>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '12px', fontSize: '26px' }}>∀x p(x) → ∃x p(x)</td>
          <td style={{ padding: '12px', textAlign: 'center' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show classification</summary>
              <span style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#388e3c', fontSize: '26px' }}>Valid</span>
            </details>
          </td>
          <td style={{ padding: '12px' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show reason</summary>
              <span style={{ display: 'block', marginTop: '8px' }}>If all true, at least one true</span>
            </details>
          </td>
        </tr>
        <tr style={{ backgroundColor: '#f3e5f5' }}>
          <td style={{ padding: '12px', fontSize: '26px' }}>∃x p(x) → ∀x p(x)</td>
          <td style={{ padding: '12px', textAlign: 'center' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show classification</summary>
              <span style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#f57c00', fontSize: '26px' }}>Contingent</span>
            </details>
          </td>
          <td style={{ padding: '12px' }}>
            <details style={{ margin: 0 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1565c0' }}>Show reason</summary>
              <span style={{ display: 'block', marginTop: '8px' }}>Counterexample where only one holds</span>
            </details>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</ContentSlide>,

// Slide 9: Section Divider
<SectionSlide
  title="Part 2: Entailment"
  subtitle="True/False Practice Problems"
/>,

// Slide 10: Entailment Practice
<ContentSlide title="True/False Entailment Practice">
  <div style={{ fontSize: '26px', lineHeight: '1.6' }}>
    <p style={{ marginBottom: '25px' }}><strong>Let Δ be a set of sentences, and p, q relational constants.</strong></p>
    <p style={{ marginBottom: '20px' }}>Say whether each entailment is <strong>True</strong> or <strong>False</strong>:</p>

    <ol style={{ fontSize: '28px', lineHeight: '2.2' }}>
      <li>p(a) ⊨ (p(a) ∨ p(b))</li>
      <li>p(a) ⊨ (p(a) ∧ p(b))</li>
      <li>∀x p(x) ⊨ ∃x p(x)</li>
      <li>∃x p(x) ⊨ ∀x p(x)</li>
      <li>∃y∀x q(x,y) ⊨ ∀x∃y q(x,y)</li>
      <li>∀x∀y q(x,y) ⊨ ∀x∀y q(y,x)</li>
    </ol>
  </div>
</ContentSlide>,

// Slide 11: Entailment Practice - Answers
<ContentSlide title="True/False Entailment Practice (Answers)">
  <div style={{ fontSize: '24px' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
          <th style={{ padding: '12px', textAlign: 'left', fontSize: '24px' }}>Statement</th>
          <th style={{ padding: '12px', textAlign: 'center', fontSize: '24px' }}>Answer</th>
          <th style={{ padding: '12px', textAlign: 'left', fontSize: '24px' }}>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#e3f2fd' }}>
          <td style={{ padding: '10px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
          <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '26px' }}>✅ True</td>
          <td style={{ padding: '10px' }}>Disjunction introduction</td>
        </tr>
        <tr>
          <td style={{ padding: '10px' }}>p(a) ⊨ (p(a) ∧ p(b))</td>
          <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '26px' }}>❌ False</td>
          <td style={{ padding: '10px' }}>Second conjunct not guaranteed</td>
        </tr>
        <tr style={{ backgroundColor: '#e3f2fd' }}>
          <td style={{ padding: '10px' }}>∀x p(x) ⊨ ∃x p(x)</td>
          <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '26px' }}>✅ True</td>
          <td style={{ padding: '10px' }}>Universal implies existential</td>
        </tr>
        <tr>
          <td style={{ padding: '10px' }}>∃x p(x) ⊨ ∀x p(x)</td>
          <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '26px' }}>❌ False</td>
          <td style={{ padding: '10px' }}>Countermodel exists</td>
        </tr>
        <tr style={{ backgroundColor: '#e3f2fd' }}>
          <td style={{ padding: '10px' }}>∃y∀x q(x,y) ⊨ ∀x∃y q(x,y)</td>
          <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '26px' }}>✅ True</td>
          <td style={{ padding: '10px' }}>Quantifier order (stronger → weaker)</td>
        </tr>
        <tr>
          <td style={{ padding: '10px' }}>∀x∀y q(x,y) ⊨ ∀x∀y q(y,x)</td>
          <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '26px' }}>✅ True</td>
          <td style={{ padding: '10px' }}>Variable renaming (bound vars)</td>
        </tr>
      </tbody>
    </table>
  </div>
</ContentSlide>,

// Slide 12: Section Divider
<SectionSlide
  title="Part 3: Fitch Proofs"
  subtitle="Rules & Strategies"
/>,

// Slide 13: Fitch Rules Review
<ContentSlide title="Fitch Proof Rules Review">
  <div style={{ fontSize: '28px', lineHeight: '1.9' }}>
    <p style={{ marginBottom: '25px', fontWeight: 'bold' }}>Key rules for Quiz 2:</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ backgroundColor: '#e8eaf6', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Quantifier Rules:</p>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Universal Elimination (∀ Elimination):</strong> From ∀x φ(x), infer φ(c)</li>
              <li><strong>Universal Introduction (∀ Introduction):</strong> If φ(c) holds for an arbitrary c, infer ∀x φ(x)</li>
              <li><strong>Existential Introduction (∃ Introduction):</strong> From φ(c), infer ∃x φ(x)</li>
              <li><strong>Existential Elimination (∃ Elimination):</strong> From ∃x φ(x) and a subproof assuming φ(c) ⇒ ψ, conclude ψ</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Connective Rules:</p>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Conjunction Introduction (∧ Introduction):</strong> From φ and ψ, infer φ ∧ ψ</li>
              <li><strong>Conjunction Elimination (∧ Elimination):</strong> From φ ∧ ψ, infer φ (or ψ)</li>
              <li><strong>Disjunction Introduction (∨ Introduction):</strong> From φ, infer φ ∨ ψ</li>
              <li><strong>Disjunction Elimination (∨ Elimination):</strong> From φ ∨ ψ, φ ⇒ χ, and ψ ⇒ χ, infer χ</li>
              <li><strong>Implication Introduction (→ Introduction):</strong> If assuming φ leads to ψ, infer φ ⇒ ψ</li>
              <li><strong>Implication Elimination (→ Elimination):</strong> From φ ⇒ ψ and φ, infer ψ</li>
              <li><strong>Biconditional Introduction (↔ Introduction):</strong> From φ ⇒ ψ and ψ ⇒ φ, infer φ ↔ ψ</li>
              <li><strong>Biconditional Elimination (↔ Elimination):</strong> From φ ↔ ψ, infer either φ ⇒ ψ or ψ ⇒ φ</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#e0f2f1', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Optional Rules:</p>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Negation Introduction (¬ Introduction):</strong> If assuming φ leads to a contradiction, infer ¬φ</li>
              <li><strong>Negation Elimination (¬ Elimination):</strong> From ¬¬φ, infer φ</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Proof Vocabulary:</p>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Premise:</strong> A given sentence assumed to be true</li>
              <li><strong>Assumption:</strong> A temporary sentence assumed inside a subproof</li>
              <li><strong>Goal:</strong> The target sentence to be derived</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentSlide>,

// Slide 14: Practice Proof 1 - Problem Statement
<ContentSlide title="Practice Proof 1">
  <div style={{ fontSize: '28px', lineHeight: '2' }}>
    <div style={{ backgroundColor: '#e3f2fd', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Premises:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '32px', marginLeft: '20px' }}>
        1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<br/>
        2. ¬p(a,b)
      </p>
      <p style={{ fontWeight: 'bold', marginTop: '25px' }}>Goal:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '32px', marginLeft: '20px' }}>
        p(b,a)
      </p>
    </div>

    <p style={{ fontWeight: 'bold', color: '#1565c0' }}>Hint:</p>
    <ul style={{ marginLeft: '20px' }}>
      <li>Instantiate both quantifiers with a, b</li>
      <li>Use Disjunction Elimination with the negated premise</li>
    </ul>
  </div>
</ContentSlide>,

// Slide 15: Practice Proof 1 - Step 1-2 (Premises)
<ContentSlide title="Practice Proof 1 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ¬p(a,b)<span style={{ marginLeft: '260px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '3px solid #333', color: '#1976d2', fontFamily: 'sans-serif' }}>
      <strong>Goal: p(b,a)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 16: Practice Proof 1 - Step 1-3
<ContentSlide title="Practice Proof 1 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ¬p(a,b)<span style={{ marginLeft: '260px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. ∀Y (p(a,Y) ∨ p(Y,a))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#1976d2', fontFamily: 'sans-serif' }}>
      <strong>Goal: p(b,a)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 17: Practice Proof 1 - Step 1-4
<ContentSlide title="Practice Proof 1 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ¬p(a,b)<span style={{ marginLeft: '260px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. ∀Y (p(a,Y) ∨ p(Y,a))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>4. p(a,b) ∨ p(b,a)<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#1976d2', fontFamily: 'sans-serif' }}>
      <strong>Goal: p(b,a)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 18: Practice Proof 1 - Complete
<ContentSlide title="Practice Proof 1 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ¬p(a,b)<span style={{ marginLeft: '260px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. ∀Y (p(a,Y) ∨ p(Y,a))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>4. p(a,b) ∨ p(b,a)<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
      <div>5. p(b,a)<span style={{ marginLeft: '240px', color: '#666', fontFamily: 'sans-serif' }}>Disjunction Elimination: 4, 2</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif' }}>
      <strong>✓ Goal achieved: p(b,a)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 19: Practice Proof 2 - Problem Statement
<ContentSlide title="Practice Proof 2">
  <div style={{ fontSize: '28px', lineHeight: '2' }}>
    <div style={{ backgroundColor: '#fff3e0', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Premises:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '32px', marginLeft: '20px' }}>
        1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<br/>
        2. ∀X∀Y ¬p(X,Y)
      </p>
      <p style={{ fontWeight: 'bold', marginTop: '25px' }}>Goal:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '32px', marginLeft: '20px' }}>
        ∀X q(X)
      </p>
    </div>

    <p style={{ fontWeight: 'bold', color: '#e65100' }}>Hint:</p>
    <ul style={{ marginLeft: '20px' }}>
      <li>Derive ⊥ (contradiction) first</li>
      <li>Use <strong>Explosion</strong> (⊥ ⊨ φ) to infer q(a)</li>
      <li>Then generalize with Universal Introduction (∀ Introduction)</li>
    </ul>
  </div>
</ContentSlide>,

// Slide 20: Practice Proof 2 - Step 1-2 (Premises)
<ContentSlide title="Practice Proof 2 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∀X∀Y ¬p(X,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif', fontSize: '28px' }}>
      <strong>Goal: ∀X q(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 21: Practice Proof 2 - Step 1-3
<ContentSlide title="Practice Proof 2 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∀X∀Y ¬p(X,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. p(a,a) ∨ p(a,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif', fontSize: '28px' }}>
      <strong>Goal: ∀X q(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 22: Practice Proof 2 - Step 1-4
<ContentSlide title="Practice Proof 2 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∀X∀Y ¬p(X,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. p(a,a) ∨ p(a,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>4. ¬p(a,a)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif', fontSize: '28px' }}>
      <strong>Goal: ∀X q(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 23: Practice Proof 2 - Step 1-5
<ContentSlide title="Practice Proof 2 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∀X∀Y ¬p(X,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. p(a,a) ∨ p(a,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>4. ¬p(a,a)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
      <div>5. ⊥<span style={{ marginLeft: '270px', color: '#666', fontFamily: 'sans-serif' }}>Contradiction Introduction: 3, 4</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif', fontSize: '28px' }}>
      <strong>Goal: ∀X q(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 24: Practice Proof 2 - Step 1-6
<ContentSlide title="Practice Proof 2 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∀X∀Y ¬p(X,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. p(a,a) ∨ p(a,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>4. ¬p(a,a)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
      <div>5. ⊥<span style={{ marginLeft: '270px', color: '#666', fontFamily: 'sans-serif' }}>Contradiction Introduction: 3, 4</span></div>
      <div>6. q(a)<span style={{ marginLeft: '240px', color: '#666', fontFamily: 'sans-serif' }}>Explosion (Bottom Elimination): 5</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif', fontSize: '28px' }}>
      <strong>Goal: ∀X q(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 25: Practice Proof 2 - Complete
<ContentSlide title="Practice Proof 2 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ∨ p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∀X∀Y ¬p(X,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
      <div>3. p(a,a) ∨ p(a,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>4. ¬p(a,a)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
      <div>5. ⊥<span style={{ marginLeft: '270px', color: '#666', fontFamily: 'sans-serif' }}>Contradiction Introduction: 3, 4</span></div>
      <div>6. q(a)<span style={{ marginLeft: '240px', color: '#666', fontFamily: 'sans-serif' }}>Explosion (Bottom Elimination): 5</span></div>
      <div>7. ∀X q(X)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Universal Introduction: 6</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif', fontSize: '28px' }}>
      <strong>✓ Goal achieved: ∀X q(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 26: Existential Elimination Deep Dive
<SectionSlide
  title="Existential Elimination (∃ Elimination)"
  subtitle="The Tricky Rule"
/>,

// Slide 27: Understanding ∃E
<ContentSlide title="Understanding Existential Elimination">
  <div style={{ fontSize: '28px', lineHeight: '1.8' }}>
    <p style={{ marginBottom: '30px', fontSize: '32px', fontWeight: 'bold', color: '#6a1b9a' }}>
      Think of Existential Elimination (∃ Elimination) as "Disjunction Elimination on steroids"
    </p>

    <div style={{ backgroundColor: '#f3e5f5', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>The 5 Steps to Remember:</p>
      <ol style={{ fontSize: '28px', lineHeight: '2', marginLeft: '20px' }}>
        <li>Assume the scope of the existential</li>
        <li>Prove your goal under that assumption</li>
        <li>Exit the assumption with Implication Introduction</li>
        <li>Apply Universal Introduction if needed to generalize</li>
        <li>Use Existential Elimination to conclude</li>
      </ol>
    </div>

    <div style={{ backgroundColor: '#ede7f6', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '26px' }}>
      <div>∃x φ(x)</div>
      <div>│</div>
      <div>├── Assume φ(c)</div>
      <div>│   ⋮</div>
      <div>│   derive ψ</div>
      <div>│</div>
      <div>└── therefore ψ</div>
    </div>
  </div>
</ContentSlide>,

// Slide 28: Practice Proof 3 - Problem Statement
<ContentSlide title="Practice Proof 3 (Existential Elimination)">
  <div style={{ fontSize: '28px', lineHeight: '2' }}>
    <div style={{ backgroundColor: '#e8f5e9', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Premise:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '32px', marginLeft: '20px' }}>
        ∃X (p(X) ∧ q(X))
      </p>
      <p style={{ fontWeight: 'bold', marginTop: '25px' }}>Goal:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '32px', marginLeft: '20px' }}>
        ∃X p(X)
      </p>
    </div>

    <p style={{ fontWeight: 'bold', color: '#2e7d32' }}>Strategy:</p>
    <ul style={{ marginLeft: '20px' }}>
      <li>Use Existential Elimination (∃ Elimination) to assume a witness: p(c) ∧ q(c)</li>
      <li>Extract p(c) using Conjunction Elimination</li>
      <li>Reintroduce the existential using Existential Introduction</li>
    </ul>
  </div>
</ContentSlide>,

// Slide 29: Practice Proof 3 - Step 1 (Premise)
<ContentSlide title="Practice Proof 3 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '3px solid #333', color: '#2e7d32', fontFamily: 'sans-serif' }}>
      <strong>Goal: ∃X p(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 30: Practice Proof 3 - Step 1-2
<ContentSlide title="Practice Proof 3 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', borderLeft: '4px solid #9c27b0', paddingLeft: '20px' }}>
      <div>2. │ p(c) ∧ q(c)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#2e7d32', fontFamily: 'sans-serif' }}>
      <strong>Goal: ∃X p(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 31: Practice Proof 3 - Step 1-3
<ContentSlide title="Practice Proof 3 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', borderLeft: '4px solid #9c27b0', paddingLeft: '20px' }}>
      <div>2. │ p(c) ∧ q(c)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>3. │ p(c)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Conjunction Elimination: 2</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#2e7d32', fontFamily: 'sans-serif' }}>
      <strong>Goal: ∃X p(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 32: Practice Proof 3 - Step 1-4
<ContentSlide title="Practice Proof 3 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', borderLeft: '4px solid #9c27b0', paddingLeft: '20px' }}>
      <div>2. │ p(c) ∧ q(c)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>3. │ p(c)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Conjunction Elimination: 2</span></div>
      <div>4. │ ∃X p(X)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 3</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#2e7d32', fontFamily: 'sans-serif' }}>
      <strong>Goal: ∃X p(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 33: Practice Proof 3 - Complete
<ContentSlide title="Practice Proof 3 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
    <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '20px', borderLeft: '4px solid #9c27b0', paddingLeft: '20px' }}>
      <div>2. │ p(c) ∧ q(c)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>3. │ p(c)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Conjunction Elimination: 2</span></div>
      <div>4. │ ∃X p(X)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 3</span></div>
    </div>
    <div style={{ marginTop: '10px' }}>5. ∃X p(X)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Existential Elimination: 1, 2-4</span></div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif' }}>
      <strong>✓ Goal achieved: ∃X p(X)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 34: Practice Proof 4 - Problem Statement
<ContentSlide title="Practice Proof 4 (Complex Existential Elimination)">
  <div style={{ fontSize: '26px', lineHeight: '2' }}>
    <div style={{ backgroundColor: '#e1f5fe', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Premises:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '30px', marginLeft: '20px' }}>
        1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<br/>
        2. ∃X q(X,X)
      </p>
      <p style={{ fontWeight: 'bold', marginTop: '25px' }}>Goal:</p>
      <p style={{ fontFamily: 'monospace', fontSize: '30px', marginLeft: '20px' }}>
        ∀X∃Y p(X,Y)
      </p>
    </div>

    <p style={{ fontWeight: 'bold', color: '#01579b' }}>Strategy:</p>
    <ul style={{ marginLeft: '20px', fontSize: '26px' }}>
      <li>Use Existential Elimination (∃ Elimination) to assume witness c where q(c,c) holds</li>
      <li>From premise 1, instantiate to get p(X,c) ↔ q(c,c)</li>
      <li>Since q(c,c) is true, infer p(X,c)</li>
      <li>Introduce ∃Y p(X,Y), then generalize to ∀X∃Y p(X,Y)</li>
    </ul>
  </div>
</ContentSlide>,

// Slide 35: Practice Proof 4 - Step 1-2 (Premises)
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 36: Practice Proof 4 - Step 1-3
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 37: Practice Proof 4 - Step 1-4
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>4. │ ∀Y (p(a,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 38: Practice Proof 4 - Step 1-5
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>4. │ ∀Y (p(a,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>5. │ p(a,c) ↔ q(c,c)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 39: Practice Proof 4 - Step 1-6
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>4. │ ∀Y (p(a,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>5. │ p(a,c) ↔ q(c,c)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>
      <div>6. │ p(a,c)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 5, 3</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 40: Practice Proof 4 - Step 1-7
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>4. │ ∀Y (p(a,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>5. │ p(a,c) ↔ q(c,c)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>
      <div>6. │ p(a,c)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 5, 3</span></div>
      <div>7. │ ∃Y p(a,Y)<span style={{ marginLeft: '145px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 6</span></div>
    </div>

    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 41: Practice Proof 4 - Step 1-8
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>4. │ ∀Y (p(a,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>5. │ p(a,c) ↔ q(c,c)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>
      <div>6. │ p(a,c)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 5, 3</span></div>
      <div>7. │ ∃Y p(a,Y)<span style={{ marginLeft: '145px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 6</span></div>
    </div>
    <div style={{ marginTop: '10px' }}>8. ∃Y p(a,Y)<span style={{ marginLeft: '150px', color: '#666', fontFamily: 'sans-serif' }}>Existential Elimination: 2, 3-7</span></div>

    <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>Goal: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 42: Practice Proof 4 - Complete
<ContentSlide title="Practice Proof 4 - Solution">
  <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
    <div>1. ∀X∀Y (p(X,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
    <div>2. ∃X q(X,X)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

    <div style={{ marginTop: '15px', borderLeft: '4px solid #0277bd', paddingLeft: '20px' }}>
      <div>3. │ q(c,c)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
      <div>4. │ ∀Y (p(a,Y) ↔ q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
      <div>5. │ p(a,c) ↔ q(c,c)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>
      <div>6. │ p(a,c)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 5, 3</span></div>
      <div>7. │ ∃Y p(a,Y)<span style={{ marginLeft: '145px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 6</span></div>
    </div>
    <div style={{ marginTop: '10px' }}>8. ∃Y p(a,Y)<span style={{ marginLeft: '150px', color: '#666', fontFamily: 'sans-serif' }}>Existential Elimination: 2, 3-7</span></div>
    <div>9. ∀X∃Y p(X,Y)<span style={{ marginLeft: '135px', color: '#666', fontFamily: 'sans-serif' }}>Universal Introduction: 8</span></div>

    <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif', fontSize: '26px' }}>
      <strong>✓ Goal achieved: ∀X∃Y p(X,Y)</strong>
    </div>
  </div>
</ContentSlide>,

// Slide 43: Q&A and Strategy Recap
<ContentSlide title="Strategy Recap & Key Takeaways">
  <div style={{ fontSize: '28px', lineHeight: '2' }}>
    <p style={{ fontWeight: 'bold', marginBottom: '20px', color: '#d32f2f' }}>Common Mistakes to Avoid:</p>
    <ul style={{ marginBottom: '30px' }}>
      <li>Confusing Existential Introduction (∃ Introduction) with Existential Elimination (∃ Elimination)</li>
      <li>Forgetting to cite the assumption range in Existential Elimination (∃ Elimination)</li>
      <li>Using a constant that's already appeared in that Existential Elimination subproof</li>
    </ul>

    <div style={{ backgroundColor: '#fff9c4', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Pro Tip for Quiz 2:</p>
      <p>If you're stuck on a Fitch proof — map your quantifiers first. Then check which rule (Universal Introduction (∀ Introduction), Existential Elimination (∃ Elimination), Conjunction Elimination (∧ Elimination), Implication Introduction (→ Introduction)) gives you a path to the goal.</p>
    </div>

    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Questions to Ask Yourself:</p>
    <ul>
      <li>What's the difference between Existential Introduction and Existential Elimination?</li>
      <li>How can we test validity without full truth tables?</li>
      <li>What's the main failure mode for Existential Elimination (∃ Elimination) proofs?</li>
    </ul>
  </div>
</ContentSlide>,

// Slide 44: Final Review Checklist
<ContentSlide title="Quiz 2 Checklist">
  <div style={{ fontSize: '30px', lineHeight: '2' }}>
    <p style={{ fontWeight: 'bold', marginBottom: '25px', fontSize: '34px' }}>Make sure you can:</p>

    <div style={{ fontSize: '28px' }}>
      <div style={{ marginBottom: '15px' }}>
        ✓ Evaluate formulas in a given model
      </div>
      <div style={{ marginBottom: '15px' }}>
        ✓ Classify sentences as valid/contingent/unsatisfiable
      </div>
      <div style={{ marginBottom: '15px' }}>
        ✓ Determine if entailment holds (True/False questions)
      </div>
      <div style={{ marginBottom: '15px' }}>
        ✓ Apply Universal Elimination (∀ Elimination) and Universal Introduction (∀ Introduction) correctly
      </div>
      <div style={{ marginBottom: '15px' }}>
        ✓ Apply Existential Introduction and Existential Elimination correctly (especially the elimination step!)
      </div>
      <div style={{ marginBottom: '15px' }}>
        ✓ Use ↔ Introduction and Elimination
      </div>
      <div style={{ marginBottom: '15px' }}>
        ✓ Construct complete Fitch proofs with proper justification
      </div>
    </div>
  </div>
</ContentSlide>,

// Slide 45: Questions?
<ContentSlide title="">
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#1565c0'
  }}>
    <div style={{ marginBottom: '30px' }}>Questions?</div>
    <div style={{ fontSize: '40px', fontWeight: 'normal', color: '#424242' }}>
      Good luck on Quiz 2! 📝
    </div>
  </div>
</ContentSlide>,
