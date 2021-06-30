package com.bank.stepdefs;

import com.bank.pages.AccountPage;
import com.bank.pages.CustomersPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class DepositStepdefs {
    @And("^I click on Deposit tab$")
    public void iClickOnDepositTab() {
        new AccountPage().clickOnDepositTab();
    }

    @And("^I enter amount \"([^\"]*)\"$")
    public void iEnterAmount(String amt)  {
        new AccountPage().enterDepositamount( amt );
    }

    @And("^I click on Deposit button$")
    public void iClickOnDepositButton() {
        new AccountPage().clickOnDepositButton();
    }

    @Then("^I should see a message \"([^\"]*)\"$")
    public void iShouldSeeAMessage(String depositText)  {
        String expecteddepositmessage = "Deposit Successful";
        depositText = new AccountPage().verifyDepositSuccessfulText();
        Assert.assertEquals(expecteddepositmessage,depositText);
    }
}
