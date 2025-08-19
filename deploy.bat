@echo off
echo ===================================
echo Subiendo proyecto Cognitiva AI
echo ===================================

REM Inicializar Git si no existe
if not exist .git (
    echo Inicializando repositorio Git...
    git init
)

REM Agregar repositorio remoto
echo Configurando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/JoaquinTorresV/cognitivaAI.git

REM Verificar estado actual
echo Verificando archivos...
git status

REM Agregar todos los archivos
echo Agregando archivos al staging...
git add .

REM Crear commit
echo Creando commit...
git commit -m "Implement complete Cognitiva AI website

- Add ServiceOfferings section with interactive cards and navigation
- Implement WorkMethodology with 5-step process visualization  
- Create IndustryExpertise with 9 specialized industries
- Build FinalCTASection with benefits and metrics
- Add responsive TouchNavigation and CleanSwipeCard components
- Implement hash-based navigation for direct section access
- Remove mobile CTAs, maintain only floating action buttons
- Add consistent metrics sections across all components
- Integrate Hero, Navbar, Footer with optimized performance
- Include WhatsApp and Demo floating buttons
- Apply consistent design system with gradients and typography

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

REM Push al repositorio
echo Subiendo al repositorio...
git push -u origin main

echo ===================================
echo Proyecto subido exitosamente!
echo ===================================
pause