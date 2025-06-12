@echo off
echo Iniciando Backend...
start cmd /k "cd back-end && npx nodemon app.js"

timeout /t 2 >nul

echo Iniciando Frontend...
start cmd /k "cd front-end\my-app && npm run dev"
