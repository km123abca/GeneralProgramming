set fil=general_automaton
set cmdline=""

if a%cmdline%==a (
set cmdline=""
)

set /p path=<pat.txt 
python %fil%.py %cmdline%
pause