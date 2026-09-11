$path = "c:\Users\sakshi shinde\.vscode-shared\maths-app\js\data.js"
$d = Get-Content $path -Raw

$topics = ([regex]::Matches($d, 'id:\s*"(c\d-[a-z0-9]+)"')).Count
$quizzes = ([regex]::Matches($d, 'quiz:\s*\[')).Count
$lessons = ([regex]::Matches($d, 'lesson:\s*\{')).Count
$qmarks = ([regex]::Matches($d, '\{\s*q:')).Count

Write-Output ("Topics: " + $topics)
Write-Output ("Quiz arrays: " + $quizzes)
Write-Output ("Lesson objects: " + $lessons)
Write-Output ("Question objects: " + $qmarks)

foreach ($c in 1..5) {
  $pattern = '"' + $c + '": class' + $c
  $found = ([regex]::Matches($d, [regex]::Escape($pattern))).Count
  Write-Output ("export class" + $c + ": " + $found)
}

# Count sections per lesson as a rough content measure
$types = @('h3', 'p', 'example', 'tip')
foreach ($t in $types) {
  $n = ([regex]::Matches($d, 'type:\s*"' + $t + '"')).Count
  Write-Output ("section type '" + $t + "': " + $n)
}
