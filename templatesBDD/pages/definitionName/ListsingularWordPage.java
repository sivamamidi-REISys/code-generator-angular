package gov.gsa.comet.pages.{{singular}};

import com.google.gson.JsonObject;
import gov.gsa.comet.cucumber.PageObject;
import gov.gsa.comet.helpers.Utilities;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class List{{singularWord}}Page extends PageObject {

    private static final By TITLE = By.id("headerText");
    private final WebElement TABLE = findElement(By.id("{{singular}}-table"));
    private static final int TABLEHEADERROWNUMBER = 1;

    @Override
    public String getPageName() {
        return "List {{singularWord}} Page";
    }

    @Override
    public void checkForPageLoadComplete() {
        testPageFor508();
    }

    public String getPageHeaderText() {
        return getValueOfElement(TITLE);
    }

    public String verifyTableHeaders(){
        return getNthTableRow(TABLE, TABLEHEADERROWNUMBER).getText();
    }

    public String verifyTableContains(String property, int colNumber){
        JsonObject dataObj = Utilities.getJsonObjectFromJsonObject(getJsonData(), "{{singular}}");
        String value = Utilities.getStringValueFromJsonObject(dataObj, property);
        WebElement element = getRowWithCellValue(TABLE, colNumber, value);
        if(element != null){
            return element.getText();
        }
        return null;
    }
}
