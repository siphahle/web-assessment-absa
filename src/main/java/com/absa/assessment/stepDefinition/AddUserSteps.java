package com.absa.assessment.stepDefinition;

import com.absa.assessment.utils.Helper;
import com.absa.assessment.utils.TestBase;
import cucumber.api.java.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import cucumber.api.java.en.*;
import java.util.List;

public class AddUserSteps{
    @Given("^a user has launched the website$")
    public void a_user_has_launched_the_website() {
        TestBase.setUp();
        Assert.assertEquals(TestBase.driver.getTitle(),"Protractor practice website - WebTables");
    }
    @When(("^a user checks if a username already exists on the list\"([^\"]*)\"$"))
    public void a_user_checks_if_a_username_already_exists_on_the_list(String username){
        List<WebElement> tableData = Helper.table("User Name");
        for (WebElement columnData:tableData) {
            Assert.assertFalse(columnData.getText().equals(username),username+" already exist");
        }
    }

    @When("^a user clicks on the add user button$")
    public void a_user_clicks_on_the_add_user_button() {
        TestBase.driver.findElement(By.cssSelector("button[ng-click='pop()']")).click();
    }

    @When("^a user enters firstname on the populated modal screen\"([^\"]*)\"$")
    public void a_user_enters_firstname_on_the_populated_modal_screen(String firstname) {
        TestBase.driver.findElement(By.cssSelector("input[name='FirstName']")).sendKeys(firstname);
    }

    @When("^a user enters lastname \"([^\"]*)\"$")
    public void a_user_enters_lastname(String lastname) {
        TestBase.driver.findElement(By.cssSelector("input[name='LastName']")).sendKeys(lastname);
    }

    @When("^a user enters username \"([^\"]*)\"$")
    public void a_user_enters_username(String username) {
        TestBase.driver.findElement(By.cssSelector("input[name='UserName']")).sendKeys(username);
    }

    @When("^a user enters password \"([^\"]*)\"$")
    public void a_user_enters_password(String password) {
        TestBase.driver.findElement(By.cssSelector("input[name='Password']")).sendKeys(password);
    }

    @When("^a user selects a company \"([^\"]*)\"$")
    public void a_user_selects_a_company(String company) {
        if (company.toLowerCase().contains("aaa"))
            TestBase.driver.findElements(By.name("optionsRadios")).get(0).click();
        else if (company.toLowerCase().contains("bbb"))
            TestBase.driver.findElements(By.name("optionsRadios")).get(1).click();
    }

    @When("^a user chooses a role \"([^\"]*)\"$")
    public void a_user_chooses_a_role(String userRole) {
        WebElement role = TestBase.driver.findElement(By.name("RoleId"));
        Select selectRole = new Select(role);
        selectRole.selectByVisibleText(userRole);
    }

    @When("^a user enters email \"([^\"]*)\"$")
    public void a_user_enters_email(String email) {
        TestBase.driver.findElement(By.name("Email")).sendKeys(email);
    }

    @When("^a user enters cellphoneNo \"([^\"]*)\"$")
    public void a_user_enters_cellphoneNo(String cellphoneNo) {
        TestBase.driver.findElement(By.name("Mobilephone")).sendKeys(cellphoneNo);
    }

    @When("^a user saves a created user$")
    public void a_user_saves_a_created_user() {
        TestBase.driver.findElement(By.cssSelector("button[ng-click='save(user)']")).click();
    }

    @When("^a user checks if a user is added \"([^\"]*)\"$")
    public void a_user_checks_if_a_user_is_added(String username) {
        List<WebElement> tableData = Helper.table("User Name");

        for (int i = 0;i < 1;i++)
            Assert.assertTrue(tableData.get(i).getText().equals(username),username+" was not added");
    }

    @After
   public static void tearDown(){
        TestBase.driver.quit();
    }
}
