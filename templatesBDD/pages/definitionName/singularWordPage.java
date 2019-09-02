package gov.gsa.comet.pages.{{singular}};

import com.google.gson.JsonObject;
import cucumber.api.java.es.E;
import gov.gsa.comet.cucumber.ExecutionContext;
import gov.gsa.comet.cucumber.PageObject;
import gov.gsa.comet.helpers.Utilities;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.Date;

public class {{singularWord}}Page extends PageObject {
    private static final By TABLE = By.id("{{singular}}-table");
    private static final By TABLE_HEAD = By.cssSelector("#{{singular}}-table > thead");

    private static final By HEADERLINK = By.id("{{singular}}");
    private static final By PAGEHEADER = By.id("headerText");
    private static final int FIRSTROWNUM = 1;
    private static final By CANCELBUTTON = By.id("cancelButton");
    private static final By CREATEBUTTON = By.id("createButton");
    private static final By ADDBUTTON = By.id("addButton");
    private static final By SUBMITBUTTON = By.id("submittButton");
    private static final By SEARCHFIELD = By.id("search-field-small");
    private static final By SEARCHBUTTON = By.id("search");
    private static final By TABLEFIRSTROW = By.cssSelector("#{{singular}}-table > tbody > tr > td:nth-child(1)");
    private static final By TABLEEDITACTION = By.cssSelector("#{{singular}}-table > tbody > tr > td:nth-child(5) > button:nth-child(2)");


    {{#each properties}}
        private static final By {{upperCase name}} = By.id("{{name}}");
    {{/each}}


    @Override
    public String getPageName() {
        return "{{singularWord}} Page";
    }

    @Override
    public void checkForPageLoadComplete() {
        testPageFor508();
    }

    public void navigateTo{{singularWord}}Page() {
        clickElement(HEADERLINK);
    }

    public String verify{{singularWord}}PageTitle() {
        checkForPresenceOfElement(TABLE);
        return getValueOfElement(PAGEHEADER);
    }

    public String verify{{singularWord}}PageTableHeaders() {
        checkForPresenceOfElement(TABLE);
        return getValueOfElement(TABLE_HEAD);
    }

    public void createNew{{singularWord}}(String {{singular}}) {
        clickElement(ADDBUTTON);
        checkForPresenceOfElement(CANCELBUTTON);
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(), {{singular}});
       {{#each properties}}
            enterValue({{upperCase name}}, Utilities.getStringValueFromJsonObject(dataObj, "{{name}}"));
      {{/each}}
        clickElement(CREATEBUTTON);
        checkForPresenceOfElement(TABLE);
    }


    public String edit{{singularWord}}Details(String {{singular}}) throws InterruptedException {
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(), {{singular}});
        checkForPresenceOfElement(TABLE);
        clickElement(TABLEEDITACTION);
        checkForPresenceOfElement(CANCELBUTTON);
        waitFor(ExpectedConditions.attributeContains({{upperCase properties.1.name}},"value", Utilities.getStringValueFromJsonObject(dataObj, "{{properties.1.name}}")));
        long time = new Date().getTime();
        String updatedText = time + Utilities.getStringValueFromJsonObject(dataObj,  "{{properties.1.name}}");
        enterValue({{upperCase properties.1.name}}, updatedText);
        clickElement(CREATEBUTTON);
        checkForPresenceOfElement(TABLE);
        return getValueOfElement(TABLE);
    }
}
