package gov.gsa.comet.steps.{{singular}};

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import gov.gsa.comet.pages.{{singular}}.{{singularWord}}Page;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;


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
    public void editUser() {
        userPage.clickEditActionButton();
    }
​
    @Then("^I am able to verify {{singularWord}} data for Edit page$")
    public void iAmAbleToVerify{{singularWord}}DataForEditPage() {
       {{#each properties}}
            Assert.assertNotNull(list{{../singularWord}}Page.verifyTableContains("{{name}}",  1));
        {{/each}}
    }
}