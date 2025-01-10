// Launching browser
new AndroidDriver<MobileElement>(new URL("http://172.20.10.2:3003"), caps);
//  'Creating profile with valid details'
var undefined = driver.findElements(AppiumBy.androidUIAutomator(""));
// input Name
var el5 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().className(\"android.widget.EditText\").instance(0)"));
el5.sendKeys("Musa");
// input Age
var el6 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().className(\"android.widget.EditText\").instance(1)"));
el6.sendKeys("25");
//Click o the Gender selection button
var el7 = driver.findElement(AppiumBy.className("android.widget.Spinner"));
el7.click();
// Select Your Gender (Male)
var el8 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Male\")"));
el8.click();
//input Location
var el9 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().className(\"android.widget.EditText\").instance(2)"));
el9.sendKeys("Abuja");
// Input your Interests
var el10 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().className(\"android.widget.EditText\").instance(3)"));
el10.sendKeys("eating");
// Upload picture
var el11 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Profile Picture:\")"));
el11.click();
var el12 = driver.findElement(AppiumBy.id("com.android.packageinstaller:id/permission_allow_button"));
el12.click();
var el13 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Files\")"));
el13.click();
var el14 = driver.findElement(AppiumBy.accessibilityId("Show roots"));
el14.click();
var el15 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Photos\")"));
el15.click();
var el16 = driver.findElement(AppiumBy.className("android.support.v7.widget.RecyclerView"));
el16.click();
var el17 = driver.findElement(AppiumBy.id("com.google.android.apps.photos:id/image"));
el17.click();
var el18 = driver.findElement(AppiumBy.accessibilityId("Photo taken on Jan 7, 2025 9:16 AM"));
el18.click();
// Click on create Profile butto
var el19 = driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Create Profile\")"));
el19.click();
