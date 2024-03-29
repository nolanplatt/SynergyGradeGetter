// Imports
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const request = require('request');

const options = new chrome.Options()

options.addArguments('--disable-dev-shm-usage')
options.addArguments('--no-sandbox')

// General member variables
var classes = [];
var grades = [];
// Owner info

(async function main() {
  var notifications = [];
  const ownerTextBeltKey = ""
const ownerPhoneNumber = "";
const ownerUsername = ""
const ownerPassword = ""
   // Establish driver and ensure it is headless
  let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()
  try {
    
   // Navigate to StudentVue
    await driver.get("https://sis.powayusd.com/PXP2_Login.aspx")
    await driver.findElement(By.id("ctl00_MainContent_LoginIamStudent")).click()
 
   // Send login info
   await driver.findElement(By.id("ctl00_MainContent_username")).click();
   await driver.findElement(By.id("ctl00_MainContent_username")).sendKeys(ownerUsername);   
   await driver.findElement(By.id("ctl00_MainContent_password")).click();
   await driver.findElement(By.id("ctl00_MainContent_password")).sendKeys(ownerPassword); 
   await driver.findElement(By.id("ctl00_MainContent_Submit1")).click()
   // End login handling
 
   // Navigate to gradebook
    await driver.get("https://sis.powayusd.com/PXP2_Gradebook.aspx")


   // Get Name of Class for Each Period
    let nameElementCount = 1;
    for (let i = 0; i < 4; i++) {
    await driver.findElement(By.css(`.row:nth-child(${nameElementCount})`))
    {
      const name = await driver.findElement(By.css(`.row:nth-child(${nameElementCount}) .btn`)).getText();
      classes.push(name);
    }
    nameElementCount += 3;

  }
  // Get Grade as Percentage for Each Period

    let percElementCount = 2;
    for (let j = 0; j < 4; j++) {
    await driver.findElement(By.css(`.row:nth-child(${percElementCount})`))
    {
      const percentage = await driver.findElement(By.css(`.row:nth-child(${percElementCount}) .score`)).getText();
      if(percentage != grades[j]) {
        grades[j] = percentage;
        notifications.push(j);
      } else {
        grades.push(percentage);
      }   
     }
    percElementCount += 3;

  }
  // Check if grades changed...
    // If so -> send notification to owner phone number
    // If not -> do nothing
  if(notifications.length != 0) {
    var message = "**Synergy Grade Getter -> Grades Updated**\n";
    for (let k = 0; k < 5; k++) {
      message+= classes[[k]] + ": " + grades[k] + "\n";
    }
 // Send notification via textbelt API     
  request.post('https://textbelt.com/text', {
    form: {
      phone: ownerPhoneNumber,
      message: message,
      key: ownerTextBeltKey,
    },
  }, (err, httpResponse, body) => {
    console.log(JSON.parse(body));
  });

  }

  } finally {
    await driver.quit();
  }
  setTimeout(main, 10000);
})();
