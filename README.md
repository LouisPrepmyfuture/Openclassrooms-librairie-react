# Nom du Projet

Ce dépôt contient le code source d'une application React qui utilise des composants de modale réutilisables.

## Dépendances

- React: ^18.2.0
- React-DOM: ^18.2.0

## Installation

npm install modal-js-react

## Utilisation
Pour utiliser les composants de modal, vous pouvez importer le contexte et le fournisseur de modale depuis `"modal-js-react` :

```javascript
import { ModalContext, ModalProvider, Modal} from "modal-js-react"
```

Ensuite, vous pouvez envelopper vos composants dans le fournisseur de modale pour rendre les fonctionnalités de modale disponibles dans votre application plus ajouter le composent Modal dans le provider:

```javascript
<ModalProvider>
  <Modal>
  {/* Vos composants */}
</ModalProvider>
``````

- Assurez-vous d'avoir les dépendances installées.
- Importez les composants nécessaires depuis le projet.
- Utilisez les propriétés suivantes pour personnaliser les composants :

  - `modal` : un booléen qui indique si la modal est ouverte ou fermée.
  - `title` : ajoute un titre à l'en-tête.
  - `contentFooter` : ajoute un enfant au contenu du pied de page.
  - `contentModal` : ajoute un enfant au contenu de la modal.

- Vous pouvez également utiliser le paramètre `styleModal` pour personnaliser le style des composants. Voici les    propriétés disponibles :

  - `ContainerModal` : style du conteneur de la modal.
  - `ModalStyle` : style de la modal.
  - `HeaderModal` : style de l'en-tête de la modal.
  - `ButtonIconClose` : style du bouton de fermeture de la modal.
  - `BodyModalStyle` : style du corps de la modal.
