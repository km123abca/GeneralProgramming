set fil=speechrecog

set cmdline=""

if a%cmdline%==a (
set cmdline=""
)

set path=F:\Python36-32
python %fil%.py %cmdline%
pause