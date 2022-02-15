package com.absa.assessment;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\main\\java\\com\\absa\\assessment\\features",
        glue = "com.absa.assessment/stepDefinition",
        plugin = {"pretty","json:target/cucumber-reports/cucumber.json",
                    "html:target/cucumber-reports"
                },
        monochrome = true
        )
public class AddUserTest {

}
