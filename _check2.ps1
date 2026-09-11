# Verify data.js and ai.js logic by loading them into a JS-like check.
$data = Get-Content "maths-app\js\data.js" -Raw
$ai = Get-Content "maths-app\js\ai.js" -Raw

# Structural checks on data.js: 5 classes, each with topics having lesson+quiz
foreach ($cls in 1..5) {
  $count = ([regex]::Matches($data, "var class$cls = \[")).Count
  Write-Output ("class$cls block present: " + ($count -eq 1))
}
$topicIds = [regex]::Matches($data, 'id:\s*"(c\d-[a-z0-9]+)"') | ForEach-Object { $_.Groups[1].Value }
Write-Output ("Total topics: " + $topicIds.Count)
$unique = ($topicIds | Sort-Object -Unique).Count
Write-Output ("Unique topic ids: " + $unique)
$quizzes = ([regex]::Matches($data, 'quiz:\s*\[')).Count
Write-Output ("Topics with quiz array: " + $quizzes)
$lessons = ([regex]::Matches($data, 'lesson:\s*\{')).Count
Write-Output ("Topics with lesson object: " + $lessons)

# ai.js sanity: percent + table + arithmetic logic present
Write-Output ("ai has tryArithmetic: " + ($ai -match 'function tryArithmetic'))
Write-Output ("ai has tryPercent: " + ($ai -match 'function tryPercent'))
Write-Output ("ai has tryTable: " + ($ai -match 'function tryTable'))
Write-Output ("ai exposes global AI: " + ($ai -match 'global\.AI = AI'))
