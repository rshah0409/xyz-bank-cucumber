package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger( HomePage.class.getName());
    @FindBy(xpath = "//button[text()='Customer Login']")
    WebElement customerLoginTab;

    @FindBy(xpath = "//button[text()='Bank Manager Login']")
    WebElement bankManagerLoginTab;

    @FindBy(xpath = "//button[text()='Home']")
    WebElement homeTab;

    public void clickOnCustomerLoginTab(){

        clickOnElement( customerLoginTab );
        log.info("clicking on customerLogin tab"  +customerLoginTab  );
    }
    public void clickOnBankManagerLogintab(){

        clickOnElement( bankManagerLoginTab);
        log.info("clicking on Bank manager Login tab"  +bankManagerLoginTab );
    }
    public void clickOnHomeTab(){

        clickOnElement( homeTab);
        log.info("clicking on home tab"  +homeTab);
    }
    }




