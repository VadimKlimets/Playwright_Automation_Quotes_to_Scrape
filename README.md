# Playwright_Automation_Quotes_to_Scrape

Example of steps to set up <Your_Playwright_Project_Name> on Windows 11 machine.

Recommended (optional):

1. Install Official Microsoft Visual Studio Code:
https://apps.microsoft.com/store/detail/visual-studio-code/XP9KHM4BK9FZ7Q

2. Install Official Playwright extension from Microsoft for Official Microsoft Visual Studio Code:
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

-------------------------------------------------------------------------------------------------------------------------------------

Notes:

1. It is better to execute all commands with Administrator role
2. Exact software versions are mentioned for reference purposes only - they may vary in the exact case of your exact machine platform
3. In case of issues on any step - try to reboot your machine - and proceed to try again from the last successful step

-------------------------------------------------------------------------------------------------------------------------------------

1. Install nvm (Node.js Version Manager) on your machine platform 
as described here https://github.com/nvm-sh/nvm

-------------------------------------------------------------------------------------------------------------------------------------

2. Validate successful installation of nvm (Node.js Version Manager) on your machine platform:

<input>
nvm --version

<output>
nvm <version_number>

-------------------------------------------------------------------------------------------------------------------------------------

3. Observe Node.js versions which are available online to download and install on your machine platform:

<input>
nvm list available

<output>

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    20.1.0    |   18.16.0    |   0.12.18    |   0.11.16    |
|    20.0.0    |   18.15.0    |   0.12.17    |   0.11.15    |
|    19.9.0    |   18.14.2    |   0.12.16    |   0.11.14    |
|    19.8.1    |   18.14.1    |   0.12.15    |   0.11.13    |
|    19.8.0    |   18.14.0    |   0.12.14    |   0.11.12    |
|    19.7.0    |   18.13.0    |   0.12.13    |   0.11.11    |
|    19.6.1    |   18.12.1    |   0.12.12    |   0.11.10    |
|    19.6.0    |   18.12.0    |   0.12.11    |    0.11.9    |
|    19.5.0    |   16.20.0    |   0.12.10    |    0.11.8    |
|    19.4.0    |   16.19.1    |    0.12.9    |    0.11.7    |
|    19.3.0    |   16.19.0    |    0.12.8    |    0.11.6    |
|    19.2.0    |   16.18.1    |    0.12.7    |    0.11.5    |
|    19.1.0    |   16.18.0    |    0.12.6    |    0.11.4    |
|    19.0.1    |   16.17.1    |    0.12.5    |    0.11.3    |
|    19.0.0    |   16.17.0    |    0.12.4    |    0.11.2    |
|   18.11.0    |   16.16.0    |    0.12.3    |    0.11.1    |
|   18.10.0    |   16.15.1    |    0.12.2    |    0.11.0    |
|    18.9.1    |   16.15.0    |    0.12.1    |    0.9.12    |
|    18.9.0    |   16.14.2    |    0.12.0    |    0.9.11    |
|    18.8.0    |   16.14.1    |   0.10.48    |    0.9.10    |

-------------------------------------------------------------------------------------------------------------------------------------

4. Install Node.js version 18.16.0

<input>
nvm install 18.16.0

<output>
Version 18.16.0 is already installed.

-------------------------------------------------------------------------------------------------------------------------------------

5. Observe Node.js versions installed on your machine platform:

<input>
nvm list

<output>
  18.16.0 (Currently using 64-bit executable)
* 16.13.0

-------------------------------------------------------------------------------------------------------------------------------------

6. Switch to use the specified Node.js version 18.16.0

<input>
nvm use nvm use 18.16.0

<output>
Now using node v18.16.0 (64-bit)

-------------------------------------------------------------------------------------------------------------------------------------

7. Validate successful installation of Node.js version 18.16.0

<input>
node --version

<output>
v18.16.0

-------------------------------------------------------------------------------------------------------------------------------------

8. Validate successful installation of Node.js Packet Manager version 9.6.4 (npm should be installed automatically at step #8)

<input>
npm --version

<output>
9.6.4

-------------------------------------------------------------------------------------------------------------------------------------

9. Create and name folder for <Your_Playwright_Project_Name> on your platform machine:
<Your_Playwright_Project_Name>

-------------------------------------------------------------------------------------------------------------------------------------

10. Go to <Your_Playwright_Project_Name> directory via command line:

\<Your_Playwright_Project_Name>

-------------------------------------------------------------------------------------------------------------------------------------

11. Install the latest version of Playwright:

<input>
npm init playwright@latest

-------------------------------------------------------------------------------------------------------------------------------------

12. Validate successful installation of Playwright:

<input>
npx playwright --version

<output>
Version <x.y.z>

-------------------------------------------------------------------------------------------------------------------------------------

13. (Optionally)
If help is needed for reference purposes - run built-in Playwright help:
npx playwright --help

-------------------------------------------------------------------------------------------------------------------------------------

14. (Optionally)
If Playwright Documentation is needed for reference purposes - go to https://playwright.dev/docs/intro

-------------------------------------------------------------------------------------------------------------------------------------

15. Clone/download Project <Playwright_Automation_Quotes_to_Scrape> to your machine platform 
from here:
https://github.com/VadimKlimets/Playwright_Automation_Quotes_to_Scrape

-------------------------------------------------------------------------------------------------------------------------------------

16. HEADLESS mode > Playwright autotests are located and should be executed from the folder '/tests'

<input>
npx playwright test ./tests

<output>
Playwright autotests should be executed in HEADLESS mode in 3 browsers engines:
- chromium
- firefox
- webkit

-------------------------------------------------------------------------------------------------------------------------------------

17. HEADED mode > Playwright autotests are located and should be executed from the folder '/tests'

<input>
npx playwright test ./tests --headed

<output>
Playwright autotests should be executed in HEADED mode in 3 browsers engines:
- chromium
- firefox
- webkit 

-------------------------------------------------------------------------------------------------------------------------------------

18. When Test Run is over - go to folder '/playwright-report' where screenshots and videos of failed autotests will be saved

19. To see the Test Report for the finished Test Run click the link in the terminal or executed command via terminal:
\<Your_Playwright_Project_Name> npx playwright show-report

Test Report is saved at /'playwright-report'