# Utiliser une image node pour la construction
FROM node:14 as build

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers de l'application et construire l'application
COPY . .
RUN npm run build

# Utiliser une image nginx pour servir l'application
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]