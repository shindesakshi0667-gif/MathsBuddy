$base = "c:\Users\sakshi shinde\.vscode-shared\maths-app\"
$pairs = @(
  @('dashboard.html', 'dashboard.js'),
  @('login.html', 'auth.js'),
  @('lesson.html', 'lesson.js'),
  @('quiz.html', 'quiz.js')
)
foreach ($p in $pairs) {
  $html = Get-Content ($base + $p[0]) -Raw
  $js = Get-Content ($base + 'js\' + $p[1]) -Raw
  $ids = [regex]::Matches($js, 'getElementById\("([^"]+)"\)') |
  ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
  $missing = @()
  foreach ($id in $ids) {
    if ($html -notmatch ('id="' + [regex]::Escape($id) + '"')) { $missing += $id }
  }
  if ($missing.Count) {
    Write-Output ("MISSING in " + $p[0] + ": " + ($missing -join ', '))
  }
  else {
    Write-Output ("OK: " + $p[1] + " -> all " + $ids.Count + " ids in " + $p[0])
  }
}
