package gov.gsa.comet.steps.{{singular}};

import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import cucumber.api.java.en.Then;
import gov.gsa.comet.pages.{{singular}}.{{singularWord}}Page;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.steps.ScenarioSteps;
import org.junit.Assert;


public class Edit{{singularWord}}Steps extends ScenarioSteps{

    {{singularWord}}Page {{singular}}Page;

    @And("I enter data for edit {{singularWord}} page")
    public void enterTextForEdit{{singularWord}}(){
        {{singular}}Page.enterTextForEdit{{singularWord}}();
    }

    @And("I click on Edit button for {{singularWord}} page")
    public void clickButton(){
        {{singular}}Page.clickEditButton();
    }


    @And("^I click on Edit action for first {{singularWord}}$")
    public void edit{{singularWord}}() {
        {{singular}}Page.clickEditActionButton();
    }
​
    @Then("^I am able to verify {{singularWord}} data for Edit page$")
    public void iAmAbleToVerify{{singularWord}}DataForEditPage() {
       {{#each properties}}
            Assert.assertNotNull({{singular}}Page.verifyTableContains("{{name}}",  1));
        {{/each}}
    }
}