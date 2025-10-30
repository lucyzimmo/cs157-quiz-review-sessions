from pathlib import Path

def replace_terms(path_str: str) -> None:
    path = Path(path_str)
    text = path.read_text()
    replacements = {
        '∀E:': 'Universal Elimination:',
        '∀I:': 'Universal Introduction:',
        '∃I:': 'Existential Introduction:',
        '∃E:': 'Existential Elimination:',
        '∧I:': 'Conjunction Introduction:',
        '∧E:': 'Conjunction Elimination:',
        '∨I:': 'Disjunction Introduction:',
        '∨E:': 'Disjunction Elimination:',
        '→I:': 'Implication Introduction:',
        '→E:': 'Implication Elimination:',
        '↔I:': 'Biconditional Introduction:',
        '↔E:': 'Biconditional Elimination:'
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    path.write_text(text)

if __name__ == '__main__':
    replace_terms('src/App.jsx')
    replace_terms('Quiz2ReviewSlides.jsx')
