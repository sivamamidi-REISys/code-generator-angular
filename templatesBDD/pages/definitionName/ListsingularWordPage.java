package gov.gsa.comet.pages.agency;

import org.openqa.selenium.By;

import gov.gsa.comet.cucumber.PageObject;

public class AgencyListingPage extends PageObject {

    private static final By AGENCY_LISTING_TITLE = By.id("headerText");
    private static final By ADD_AGENCY = By.id("addAgencyButton");
    private static final By SEARCH_AGENCY = By.id("search-field-small");
    private static final By DELETE_MODAL = By.xpath("//app-delete-dialog/div");
    private static final By YES_BUTTON = By.xpath("//button[text()='Yes']");
    private static final By AGENCY_LISTING_LINK = By.id("agenciesLink");
    
    @Override
    public String getPageName() {
        return "Agency Listing Page";
    }
    
    @Override
    public void checkForPageLoadComplete() {
        checkForPresenceOfElement(AGENCY_LISTING_TITLE);
        testPageFor508();
    }
    
    public void clickOnAgencyListingLink() {
        clickElement(AGENCY_LISTING_LINK);
    }

    public String getPageHeaderText() {
        return getValueOfElement(AGENCY_LISTING_TITLE);
    }
    
    public void searchForAgency(String agencyName) {
        enterValue(SEARCH_AGENCY, agencyName);
    }
    
    public boolean verifyAgencyNamePresent(String agencyName) {
        return checkForPresenceOfElement(By.xpath("//table//td[contains(text(), '" +  agencyName +"')]"));
    }
    
    public boolean verifyAgencyNameNotPresent(String agencyName) {
        return !checkForPresenceOfElementWithoutWaiting(By.xpath("//table//td[contains(text(), '" +  agencyName +"')]"));
    }
    
    public void deleteAgency(String agencyName) {
        searchForAgency(agencyName);
        clickElement(By.xpath("//table//td[contains(text(), '" +  agencyName +"')]/..//a[text()= 'Delete']"));
        checkForPresenceOfElement(DELETE_MODAL);
        clickYesButton();
    }
    
    public void editAgency(String agencyName) {
        searchForAgency(agencyName);
        clickElement(By.xpath("//table//td[contains(text(), '" +  agencyName +"')]/..//a[text()= 'Edit']"));
    }
    
    public void viewAgency(String agencyName) {
        searchForAgency(agencyName);
        clickElement(By.xpath("//table//td[contains(text(), '" +  agencyName +"')]/..//a[text()= 'View']"));
    }
    
    public void clickOnAddAgency() {
        clickElement(ADD_AGENCY);
    }
    
    public void clickYesButton() {
        clickElement(YES_BUTTON);
    }
    
    public boolean addAgencyIsEnabled() {
        return findElement(ADD_AGENCY).isEnabled();
    }
    
}
