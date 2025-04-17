# Popis
Toto je webová aplikace, který má sloužit jako objednávkový systém ve fastfoodu. Aplikace byla vytvořena v rámci školního úkolu.

# Dokumentace
Ve složce public jsou html soubory admin.html(je to stránka admina, pro zprávu lokací a obědnávek) a user.html(to je stránka pro uživatele, kde uživatel vidí tabulku).
  - admin.html
    - jako první je na stránce select, kterým si vybíráme, na jaké lokaci právě jsme a provádíme změny
    - následně se na stránce nachází textové pole, do kterého zadáme název lokace, se kterou, podle stisknutí nějakého z tlačítek vedle něj, můžeme provádět, buď že ji přidáme(což uděláme stisknutím tlačítka Add location), nebo že ji odebereme (což uděláme stisknutím tlačítka Delete location)
    - dále se na stránce nachází trochu větší textové pole(pod nadpisem Order: ), v tomto textovém poli zadáme text objednávky, kterou stisknutím tlačítka pod textovým polem odešleme
    - jako poslední se na stránce nachází tabulka s objednávkami(zde jsou řazeny dle id, kvůli přehlednosti pro správce, narozdíl od tabulky u usera)
      - v tabulce se u každé objednávky nachází id, text, stav, a tlačítko next, které posouvá objednávku do fází ready, completed a poté ji smaže
  - user.html
    - jako první se na stránce nachází select, kterám si vybíráme, na jaké jsme vlastně lokaci
    - další se na stránce nachází tabulka s objednávkami(objednávky jsou zde řazeny podle stavu, aby uživatelé věděli, kdy si mají přijít pro objednávku)
      - v tabulce se u každé objednávky nachází id, text a stav
  - user.css a admin.css jsou styly pro html stránky
  - admin.js je kód, který probíhá na stránce admin.html
  - user.js je kód, který probíhá na stránce user.html

Soubor index.js je server, přes který probáhají všechny požadavky.

Ve složce endpoints se nachází soubor orders.js.
  - v tomto souboru se nachází objekt s městy a jejich objednávkami, a router, který propojuje metody, které se zde vyhodnocují
