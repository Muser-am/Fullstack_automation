const { remote } = require("webdriverio");

describe("Profile Creation Tests", () => {
  let browser;

  beforeAll(async () => {
    try {
      browser = await remote({
        capabilities: {
          platformName: "Android",
          deviceName: "Medium_Phone_API_28",
          app: "/path/to/app.apk",
          automationName: "UiAutomator2",
        },
      });
    } catch (error) {
      console.error("Failed to initialize browser:", error.message);
    }
  });

  afterAll(async () => {
    if (browser) {
      await browser.deleteSession();
    } else {
      console.error("Browser session was not created.");
    }
  });

  it("should create a profile successfully", async () => {
    await browser.$("#name").setValue("John Doe");
    await browser.$("#age").setValue("30");
    await browser.$("#gender").selectByVisibleText("Male");
    await browser.$("#location").setValue("New York");
    await browser.$("#interests").setValue("Hiking, Reading");
    await browser.$("#profilePicture").setValue("/path/to/image.jpg");
    await browser.$("button[type='submit']").click();
    const successMessage = await browser.$("p").getText();
    expect(successMessage).toBe("Profile created successfully!");
  });

  it("should handle missing mandatory fields", async () => {
    await browser.$("button[type='submit']").click();
    const errorMessage = await browser.$("p").getText();
    expect(errorMessage).toBe("All fields are required.");
  });

  it("should handle invalid image upload", async () => {
    await browser.$("#profilePicture").setValue("/path/to/invalid.txt");
    await browser.$("button[type='submit']").click();
    const errorMessage = await browser.$("p").getText();
    expect(errorMessage).toBe("Invalid image format");
  });
});
