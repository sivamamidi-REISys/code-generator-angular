package gov.gsa.comet.steps.{{singular}};

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import gov.gsa.comet.pages.{{singular}}.{{singularWord}}Page;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;


public class Edit{{singularWord}}Steps extends ScenarioSteps{

    {{singularWord}}Page {{singular}}Page;

    @And("I enter text for {{singular}}")
    public void enterTextForEdit{{singularWord}}(){
        {{singular}}Page.enterTextForEdit{{singularWord}}();
    }

    @And("I click on Edit button$")
    public void clickButton(){
        {{singular}}Page.clickEditButton();
    }
}