
::
echo off
if "%~f1" == "" (
	echo Not find Folder
	pause
	GOTO END
)
::echo "%~f1"

SET /P AREYOUSURE=Are you sure delete %~f1 (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

echo ... delete "%~f1"
rimraf "%~f1"



PAUSE

