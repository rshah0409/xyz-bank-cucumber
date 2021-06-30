package com.bank.stepdefs;

import com.bank.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class WithdrawalStepdefs {
    @And("^I click on Withdrawl tab$")
    public void iClickOnWithdrawlTab() {
        new AccountPage().clickOnWithdrawaltab();
    }

    @And("^I enter  Withdrawl amount \"([^\"]*)\"$")
    public void iEnterWithdrawlAmount(String amount) throws InterruptedException {
        Thread.sleep( 1000 );
        new AccountPage().enterWithdrawalAmount( amount );
    }

    @And("^I click on Withdraw button$")
    public void iClickOnWithdrawButton() {
        new AccountPage().clickOnWithdrawalbutton();
    }

    @Then("^I should able to see message \"([^\"]*)\"$")
    public void iShouldAbleToSeeMessage(String withdrawText)  {
        String expectedwidthdrawmessage = "Transaction successful";
        withdrawText = new AccountPage().verifyTransactionSuccessfulText();
        Assert.assertEquals(expectedwidthdrawmessage,withdrawText);
    }
}
