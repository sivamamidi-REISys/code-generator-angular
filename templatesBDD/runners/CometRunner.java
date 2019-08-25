package gov.gsa.comet.runners;

import cucumber.api.CucumberOptions;
import gov.gsa.comet.cucumber.JsonDataSerenityRunner;
import gov.gsa.comet.cucumber.TestDataFile;

import org.junit.runner.RunWith;

@CucumberOptions(plugin = { "pretty" , "html:target/CometRunner.html" },
        tags = {"@comet", "not @wip"},
        features = {
            "src/test/resources/features/{{singular}}/list{{singularWord}}.feature",
            "src/test/resources/features/{{singular}}/create{{singularWord}}.feature",
            "src/test/resources/features/{{singular}}/edit{{singularWord}}.feature",
                },
        glue={"gov.gsa.comet"}
)
@TestDataFile(files = { 
        "src/test/resources/data/{{singular}}/{{singularWord}}.json",
        })
@RunWith(JsonDataSerenityRunner.class)
public class CometRunner {
}
