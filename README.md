# Lab8_Starter

## Check your understanding q's (FILL OUT)
**1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)**

A

**2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

No, a messaging feature that allows users to send messages to one another would involve many moving parts and thus cannot be thoroughly tested with unit tests. Testing this feature would involve real user interaction and end-to end testing that unit tests cannot provide.

**3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters**

Yes, testing the maximum message length feature is a simple feature that can be debugged quickly through the use of a unit test. Since this is a quite specific issue, a unit test would be suitable as it does not have many moving parts and can be checked easily without heavy user iteraction and testing.

**4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?**

If the "headless" field is set to true, then I would expect that the tests would run without the Browser UI included.


**5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?**
   
```
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await Promise.all([
        page.waitForNavigation(),
        page.click('header > img'),
    ])
  });
```
