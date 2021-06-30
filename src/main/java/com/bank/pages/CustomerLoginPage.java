package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class CustomerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger( CustomerLoginPage.class.getName());
    @FindBy(id = "userSelect")
    WebElement selectCustomer;

    @FindBy(xpath = "//option[text()='Sponge Bob']")
    WebElement customer;

    @FindBy(xpath = "//button[text()='Login']")
    WebElement loginButton;

    public void searchCustomerName(){

        clickOnElement( selectCustomer );
        clickOnElement( customer );
        log.info("Search customer name"  +selectCustomer   +customer);
    }
    public void clickingOnLoginButton(){

        clickOnElement( loginButton );
        log.info("Clicking oN login BUTTON"  +loginButton);
    }



}
