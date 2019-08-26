package gov.gsa.comet.pages.{{singular}};
import gov.gsa.comet.cucumber.PageObject;
import gov.gsa.comet.helpers.Utilities;
import org.openqa.selenium.By;

public class {{singularWord}}Page extends PageObject {

    private static final By CREATE_BUTTON = By.id("createButton");
    private static final By EDIT_BUTTON = By.id("updateButton");
    private static final By CANCEL_BUTTON = By.id("cancelButton");
    private final WebElement TABLE = findElement(By.id("{{singular}}-table"));
    private static final By EDIT_ACTION_FIRST_ROW = By.id("");

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
        checkForPresenceOfElement(CANCEL_BUTTON);
        checkForPageLoadComplete();
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(),"{{singular}}");
        {{#each properties}}
             enterValue({{nameUpperCase}}, Utilities.getStringValueFromJsonObject(dataObj, "{{name}}"));
        {{/each}}
    }

     public void enterTextForEdit{{singularWord}}() {
        checkForPresenceOfElement(CANCEL_BUTTON);
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

    public void clickEditActionButton() {
        clickElement(EDIT_ACTION_FIRST_ROW);
    }
​
    public String verifyTableContains(String property, int colNumber) {
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(), "{{singular}}");
        String value = Utilities.getStringValueFromJsonObject(dataObj, property);
        WebElement element = getRowWithCellValue(TABLE, colNumber, value);
        if(element != null){
            return element.getText();
        }
        return null;
    }
}
