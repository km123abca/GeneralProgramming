set fil=f1

set cmdline=""

if a%cmdline%==a (
set cmdline=""
)

set /p path=<pat2.txt 
python %fil%.py %cmdline%
pause