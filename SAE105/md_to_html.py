import markdown
import sys

def convert(entrée, sortie):
    with open(entrée, 'r', encoding='utf-8') as f:
        text = f.read()
    html_content = markdown.markdown(text)
    with open(sortie, 'w', encoding='utf-8') as f:
        f.write(html_content)



if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage : python3 md_to_html.py <fichier_entree.md> <fichier_sortie.html>")
    else:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        convert(input_file, output_file)