Feature('Add New Entry in to Objective Manager Application and Verify');

const assert = require('assert');
var newEntryName = 'New Test Automation Testing - Demo';

Scenario('Login to Application', (I) => {
// Login
I.amOnPage('/login');
I.see('SIGN IN');
I.fillField('username','jeremy.black@delete.com');
I.fillField('password','longCoyo+e86');
I.click('SIGN IN');

// Add New Entry
// var newEntryName = 'New Test Automation Testing - Demo';
I.see('My Homepage');
I.click("//button[contains(text(),'Add Progress')]");
I.fillField("//textarea[@id='progressEntry']",newEntryName);
I.selectOption('progressAmount','40% Complete')
I.click('Save')
});

Scenario('Validate New Entry',(I)=>{
// Validate the New Entry
I.see(newEntryName,"//div[@id='searchResults']//ul[@class='clearfix']/li[1]");
});


// Logout
Scenario('Logout',(I)=>{
I.click("//div[contains(@class,'accountSettingsDropdown')]");
I.click('Logout');
// pause();
I.click("//ul[@class='margin_top_20 clearfix']//button[contains(text(),'Yes')]")
I.see('SIGN IN')
});
