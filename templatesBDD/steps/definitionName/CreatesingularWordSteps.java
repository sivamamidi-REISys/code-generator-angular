package gov.gsa.comet.steps.{{singular}};

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import gov.gsa.comet.pages.{{singular}}.{{singularWord}}Page;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;


public class Create{{singularWord}}Steps extends ScenarioSteps{

    {{singularWord}}Page {{singular}}Page;

    @And("I enter data for create {{singularWord}}")
    public void enterTextForCreate{{singularWord}}(){
        {{singular}}Page.enterTextForCreate{{singularWord}}();
    }

    @And("I click on Create button for {{singularWord}}")
    public void clickButton(){
        {{singular}}Page.clickCreateButton();
    }
}