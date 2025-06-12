#!/bin/bash

# Inicia o Backend com nodemon
cd back-end
echo "Iniciando Backend..."
npx nodemon app.js &

# Volta para raiz e entra no frontend
cd ../front-end/my-app
echo "Iniciando Frontend..."
npm run dev
