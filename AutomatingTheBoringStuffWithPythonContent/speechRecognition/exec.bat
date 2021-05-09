set fil=speechrecog

set cmdline=""

if a%cmdline%==a (
set cmdline=""
)

set /p path=<pat.txt 
python %fil%.py %cmdline%
pause