# DevSpace Blog

> Static React.js et Next.js pour les blogues informatique utilise des fichier Markdown pour les postes. Contient pagination, categories et search



![DevSpace Blog](/public/images/screen.png 'DevSpace Blog')

[VIEW DEMO](https://sidimed-blogs.vercel.app/)

## Usage

### Install les Dependance
```bash
npm install
```

### Run Dev Server (http://localhost:3000) 
```bash
npm run dev
```

### Creatiton des postes

* Créez un fichier Markdown dans le dossier "posts" et nommez-le comme vous voulez comme slug
* Ajoutez le frontmatter/fields en haut, puis le body du posts. Voir un exemple dans le dossier "posts" de ce repo
* Ajoutez votre image de couverture et l'image de l'auteur dans le dossier public/images
* Pour le codage couleur des catégories, modifiez le fichier "Components/CategoryLabel.js"

### Caching

Husky est utilisé pour exécuter un script de cache sur git commit. La mise en cache est utilisée pour la recherche api route/serverless
