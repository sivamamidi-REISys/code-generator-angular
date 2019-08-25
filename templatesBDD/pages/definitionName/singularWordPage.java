package gov.gsa.comet.pages.{{singular}};
import gov.gsa.comet.cucumber.PageObject;
import gov.gsa.comet.helpers.Utilities;
import org.openqa.selenium.By;

public class Create{{singularWord}}Page extends PageObject {

    private static final By CREATE_BUTTON = By.id("createButton");
    private static final By EDIT_BUTTON = By.id("editButton");
   

    {{#each properties}}
         private static final By {{nameUpperCase}} = By.id("{{name}}");
     {{/each}}
    
    @Override
    public String getPageName() {
        return "Create {{singularWord}} Page";
    }

    @Override
    public void checkForPageLoadComplete() {
        testPageFor508();
    }


    public void enterTextForCreate{{singularWord}}() {
        checkForPresenceOfElement(CREATE_BUTTON);
        checkForPageLoadComplete();
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(),"{{singular}}");
        {{#each properties}}
             enterValue({{nameUpperCase}}, Utilities.getStringValueFromJsonObject(dataObj, "{{name}}"));
        {{/each}}
    }

     public void enterTextForEdit{{singularWord}}() {
        checkForPresenceOfElement(EDIT_BUTTON);
        checkForPageLoadComplete();
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(),"{{singular}}");
        {{#each properties}}
             enterValue({{nameUpperCase}}, Utilities.getStringValueFromJsonObject(dataObj, "{{name}}"));
        {{/each}}

    }

    public void clickCreateButton() {
        clickElement(CREATE_BUTTON);
    }

    public void clickEditButton() {
        clickElement(EDIT_BUTTON);
    }
}
