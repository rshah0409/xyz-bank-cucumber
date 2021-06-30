package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class CustomersPage extends Utility {
    private static final Logger log = LogManager.getLogger( CustomersPage.class.getName());
    @FindBy(xpath = "//button[text()='Logout']")
    WebElement logOutTab;

    @FindBy(xpath = "//label[contains(text() , 'Your Name :')]")
    WebElement yourNameText;

    public String verifyLogOutTab(){

        log.info("verifying logout tab"  +logOutTab  );

        return getTextFromElement( logOutTab );
    }
    public void clickOnLogoutTab(){

        clickOnElement( logOutTab );
        log.info("clicking logout tab"  +logOutTab  );
    }
    public String verifyYourNameText(){

        log.info("verifying your name text"  +yourNameText );

        return getTextFromElement( yourNameText );

    }
}
