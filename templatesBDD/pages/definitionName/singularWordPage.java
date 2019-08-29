package gov.gsa.comet.pages.user;

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

public class UserPage extends PageObject {
    private static final By TABLE = By.id("{{singular}}-table");
    private static final By TABLE_HEAD = By.cssSelector("#{{singular}}-table > thead");

    private static final By USERSLINK = By.id("{{singular}}");
    private static final By PAGEHEADER = By.cssSelector("h2");
    private static final int FIRSTROWNUM = 1;
    private static final By FIRSTNAME = By.id("firstName");
    private static final By LASTNAME = By.id("lastName");
    private static final By EMAIL = By.id("email");
    private static final By CANCEL_BUTTON = By.id("cancelButton");
    private static final By ROLES = By.cssSelector("fieldset > ul > li:nth-child(1)");
    private static final By CREATEBUTTON = By.id("cancel");
    private static final By ADDBUTTON = By.id("add_user");
    private static final By SEARCHFIELD = By.id("search-field-small");
    private static final By SEARCHBUTTON = By.id("search");
    private static final By TABLEFIRSTROW = By.cssSelector("table > tbody > tr > td:nth-child(1)");
    private static final By TABLEEDITACTION = By.cssSelector("table > tbody > tr > td:nth-child(5) > button:nth-child(2)");


    @Override
    public String getPageName() {
        return "User Management Page";
    }

    @Override
    public void checkForPageLoadComplete() {
        testPageFor508();
    }

    public void navigateToUserPage() {
        clickElement(USERSLINK);
    }

    public String verifyUserPageTitle() {
        checkForPresenceOfElement(TABLE);
        return getValueOfElement(PAGEHEADER);
    }

    public String verifyUserPageTableHeaders() {
        checkForPresenceOfElement(TABLE);
        return getValueOfElement(TABLE_HEAD);
    }

    public void createNewUser(String user) {
        clickElement(ADDBUTTON);
        checkForPresenceOfElement(FIRSTNAME);
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(), user);
        long currentTime = new Date().getTime();
        ExecutionContext.firstNameProvided = Utilities.getStringValueFromJsonObject(dataObj, "firstName") + currentTime;
        ExecutionContext.email = currentTime+Utilities.getStringValueFromJsonObject(dataObj, "email");
        enterValue(FIRSTNAME, ExecutionContext.firstNameProvided);
        enterValue(LASTNAME, Utilities.getStringValueFromJsonObject(dataObj, "lastName"));
        enterValue(EMAIL, ExecutionContext.email);
        clickElement(ROLES);
        clickElement(CREATEBUTTON);
        checkForPresenceOfElement(TABLE);
    }


    public String editUserDetails(String user) throws InterruptedException {
        checkForPresenceOfElement(TABLE);
        enterValue(SEARCHFIELD, ExecutionContext.firstNameProvided);
        clickElement(SEARCHBUTTON);
        waitForTextToAppear(findElement(TABLEFIRSTROW), ExecutionContext.firstNameProvided);
        clickElement(TABLEEDITACTION);
        checkForPresenceOfElement(FIRSTNAME);
        String text = findElement(EMAIL).getAttribute("value");
        System.out.println("Text is: "+ text);
        waitFor(ExpectedConditions.attributeContains(EMAIL,"value", ExecutionContext.email));
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(), user);
        long time = new Date().getTime();
        ExecutionContext.updatedEmail = time + Utilities.getStringValueFromJsonObject(dataObj, "editEmail");
        enterValue(EMAIL, ExecutionContext.updatedEmail);
        clickElement(CREATEBUTTON);
        checkForPresenceOfElement(TABLE);
        enterValue(SEARCHFIELD, ExecutionContext.updatedEmail);
        clickElement(SEARCHBUTTON);
        return getValueOfElement(TABLE);
    }
}
