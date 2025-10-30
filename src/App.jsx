import Presentation from './components/Presentation';
import { TitleSlide, ContentSlide, ListSlide, TwoColumnSlide, CodeSlide, SectionSlide } from './components/Slide';
import './App.css';

function App() {
  const CompetitiveAnalysisSlide = () => {
    const features = [
      { name: "Live, real-time AI feedback", aiCapella: "✅ low-latency, adaptive", vocalImage: "◔ basic / not live", singSharp: "⚠️ timing/latency complaints", vocaly: "—", singingCarrots: "—" },
      { name: "Analytics depth (pitch, timing, vibrato, vowel/formant)", aiCapella: "✅ rich", vocalImage: "— minimal", singSharp: "◔ pitch-only focus", vocaly: "—", singingCarrots: "◔ basic pitch/range tools" },
      { name: "Progress tracking & weekly deltas", aiCapella: "✅ graphs, goals, streaks", vocalImage: "— static", singSharp: "◔ rigid program", vocaly: "◔ coach notes only", singingCarrots: "◔ light history" },
      { name: "Coach personas", aiCapella: "- No Persona, AI teaches", vocalImage: "◔ few personas", singSharp: "◔ generic coach", vocaly: "✅ coach-assigned lessons", singingCarrots: "—" },
      { name: "Adaptive difficulty", aiCapella: "✅ Uses voice AI to adapt", vocalImage: "◔", singSharp: "⚠️ too fast for beginners", vocaly: "◔ fixed lessons", singingCarrots: "◔ DIY; not guided" },
      { name: "A-capella tools", aiCapella: "✅ S/A/T/B parts, blend meter", vocalImage: "—", singSharp: "—", vocaly: "—", singingCarrots: "—" },
      { name: "Practice modules (breathing, ear training)", aiCapella: "✅ integrated & adaptive", vocalImage: "◔", singSharp: "✅ strong set", vocaly: "✅ assignable", singingCarrots: "◔ basic" },
      { name: "Coach↔student workflow", aiCapella: "◔ shareable reports", vocalImage: "—", singSharp: "—", vocaly: "✅ coach→student", singingCarrots: "-" },
    ];

    return (
      <div style={{
        padding: '30px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
        <table style={{
          width: '100%',
          height: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
          border: '2px solid #4a148c',
        }}>
          <thead>
            <tr style={{ backgroundColor: '#4a148c', color: 'white' }}>
              <th style={{ 
                padding: '16px 12px', 
                textAlign: 'left', 
                fontWeight: 'bold',
                borderRight: '2px solid #6a1b9a',
                width: '22%',
                fontSize: '15px'
              }}>
                Feature
              </th>
              <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid rgba(255,255,255,0.3)', fontSize: '15px' }}>
                AI-Capella<br/><span style={{ fontSize: '12px', fontWeight: 'normal' }}>(You)</span>
              </th>
              <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid rgba(255,255,255,0.3)', fontSize: '15px' }}>
                Vocal Image
              </th>
              <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid rgba(255,255,255,0.3)', fontSize: '15px' }}>
                Sing Sharp
              </th>
              <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid rgba(255,255,255,0.3)', fontSize: '15px' }}>
                Vocaly
              </th>
              <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 'bold', fontSize: '15px' }}>
                Singing Carrots
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} style={{ 
                backgroundColor: idx % 2 === 0 ? '#f3f0ff' : 'white',
                borderBottom: '1px solid #d4c5f9'
              }}>
                <td style={{ 
                  padding: '12px', 
                  fontWeight: '600',
                  borderRight: '2px solid #d4c5f9',
                  fontSize: '13px'
                }}>
                  {feature.name}
                </td>
                <td style={{ 
                  padding: '12px', 
                  textAlign: 'center',
                  borderRight: '1px solid #d4c5f9',
                  backgroundColor: idx % 2 === 0 ? '#e8e3ff' : '#f0ebff',
                  fontWeight: '500',
                  fontSize: '13px'
                }}>
                  {feature.aiCapella}
                </td>
                <td style={{ padding: '12px', textAlign: 'center', borderRight: '1px solid #d4c5f9', fontSize: '13px' }}>
                  {feature.vocalImage}
                </td>
                <td style={{ padding: '12px', textAlign: 'center', borderRight: '1px solid #d4c5f9', fontSize: '13px' }}>
                  {feature.singSharp}
                </td>
                <td style={{ padding: '12px', textAlign: 'center', borderRight: '1px solid #d4c5f9', fontSize: '13px' }}>
                  {feature.vocaly}
                </td>
                <td style={{ padding: '12px', textAlign: 'center', fontSize: '13px' }}>
                  {feature.singingCarrots}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const slides = [
    // Title Slide
    <TitleSlide
      title="CS 157 Quiz 1 Review"
      date="October 14th, 2023"
    />,

    // Agenda
    <ListSlide
      title="Agenda"
      items={[
        "Validity, Unsatisfiability, Contingency",
        "Logical Entailment, Equivalence, Consistency",
        "Soundness and Completeness",
        "Hilbert Proofs",
        "Natural Deduction & Fitch Proofs",
        "Resolution"
      ]}
    />,

    // Validity, Unsatisfiability, Contingency
    <ContentSlide title="Validity, Unsatisfiability, Contingency">
      <p style={{ fontSize: '20px', marginBottom: '10px', color: '#666' }}>
        Propositional Logic & Analysis
      </p>
      
      <div style={{ marginBottom: '25px' }}>
        <p><strong>Valid:</strong> Satisfied by every truth assignment.</p>
        <p style={{ marginLeft: '20px', fontSize: '22px' }}>
          E.g. (p ∨ ¬p). Always yields T in a truth table.
        </p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <p><strong>Unsatisfiable:</strong> Not satisfied by any truth assignment.</p>
        <p style={{ marginLeft: '20px', fontSize: '22px' }}>
          E.g. (p ∧ ¬p). Always yields F in a truth table.
        </p>
      </div>

      <div>
        <p><strong>Contingent:</strong> There is some truth assignment that satisfies it, and some truth assignment that falsifies it.</p>
        <p style={{ marginLeft: '20px', fontSize: '22px' }}>
          E.g. (p ∧ q): If p and q both true, it is true. If p and q both false, it is false.
        </p>
      </div>
    </ContentSlide>,

    // Logical Entailment
    <ContentSlide title="Logical Entailment, Equivalence, Consistency">
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Logical Entailment</h3>
        <p>
          A set of sentences logically entails a sentence iff every truth assignment that satisfies the premises also satisfies the conclusion.
        </p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <p><strong>Example 1:</strong> {'{p ⇒ r} ⊨ (p ⇒ q ∨ r)'}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>Example 2:</strong> {'{p ⇒ q ∨ r, p ⇒ r} ⊨ (q ⇒ r)'}</p>
      </div>

      <div className="info-box" style={{ fontSize: '20px' }}>
        <strong>Extra Practice:</strong><br/>
        <a href="http://intrologic.stanford.edu/exercises/exercise_03_03.html" target="_blank" rel="noopener noreferrer">
          http://intrologic.stanford.edu/exercises/exercise_03_03.html
        </a><br/>
        <a href="http://intrologic.stanford.edu/exercises/exercise_03_04.html" target="_blank" rel="noopener noreferrer">
          http://intrologic.stanford.edu/exercises/exercise_03_04.html
        </a>
      </div>
    </ContentSlide>,

    // Practice Problem: Practice Questions - Part a
    <ContentSlide title="Practice Questions - Logical Reasoning">
      <p style={{ marginBottom: '35px', fontSize: '22px' }}>
        Say whether or not the following rule is logically correct.
      </p>

      <div style={{ paddingLeft: '40px' }}>
        <p style={{ fontSize: '28px', marginBottom: '15px' }}><strong>a.</strong></p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All x are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All y are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Therefore, some x are y.</p>
      </div>
    </ContentSlide>,

    // Answer to Practice Questions - Part a
    <ContentSlide title="Practice Questions - Logical Reasoning">
      <p style={{ marginBottom: '35px', fontSize: '22px' }}>
        Say whether or not the following rule is logically correct.
      </p>

      <div style={{ paddingLeft: '40px' }}>
        <p style={{ fontSize: '28px', marginBottom: '15px' }}><strong>a.</strong></p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All x are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All y are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '30px' }}>Therefore, some x are y.</p>
        <div style={{ marginLeft: '20px', padding: '20px', backgroundColor: '#ffebee', borderLeft: '4px solid #d32f2f', borderRadius: '4px' }}>
          <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#d32f2f' }}>incorrect</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Practice Problem: Practice Questions - Part b
    <ContentSlide title="Practice Questions - Logical Reasoning">
      <p style={{ marginBottom: '35px', fontSize: '22px' }}>
        Say whether or not the following rule is logically correct.
      </p>

      <div style={{ paddingLeft: '40px' }}>
        <p style={{ fontSize: '28px', marginBottom: '15px' }}><strong>b.</strong></p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Some x are y.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All y are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Therefore, some x are z.</p>
      </div>
    </ContentSlide>,

    // Answer to Practice Questions - Part b
    <ContentSlide title="Practice Questions - Logical Reasoning">
      <p style={{ marginBottom: '35px', fontSize: '22px' }}>
        Say whether or not the following rule is logically correct.
      </p>

      <div style={{ paddingLeft: '40px' }}>
        <p style={{ fontSize: '28px', marginBottom: '15px' }}><strong>b.</strong></p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Some x are y.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All y are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '30px' }}>Therefore, some x are z.</p>
        <div style={{ marginLeft: '20px', padding: '20px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #2e7d32', borderRadius: '4px' }}>
          <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#2e7d32' }}>correct</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Practice Problem: Practice Questions - Part c
    <ContentSlide title="Practice Questions - Logical Reasoning">
      <p style={{ marginBottom: '35px', fontSize: '22px' }}>
        Say whether or not the following rule is logically correct.
      </p>

      <div style={{ paddingLeft: '40px' }}>
        <p style={{ fontSize: '28px', marginBottom: '15px' }}><strong>c.</strong></p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All x are y.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Some y are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Therefore, some x are z.</p>
      </div>
    </ContentSlide>,

    // Answer to Practice Questions - Part c
    <ContentSlide title="Practice Questions - Logical Reasoning">
      <p style={{ marginBottom: '35px', fontSize: '22px' }}>
        Say whether or not the following rule is logically correct.
      </p>

      <div style={{ paddingLeft: '40px' }}>
        <p style={{ fontSize: '28px', marginBottom: '15px' }}><strong>c.</strong></p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>All x are y.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '15px' }}>Some y are z.</p>
        <p style={{ fontStyle: 'italic', fontSize: '26px', marginLeft: '20px', marginBottom: '30px' }}>Therefore, some x are z.</p>
        <div style={{ marginLeft: '20px', padding: '20px', backgroundColor: '#ffebee', borderLeft: '4px solid #d32f2f', borderRadius: '4px' }}>
          <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#d32f2f' }}>incorrect</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Logical Equivalence
    <ContentSlide title="Logical Equivalence">
      <p style={{ marginBottom: '20px' }}>
        ϕ and Ψ are logically equivalent if they entail each other.
      </p>

      <div className="highlight-box">
        <strong>Equivalence Theorem:</strong> ϕ and Ψ are equivalent iff (ϕ ⇔ Ψ).
      </div>

      <div style={{ marginTop: '25px', marginBottom: '15px' }}>
        <p><strong>Example 1:</strong> ((p ⇒ q) ∨ (q ⇒ r)) and (p ∨ ¬p).</p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <p><strong>Example 2:</strong> (p ∧ q ⇒ r) and (p ∧ r ⇒ q).</p>
      </div>

      <div className="info-box" style={{ fontSize: '20px' }}>
        <strong>Extra Practice:</strong><br/>
        <a href="http://intrologic.stanford.edu/exercises/exercise_03_02.html" target="_blank" rel="noopener noreferrer">
          http://intrologic.stanford.edu/exercises/exercise_03_02.html
        </a>
      </div>
    </ContentSlide>,

    // Logical Consistency
    <ContentSlide title="Logical Consistency">
      <p style={{ marginBottom: '25px' }}>
        ϕ and Ψ are consistent if there is a truth assignment that satisfies both.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>Example 1:</strong> {'{p ⇒ r, q ⇒ r, p ∨ q}'} and r.</p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <p><strong>Example 2:</strong> {'{p ⇒ r, q ⇒ r, p ∨ q}'} and ¬r.</p>
      </div>

      <div className="info-box" style={{ fontSize: '20px' }}>
        <strong>Extra Practice:</strong><br/>
        <a href="http://intrologic.stanford.edu/exercises/exercise_03_05.html" target="_blank" rel="noopener noreferrer">
          http://intrologic.stanford.edu/exercises/exercise_03_05.html
        </a>
      </div>
    </ContentSlide>,

    // Practice Question b - Question only
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '30px', fontSize: '22px' }}>
        Determine whether the following formula is valid, unsatisfiable, or contingent.
      </p>

      <div className="math-block" style={{ fontSize: '32px', padding: '40px' }}>
        <strong>b.</strong> p ∧ (p ⇒ ¬q) ∧ q
      </div>
    </ContentSlide>,

    // Practice Question b - With reasoning
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>b.</strong> p ∧ (p ⇒ ¬q) ∧ q
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          p ⇒ ¬q ≡ ¬p ∨ ¬q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          So the whole thing ≡ p ∧ (¬p ∨ ¬q) ∧ q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8' }}>
          ≡ p ∧ ¬q ∧ q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginTop: '15px', fontStyle: 'italic', color: '#666' }}>
          This is a contradiction.
        </p>
      </div>
    </ContentSlide>,

    // Practice Question b - With answer
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>b.</strong> p ∧ (p ⇒ ¬q) ∧ q
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          p ⇒ ¬q ≡ ¬p ∨ ¬q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          So the whole thing ≡ p ∧ (¬p ∨ ¬q) ∧ q ≡ p ∧ ¬q ∧ q
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#ffebee', borderLeft: '4px solid #d32f2f', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#d32f2f' }}>unsatisfiable</strong></p>
      </div>
    </ContentSlide>,

    // Practice Question g - Question only
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '30px', fontSize: '22px' }}>
        Determine whether the following formula is valid, unsatisfiable, or contingent.
      </p>

      <div className="math-block" style={{ fontSize: '28px', padding: '40px' }}>
        <strong>g.</strong> ((¬p ⇒ q) ⇒ (¬q ⇒ p)) ∧ (p ∨ q)
      </div>
    </ContentSlide>,

    // Practice Question g - With reasoning
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>g.</strong> ((¬p ⇒ q) ⇒ (¬q ⇒ p)) ∧ (p ∨ q)
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          ¬p ⇒ q ≡ p ∨ q  and  ¬q ⇒ p ≡ p ∨ q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          So the first part is (p ∨ q) ⇒ (p ∨ q) ≡ ⊤
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          Formula reduces to p ∨ q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          Hence true (e.g., p = 1, q = 0) and false (p = 0, q = 0) in different cases.
        </p>
      </div>
    </ContentSlide>,

    // Practice Question g - With answer
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>g.</strong> ((¬p ⇒ q) ⇒ (¬q ⇒ p)) ∧ (p ∨ q)
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          ¬p ⇒ q ≡ p ∨ q  and  ¬q ⇒ p ≡ p ∨ q
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Formula reduces to p ∨ q
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#fff3cd', borderLeft: '4px solid #f57c00', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#f57c00' }}>contingent</strong></p>
      </div>
    </ContentSlide>,

    // Practice Question h - Question only
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '30px', fontSize: '22px' }}>
        Determine whether the following formula is valid, unsatisfiable, or contingent.
      </p>

      <div className="math-block" style={{ fontSize: '32px', padding: '40px' }}>
        <strong>h.</strong> (¬p ∨ q) ⇒ (q ∧ (p ⇔ q))
      </div>
    </ContentSlide>,

    // Practice Question h - With reasoning
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>h.</strong> (¬p ∨ q) ⇒ (q ∧ (p ⇔ q))
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Falsified by p = 0, q = 0 (antecedent true, consequent false)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Satisfied by p = 1, q = 1 (both parts true)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          or p = 1, q = 0 (antecedent false)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          So not tautology nor contradiction.
        </p>
      </div>
    </ContentSlide>,

    // Practice Question h - With answer
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>h.</strong> (¬p ∨ q) ⇒ (q ∧ (p ⇔ q))
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Falsified by p = 0, q = 0 (antecedent true, consequent false)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8' }}>
          Satisfied by p = 1, q = 1 or p = 1, q = 0
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#fff3cd', borderLeft: '4px solid #f57c00', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#f57c00' }}>contingent</strong></p>
      </div>
    </ContentSlide>,

    // Practice Question i - Question only
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '30px', fontSize: '22px' }}>
        Determine whether the following formula is valid, unsatisfiable, or contingent.
      </p>

      <div className="math-block" style={{ fontSize: '26px', padding: '40px', lineHeight: '1.6' }}>
        <strong>i.</strong> ((¬r ⇒ ¬p ∧ ¬q) ∨ s) ⇔ ((p ∨ q) ⇒ (r ∨ s))
      </div>
    </ContentSlide>,

    // Practice Question i - With reasoning
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>i.</strong> ((¬r ⇒ ¬p ∧ ¬q) ∨ s) ⇔ ((p ∨ q) ⇒ (r ∨ s))
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>LHS:</strong> ≡ (r ∨ (¬p ∧ ¬q)) ∨ s ≡ (r ∨ s) ∨ (¬p ∧ ¬q)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          <strong>RHS:</strong> ≡ (¬p ∧ ¬q) ∨ (r ∨ s)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          Both sides are identical; biconditional is a tautology.
        </p>
      </div>
    </ContentSlide>,

    // Practice Question i - With answer
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>i.</strong> ((¬r ⇒ ¬p ∧ ¬q) ∨ s) ⇔ ((p ∨ q) ⇒ (r ∨ s))
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>LHS:</strong> ≡ (r ∨ s) ∨ (¬p ∧ ¬q)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8' }}>
          <strong>RHS:</strong> ≡ (¬p ∧ ¬q) ∨ (r ∨ s)
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #2e7d32', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#2e7d32' }}>valid</strong></p>
      </div>
    </ContentSlide>,

    // Practice Question j - Question only
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '30px', fontSize: '22px' }}>
        Determine whether the following formula is valid, unsatisfiable, or contingent.
      </p>

      <div className="math-block" style={{ fontSize: '28px', padding: '40px' }}>
        <strong>j.</strong> (p ∧ (q ⇒ r)) ⇔ ((¬p ∨ q) ⇒ (p ∧ r))
      </div>
    </ContentSlide>,

    // Practice Question j - With reasoning
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>j.</strong> (p ∧ (q ⇒ r)) ⇔ ((¬p ∨ q) ⇒ (p ∧ r))
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>LHS:</strong> ≡ p ∧ (¬q ∨ r)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>RHS:</strong> ≡ ¬(¬p ∨ q) ∨ (p ∧ r)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          ≡ (p ∧ ¬q) ∨ (p ∧ r)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          ≡ p ∧ (¬q ∨ r)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          Sides match, so the biconditional is a tautology.
        </p>
      </div>
    </ContentSlide>,

    // Practice Question j - With answer
    <ContentSlide title="Practice: Valid, Unsatisfiable, or Contingent?">
      <p style={{ marginBottom: '20px', fontSize: '22px' }}>
        <strong>j.</strong> (p ∧ (q ⇒ r)) ⇔ ((¬p ∨ q) ⇒ (p ∧ r))
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>LHS:</strong> ≡ p ∧ (¬q ∨ r)
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8' }}>
          <strong>RHS:</strong> ≡ (p ∧ ¬q) ∨ (p ∧ r) ≡ p ∧ (¬q ∨ r)
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #2e7d32', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#2e7d32' }}>valid</strong></p>
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 1 (only)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '30px', fontSize: '20px', color: '#666' }}>
        Let Γ and Δ be sets of sentences in Propositional Logic, and let φ and ψ be individual sentences. State whether the following statement is <strong>true</strong> or <strong>false</strong>.
      </p>

      <div className="math-block" style={{ fontSize: '26px', padding: '40px', lineHeight: '1.8' }}>
        <strong>1.</strong> If Γ ⊨ φ and Δ ⊭ φ, then Γ ∪ Δ ⊨ φ
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 1 (with reasoning)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>1.</strong> If Γ ⊨ φ and Δ ⊭ φ, then Γ ∪ Δ ⊨ φ
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          If Γ ⊨ φ then every model of Γ satisfies φ.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Any model of Γ ∪ Δ is in particular a model of Γ, hence also satisfies φ.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Thus Γ ∪ Δ ⊨ φ.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          (The fact that Δ ⊭ φ is irrelevant.)
        </p>
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 1 (with answer)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>1.</strong> If Γ ⊨ φ and Δ ⊭ φ, then Γ ∪ Δ ⊨ φ
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          If Γ ⊨ φ then every model of Γ satisfies φ. Any model of Γ ∪ Δ is in particular a model of Γ, hence also satisfies φ. Thus Γ ∪ Δ ⊨ φ.
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #2e7d32', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#2e7d32' }}>True</strong></p>
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 2 (only)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '30px', fontSize: '20px', color: '#666' }}>
        Let Γ and Δ be sets of sentences in Propositional Logic, and let φ and ψ be individual sentences. State whether the following statement is <strong>true</strong> or <strong>false</strong>.
      </p>

      <div className="math-block" style={{ fontSize: '26px', padding: '40px', lineHeight: '1.8' }}>
        <strong>2.</strong> If Γ ⊭ ψ, then Γ ⊨ ¬ψ
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 2 (with reasoning)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>2.</strong> If Γ ⊭ ψ, then Γ ⊨ ¬ψ
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          <strong>Counterexample:</strong> Let Γ = ∅ and ψ = p.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Then Γ ⊭ ψ (since some valuations make p false).
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          But also Γ ⊭ ¬ψ (some valuations make p true).
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          So Γ ⊨ ¬ψ does not follow.
        </p>
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 2 (with answer)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>2.</strong> If Γ ⊭ ψ, then Γ ⊨ ¬ψ
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>Counterexample:</strong> Let Γ = ∅ and ψ = p. Then Γ ⊭ ψ (since some valuations make p false), but also Γ ⊭ ¬ψ (some valuations make p true).
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#ffebee', borderLeft: '4px solid #d32f2f', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#d32f2f' }}>False</strong></p>
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 3 (only)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '30px', fontSize: '20px', color: '#666' }}>
        Let Γ and Δ be sets of sentences in Propositional Logic, and let φ and ψ be individual sentences. State whether the following statement is <strong>true</strong> or <strong>false</strong>.
      </p>

      <div className="math-block" style={{ fontSize: '26px', padding: '40px', lineHeight: '1.8' }}>
        <strong>3.</strong> If Γ ⊨ ¬ψ, then Γ ⊭ ψ
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 3 (with reasoning)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>3.</strong> If Γ ⊨ ¬ψ, then Γ ⊭ ψ
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          <strong>Counterexample with an inconsistent set:</strong> Γ = {'{q, ¬q}'}.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          Then Γ ⊨ χ for every sentence χ, so both Γ ⊨ ¬ψ and Γ ⊨ ψ.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
          Hence from Γ ⊨ ¬ψ it does not follow that Γ ⊭ ψ.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.8', fontStyle: 'italic', color: '#666' }}>
          (If Γ were consistent, the implication would hold.)
        </p>
      </div>
    </ContentSlide>,

    // Logical Entailment Practice - Question 3 (with answer)
    <ContentSlide title="Practice: Logical Entailment with Sets">
      <p style={{ marginBottom: '20px', fontSize: '20px' }}>
        <strong>3.</strong> If Γ ⊨ ¬ψ, then Γ ⊭ ψ
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Reasoning:</h4>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>Counterexample:</strong> Γ = {'{q, ¬q}'}. Then Γ ⊨ χ for every sentence χ, so both Γ ⊨ ¬ψ and Γ ⊨ ψ. (If Γ were consistent, the implication would hold.)
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#ffebee', borderLeft: '4px solid #d32f2f', borderRadius: '4px' }}>
        <p style={{ fontSize: '28px', margin: 0 }}>Answer: <strong style={{ color: '#d32f2f' }}>False</strong></p>
      </div>
    </ContentSlide>,

    // Soundness & Completeness
    <ContentSlide title="Soundness & Completeness">
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Soundness</h3>
        <p>A proof system is sound iff every conclusion that is provable from a set of premises is logically entailed.</p>
        <div className="math-block" style={{ fontSize: '24px', margin: '15px 0' }}>
          If Δ ⊢ ϕ, then Δ ⊨ ϕ.
        </div>
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          "Everything derivable / provable is true."
        </p>
      </div>

      <div>
        <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Completeness</h3>
        <p>A proof system is complete iff every conclusion that is logically entailed by a set of premises is provable.</p>
        <div className="math-block" style={{ fontSize: '24px', margin: '15px 0' }}>
          If Δ ⊨ ϕ, then Δ ⊢ ϕ.
        </div>
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          "Everything true is derivable / provable."
        </p>
      </div>
    </ContentSlide>,

    // Hilbert and Fitch
    <ContentSlide title="">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', lineHeight: '1.5' }}>
          Hilbert? <strong>Yes and Yes.</strong><br/>
          Fitch? <strong>Yes and Yes.</strong>
        </h2>
      </div>
    </ContentSlide>,

    // Hilbert Proofs - Axiom Schemata & Rule Instances
    <ContentSlide title="Hilbert Proofs">
      <h3 style={{ fontSize: '30px', marginBottom: '25px' }}>Axiom schemata & rule instances (quick notions)</h3>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ fontSize: '26px', marginBottom: '15px' }}>Axiom schema:</h4>
        <p style={{ fontSize: '22px', lineHeight: '1.8', marginBottom: '15px' }}>
          A formula pattern with metavariables (e.g., φ ⇒ (ψ ⇒ φ)).
        </p>
        <div className="info-box" style={{ fontSize: '20px', padding: '20px' }}>
          An <strong>instance</strong> replaces metavariables consistently, e.g., p ⇒ (q ⇒ p).
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '26px', marginBottom: '15px' }}>Rule of inference:</h4>
        <p style={{ fontSize: '22px', lineHeight: '1.8', marginBottom: '12px' }}>
          premises ⇒ conclusion(s) pattern.
        </p>
        <ul style={{ fontSize: '20px', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '10px' }}>Apply a rule only when its premise instances appear as whole, top-level formulas (not inside other connectives).</li>
          <li>Substitutions must be consistent across all occurrences of each metavariable.</li>
        </ul>
      </div>
    </ContentSlide>,

    // The Hilbert System - Single Rule
    <ContentSlide title="The Hilbert System">
      <p style={{ fontSize: '22px', marginBottom: '30px', color: '#666' }}>
        For propositional logic with ¬, ⇒
      </p>

      <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Single rule (Modus Ponens / Implication Elimination):</h3>
      
      <div className="math-block" style={{ fontSize: '28px', padding: '40px', marginBottom: '30px' }}>
        φ ⇒ ψ&nbsp;&nbsp;&nbsp;&nbsp;φ<br/>
        ————————<br/>
        ψ
      </div>

      <div className="highlight-box" style={{ fontSize: '22px', padding: '25px' }}>
        <p style={{ margin: 0 }}>
          If you have an implication φ ⇒ ψ and you have φ, you can conclude ψ.
        </p>
      </div>
    </ContentSlide>,

    // The Hilbert System - Three Axiom Schemata
    <ContentSlide title="The Hilbert System">
      <h3 style={{ fontSize: '28px', marginBottom: '25px' }}>Three axiom schemata (used as theorems on demand):</h3>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '12px', color: '#333' }}>
          <strong>Implication Creation (IC):</strong>
        </h4>
        <div className="math-block" style={{ fontSize: '26px', padding: '20px' }}>
          φ ⇒ (ψ ⇒ φ)
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '12px', color: '#333' }}>
          <strong>Implication Distribution (ID):</strong>
        </h4>
        <div className="math-block" style={{ fontSize: '24px', padding: '20px', lineHeight: '1.6' }}>
          (φ ⇒ (ψ ⇒ χ)) ⇒ ((φ ⇒ ψ) ⇒ (φ ⇒ χ))
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '24px', marginBottom: '12px', color: '#333' }}>
          <strong>Implication Reversal (IR):</strong>
        </h4>
        <div className="math-block" style={{ fontSize: '26px', padding: '20px' }}>
          (¬ψ ⇒ ¬φ) ⇒ (φ ⇒ ψ)
        </div>
      </div>
    </ContentSlide>,

    // Natural Deduction: Fitch Proofs - Conditional Proofs
    <ContentSlide title="Natural Deduction: Fitch Proofs">
      <h3 style={{ fontSize: '32px', marginBottom: '20px' }}>1) Conditional proofs (what they are & why they help)</h3>
      
      <p style={{ marginBottom: '20px' }}>
        Natural deduction adds <strong>subproofs</strong> (assumptions nested inside the main proof).
      </p>

      <ul style={{ fontSize: '22px', marginBottom: '25px' }}>
        <li style={{ marginBottom: '12px' }}>
          You may assume anything inside a subproof; those assumptions are <strong>local</strong>—they cannot be used outside the subproof except to discharge them via a conditional rule.
        </li>
        <li>
          Typically use <strong>Implication Introduction</strong> to discharge assumptions.
        </li>
      </ul>
    </ContentSlide>,

    // Conditional Proofs Example
    <ContentSlide title="Conditional Proofs: Example">
      <p style={{ marginBottom: '25px', fontSize: '22px' }}>
        Derive <strong>p ⇒ r</strong> from <strong>p ⇒ q</strong> and <strong>q ⇒ r</strong>:
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '22px', lineHeight: '1.8' }}>
        <div>1.  p ⇒ q<span style={{ marginLeft: '200px', color: '#666' }}>Premise</span></div>
        <div>2.  q ⇒ r<span style={{ marginLeft: '200px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
          <div>3.  p<span style={{ marginLeft: '230px', color: '#666' }}>Assumption</span></div>
          <div>4.  q<span style={{ marginLeft: '230px', color: '#666' }}>Implication Elimination: 3, 1</span></div>
          <div>5.  r<span style={{ marginLeft: '230px', color: '#666' }}>Implication Elimination: 4, 2</span></div>
        </div>
        <div>6.  p ⇒ r<span style={{ marginLeft: '200px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
      </div>

      <p style={{ marginTop: '25px', fontSize: '20px', fontStyle: 'italic', color: '#666' }}>
        The subproof (3–5) shows: assuming p lets us derive r, so we conclude p ⇒ r by Implication Introduction.
      </p>
    </ContentSlide>,

    // The Fitch Rules - Conjunction
    <ContentSlide title="2) The Fitch Rules (10 core rules)">
      <h3 style={{ fontSize: '28px', marginBottom: '20px', color: '#333' }}>Conjunction (And)</h3>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>And Introduction</h4>
        <div className="math-block" style={{ fontSize: '22px', padding: '20px' }}>
          φ₁ … φₙ<br/>
          ————————<br/>
          φ₁ ∧ ⋯ ∧ φₙ
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>And Elimination</h4>
        <div className="math-block" style={{ fontSize: '22px', padding: '20px' }}>
          φ₁ ∧ ⋯ ∧ φₙ<br/>
          ————————<br/>
          φᵢ
        </div>
      </div>
    </ContentSlide>,

    // The Fitch Rules - Disjunction & Negation
    <ContentSlide title="The Fitch Rules (continued)">
      <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Disjunction (Or)</h3>
      
      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Or Introduction</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φᵢ<br/>————————<br/>φ₁ ∨ ⋯ ∨ φₙ
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Or Elimination</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φ₁ ∨ ⋯ ∨ φₙ   (φ₁ ⇒ ψ) ⋯ (φₙ ⇒ ψ)<br/>————————<br/>ψ
        </div>
      </div>

      <h3 style={{ fontSize: '28px', marginBottom: '15px', marginTop: '30px' }}>Negation</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Negation Introduction (proof by contradiction)</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φ ⇒ ψ   φ ⇒ ¬ψ<br/>————————<br/>¬φ
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Negation Elimination</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          ¬¬φ<br/>————————<br/>φ
        </div>
      </div>
    </ContentSlide>,

    // The Fitch Rules - Implication & Biconditional
    <ContentSlide title="The Fitch Rules (continued)">
      <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Implication</h3>
      
      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Implication Introduction (the conditional rule)</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φ ⊢ ψ<br/>————————<br/>φ ⇒ ψ
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Implication Elimination (Modus Ponens)</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φ ⇒ ψ   φ<br/>————————<br/>ψ
        </div>
      </div>

      <h3 style={{ fontSize: '28px', marginBottom: '15px', marginTop: '30px' }}>Biconditional</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Biconditional Introduction</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φ ⇒ ψ   ψ ⇒ φ<br/>————————<br/>φ ⇔ ψ
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Biconditional Elimination</h4>
        <div className="math-block" style={{ fontSize: '20px', padding: '15px' }}>
          φ ⇔ ψ<br/>————————<br/>φ ⇒ ψ   ψ ⇒ φ
        </div>
      </div>
    </ContentSlide>,

    // Strategy: Goal-shaped Heuristics
    <ContentSlide title="Fitch Tips">
      <h3 style={{ fontSize: '30px', marginBottom: '20px' }}>Goal-shaped heuristics (what to try first)</h3>
      
      <ul style={{ fontSize: '22px', lineHeight: '1.8' }}>
        <li style={{ marginBottom: '20px' }}>
          <strong>Goal is φ ⇒ ψ:</strong> assume φ, derive ψ, discharge with ⇒I.
          <div className="highlight-box" style={{ marginTop: '10px', fontSize: '18px', padding: '15px' }}>
            Mini-template:<br/>
            1. q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premise<br/>
            2. p&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assumption<br/>
            3. q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reiteration: 1<br/>
            4. p ⇒ q&nbsp;&nbsp;&nbsp;⇒I: 2, 3
          </div>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <strong>Goal is φ ∧ ψ:</strong> prove φ and ψ separately, then ∧I.
        </li>
        <li style={{ marginBottom: '15px' }}>
          <strong>Goal is φ ∨ ψ:</strong> prove either disjunct, then ∨I.
        </li>
        <li style={{ marginBottom: '15px' }}>
          <strong>Goal is ¬φ:</strong> assume φ, derive a contradiction (φ ⇒ ψ) and (φ ⇒ ¬ψ), then ¬I.
        </li>
        <li>
          <strong>General trick:</strong> to prove φ, try assuming ¬φ, derive a contradiction to get ¬¬φ, then ¬E.
        </li>
      </ul>
    </ContentSlide>,

    // Strategy: Premise-shaped Heuristics
    <ContentSlide title="Fitch Tips">
      <h3 style={{ fontSize: '30px', marginBottom: '25px' }}>Premise-shaped heuristics</h3>
      
      <div style={{ fontSize: '24px', lineHeight: '2' }}>
        <div style={{ marginBottom: '35px', padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #333' }}>
          <strong>If you have φ ⇒ ψ and you want ψ:</strong>
          <p style={{ marginTop: '12px', color: '#666' }}>Try proving φ to use ⇒E.</p>
        </div>

        <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #333' }}>
          <strong>If you have φ ∨ ψ and want χ:</strong>
          <p style={{ marginTop: '12px', color: '#666' }}>Try proving φ ⇒ χ and ψ ⇒ χ, then apply Or Elimination.</p>
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Goal Only
    <ContentSlide title="Fitch Proof Practice">
      <p style={{ marginBottom: '30px', fontSize: '22px', color: '#666' }}>
        Prove the following goal using Fitch-style natural deduction:
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', marginBottom: '30px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
          <div style={{ borderTop: '2px solid #333', paddingTop: '20px', marginTop: '20px' }}>
            <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
          </div>
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Step 1
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-2
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-3
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-4
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q ⇒ r<span style={{ marginLeft: '340px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-5
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q ⇒ r<span style={{ marginLeft: '340px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 2, 3</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-6
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q ⇒ r<span style={{ marginLeft: '340px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 2, 3</span></div>
            <div>6.&nbsp;&nbsp;r<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 4, 5</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-7
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q ⇒ r<span style={{ marginLeft: '340px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 2, 3</span></div>
            <div>6.&nbsp;&nbsp;r<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 4, 5</span></div>
          </div>
          <div>7.&nbsp;&nbsp;p ⇒ r<span style={{ marginLeft: '320px', color: '#666' }}>Implication Introduction: 3, 6</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Steps 1-8
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q ⇒ r<span style={{ marginLeft: '340px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 2, 3</span></div>
            <div>6.&nbsp;&nbsp;r<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 4, 5</span></div>
          </div>
          <div>7.&nbsp;&nbsp;p ⇒ r<span style={{ marginLeft: '320px', color: '#666' }}>Implication Introduction: 3, 6</span></div>
        </div>
        <div>8.&nbsp;&nbsp;(p ⇒ q) ⇒ (p ⇒ r)<span style={{ marginLeft: '230px', color: '#666' }}>Implication Introduction: 2, 7</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice - Complete (Steps 1-9)
    <ContentSlide title="Fitch Proof Practice">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '2' }}>
        <div>1.&nbsp;&nbsp;p ⇒ (q ⇒ r)<span style={{ marginLeft: '300px', color: '#666' }}>Assumption</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
          <div>2.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '320px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '20px', marginLeft: '20px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q ⇒ r<span style={{ marginLeft: '340px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 2, 3</span></div>
            <div>6.&nbsp;&nbsp;r<span style={{ marginLeft: '365px', color: '#666' }}>Implication Elimination: 4, 5</span></div>
          </div>
          <div>7.&nbsp;&nbsp;p ⇒ r<span style={{ marginLeft: '320px', color: '#666' }}>Implication Introduction: 3, 6</span></div>
        </div>
        <div>8.&nbsp;&nbsp;(p ⇒ q) ⇒ (p ⇒ r)<span style={{ marginLeft: '230px', color: '#666' }}>Implication Introduction: 2, 7</span></div>
        <div>9.&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))<span style={{ marginLeft: '80px', color: '#666' }}>Implication Introduction: 1, 8</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;(p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))&nbsp;&nbsp;<span style={{ color: '#2e7d32', fontWeight: 'bold' }}>Complete</span>
        </div>
      </div>
    </ContentSlide>,


    // Fitch Proof Practice 2 - Goal Only
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <p style={{ marginBottom: '30px', fontSize: '22px', color: '#666' }}>
        Given the premise p ⇒ q, prove ~p | q using Fitch-style natural deduction:
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', marginBottom: '30px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
          <div style={{ marginBottom: '20px' }}>
            <strong>Premise:</strong>&nbsp;&nbsp;p ⇒ q
          </div>
          <div style={{ borderTop: '2px solid #333', paddingTop: '20px', marginTop: '20px' }}>
            <strong>Goal:</strong>&nbsp;&nbsp;~p | q
          </div>
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Step 1
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-2
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-3
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-4
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-5
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-6
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-7
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-8
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-9
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '270px', color: '#666' }}>Implication Introduction: 7, 8</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-10
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '380px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '405px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '405px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '350px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '270px', color: '#666' }}>Implication Introduction: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '375px', color: '#666' }}>Negation Introduction: 6, 9</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-11
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '17px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '330px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '385px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '385px', color: '#666' }}>Implication Elimination: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '350px', color: '#666' }}>Or Introduction: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '290px', color: '#666' }}>Implication Introduction: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '385px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '330px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '250px', color: '#666' }}>Implication Introduction: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '355px', color: '#666' }}>Negation Introduction: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '250px', color: '#666' }}>Implication Introduction: 2, 10</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-12
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-13
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-14
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-15
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-16
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-17
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>17.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '305px', color: '#666' }}>Reiteration: 12</span></div>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-18
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>17.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '305px', color: '#666' }}>Reiteration: 12</span></div>
          </div>
          <div>18.&nbsp;&nbsp;~p ⇒ ~(~p | q)<span style={{ marginLeft: '225px', color: '#666' }}>⇒I: 16, 17</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-19
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>17.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '305px', color: '#666' }}>Reiteration: 12</span></div>
          </div>
          <div>18.&nbsp;&nbsp;~p ⇒ ~(~p | q)<span style={{ marginLeft: '225px', color: '#666' }}>⇒I: 16, 17</span></div>
          <div>19.&nbsp;&nbsp;~~p<span style={{ marginLeft: '330px', color: '#666' }}>¬I: 15, 18</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-20
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>17.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '305px', color: '#666' }}>Reiteration: 12</span></div>
          </div>
          <div>18.&nbsp;&nbsp;~p ⇒ ~(~p | q)<span style={{ marginLeft: '225px', color: '#666' }}>⇒I: 16, 17</span></div>
          <div>19.&nbsp;&nbsp;~~p<span style={{ marginLeft: '330px', color: '#666' }}>¬I: 15, 18</span></div>
        </div>
        <div>20.&nbsp;&nbsp;~(~p | q) ⇒ ~~p<span style={{ marginLeft: '220px', color: '#666' }}>⇒I: 12, 19</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Steps 1-21
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>17.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '305px', color: '#666' }}>Reiteration: 12</span></div>
          </div>
          <div>18.&nbsp;&nbsp;~p ⇒ ~(~p | q)<span style={{ marginLeft: '225px', color: '#666' }}>⇒I: 16, 17</span></div>
          <div>19.&nbsp;&nbsp;~~p<span style={{ marginLeft: '330px', color: '#666' }}>¬I: 15, 18</span></div>
        </div>
        <div>20.&nbsp;&nbsp;~(~p | q) ⇒ ~~p<span style={{ marginLeft: '220px', color: '#666' }}>⇒I: 12, 19</span></div>
        <div>21.&nbsp;&nbsp;~~(~p | q)<span style={{ marginLeft: '280px', color: '#666' }}>¬I: 11, 20</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 2 - Complete (Steps 1-22)
    <ContentSlide title="Fitch Proof Practice: De Morgan's Law">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.7' }}>
        <div>1.&nbsp;&nbsp;p ⇒ q<span style={{ marginLeft: '340px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>2.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>3.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>4.&nbsp;&nbsp;q<span style={{ marginLeft: '365px', color: '#666' }}>⇒E: 1, 3</span></div>
            <div>5.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '330px', color: '#666' }}>∨I: 4</span></div>
          </div>
          <div>6.&nbsp;&nbsp;p ⇒ ~p | q<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 3, 5</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>7.&nbsp;&nbsp;p<span style={{ marginLeft: '365px', color: '#666' }}>Assumption</span></div>
            <div>8.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Reiteration: 2</span></div>
          </div>
          <div>9.&nbsp;&nbsp;p ⇒ ~(~p | q)<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 7, 8</span></div>
          <div>10.&nbsp;&nbsp;~p<span style={{ marginLeft: '335px', color: '#666' }}>¬I: 6, 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;~(~p | q) ⇒ ~p<span style={{ marginLeft: '230px', color: '#666' }}>⇒I: 2, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
          <div>12.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '310px', color: '#666' }}>Assumption</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>13.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>14.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '325px', color: '#666' }}>∨I: 13</span></div>
          </div>
          <div>15.&nbsp;&nbsp;~p ⇒ ~p | q<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 13, 14</span></div>
          <div style={{ borderLeft: '3px solid #333', paddingLeft: '12px', marginLeft: '12px' }}>
            <div>16.&nbsp;&nbsp;~p<span style={{ marginLeft: '360px', color: '#666' }}>Assumption</span></div>
            <div>17.&nbsp;&nbsp;~(~p | q)<span style={{ marginLeft: '305px', color: '#666' }}>Reiteration: 12</span></div>
          </div>
          <div>18.&nbsp;&nbsp;~p ⇒ ~(~p | q)<span style={{ marginLeft: '225px', color: '#666' }}>⇒I: 16, 17</span></div>
          <div>19.&nbsp;&nbsp;~~p<span style={{ marginLeft: '330px', color: '#666' }}>¬I: 15, 18</span></div>
        </div>
        <div>20.&nbsp;&nbsp;~(~p | q) ⇒ ~~p<span style={{ marginLeft: '220px', color: '#666' }}>⇒I: 12, 19</span></div>
        <div>21.&nbsp;&nbsp;~~(~p | q)<span style={{ marginLeft: '280px', color: '#666' }}>¬I: 11, 20</span></div>
        <div>22.&nbsp;&nbsp;~p | q<span style={{ marginLeft: '310px', color: '#666' }}>¬E: 21</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p | q&nbsp;&nbsp;<span style={{ color: '#2e7d32', fontWeight: 'bold' }}>Complete</span>
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 3 - Goal Only
    <ContentSlide title="Fitch Proof Practice 3">
      <p style={{ marginBottom: '30px', fontSize: '22px', color: '#666' }}>
        Given the premise ~(p | q), prove ~p & ~q using Fitch-style natural deduction:
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', marginBottom: '30px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
          <div style={{ marginBottom: '20px' }}>
            <strong>Premise:</strong>&nbsp;&nbsp;~(p | q)
          </div>
          <div style={{ borderTop: '2px solid #333', paddingTop: '20px', marginTop: '20px' }}>
            <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
          </div>
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 3 - Step 1
    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    // Steps 2-16 following same pattern...
    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 2, 3</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>Implication Introduction: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>Implication Introduction: 5, 6</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>Negation Introduction: 4, 7</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;q ⇒ p | q<span style={{ marginLeft: '305px', color: '#666' }}>Implication Introduction: 9, 10</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;q ⇒ p | q<span style={{ marginLeft: '305px', color: '#666' }}>⇒I: 9, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>12.&nbsp;&nbsp;q<span style={{ marginLeft: '395px', color: '#666' }}>Assumption</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;q ⇒ p | q<span style={{ marginLeft: '305px', color: '#666' }}>⇒I: 9, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>12.&nbsp;&nbsp;q<span style={{ marginLeft: '395px', color: '#666' }}>Assumption</span></div>
          <div>13.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '335px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;q ⇒ p | q<span style={{ marginLeft: '305px', color: '#666' }}>⇒I: 9, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>12.&nbsp;&nbsp;q<span style={{ marginLeft: '395px', color: '#666' }}>Assumption</span></div>
          <div>13.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '335px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>14.&nbsp;&nbsp;q ⇒ ~(p | q)<span style={{ marginLeft: '265px', color: '#666' }}>Implication Introduction: 12, 13</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;q ⇒ p | q<span style={{ marginLeft: '305px', color: '#666' }}>⇒I: 9, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>12.&nbsp;&nbsp;q<span style={{ marginLeft: '395px', color: '#666' }}>Assumption</span></div>
          <div>13.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '335px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>14.&nbsp;&nbsp;q ⇒ ~(p | q)<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 12, 13</span></div>
        <div>15.&nbsp;&nbsp;~q<span style={{ marginLeft: '365px', color: '#666' }}>Negation Introduction: 11, 14</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q
        </div>
      </div>
    </ContentSlide>,

    // Fitch Proof Practice 3 - Complete
    <ContentSlide title="Fitch Proof Practice 3">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '360px', color: '#666' }}>Premise</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>2.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>3.&nbsp;&nbsp;p | q<span style={{ marginLeft: '375px', color: '#666' }}>Or Introduction: 2</span></div>
        </div>
        <div>4.&nbsp;&nbsp;p ⇒ p | q<span style={{ marginLeft: '310px', color: '#666' }}>⇒I: 2, 3</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>5.&nbsp;&nbsp;p<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>6.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '340px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>7.&nbsp;&nbsp;p ⇒ ~(p | q)<span style={{ marginLeft: '270px', color: '#666' }}>⇒I: 5, 6</span></div>
        <div>8.&nbsp;&nbsp;~p<span style={{ marginLeft: '370px', color: '#666' }}>¬I: 4, 7</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>9.&nbsp;&nbsp;q<span style={{ marginLeft: '400px', color: '#666' }}>Assumption</span></div>
          <div>10.&nbsp;&nbsp;p | q<span style={{ marginLeft: '370px', color: '#666' }}>Or Introduction: 9</span></div>
        </div>
        <div>11.&nbsp;&nbsp;q ⇒ p | q<span style={{ marginLeft: '305px', color: '#666' }}>⇒I: 9, 10</span></div>
        <div style={{ borderLeft: '3px solid #333', paddingLeft: '15px', marginLeft: '15px' }}>
          <div>12.&nbsp;&nbsp;q<span style={{ marginLeft: '395px', color: '#666' }}>Assumption</span></div>
          <div>13.&nbsp;&nbsp;~(p | q)<span style={{ marginLeft: '335px', color: '#666' }}>Reiteration: 1</span></div>
        </div>
        <div>14.&nbsp;&nbsp;q ⇒ ~(p | q)<span style={{ marginLeft: '265px', color: '#666' }}>⇒I: 12, 13</span></div>
        <div>15.&nbsp;&nbsp;~q<span style={{ marginLeft: '365px', color: '#666' }}>¬I: 11, 14</span></div>
        <div>16.&nbsp;&nbsp;~p & ~q<span style={{ marginLeft: '335px', color: '#666' }}>And Introduction: 8, 15</span></div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '15px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;~p & ~q&nbsp;&nbsp;<span style={{ color: '#2e7d32', fontWeight: 'bold' }}>Complete</span>
        </div>
      </div>
    </ContentSlide>,
    
    // Resolution: Clausal Form - Definitions
    <ContentSlide title="Resolution Proofs">
      
      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>Literal:</h4>
        <p style={{ fontSize: '22px', marginLeft: '20px' }}>p or ¬p</p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>Clause:</h4>
        <p style={{ fontSize: '22px', marginLeft: '20px', marginBottom: '10px' }}>A set of literals (order/duplicates don't matter).</p>
        <p style={{ fontSize: '20px', marginLeft: '20px', color: '#666' }}>
          Examples: {'{p}'}, {'{¬p, q}'}, empty clause {'{}'} = contradiction (unsatisfiable)
        </p>
      </div>

      <div>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>Clausal sentence:</h4>
        <p style={{ fontSize: '22px', marginLeft: '20px' }}>
          A literal or a disjunction of literals; a set of clauses is a conjunction of those disjunctions.
        </p>
      </div>
    </ContentSlide>,

    // Resolution: Conversion Pipeline (INDO)
    <ContentSlide title="Clausal Form: Conversion Pipeline">
      <p style={{ marginBottom: '25px', fontSize: '22px', color: '#666' }}>
        Do in order: <strong>"I–N–D–O"</strong>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}><strong>(I)</strong> Implications:</h4>
        <div style={{ marginLeft: '20px', fontSize: '20px', lineHeight: '1.8' }}>
          <p>ϕ ⇒ ψ → ¬ϕ ∨ ψ</p>
          <p>ϕ ⇔ ψ → (¬ϕ ∨ ψ) ∧ (ϕ ∨ ¬ψ)</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}><strong>(N)</strong> Negations:</h4>
        <p style={{ marginLeft: '20px', fontSize: '20px' }}>Push ¬ inward (De Morgan, double-negation)</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}><strong>(D)</strong> Distribution:</h4>
        <p style={{ marginLeft: '20px', fontSize: '20px' }}>Distribute ∨ over ∧ to get a conjunction of disjunctions</p>
      </div>

      <div>
        <h4 style={{ fontSize: '24px', marginBottom: '10px' }}><strong>(O)</strong> Operators:</h4>
        <p style={{ marginLeft: '20px', fontSize: '20px' }}>Split to sets of literals (each disjunction → one clause; conjunction → set of clauses)</p>
      </div>
    </ContentSlide>,

    // Resolution: The Resolution Rule
    <ContentSlide title="The Resolution Rule">
        
      <p style={{ marginBottom: '25px', fontSize: '22px', lineHeight: '1.8' }}>
        If two clauses have complementary literals χ and ¬χ, you can resolve them:
      </p>

      <div className="math-block" style={{ fontSize: '24px', padding: '30px', marginBottom: '30px' }}>
        {'{…, χ, …}'}, {'{…, ¬χ, …}'} ⇝ {'{all others combined}'}
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '12px' }}>Example:</h4>
        <p style={{ fontSize: '22px', marginLeft: '20px' }}>
          {'{p, q}'} and {'{¬q, r}'} ⇒ {'{p, r}'}
        </p>
      </div>

      <div className="highlight-box" style={{ fontSize: '20px', padding: '20px' }}>
        <p style={{ marginBottom: '10px' }}><strong>Note:</strong> One complementary pair at a time.</p>
      </div>
    </ContentSlide>,

    // Resolution: Singleton Effects
    <ContentSlide title="The Resolution Rule">
      <h3 style={{ fontSize: '28px', marginBottom: '30px' }}>Singleton effects</h3>
      
      <div style={{ marginBottom: '40px', padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <p style={{ fontSize: '24px', marginBottom: '15px' }}>
          {'{p, q, r}'} with {'{¬p}'} ⇒ {'{q, r}'}
        </p>
        <p style={{ fontSize: '20px', color: '#666' }}>
          Resolving with a single literal removes that literal from the other clause.
        </p>
      </div>

      <div style={{ padding: '25px', backgroundColor: '#ffebee', borderRadius: '8px', borderLeft: '4px solid #d32f2f' }}>
        <p style={{ fontSize: '24px', marginBottom: '15px' }}>
          {'{p}'} with {'{¬p}'} ⇒ {'{}'} (empty clause)
        </p>
        <p style={{ fontSize: '20px', color: '#666' }}>
          <strong>Empty clause = contradiction</strong>
        </p>
      </div>
    </ContentSlide>,

    // Resolution: Derivations vs. Proofs
    <ContentSlide title="Derivations vs. Proofs">
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>Resolution derivation:</h4>
        <p style={{ fontSize: '22px', lineHeight: '1.8', marginLeft: '20px' }}>
          Start from premise clauses; repeatedly resolve to get a target clause.
        </p>
        <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#666', marginLeft: '20px', marginTop: '10px' }}>
          (Not complete for generating all entailed clauses.)
        </p>
      </div>

      <div>
        <h4 style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>Resolution proof (refutation style):</h4>
        <p style={{ fontSize: '22px', marginBottom: '12px', marginLeft: '20px' }}>
          To prove Δ ⊨ φ:
        </p>
        <ol style={{ fontSize: '22px', lineHeight: '1.8', marginLeft: '40px' }}>
          <li style={{ marginBottom: '10px' }}>Take clauses(Δ) and clauses(¬φ)</li>
          <li style={{ marginBottom: '10px' }}>Resolve until you derive {'{}'}.</li>
        </ol>
        <div className="success-box" style={{ fontSize: '20px', padding: '20px', marginTop: '20px' }}>
          <strong>This is complete for unsatisfiability (refutation-complete).</strong>
        </div>
      </div>
    </ContentSlide>,

    // Resolution: Why It's Nice
    <ContentSlide title="Why Resolution is Nice">
      
      <div style={{ marginBottom: '35px', padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #333' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Focused search:</h4>
        <p style={{ fontSize: '22px', lineHeight: '1.8' }}>
          No axiom instantiation hunt—just pair clauses with complementary literals.
        </p>
      </div>

      <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #333' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '15px' }}>Termination:</h4>
        <p style={{ fontSize: '22px', lineHeight: '1.8' }}>
          With finite symbols, only finitely many distinct clauses exist; search can saturate and stop.
        </p>
      </div>
    </ContentSlide>,

    // Resolution: Helpful Patterns
    <ContentSlide title="Helpful Patterns">
      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '12px' }}>Map implications to clauses:</h4>
        <div className="highlight-box" style={{ fontSize: '20px', padding: '20px' }}>
          <p style={{ marginBottom: '10px' }}>
            p ⇒ q → {'{¬p, q}'}; with {'{p}'} resolves to {'{q}'} (Modus Ponens)
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '12px' }}>Set behavior:</h4>
        <ul style={{ fontSize: '20px', lineHeight: '1.8', marginLeft: '20px' }}>
          <li>Drop duplicates in resolvents</li>
          <li>Order irrelevant</li>
        </ul>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h4 style={{ fontSize: '24px', marginBottom: '12px' }}>Don't over-resolve:</h4>
        <p style={{ fontSize: '20px', marginLeft: '20px' }}>
          If both p and q are complementary across two clauses, you may only cancel one pair per step.
        </p>
      </div>

      <div className="info-box" style={{ fontSize: '20px', padding: '20px' }}>
        <strong>Empty clause means inconsistency found → goal proved in refutation.</strong>
      </div>
    </ContentSlide>,

    // Resolution: How To Use Resolution
    <ContentSlide title="Resolution">
      <div style={{ fontSize: '24px', lineHeight: '2' }}>
        <div style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <strong>Step 1:</strong>
          <p style={{ marginTop: '10px', fontSize: '22px', color: '#666' }}>
            Convert premises and negated goal to clauses (I–N–D–O)
          </p>
        </div>

        <div style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <strong>Step 2:</strong>
          <p style={{ marginTop: '10px', fontSize: '22px', color: '#666' }}>
            Resolve pairs with complementary literals; add new clauses
          </p>
        </div>

        <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <strong>Step 3:</strong>
          <p style={{ marginTop: '10px', fontSize: '22px', color: '#666' }}>
            If you derive {'{}'} → proved.<br/>
            If no new clauses appear (saturation) and no empty clause → not proved by refutation.
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Resolution Proof Example - Goal and Premises
    <ContentSlide title="Resolution Proof Example">
      <p style={{ marginBottom: '30px', fontSize: '22px', color: '#666' }}>
        Use resolution refutation to prove the following:
      </p>

      <div style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', marginBottom: '30px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '22px', lineHeight: '2' }}>
          <div style={{ marginBottom: '30px' }}>
            <strong>Premises:</strong>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <div>1.&nbsp;&nbsp;{'{~p, q}'}</div>
              <div>2.&nbsp;&nbsp;{'{~r, s}'}</div>
            </div>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <strong>Negated Goal:</strong>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <div>3.&nbsp;&nbsp;{'{p, r}'}</div>
              <div>4.&nbsp;&nbsp;{'{~q}'}</div>
              <div>5.&nbsp;&nbsp;{'{~s}'}</div>
            </div>
          </div>

          <div style={{ borderTop: '2px solid #333', paddingTop: '20px', marginTop: '20px' }}>
            <strong>Goal:</strong>&nbsp;&nbsp;{'{}'}&nbsp;&nbsp;(empty clause = contradiction)
          </div>
        </div>
      </div>
    </ContentSlide>,

    // Resolution Proof Example - Step 1-6
    <ContentSlide title="Resolution Proof Example">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;{'{~p, q}'}<span style={{ marginLeft: '300px', color: '#666' }}>Premise</span></div>
        <div>2.&nbsp;&nbsp;{'{~r, s}'}<span style={{ marginLeft: '305px', color: '#666' }}>Premise</span></div>
        <div>3.&nbsp;&nbsp;{'{p, r}'}<span style={{ marginLeft: '315px', color: '#666' }}>Negated Goal</span></div>
        <div>4.&nbsp;&nbsp;{'{~q}'}<span style={{ marginLeft: '330px', color: '#666' }}>Negated Goal</span></div>
        <div>5.&nbsp;&nbsp;{'{~s}'}<span style={{ marginLeft: '335px', color: '#666' }}>Negated Goal</span></div>
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
          <div>6.&nbsp;&nbsp;{'{~p}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 1, 4</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '20px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;{'{}'}
        </div>
      </div>
    </ContentSlide>,

    // Resolution Proof Example - Step 1-7
    <ContentSlide title="Resolution Proof Example">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;{'{~p, q}'}<span style={{ marginLeft: '300px', color: '#666' }}>Premise</span></div>
        <div>2.&nbsp;&nbsp;{'{~r, s}'}<span style={{ marginLeft: '305px', color: '#666' }}>Premise</span></div>
        <div>3.&nbsp;&nbsp;{'{p, r}'}<span style={{ marginLeft: '315px', color: '#666' }}>Negated Goal</span></div>
        <div>4.&nbsp;&nbsp;{'{~q}'}<span style={{ marginLeft: '330px', color: '#666' }}>Negated Goal</span></div>
        <div>5.&nbsp;&nbsp;{'{~s}'}<span style={{ marginLeft: '335px', color: '#666' }}>Negated Goal</span></div>
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
          <div>6.&nbsp;&nbsp;{'{~p}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 1, 4</span></div>
          <div>7.&nbsp;&nbsp;{'{~r}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 2, 5</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '20px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;{'{}'}
        </div>
      </div>
    </ContentSlide>,

    // Resolution Proof Example - Step 1-8
    <ContentSlide title="Resolution Proof Example">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;{'{~p, q}'}<span style={{ marginLeft: '300px', color: '#666' }}>Premise</span></div>
        <div>2.&nbsp;&nbsp;{'{~r, s}'}<span style={{ marginLeft: '305px', color: '#666' }}>Premise</span></div>
        <div>3.&nbsp;&nbsp;{'{p, r}'}<span style={{ marginLeft: '315px', color: '#666' }}>Negated Goal</span></div>
        <div>4.&nbsp;&nbsp;{'{~q}'}<span style={{ marginLeft: '330px', color: '#666' }}>Negated Goal</span></div>
        <div>5.&nbsp;&nbsp;{'{~s}'}<span style={{ marginLeft: '335px', color: '#666' }}>Negated Goal</span></div>
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
          <div>6.&nbsp;&nbsp;{'{~p}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 1, 4</span></div>
          <div>7.&nbsp;&nbsp;{'{~r}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 2, 5</span></div>
          <div>8.&nbsp;&nbsp;{'{r}'}<span style={{ marginLeft: '340px', color: '#666' }}>Resolution: 3, 6</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '20px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;{'{}'}
        </div>
      </div>
    </ContentSlide>,

    // Resolution Proof Example - Complete
    <ContentSlide title="Resolution Proof Example">
      <div style={{ maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '1.8' }}>
        <div>1.&nbsp;&nbsp;{'{~p, q}'}<span style={{ marginLeft: '300px', color: '#666' }}>Premise</span></div>
        <div>2.&nbsp;&nbsp;{'{~r, s}'}<span style={{ marginLeft: '305px', color: '#666' }}>Premise</span></div>
        <div>3.&nbsp;&nbsp;{'{p, r}'}<span style={{ marginLeft: '315px', color: '#666' }}>Negated Goal</span></div>
        <div>4.&nbsp;&nbsp;{'{~q}'}<span style={{ marginLeft: '330px', color: '#666' }}>Negated Goal</span></div>
        <div>5.&nbsp;&nbsp;{'{~s}'}<span style={{ marginLeft: '335px', color: '#666' }}>Negated Goal</span></div>
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
          <div>6.&nbsp;&nbsp;{'{~p}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 1, 4</span></div>
          <div>7.&nbsp;&nbsp;{'{~r}'}<span style={{ marginLeft: '330px', color: '#666' }}>Resolution: 2, 5</span></div>
          <div>8.&nbsp;&nbsp;{'{r}'}<span style={{ marginLeft: '340px', color: '#666' }}>Resolution: 3, 6</span></div>
          <div>9.&nbsp;&nbsp;{'{}'}<span style={{ marginLeft: '345px', color: '#666' }}>Resolution: 8, 7</span></div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', marginTop: '20px' }}>
          <strong>Goal:</strong>&nbsp;&nbsp;{'{}'}&nbsp;&nbsp;<span style={{ color: '#2e7d32', fontWeight: 'bold' }}>Complete</span>
        </div>
      </div>
    </ContentSlide>,

    // ========================================
    // CS157 Quiz 2 Review Session Slides
    // ========================================

    // Quiz 2 - Slide 1: Title Slide
    <TitleSlide
      title="CS157 Quiz 2 Review"
      subtitle="Relational Logic & Fitch Proofs"
      instructor="Quiz 2 Review Session"
      date="October 30th, 2025"
    />,



    // Quiz 2 - Slide 3: Section Divider
    <SectionSlide
      title="Part 1: Relational Logic"
      subtitle="Models, Evaluation & Classification"
    />,

    // Quiz 2 - Slide 4: Relational Logic Setup
    <ContentSlide title="Relational Logic Setup">
      <div style={{ fontSize: '28px', lineHeight: '1.8' }}>
        <p><strong>Key Components:</strong></p>
        <ul style={{ marginTop: '20px', marginBottom: '30px' }}>
          <li><strong>Object constants:</strong> a, b</li>
          <li><strong>Relational constants:</strong> p, q, r
            <ul style={{ fontSize: '24px', marginTop: '10px' }}>
              <li>p and q are <strong>1-ary</strong> (unary)</li>
              <li>r is <strong>2-ary</strong> (binary)</li>
            </ul>
          </li>
          <li><strong>Variables:</strong> x, y, z</li>
        </ul>

        <div style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <p><strong>Ground Terms:</strong> a, b</p>
        </div>

        <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <p><strong>Ground Atomic Sentences:</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '26px', marginTop: '15px' }}>
            p(a), p(b), q(a), q(b), r(a,a), r(a,b), r(b,a), r(b,b)
          </p>
          <p style={{ marginTop: '15px', fontSize: '24px', fontStyle: 'italic' }}>
            Each ground atomic sentence has a truth assignment, and the model is defined by these truth assignments.
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 5: Practice Evaluation
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

    // Quiz 2 - Slide 6a: Practice Evaluation - Answer 1
    <ContentSlide title="Practice: Evaluate in the Model (1/4)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>How ∀ (Universal) Works:</p>
          <p style={{ marginBottom: '12px' }}>∀x p(x) means "p holds for ALL objects in the domain"</p>
          <p style={{ marginBottom: '12px' }}>This expands to a <strong>conjunction (∧)</strong>: p(a) ∧ p(b)</p>
          <p style={{ marginBottom: '12px' }}>Evaluating: p(a) = T, p(b) = F</p>
          <p style={{ fontWeight: 'bold', color: '#d32f2f' }}>T ∧ F = <strong>False</strong></p>
          <p style={{ marginTop: '12px', fontStyle: 'italic', fontSize: '24px' }}>Both must be true for the conjunction to be true!</p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 6b: Practice Evaluation - Answer 2
    <ContentSlide title="Practice: Evaluate in the Model (2/4)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>How ∃ (Existential) Works:</p>
          <p style={{ marginBottom: '12px' }}>∃x p(x) means "p holds for AT LEAST ONE object in the domain"</p>
          <p style={{ marginBottom: '12px' }}>This expands to a <strong>disjunction (∨)</strong>: p(a) ∨ p(b)</p>
          <p style={{ marginBottom: '12px' }}>Evaluating: p(a) = T, p(b) = F</p>
          <p style={{ fontWeight: 'bold', color: '#388e3c' }}>T ∨ F = <strong>True</strong></p>
          <p style={{ marginTop: '12px', fontStyle: 'italic', fontSize: '24px' }}>Only one needs to be true for the disjunction to be true!</p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 6c: Practice Evaluation - Answer 3
    <ContentSlide title="Practice: Evaluate in the Model (3/4)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e0f7fa', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Nested Quantifiers:</p>
          <p style={{ marginBottom: '12px' }}>∀x∃y q(x,y) means "For every x, there exists at least one y where q(x,y) holds"</p>
          <p style={{ marginBottom: '12px' }}>Expand from outside in:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li>∀x → conjunction over domain: <strong>∃y q(a,y) ∧ ∃y q(b,y)</strong></li>
            <li>∃y → disjunction over domain: <strong>(q(a,a)∨q(a,b)) ∧ (q(b,a)∨q(b,b))</strong></li>
          </ul>
          <p style={{ marginBottom: '12px' }}>Evaluating: (T∨T) ∧ (T∨F) = T ∧ T</p>
          <p style={{ fontWeight: 'bold', color: '#388e3c' }}>T ∧ T = <strong>True</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 6d: Practice Evaluation - Answer 4
    <ContentSlide title="Practice: Evaluate in the Model (4/4)">
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
              <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c' }}>True</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Order Matters!</p>
          <p style={{ marginBottom: '12px' }}>∃x∀y q(x,y) means "There exists one x such that for ALL y, q(x,y) holds"</p>
          <p style={{ marginBottom: '12px' }}>Expand from outside in:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li>∃x → disjunction over domain: <strong>∀y q(a,y) ∨ ∀y q(b,y)</strong></li>
            <li>∀y → conjunction over domain: <strong>(q(a,a)∧q(a,b)) ∨ (q(b,a)∧q(b,b))</strong></li>
          </ul>
          <p style={{ marginBottom: '12px' }}>Evaluating: (T∧T) ∨ (T∧F) = T ∨ F</p>
          <p style={{ fontWeight: 'bold', color: '#388e3c' }}>T ∨ F = <strong>True</strong></p>
          <p style={{ marginTop: '12px', backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '5px', fontSize: '24px' }}>
            <strong>Key insight:</strong> Object 'a' is related to BOTH a and b (q(a,a)=T, q(a,b)=T), so there DOES exist an x that's related to everything!
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 7: Quantifiers Explained
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

    // Quiz 2 - Slide 8: Valid / Contingent / Unsatisfiable
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

    // Quiz 2 - Slide 9a: Classification Example 1
    <ContentSlide title="Classification Examples (1/5)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Why Valid?</p>
          <p style={{ marginBottom: '12px' }}>This sentence is a <strong>tautology</strong> - it's true in every possible model.</p>
          <p style={{ marginBottom: '12px' }}>No matter what truth value p(a) has:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li>If p(a) = T, then ¬p(a) = F, so p(a) ∨ ¬p(a) = T ∨ F = <strong>T</strong></li>
            <li>If p(a) = F, then ¬p(a) = T, so p(a) ∨ ¬p(a) = F ∨ T = <strong>T</strong></li>
          </ul>
          <p style={{ fontWeight: 'bold', color: '#388e3c' }}>Since it's true in ALL models → <strong>Valid</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 9b: Classification Example 2
    <ContentSlide title="Classification Examples (2/5)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#ffebee', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Why Unsatisfiable?</p>
          <p style={{ marginBottom: '12px' }}>This sentence is a <strong>contradiction</strong> - it's false in every possible model.</p>
          <p style={{ marginBottom: '12px' }}>No matter what truth value p(a) has:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li>If p(a) = T, then ¬p(a) = F, so p(a) ∧ ¬p(a) = T ∧ F = <strong>F</strong></li>
            <li>If p(a) = F, then ¬p(a) = T, so p(a) ∧ ¬p(a) = F ∧ T = <strong>F</strong></li>
          </ul>
          <p style={{ fontWeight: 'bold', color: '#d32f2f' }}>Since it's false in ALL models → <strong>Unsatisfiable</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 9c: Classification Example 3
    <ContentSlide title="Classification Examples (3/5)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#fff9c4', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Why Contingent?</p>
          <p style={{ marginBottom: '12px' }}>This sentence is <strong>neither always true nor always false</strong> - its truth depends on the model.</p>
          <p style={{ marginBottom: '12px' }}>Consider different truth assignments:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li>If p(a) = T and p(b) = F: p(a) ∨ p(b) = T ∨ F = <strong>T</strong> ✓ (satisfying model)</li>
            <li>If p(a) = F and p(b) = F: p(a) ∨ p(b) = F ∨ F = <strong>F</strong> ✗ (falsifying model)</li>
          </ul>
          <p style={{ fontWeight: 'bold', color: '#f57c00' }}>True in SOME models, false in OTHERS → <strong>Contingent</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 9d: Classification Example 4
    <ContentSlide title="Classification Examples (4/5)">
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
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Why Valid?</p>
          <p style={{ marginBottom: '12px' }}>∀x p(x) → ∃x p(x) means "If p holds for all objects, then p holds for at least one object"</p>
          <p style={{ marginBottom: '12px' }}>Let's think about when this could be false:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li>For the implication to be false, we need: ∀x p(x) = T <strong>and</strong> ∃x p(x) = F</li>
            <li>But if ∀x p(x) is true (p holds for ALL objects), then ∃x p(x) MUST also be true (p holds for at least one)</li>
            <li>This situation is <strong>impossible</strong>!</li>
          </ul>
          <p style={{ fontWeight: 'bold', color: '#388e3c' }}>Can never be false → <strong>Valid</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 9e: Classification Example 5
    <ContentSlide title="Classification Examples (5/5)">
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

        <div style={{ backgroundColor: '#fff9c4', padding: '20px', borderRadius: '8px', marginTop: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Why Contingent?</p>
          <p style={{ marginBottom: '12px' }}>∃x p(x) → ∀x p(x) means "If p holds for at least one object, then p holds for all objects"</p>
          <p style={{ marginBottom: '12px' }}>This is NOT always true:</p>
          <ul style={{ marginLeft: '25px', marginBottom: '12px' }}>
            <li><strong>Counterexample:</strong> Domain = {'{a, b}'}, p(a) = T, p(b) = F</li>
            <li>Then: ∃x p(x) = (p(a) ∨ p(b)) = T ∨ F = <strong>T</strong></li>
            <li>And: ∀x p(x) = (p(a) ∧ p(b)) = T ∧ F = <strong>F</strong></li>
            <li>So: T → F = <strong>F</strong> (the implication is false in this model)</li>
          </ul>
          <p style={{ fontWeight: 'bold', color: '#f57c00' }}>False in some models, true in others → <strong>Contingent</strong></p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 10: Section Divider
    <SectionSlide
      title="Part 2: Entailment"
      subtitle="True/False Practice Problems"
    />,

    // Quiz 2 - Slide 10a: What is Logical Entailment?
    <ContentSlide title="What is Logical Entailment?">
      <div style={{ fontSize: '26px', lineHeight: '1.7' }}>
        <div style={{ backgroundColor: '#e3f2fd', padding: '22px', borderRadius: '8px', marginBottom: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '28px' }}>Definition:</p>
          <p style={{ marginBottom: '12px' }}>Δ ⊨ φ means "Δ <strong>entails</strong> φ"</p>
          <p style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '15px' }}>
            In every model where all sentences in Δ are true, φ must also be true.
          </p>
        </div>

        <div style={{ backgroundColor: '#f3e5f5', padding: '22px', borderRadius: '8px', marginBottom: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>How to check if Δ ⊨ φ:</p>
          <ol style={{ marginLeft: '25px', fontSize: '24px', lineHeight: '1.8' }}>
            <li>Find all models that satisfy Δ (make all sentences in Δ true)</li>
            <li>Check if φ is true in ALL of those models</li>
            <li>If yes → <strong style={{ color: '#388e3c' }}>Entailment holds (True)</strong></li>
            <li>If there's even one model where Δ is true but φ is false → <strong style={{ color: '#d32f2f' }}>Entailment fails (False)</strong></li>
          </ol>
        </div>

        <div style={{ backgroundColor: '#fff3e0', padding: '22px', borderRadius: '8px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '26px' }}>Example:</p>
          <p style={{ marginBottom: '10px', fontFamily: 'monospace', fontSize: '24px' }}>p(a) ⊨ (p(a) ∨ p(b))?</p>
          <ul style={{ marginLeft: '25px', marginTop: '15px', fontSize: '24px', lineHeight: '1.8' }}>
            <li>In every model where p(a) is true, is (p(a) ∨ p(b)) also true?</li>
            <li>If p(a) = T, then (p(a) ∨ p(b)) = (T ∨ ?) = T (regardless of p(b))</li>
            <li style={{ fontWeight: 'bold', color: '#388e3c' }}>Yes! The entailment holds.</li>
          </ul>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 11: Entailment Practice
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

    // Quiz 2 - Slide 12a: Entailment Answer 1
    <ContentSlide title="True/False Entailment (1/6)">
      <div style={{ fontSize: '26px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Statement</th>
              <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Answer</th>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Disjunction introduction</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '15px' }}>Example:</p>
          <p style={{ fontSize: '26px', lineHeight: '1.8' }}>
            If p(a) = T, then (p(a) ∨ p(b)) = (T ∨ anything) = T
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 12b: Entailment Answer 2
    <ContentSlide title="True/False Entailment (2/6)">
      <div style={{ fontSize: '26px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Statement</th>
              <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Answer</th>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Disjunction introduction</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∧ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Second conjunct not guaranteed</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#ffebee', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '15px' }}>Counterexample:</p>
          <p style={{ fontSize: '26px', lineHeight: '1.8' }}>
            Suppose p(a) = T, p(b) = F<br/>
            Then p(a) is true ✓<br/>
            But (p(a) ∧ p(b)) = (T ∧ F) = F ✗
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 12c: Entailment Answer 3
    <ContentSlide title="True/False Entailment (3/6)">
      <div style={{ fontSize: '26px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Statement</th>
              <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Answer</th>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Disjunction introduction</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∧ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Second conjunct not guaranteed</td>
            </tr>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>∀x p(x) ⊨ ∃x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Universal implies existential</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '15px' }}>Example:</p>
          <p style={{ fontSize: '26px', lineHeight: '1.8' }}>
            If p holds for ALL objects, it must hold for AT LEAST ONE object.
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 12d: Entailment Answer 4
    <ContentSlide title="True/False Entailment (4/6)">
      <div style={{ fontSize: '26px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Statement</th>
              <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Answer</th>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Disjunction introduction</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∧ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Second conjunct not guaranteed</td>
            </tr>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>∀x p(x) ⊨ ∃x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Universal implies existential</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>∃x p(x) ⊨ ∀x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Countermodel exists</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#ffebee', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '15px' }}>Counterexample:</p>
          <p style={{ fontSize: '26px', lineHeight: '1.8' }}>
            Suppose p(a) = T, p(b) = F<br/>
            Then ∃x p(x) = (p(a) ∨ p(b)) = T ✓<br/>
            But ∀x p(x) = (p(a) ∧ p(b)) = F ✗
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 12e: Entailment Answer 5
    <ContentSlide title="True/False Entailment (5/6)">
      <div style={{ fontSize: '26px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Statement</th>
              <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Answer</th>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Disjunction introduction</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∧ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Second conjunct not guaranteed</td>
            </tr>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>∀x p(x) ⊨ ∃x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Universal implies existential</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>∃x p(x) ⊨ ∀x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Counterexample exists</td>
            </tr>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>∃y∀x q(x,y) ⊨ ∀x∃y q(x,y)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Quantifier order matters</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '15px' }}>Example:</p>
          <p style={{ fontSize: '26px', lineHeight: '1.8' }}>
            If ONE person is everyone's friend → then everyone has at least one friend
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 12f: Entailment Answer 6
    <ContentSlide title="True/False Entailment (6/6)">
      <div style={{ fontSize: '26px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Statement</th>
              <th style={{ padding: '15px', textAlign: 'center', fontSize: '26px' }}>Answer</th>
              <th style={{ padding: '15px', textAlign: 'left', fontSize: '26px' }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∨ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Disjunction introduction</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>p(a) ⊨ (p(a) ∧ p(b))</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Second conjunct not guaranteed</td>
            </tr>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>∀x p(x) ⊨ ∃x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Universal implies existential</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>∃x p(x) ⊨ ∀x p(x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#d32f2f', fontSize: '32px' }}>❌ False</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Counterexample exists</td>
            </tr>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <td style={{ padding: '15px', fontSize: '28px' }}>∃y∀x q(x,y) ⊨ ∀x∃y q(x,y)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Quantifier order matters</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontSize: '28px' }}>∀x∀y q(x,y) ⊨ ∀x∀y q(y,x)</td>
              <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#388e3c', fontSize: '32px' }}>✅ True</td>
              <td style={{ padding: '15px', fontSize: '24px' }}>Variable renaming (bound vars)</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#e8f5e9', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '15px' }}>Example:</p>
          <p style={{ fontSize: '26px', lineHeight: '1.8' }}>
            Both mean "q holds for all pairs"<br/>
            x and y are just placeholder names (bound variables)<br/>
            Swapping them doesn't change the meaning
          </p>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 13: Section Divider
    <SectionSlide
      title="Part 3: Fitch Proofs"
      subtitle="Rules & Strategies"
    />,

    // Quiz 2 - Slide 14: Fitch Rules Review
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
              <li><strong>Or Introduction (∨ Introduction):</strong> From φ, infer φ ∨ ψ</li>
              <li><strong>Or Elimination (∨ Elimination):</strong> From φ ∨ ψ, φ ⇒ χ, and ψ ⇒ χ, infer χ</li>
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

    // Quiz 2 - Slide 15: Practice Proof 1 - Problem Statement
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
          <li>Use Or Elimination with the negated premise</li>
        </ul>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 16: Practice Proof 1 - Step 1-4 (Premises + Universal Elimination)
    <ContentSlide title="Practice Proof 1 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '24px', lineHeight: '2' }}>
        <div>1.  ∀X∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ~p(a,b)<span style={{ marginLeft: '240px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #ddd' }}>
          <div>3.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
          <div>4.  p(a,b) | p(b,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '3px solid #333', color: '#1976d2', fontFamily: 'sans-serif' }}>
          <strong>Goal: p(b,a)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 17: Practice Proof 1 - Lines 5-8 (First subproof)
    <ContentSlide title="Practice Proof 1 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '22px', lineHeight: '1.8' }}>
        <div>1.  ∀X∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ~p(a,b)<span style={{ marginLeft: '240px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
        <div>4.  p(a,b) | p(b,a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #ddd', backgroundColor: '#fff3e0', padding: '10px', marginLeft: '-10px' }}>
          <div>5.  | p(a,b)<span style={{ marginLeft: '230px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>6.  | | ~p(b,a)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>7.  | | p(a,b)<span style={{ marginLeft: '210px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 5</span></div>
          <div>8.  | ~p(b,a) =&gt; p(a,b)<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 6, 7</span></div>
        </div>

        <div style={{ marginTop: '30px', paddingTop: '15px', borderTop: '3px solid #333', color: '#1976d2', fontFamily: 'sans-serif' }}>
          <strong>Building toward: p(b,a)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 18: Practice Proof 1 - Lines 9-14 (Negation Intro/Elim + Close first case)
    <ContentSlide title="Practice Proof 1 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '1.7' }}>
        <div>1.  ∀X∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '40px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ~p(a,b)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
        <div>4.  p(a,b) | p(b,a)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>

        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '2px solid #ddd', backgroundColor: '#fff3e0', padding: '8px', marginLeft: '-8px' }}>
          <div>5.  | p(a,b)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>6.  | | ~p(b,a)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>7.  | | p(a,b)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 5</span></div>
          <div>8.  | ~p(b,a) =&gt; p(a,b)<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 6, 7</span></div>
          <div>9.  | | ~p(b,a)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>10. | | ~p(a,b)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 2</span></div>
          <div>11. | ~p(b,a) =&gt; ~p(a,b)<span style={{ marginLeft: '50px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 9, 10</span></div>
          <div>12. | ~~p(b,a)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Negation Introduction: 8, 11</span></div>
          <div>13. | p(b,a)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Negation Elimination: 12</span></div>
          <div>14. p(a,b) =&gt; p(b,a)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 5, 13</span></div>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 19: Practice Proof 1 - Complete (with Or Elimination)
    <ContentSlide title="Practice Proof 1 - Solution (Complete)">
      <div style={{ backgroundColor: '#f8f9fa', padding: '18px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '19px', lineHeight: '1.6' }}>
        <div>1.  ∀X∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '40px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ~p(a,b)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
        <div>4.  p(a,b) | p(b,a)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>

        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '2px solid #ddd' }}>
          <div>5.  | p(a,b)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>6.  | | ~p(b,a)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>7.  | | p(a,b)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 5</span></div>
          <div>8.  | ~p(b,a) =&gt; p(a,b)<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 6, 7</span></div>
          <div>9.  | | ~p(b,a)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>10. | | ~p(a,b)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 2</span></div>
          <div>11. | ~p(b,a) =&gt; ~p(a,b)<span style={{ marginLeft: '50px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 9, 10</span></div>
          <div>12. | ~~p(b,a)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Negation Introduction: 8, 11</span></div>
          <div>13. | p(b,a)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Negation Elimination: 12</span></div>
          <div>14. p(a,b) =&gt; p(b,a)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 5, 13</span></div>
        </div>

        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '2px solid #ddd', backgroundColor: '#e8f5e9', padding: '8px', marginLeft: '-8px' }}>
          <div>15. | p(b,a)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>16. p(b,a) =&gt; p(b,a)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 15, 15</span></div>
          <div style={{ marginTop: '5px', fontWeight: 'bold' }}>17. p(b,a)<span style={{ marginLeft: '200px', color: '#666', fontFamily: 'sans-serif' }}>Or Elimination: 4, 14, 16</span></div>
        </div>

        <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif', fontSize: '20px' }}>
          <strong>✓ Goal achieved: p(b,a)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 20: Practice Proof 2 - Problem Statement
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

    // Quiz 2 - Slide 21: Practice Proof 2 - Lines 1-6 (Setup)
    <ContentSlide title="Practice Proof 2 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '23px', lineHeight: '1.9' }}>
        <div>1.  ∀X:∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '50px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:~p(X,Y)<span style={{ marginLeft: '120px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #ddd' }}>
          <div>3.  ∀Y:~p(a,Y)<span style={{ marginLeft: '150px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
          <div>4.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '70px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
          <div>5.  ~p(a,a)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
          <div>6.  p(a,a) | p(a,a)<span style={{ marginLeft: '115px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif' }}>
          <strong>Goal: ∀X:q(X)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 22: Practice Proof 2 - Lines 7-10 (First nested subproof)
    <ContentSlide title="Practice Proof 2 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '20px', lineHeight: '1.7' }}>
        <div>1.  ∀X:∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '40px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:~p(X,Y)<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:~p(a,Y)<span style={{ marginLeft: '140px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
        <div>4.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
        <div>5.  ~p(a,a)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
        <div>6.  p(a,a) | p(a,a)<span style={{ marginLeft: '105px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>

        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '2px solid #ddd', backgroundColor: '#fff3e0', padding: '8px', marginLeft: '-8px' }}>
          <div>7.  | p(a,a)<span style={{ marginLeft: '175px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>8.  | | ~q(b)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>9.  | | p(a,a)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 7</span></div>
          <div>10. | ~q(b) =&gt; p(a,a)<span style={{ marginLeft: '80px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 8, 9</span></div>
        </div>

        <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '3px solid #333', color: '#e65100', fontFamily: 'sans-serif' }}>
          <strong>Building toward: ∀X:q(X)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 23: Practice Proof 2 - Lines 11-16 (Negation Intro/Elim + Close first case)
    <ContentSlide title="Practice Proof 2 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '17px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '19px', lineHeight: '1.6' }}>
        <div>1.  ∀X:∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '35px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:~p(X,Y)<span style={{ marginLeft: '105px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:~p(a,Y)<span style={{ marginLeft: '135px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
        <div>4.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '55px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
        <div>5.  ~p(a,a)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
        <div>6.  p(a,a) | p(a,a)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>

        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '2px solid #ddd', backgroundColor: '#fff3e0', padding: '7px', marginLeft: '-7px' }}>
          <div>7.  | p(a,a)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>8.  | | ~q(b)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>9.  | | p(a,a)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 7</span></div>
          <div>10. | ~q(b) =&gt; p(a,a)<span style={{ marginLeft: '75px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 8, 9</span></div>
          <div>11. | | ~q(b)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>12. | | ~p(a,a)<span style={{ marginLeft: '150px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 5</span></div>
          <div>13. | ~q(b) =&gt; ~p(a,a)<span style={{ marginLeft: '65px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 11, 12</span></div>
          <div>14. | ~~q(b)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Negation Introduction: 10, 13</span></div>
          <div>15. | q(b)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>Negation Elimination: 14</span></div>
          <div>16. p(a,a) =&gt; q(b)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 7, 15</span></div>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 24: Practice Proof 2 - Complete (Lines 17-18)
    <ContentSlide title="Practice Proof 2 - Solution (Complete)">
      <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '18px', lineHeight: '1.55' }}>
        <div>1.  ∀X:∀Y:(p(X,Y) | p(Y,X))<span style={{ marginLeft: '30px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:~p(X,Y)<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:~p(a,Y)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
        <div>4.  ∀Y:(p(a,Y) | p(Y,a))<span style={{ marginLeft: '50px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 1</span></div>
        <div>5.  ~p(a,a)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
        <div>6.  p(a,a) | p(a,a)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 4</span></div>

        <div style={{ marginTop: '7px', paddingTop: '7px', borderTop: '2px solid #ddd' }}>
          <div>7.  | p(a,a)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>8.  | | ~q(b)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>9.  | | p(a,a)<span style={{ marginLeft: '150px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 7</span></div>
          <div>10. | ~q(b) =&gt; p(a,a)<span style={{ marginLeft: '70px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 8, 9</span></div>
          <div>11. | | ~q(b)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>12. | | ~p(a,a)<span style={{ marginLeft: '145px', color: '#666', fontFamily: 'sans-serif' }}>Reiteration: 5</span></div>
          <div>13. | ~q(b) =&gt; ~p(a,a)<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 11, 12</span></div>
          <div>14. | ~~q(b)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Negation Introduction: 10, 13</span></div>
          <div>15. | q(b)<span style={{ marginLeft: '180px', color: '#666', fontFamily: 'sans-serif' }}>Negation Elimination: 14</span></div>
          <div>16. p(a,a) =&gt; q(b)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 7, 15</span></div>
        </div>

        <div style={{ marginTop: '7px', paddingTop: '7px', borderTop: '2px solid #ddd', backgroundColor: '#e8f5e9', padding: '6px', marginLeft: '-6px' }}>
          <div style={{ fontWeight: 'bold' }}>17. q(b)<span style={{ marginLeft: '195px', color: '#666', fontFamily: 'sans-serif' }}>Or Elimination: 6, 16, 16</span></div>
          <div style={{ fontWeight: 'bold' }}>18. ∀X:q(X)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Universal Introduction: 17</span></div>
        </div>

        <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif', fontSize: '19px' }}>
          <strong>✓ Goal achieved: ∀X:q(X)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 25: Existential Elimination Deep Dive
    <SectionSlide
      title="Existential Elimination (∃ Elimination)"
      subtitle="The Tricky Rule"
    />,

    // Quiz 2 - Slide 28: Understanding ∃E
    <ContentSlide title="Understanding Existential Elimination">
      <div style={{ fontSize: '28px', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '30px', fontSize: '32px', fontWeight: 'bold', color: '#6a1b9a' }}>
          Think of Existential Elimination (∃ Elimination) as "Or Elimination on steroids"
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

    // Quiz 2 - Slide 29: Practice Proof 3 - Problem Statement
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
          <li>Extract p(c) using ∧E</li>
          <li>Reintroduce existential using ∃I</li>
        </ul>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 30: Practice Proof 3 - Step 1 (Premise)
    <ContentSlide title="Practice Proof 3 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
        <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

        <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '3px solid #333', color: '#2e7d32', fontFamily: 'sans-serif' }}>
          <strong>Goal: ∃X p(X)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 31: Practice Proof 3 - Step 1-2
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

    // Quiz 2 - Slide 32: Practice Proof 3 - Step 1-3
    <ContentSlide title="Practice Proof 3 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '28px', lineHeight: '2.2' }}>
        <div>1. ∃X (p(X) ∧ q(X))<span style={{ marginLeft: '110px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

        <div style={{ marginTop: '20px', borderLeft: '4px solid #9c27b0', paddingLeft: '20px' }}>
          <div>2. │ p(c) ∧ q(c)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Assumption (Existential Elimination)</span></div>
          <div>3. │ p(c)<span style={{ marginLeft: '190px', color: '#666', fontFamily: 'sans-serif' }}>And Elimination: 2</span></div>
        </div>

        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #333', color: '#2e7d32', fontFamily: 'sans-serif' }}>
          <strong>Goal: ∃X p(X)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 33: Practice Proof 3 - Step 1-4
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

    // Quiz 2 - Slide 34: Practice Proof 3 - Complete (Corrected with Implication + Universal Intro)
    <ContentSlide title="Practice Proof 3 - Solution (Complete)">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '25px', lineHeight: '2' }}>
        <div>1.  ∃X:(p(X) & q(X))<span style={{ marginLeft: '100px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #ddd', backgroundColor: '#f3e5f5', padding: '15px', marginLeft: '-15px' }}>
          <div>2.  | p(a) & q(a)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>3.  | p(a)<span style={{ marginLeft: '185px', color: '#666', fontFamily: 'sans-serif' }}>And Elimination: 2</span></div>
          <div>4.  | ∃X:p(X)<span style={{ marginLeft: '155px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 3</span></div>
        </div>

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #ddd' }}>
          <div>5.  p(a) & q(a) =&gt; ∃X:p(X)<span style={{ marginLeft: '50px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 2, 4</span></div>
          <div>6.  ∀X:(p(X) & q(X) =&gt; ∃X:p(X))<span style={{ marginLeft: '10px', color: '#666', fontFamily: 'sans-serif' }}>Universal Introduction: 5</span></div>
          <div style={{ fontWeight: 'bold' }}>7.  ∃X:p(X)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Existential Elimination: 1, 6</span></div>
        </div>

        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif' }}>
          <strong>✓ Goal achieved: ∃X:p(X)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 35: Practice Proof 4 - Problem Statement
<ContentSlide title="Practice Proof 4 (Complex Existential Elimination)">
      <div style={{ fontSize: '26px', lineHeight: '2' }}>
        <div style={{ backgroundColor: '#e1f5fe', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Premises:</p>
          <p style={{ fontFamily: 'monospace', fontSize: '30px', marginLeft: '20px' }}>
            1. ∀X:∀Y:(p(X,Y) &lt;=&gt; q(Y,Y))<br/>
            2. ∃X:q(X,X)
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '25px' }}>Goal:</p>
          <p style={{ fontFamily: 'monospace', fontSize: '30px', marginLeft: '20px' }}>
            ∀X:∃Y:p(X,Y)
          </p>
        </div>

        <p style={{ fontWeight: 'bold', color: '#01579b' }}>Strategy:</p>
        <ul style={{ marginLeft: '20px', fontSize: '26px' }}>
        <li>Use Existential Elimination with Implication and Universal Introduction</li>
          <li>From biconditional, extract q(b,b) =&gt; p(a,b)</li>
          <li>Build assumption → goal → Implication Introduction</li>
          <li>Generalize with Universal Introduction, then Existential Elimination</li>
        </ul>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 36: Practice Proof 4 - Lines 1-5 (Premises + Universal Elim)
    <ContentSlide title="Practice Proof 4 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '23px', lineHeight: '1.9' }}>
        <div>1.  ∃X:q(X,X)<span style={{ marginLeft: '160px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:(p(X,Y) &lt;=&gt; q(Y,Y))<span style={{ marginLeft: '45px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #ddd' }}>
          <div>3.  ∀Y:(p(a,Y) &lt;=&gt; q(Y,Y))<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
          <div>4.  p(a,b) &lt;=&gt; q(b,b)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
          <div>5.  q(b,b) =&gt; p(a,b)<span style={{ marginLeft: '95px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 4</span></div>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif' }}>
          <strong>Goal: ∀X:∃Y:p(X,Y)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 37: Practice Proof 4 - Lines 6-9 (Subproof with Implication Intro)
    <ContentSlide title="Practice Proof 4 - Solution">
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '21px', lineHeight: '1.8' }}>
        <div>1.  ∃X:q(X,X)<span style={{ marginLeft: '150px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:(p(X,Y) &lt;=&gt; q(Y,Y))<span style={{ marginLeft: '40px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:(p(a,Y) &lt;=&gt; q(Y,Y))<span style={{ marginLeft: '55px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
        <div>4.  p(a,b) &lt;=&gt; q(b,b)<span style={{ marginLeft: '90px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
        <div>5.  q(b,b) =&gt; p(a,b)<span style={{ marginLeft: '90px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 4</span></div>

        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '2px solid #ddd', backgroundColor: '#e1f5fe', padding: '10px', marginLeft: '-10px' }}>
          <div>6.  | q(b,b)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>7.  | p(a,b)<span style={{ marginLeft: '170px', color: '#666', fontFamily: 'sans-serif' }}>Implication Elimination: 5, 6</span></div>
          <div>8.  | ∃Y:p(a,Y)<span style={{ marginLeft: '135px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 7</span></div>
          <div>9.  q(b,b) =&gt; ∃Y:p(a,Y)<span style={{ marginLeft: '60px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 6, 8</span></div>
        </div>

        <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '3px solid #333', color: '#01579b', fontFamily: 'sans-serif' }}>
          <strong>Building toward: ∀X:∃Y:p(X,Y)</strong>
        </div>
      </div>
    </ContentSlide>,

    // Quiz 2 - Slide 38: Practice Proof 4 - Complete (All 12 lines)
    <ContentSlide title="Practice Proof 4 - Solution (Complete)">
      <div style={{ backgroundColor: '#f8f9fa', padding: '18px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '19px', lineHeight: '1.6' }}>
        <div>1.  ∃X:q(X,X)<span style={{ marginLeft: '145px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>2.  ∀X:∀Y:(p(X,Y) &lt;=&gt; q(Y,Y))<span style={{ marginLeft: '35px', color: '#666', fontFamily: 'sans-serif' }}>Premise</span></div>
        <div>3.  ∀Y:(p(a,Y) &lt;=&gt; q(Y,Y))<span style={{ marginLeft: '50px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 2</span></div>
        <div>4.  p(a,b) &lt;=&gt; q(b,b)<span style={{ marginLeft: '85px', color: '#666', fontFamily: 'sans-serif' }}>Universal Elimination: 3</span></div>
        <div>5.  q(b,b) =&gt; p(a,b)<span style={{ marginLeft: '85px', color: '#666', fontFamily: 'sans-serif' }}>Biconditional Elimination: 4</span></div>

        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '2px solid #ddd', backgroundColor: '#e1f5fe', padding: '8px', marginLeft: '-8px' }}>
          <div>6.  | q(b,b)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Assumption</span></div>
          <div>7.  | p(a,b)<span style={{ marginLeft: '165px', color: '#666', fontFamily: 'sans-serif' }}>Implication Elimination: 5, 6</span></div>
          <div>8.  | ∃Y:p(a,Y)<span style={{ marginLeft: '130px', color: '#666', fontFamily: 'sans-serif' }}>Existential Introduction: 7</span></div>
          <div>9.  q(b,b) =&gt; ∃Y:p(a,Y)<span style={{ marginLeft: '55px', color: '#666', fontFamily: 'sans-serif' }}>Implication Introduction: 6, 8</span></div>
        </div>

        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '2px solid #ddd', backgroundColor: '#e8f5e9', padding: '8px', marginLeft: '-8px' }}>
          <div>10. ∀X:(q(X,X) =&gt; ∃Y:p(a,Y))<span style={{ marginLeft: '25px', color: '#666', fontFamily: 'sans-serif' }}>Universal Introduction: 9</span></div>
          <div>11. ∃Y:p(a,Y)<span style={{ marginLeft: '145px', color: '#666', fontFamily: 'sans-serif' }}>Existential Elimination: 1, 10</span></div>
          <div style={{ fontWeight: 'bold' }}>12. ∀X:∃Y:p(X,Y)<span style={{ marginLeft: '115px', color: '#666', fontFamily: 'sans-serif' }}>Universal Introduction: 11</span></div>
        </div>

        <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '3px solid #2e7d32', color: '#2e7d32', fontFamily: 'sans-serif', fontSize: '20px' }}>
          <strong>✓ Goal achieved: ∀X:∃Y:p(X,Y)</strong>
        </div>
      </div>
    </ContentSlide>,

  ];

  return (
    <div className="App">
      <Presentation slides={slides} />
    </div>
  );
}

export default App;
