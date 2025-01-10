// Launching browser
await browser.url("http://172.20.10.2:3003"),
// 'luanch emulator
beforeAll(async () => {
    try {
      browser = await remote({
capabilities: {
    platformName: "android",
    platformVersion: "9.0",
    deviceName: "Medium_Phone_API_28",
    automationName: "UiAutomator2",
    appName: "Chrome",
    appWaitForLaunch: "false",
    androidInstallTimeout: "120000",
    appWaitActivity: "*",
    fullReset: "false" }
})
}
})
// 'Creating profile with invalid details'
// input Invalid Name
const el27 = await driver.$("-android uiautomator:new UiSelector().text(\"....{\").instance(0)");
await el27.addValue("?@");
// input Invalid Age
const el28 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)");
await el28.addValue("?-m");
// Select Empty Gender
const el29 = await driver.$("class name:android.widget.Spinner");
await el29.click();
const el30 = await driver.$("-android uiautomator:new UiSelector().text(\"Select\")");
await el30.click();
// Click on create Profile
const el31 = await driver.$("-android uiautomator:new UiSelector().text(\"Create Profile\")");
await el31.click();
// Error prompted user to fill in fields.