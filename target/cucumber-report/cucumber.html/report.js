$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/xyzbankTest.feature");
formatter.feature({
  "line": 3,
  "name": "Add Customer Functionality",
  "description": "\r\nAs a user I should be able to add Customer,login,logout and deposit and withdraw money from account successfully.",
  "id": "add-customer-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5755160400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Add Customer Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter FirstName \"Sponge\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter LastName \"Bob\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter PostCode \"SEA1 0CEAN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Add Customer Button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should see message \"Customer added successfully\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should able to accept popup",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 221822700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 196029300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 366259700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge",
      "offset": 19
    }
  ],
  "location": "BackgroundStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1298023000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 152994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEA1 0CEAN",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 166449400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 319462300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 22
    }
  ],
  "location": "BackgroundStepdefs.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 24448200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iShouldAbleToAcceptPopup()"
});
formatter.result({
  "duration": 32496300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to open Account Successfully",
  "description": "",
  "id": "add-customer-functionality;user-should-be-able-to-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I search customer from DropDown \"Sponge Bob\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select currency from DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the message \"Account created successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should be able to accept pop up",
  "keyword": "And "
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 183424300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge Bob",
      "offset": 33
    }
  ],
  "location": "OpenAccountStepdefs.iSearchCustomerFromDropDown(String)"
});
formatter.result({
  "duration": 625434400,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iSelectCurrencyFromDropDown()"
});
formatter.result({
  "duration": 262690600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 287133400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 26
    }
  ],
  "location": "OpenAccountStepdefs.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 13832900,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldBeAbleToAcceptPopUp()"
});
formatter.result({
  "duration": 29880500,
  "status": "passed"
});
formatter.after({
  "duration": 1155734700,
  "status": "passed"
});
formatter.before({
  "duration": 3219885500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Add Customer Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter FirstName \"Sponge\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter LastName \"Bob\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter PostCode \"SEA1 0CEAN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Add Customer Button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should see message \"Customer added successfully\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should able to accept popup",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 216413500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 470109700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge",
      "offset": 19
    }
  ],
  "location": "BackgroundStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 599504300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 151107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEA1 0CEAN",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 163573700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 320947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 22
    }
  ],
  "location": "BackgroundStepdefs.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 8070700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iShouldAbleToAcceptPopup()"
});
formatter.result({
  "duration": 15683600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should log in and log out Successfully",
  "description": "",
  "id": "add-customer-functionality;user-should-log-in-and-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I click on Home button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I search customer from DropDown \"Sponge Bob\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see \"Logout\" tab displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I should be able to click on Log out tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see \"Your Name\" text displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 162466800,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 125652900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge Bob",
      "offset": 33
    }
  ],
  "location": "OpenAccountStepdefs.iSearchCustomerFromDropDown(String)"
});
formatter.result({
  "duration": 362781500,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 140683300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 14
    }
  ],
  "location": "LoginLogoutStepdefs.iShouldSeeTabDisplayed(String)"
});
formatter.result({
  "duration": 1062545300,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iShouldBeAbleToClickOnLogOutTab()"
});
formatter.result({
  "duration": 106147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name",
      "offset": 14
    }
  ],
  "location": "LoginLogoutStepdefs.iShouldSeeTextDisplayed(String)"
});
formatter.result({
  "duration": 59444800,
  "status": "passed"
});
formatter.after({
  "duration": 948446600,
  "status": "passed"
});
formatter.before({
  "duration": 2993555300,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Add Customer Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter FirstName \"Sponge\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter LastName \"Bob\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter PostCode \"SEA1 0CEAN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Add Customer Button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should see message \"Customer added successfully\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should able to accept popup",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 35400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 676631400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 244929000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge",
      "offset": 19
    }
  ],
  "location": "BackgroundStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 429230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 167142700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEA1 0CEAN",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 157419200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 347086600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 22
    }
  ],
  "location": "BackgroundStepdefs.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 6108200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iShouldAbleToAcceptPopup()"
});
formatter.result({
  "duration": 27396000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User Should deposit money Successfully",
  "description": "",
  "id": "add-customer-functionality;user-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I click on Home button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I search customer from DropDown \"Sponge Bob\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should see a message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 169662000,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 129482700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge Bob",
      "offset": 33
    }
  ],
  "location": "OpenAccountStepdefs.iSearchCustomerFromDropDown(String)"
});
formatter.result({
  "duration": 3515287400,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 125233300,
  "status": "passed"
});
formatter.match({
  "location": "DepositStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 275046700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "DepositStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 254975300,
  "status": "passed"
});
formatter.match({
  "location": "DepositStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 112588700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 24
    }
  ],
  "location": "DepositStepdefs.iShouldSeeAMessage(String)"
});
formatter.result({
  "duration": 70255600,
  "status": "passed"
});
formatter.after({
  "duration": 858574200,
  "status": "passed"
});
formatter.before({
  "duration": 2981248000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Add Customer Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter FirstName \"Sponge\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter LastName \"Bob\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter PostCode \"SEA1 0CEAN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Add Customer Button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should see message \"Customer added successfully\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should able to accept popup",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 345789400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 537295700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge",
      "offset": 19
    }
  ],
  "location": "BackgroundStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 467327300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 172251500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEA1 0CEAN",
      "offset": 18
    }
  ],
  "location": "BackgroundStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 179624100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 343949900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 22
    }
  ],
  "location": "BackgroundStepdefs.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 11398000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepdefs.iShouldAbleToAcceptPopup()"
});
formatter.result({
  "duration": 30003000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "User Should withdraw money Successfully",
  "description": "",
  "id": "add-customer-functionality;user-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I click on Home button",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I search customer from DropDown \"Sponge Bob\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Withdrawl tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I enter  Withdrawl amount \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on Withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should able to see message \"Transaction Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 122816500,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 208571300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sponge Bob",
      "offset": 33
    }
  ],
  "location": "OpenAccountStepdefs.iSearchCustomerFromDropDown(String)"
});
formatter.result({
  "duration": 379769100,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 118461600,
  "status": "passed"
});
formatter.match({
  "location": "DepositStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 247065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "DepositStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 234278400,
  "status": "passed"
});
formatter.match({
  "location": "DepositStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 138248400,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalStepdefs.iClickOnWithdrawlTab()"
});
formatter.result({
  "duration": 121369100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 27
    }
  ],
  "location": "WithdrawalStepdefs.iEnterWithdrawlAmount(String)"
});
formatter.result({
  "duration": 1125914800,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalStepdefs.iClickOnWithdrawButton()"
});
formatter.result({
  "duration": 121837200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Successful",
      "offset": 30
    }
  ],
  "location": "WithdrawalStepdefs.iShouldAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 60348900,
  "status": "passed"
});
formatter.after({
  "duration": 843051700,
  "status": "passed"
});
});