import requests
import sys

def get_node(id:int)->dict:
    Data=requests.get(f"https://www.openstreetmap.org/api/0.6/node/{id}.json")
    json_Data=Data.json()
    return json_Data

def node_to_md(data: dict, filename: str) -> None:
    node = data["elements"][0]
    tags = node.get("tags", {})
    titre = tags.get("name")

    # --- Markdown ---
    content = f"# {titre}\n\n"
    content += "## Informations générales\n\n"
    content += f"- **ID** : {node['id']}\n"
    content += f"- **Latitude** : {node['lat']}\n"
    content += f"- **Longitude** : {node['lon']}\n"
    content += f"- [Voir sur OpenStreetMap](https://www.openstreetmap.org/node/{node['id']})\n\n"
    content += "## Détails et Attributs\n\n"
    if tags:
        for k, v in tags.items():
            content += f"- **{k}** : {v}\n"
    else:
        content += "Aucunes informations supplémentaires disponibles.\n"

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)


from md_to_html import convert

def fiche_osm(node_id: int) -> None:

    nom_md = f"fiche_{node_id}.md"
    nom_html = f"fiche_{node_id}.html"
    data = get_node(node_id)

    node_to_md(data, nom_md)
    print(f"Fichier Markdown généré : {nom_md}")
    convert(nom_md, nom_html)
    print(f"Fichier HTML généré : {nom_html}")



if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage : python3 fiche_osm.py <ID_OSM>")
    else:
        osm_id = int(sys.argv[1])
        fiche_osm(osm_id)