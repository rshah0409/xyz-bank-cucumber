package com.bank.stepdefs;

import com.bank.pages.AddCustomerPage;
import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BackgroundStepdefs {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @Given("^I click on Bank Manager Login Tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLogintab();
    }

    @Given("^I click on Add Customer Tab$")
    public void iClickOnAddCustomerTab() {
        new BankManagerLoginPage().clickOnAddCustomerTab();
    }

    @Given("^I enter FirstName \"([^\"]*)\"$")
    public void iEnterFirstName(String frstName)  {
        new AddCustomerPage().enterFirstName( frstName );
    }

    @Given("^I enter LastName \"([^\"]*)\"$")
    public void iEnterLastName(String lastName)  {
        new AddCustomerPage().enterLastName( lastName );

    }

    @Given("^I enter PostCode \"([^\"]*)\"$")
    public void iEnterPostCode(String postcode)  {
        new AddCustomerPage().enterPostCode( postcode );

    }

    @Given("^I click on Add Customer Button$")
    public void iClickOnAddCustomerButton() {
        new AddCustomerPage().clickOnAddCustomerButton();
    }

    @Given("^I should see message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String actualMessage)  {
       actualMessage = new AddCustomerPage().getTextFromAlert();
        Assert.assertTrue( actualMessage.contains("Customer added successfully") );
    }

    @Given("^I should able to accept popup$")
    public void iShouldAbleToAcceptPopup() {
        new AddCustomerPage().acceptAlert();
    }
}
