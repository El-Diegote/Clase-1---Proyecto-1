param(
    [string]$Root = (Resolve-Path "$PSScriptRoot\..").Path
)

$ErrorActionPreference = "Stop"

$requiredPaths = @(
    "README.md",
    "AGENTS.md",
    "DECISIONES.md",
    "index.html",
    "src/app.js",
    "src/styles.css",
    "docs/01-descripcion-funcional.md",
    "docs/02-arquitectura.md",
    "docs/03-instalacion-y-configuracion.md",
    "docs/04-manual-de-uso.md",
    "docs/05-modelo-de-datos.md",
    "docs/06-seguridad.md",
    "docs/07-pruebas.md",
    "docs/08-limitaciones.md",
    "docs/09-proximos-pasos.md",
    "docs/10-ejemplos.md",
    "docs/ECONOMIA.md",
    "docs/GOBIERNO_Y_RIESGOS.md",
    "prompts/system_prompt.md",
    "prompts/user_prompt.md",
    "corridas/corrida_001/input.json",
    "corridas/corrida_001/output.json",
    "corridas/corrida_001/metadata.json",
    "corridas/corrida_002/input.json",
    "corridas/corrida_002/output.json",
    "corridas/corrida_002/metadata.json",
    "corridas/corrida_003/input.json",
    "corridas/corrida_003/output.json",
    "corridas/corrida_003/metadata.json"
)

$missing = @()
foreach ($relativePath in $requiredPaths) {
    $fullPath = Join-Path $Root $relativePath
    if (-not (Test-Path -LiteralPath $fullPath)) {
        $missing += $relativePath
    }
}

if ($missing.Count -gt 0) {
    Write-Host "Faltan archivos requeridos:"
    $missing | ForEach-Object { Write-Host "- $_" }
    exit 1
}

$secretPatterns = @(
    "api[_-]?key\s*=",
    "token\s*=",
    "password\s*=",
    "secret\s*=",
    ("-----BEGIN " + "(RSA|DSA|EC|OPENSSH)? ?" + "PRIVATE " + "KEY-----")
)

$excludedDirectories = @("\.git\", "\work\", "\outputs\", "\node_modules\")
$files = Get-ChildItem -LiteralPath $Root -Recurse -File |
    Where-Object {
        $path = $_.FullName
        -not ($excludedDirectories | Where-Object { $path -like "*$_*" })
    }

$findings = @()
foreach ($file in $files) {
    foreach ($pattern in $secretPatterns) {
        $matches = Select-String -LiteralPath $file.FullName -Pattern $pattern -CaseSensitive:$false -ErrorAction SilentlyContinue
        foreach ($match in $matches) {
            $relative = Resolve-Path -LiteralPath $file.FullName -Relative
            $findings += "${relative}:$($match.LineNumber): $($match.Line.Trim())"
        }
    }
}

if ($findings.Count -gt 0) {
    Write-Host "Posibles secretos encontrados. Revisar antes de publicar:"
    $findings | ForEach-Object { Write-Host "- $_" }
    exit 1
}

Write-Host "Validacion completada: estructura documental presente y sin patrones basicos de secretos."
