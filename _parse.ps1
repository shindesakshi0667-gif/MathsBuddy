$files = @('maths-app\js\quiz.js', 'maths-app\js\data.js', 'maths-app\js\dashboard.js', 'maths-app\js\lesson.js', 'maths-app\js\ai.js', 'maths-app\js\storage.js', 'maths-app\js\auth.js')
foreach ($f in $files) {
  $text = Get-Content $f -Raw
  # Strip the UTF-8 BOM if present
  $text = $text -replace '^\xEF\xBB\xBF', ''
  # Wrap so the IIFE-style file can be parsed as a program
  $code = $text
  try {
    $engine = New-Object -ComObject MSScriptControl.ScriptControl -ErrorAction Stop
    $engine.Language = 'JScript'
    $engine.AddCode($code) | Out-Null
    Write-Output ("PARSE OK:  " + $f)
  }
  catch {
    Write-Output ("PARSE FAIL: " + $f + "  -> " + $_.Exception.Message)
  }
}
