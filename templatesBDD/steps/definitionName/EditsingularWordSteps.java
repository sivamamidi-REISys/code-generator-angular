package gov.gsa.comet.steps.{{singular}};

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import gov.gsa.comet.pages.{{singular}}.{{singularWord}}Page;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;


public class Edit{{singularWord}}Steps extends ScenarioSteps{

    {{singularWord}}Page {{singular}}Page;

    @And("I enter text for \"([^\"]*)\"")
    public void enterTextForEdit{{singularWord}}(String data){
        {{singular}}Page.enterTextForEdit{{singularWord}}(data);
    }

    @And("I click on Edit Button$")
    public void clickButton(){
        {{singular}}Page.clickEditButton();
    }
}