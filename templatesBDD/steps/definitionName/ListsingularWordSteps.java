package gov.gsa.comet.steps.{{singular}};

import com.google.gson.JsonObject;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.gsa.comet.cucumber.ExecutionContext;
import gov.gsa.comet.helpers.Utilities;
import gov.gsa.comet.pages.{{singular}}.List{{singularWord}}Page;
import net.thucydides.core.steps.ScenarioSteps;
import org.junit.Assert;


public class List{{singularWord}}Steps extends ScenarioSteps {

List{{singularWord}}Page list{{singularWord}}Page;

    @Then("^I am able to verify {{singularWord}} data$")
    public void verify{{singularWord}}Data() {
         {{#each properties}}
            Assert.assertNotNull(list{{../singularWord}}Page.verifyTableContains("{{name}}",  1));
        {{/each}}
    }

    @Then("^I am able to verify {{singularWord}} page table header \"([^\"]*)\"$")
    public void verifyTableHeader(String headerName) {
        Assert.assertTrue(list{{singularWord}}Page.verifyTableHeaders().contains(headerName));
    }


    @And("^I am able to verify page header \"([^\"]*)\" for {{singularWord}} page$")
    public void iAmAbleToVerifyPageHeaderFor{{singularWord}}Page(String pageHeader) throws Throwable {
        Assert.assertTrue(pageHeader.equalsIgnoreCase(list{{singularWord}}Page.getPageHeaderText()));
    }
}
