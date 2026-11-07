@echo off
echo ========================================================
echo   RoomieSplit - Hi-Fi Usability Testing Prototype
echo ========================================================
echo.
echo [1/3] Checking Node.js installation...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js (LTS version) from: https://nodejs.org/
    pause
    exit /b
)
echo Node.js is ready!

echo.
echo [2/3] Installing dependencies if needed...
if not exist "node_modules\" (
    echo Installing node modules...
    call npm.cmd install
) else (
    echo Dependencies already installed.
)

echo.
echo [3/3] Starting Prototype local server...
echo The app will open in your default browser at: http://localhost:5173
echo.
start http://localhost:5173
call npm.cmd run dev -- --host

pause
