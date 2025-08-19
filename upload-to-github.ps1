# Script de PowerShell para subir Cognitiva AI a GitHub
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Subiendo proyecto Cognitiva AI" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Verificar si estamos en el directorio correcto
if (!(Test-Path "package.json")) {
    Write-Host "Error: No se encontro package.json. Asegurate de estar en el directorio correcto del proyecto." -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit
}

# Inicializar Git si no existe
if (!(Test-Path ".git")) {
    Write-Host "Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
}

# Configurar repositorio remoto
Write-Host "Configurando repositorio remoto..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/JoaquinTorresV/cognitivaAI.git

# Verificar estado
Write-Host "Estado del repositorio:" -ForegroundColor Green
git status

# Agregar todos los archivos
Write-Host "Agregando archivos..." -ForegroundColor Yellow
git add .

# Crear commit
Write-Host "Creando commit..." -ForegroundColor Yellow
git commit -m "Complete Cognitiva AI website implementation

✨ Features implemented:
- Responsive ServiceOfferings with 6 interactive service cards
- WorkMethodology with 5-step process visualization
- IndustryExpertise covering 9 specialized sectors
- FinalCTASection with benefits grid and metrics
- Hash-based navigation for direct section access
- Mobile-optimized experience without intrusive CTAs
- Consistent 2x2 metrics matrices across sections

🎨 UI/UX Components:
- TouchNavigation with mobile/desktop variations
- CleanSwipeCard system for smooth transitions
- Floating action buttons (WhatsApp + Demo)
- Cohesive design system with gradients
- Typography presets and color system

🚀 Performance optimizations:
- Client-side rendering for hydration safety
- Responsive images and lazy loading
- Smooth animations and transitions
- Cross-device compatibility

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Intentar push
Write-Host "Subiendo al repositorio..." -ForegroundColor Green
$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "=====================================" -ForegroundColor Green
    Write-Host "✅ Proyecto subido exitosamente!" -ForegroundColor Green
    Write-Host "🌐 Disponible en: https://github.com/JoaquinTorresV/cognitivaAI" -ForegroundColor Green
    Write-Host "=====================================" -ForegroundColor Green
} else {
    Write-Host "❌ Error en el push. Intentando con --force-with-lease..." -ForegroundColor Yellow
    git push --force-with-lease origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Proyecto subido exitosamente con force push!" -ForegroundColor Green
    } else {
        Write-Host "❌ Error persistente. Revisa tu autenticación de GitHub." -ForegroundColor Red
        Write-Host "Salida del error:" -ForegroundColor Red
        Write-Host $pushResult -ForegroundColor Red
    }
}

Read-Host "Presiona Enter para cerrar"