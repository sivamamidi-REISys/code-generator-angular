package gov.gsa.comet.steps.agency;

import org.junit.Assert;

import com.google.gson.JsonObject;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.gsa.comet.cucumber.ExecutionContext;
import gov.gsa.comet.helpers.Utilities;
import gov.gsa.comet.pages.agency.AgencyListingPage;
import gov.gsa.comet.pages.agency.AgencyPage;
import net.thucydides.core.steps.ScenarioSteps;

public class AgencyListingSteps extends ScenarioSteps {

    AgencyListingPage agencyListingPage;
    AgencyPage agencyPage;
    
    @And("the user accesses Agency Listing Page")
    public void userAccessesAgencyListingPage() {
        agencyListingPage.clickOnAgencyListingLink();
        agencyListingPage.checkForPageLoadComplete();
    }
    
    @And("the user chooses to add an Agency")
    public void userChoosesToAddAgency() {
        agencyListingPage.clickOnAgencyListingLink();
        agencyListingPage.clickOnAddAgency();
        agencyPage.checkForPageLoadComplete();
    }
    
    @Then("the System displays Agency Listing Page$")
    public void systemDisplaysAgencyListingPage() {
        Assert.assertEquals("List of Agencies", agencyListingPage.getPageHeaderText());
        //TODO add additional verifications as needed 
    }
    
    @When("the user searches for \"([^\"]*)\" in the Agency Listing Page$")
    public void userSearchesForAgency(String agencyJsonData) {
        JsonObject agencyData = ExecutionContext.getJsonData().get(agencyJsonData).getAsJsonObject();
        String agencyNameToFind = Utilities.getStringValueFromJsonObject(agencyData, "Agency Name");
        agencyListingPage.searchForAgency(agencyNameToFind);
    }
    
    @When("the System displays \"([^\"]*)\" in the Agency Listing Page$")
    public void systemDisplaysGivenAgencyInTheListingPage(String agencyJsonData) {
        JsonObject agencyData = ExecutionContext.getJsonData().get(agencyJsonData).getAsJsonObject();
        String agencyNameToFind = Utilities.getStringValueFromJsonObject(agencyData, "Agency Name");
        agencyListingPage.searchForAgency(agencyNameToFind);
        Assert.assertTrue(agencyListingPage.verifyAgencyNamePresent(agencyNameToFind));
    }
    
    @When("the System does not display \"([^\"]*)\" in the Agency Listing Page$")
    public void systemDoesNotDisplaysGivenAgencyInTheListingPage(String agencyJsonData) {
        JsonObject agencyData = ExecutionContext.getJsonData().get(agencyJsonData).getAsJsonObject();
        String agencyNameToFind = Utilities.getStringValueFromJsonObject(agencyData, "Agency Name");
        agencyListingPage.searchForAgency(agencyNameToFind);
        Assert.assertTrue(agencyListingPage.verifyAgencyNameNotPresent(agencyNameToFind));
    }
    
    @When("the user edits \"([^\"]*)\" in the Agency Listing Page$")
    public void userEditsAgencyInListingPage(String agencyJsonData) {
        JsonObject agencyData = ExecutionContext.getJsonData().get(agencyJsonData).getAsJsonObject();
        String agencyNameToFind = Utilities.getStringValueFromJsonObject(agencyData, "Agency Name");
        agencyListingPage.editAgency(agencyNameToFind);
    }
    
    @When("the user deletes \"([^\"]*)\" in the Agency Listing Page$")
    public void userDeletesAgencyInListingPage(String agencyJsonData) {
        JsonObject agencyData = ExecutionContext.getJsonData().get(agencyJsonData).getAsJsonObject();
        String agencyNameToFind = Utilities.getStringValueFromJsonObject(agencyData, "Agency Name");
        agencyListingPage.deleteAgency(agencyNameToFind);
    }
    
    @Then("the system provides ability to Add an Agency")
    public void systemProvidesAbilityToAddAgency() {
        Assert.assertTrue(agencyListingPage.addAgencyIsEnabled());
    }
    
    @Then("the system does not provides ability to Add an Agency")
    public void systemDoesNotProvidesAbilityToAddAgency() {
        Assert.assertFalse(agencyListingPage.addAgencyIsEnabled());
    }
    
}
