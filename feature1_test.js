Feature('Login');

const assert = require('assert');

Scenario('Login to Application', async(I) => {
// Login
I.amOnPage('/login');
I.see('SIGN IN');
I.fillField('username','jeremy.black@delete.com');
I.fillField('password','longCoyo+e86');
I.click('SIGN IN');

// Add New Entry
var newEntryName = 'New Test Automation Testing - Demo';
I.see('My Homepage');
I.click("//button[contains(text(),'Add Progress')]");
I.fillField("//textarea[@id='progressEntry']",newEntryName);
I.selectOption('progressAmount','40% Complete')
I.click('Save')

// Validate the New Entry
I.see(newEntryName,"//div[@id='searchResults']//ul[@class='clearfix']/li[1]");

// Logout
// I.click('#div.accountSettingsDropdown');
I.click("//div[contains(@class,'accountSettingsDropdown')]");
I.click('Logout');
});
