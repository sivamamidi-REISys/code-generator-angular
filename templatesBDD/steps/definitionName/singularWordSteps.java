package gov.gsa.comet.steps.{{singular}};

import com.google.gson.JsonObject;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import gov.gsa.comet.cucumber.ExecutionContext;
import gov.gsa.comet.helpers.Utilities;
import gov.gsa.comet.pages.{{singular}}.{{singularWord}}Page;
import net.thucydides.core.steps.ScenarioSteps;
import org.junit.Assert;

public class {{singularWord}}Steps extends ScenarioSteps {

    {{singularWord}}Page {{singular}}Page;

    @And("^I navigate to {{pluralWord}} page$")
    public void navigateTo{{singularWord}}sPage() {
        {{singular}}Page.navigateTo{{singularWord}}Page();
    }


    @Then("^I should be able to verify {{pluralWord}} List$")
    public void  verify{{singularWord}}sList() {
        
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(ExecutionContext.getJsonData(), "{{singular}}");
        String title = Utilities.getStringValueFromJsonObject(dataObj, "pageTitle");
        

        {{#each properties}}
            String {{name}}Header = Utilities.getStringValueFromJsonObject(dataObj, "{{name}}Header");
        {{/each}}
        Assert.assertTrue({{singular}}Page.verify{{singularWord}}PageTitle().equalsIgnoreCase(title));
        String tableHeaders = {{singular}}Page.verify{{singularWord}}PageTableHeaders();
          {{#each properties}}
             Assert.assertTrue(tableHeaders.contains({{name}}Header));
        {{/each}}
    }

    @Then("^I should be able to create a new {{singularWord}} \"([^\"]*)\"$")
    public void createANew{{singularWord}}(String {{singular}}) throws Throwable {
        {{singular}}Page.createNew{{singularWord}}({{singular}});
    }

    @Then("^I should be able to edit the {{singular}} \"([^\"]*)\"$")
    public void editThe{{singularWord}}(String {{singular}}) throws Throwable {
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(ExecutionContext.getJsonData(), "{{singular}}");
        Assert.assertTrue({{singular}}Page.edit{{singularWord}}Details({{singular}}).contains(Utilities.getStringValueFromJsonObject(dataObj, "{{properties.1.name}}")));
    }
}
