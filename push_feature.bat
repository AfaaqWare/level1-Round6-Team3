@echo off
echo ===================================================
echo Pushing 'building create survey page' feature to GitHub...
echo Target Repo: https://github.com/AfaaqWare/level1-Round6-Team3.git
echo ===================================================

cd /d "%~dp0"

:: Initialize git repository if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
)
git init


:: Set remote origin
git remote remove origin >nul 2>&1
git remote add origin https://github.com/AfaaqWare/level1-Round6-Team3.git

:: Checkout / Create feature branch
echo Creating/switching to feature branch 'feature/create-survey-page'...
git checkout -b feature/create-survey-page 2>nul || git checkout feature/create-survey-page

:: Stage and commit files
echo Staging files...
git add .

echo Committing changes...
git commit -m "feat: building create survey page"

:: Push feature branch to GitHub
echo Pushing feature branch to GitHub...
git push -u origin feature/create-survey-page

echo ===================================================
echo Feature pushed successfully!
echo Open PR at: https://github.com/AfaaqWare/level1-Round6-Team3/pull/new/feature/create-survey-page
echo ===================================================
pause
