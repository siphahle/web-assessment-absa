$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddUser.feature");
formatter.feature({
  "line": 1,
  "name": "Add new users to the table",
  "description": "",
  "id": "add-new-users-to-the-table",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add new users to the table list",
  "description": "",
  "id": "add-new-users-to-the-table;add-new-users-to-the-table-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "a user has launched the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user checks if a username already exists on the list\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a user clicks on the add user button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "a user enters firstname on the populated modal screen\"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user enters lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user enters username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user selects a company \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user chooses a role \"\u003crole\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user enters email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user enters cellphoneNo \"\u003ccellphoneNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user saves a created user",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user checks if a user is added \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password",
        "company",
        "role",
        "email",
        "cellphoneNo"
      ],
      "line": 20,
      "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;1"
    },
    {
      "cells": [
        "FName1",
        "LName1",
        "User1",
        "Pass1",
        "Company AAA",
        "Admin",
        "admin@mail.com",
        "082555"
      ],
      "line": 21,
      "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;2"
    },
    {
      "cells": [
        "FName2",
        "LName2",
        "User2",
        "Pass2",
        "Company BBB",
        "Customer",
        "customer@mail.com",
        "083444"
      ],
      "line": 22,
      "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Add new users to the table list",
  "description": "",
  "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "a user has launched the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user checks if a username already exists on the list\"User1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a user clicks on the add user button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "a user enters firstname on the populated modal screen\"FName1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user enters lastname \"LName1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user enters username \"User1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user enters password \"Pass1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user selects a company \"Company AAA\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user chooses a role \"Admin\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user enters email \"admin@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user enters cellphoneNo \"082555\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user saves a created user",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user checks if a user is added \"User1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_website()"
});
formatter.result({
  "duration": 15335651700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 55
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_username_already_exists_on_the_list(String)"
});
formatter.result({
  "duration": 195095200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.a_user_clicks_on_the_add_user_button()"
});
formatter.result({
  "duration": 93719200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FName1",
      "offset": 54
    }
  ],
  "location": "AddUserSteps.a_user_enters_firstname_on_the_populated_modal_screen(String)"
});
formatter.result({
  "duration": 90740700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LName1",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_enters_lastname(String)"
});
formatter.result({
  "duration": 79620000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_enters_username(String)"
});
formatter.result({
  "duration": 74225300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass1",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_enters_password(String)"
});
formatter.result({
  "duration": 78418300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company AAA",
      "offset": 26
    }
  ],
  "location": "AddUserSteps.a_user_selects_a_company(String)"
});
formatter.result({
  "duration": 89599900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.a_user_chooses_a_role(String)"
});
formatter.result({
  "duration": 87856600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@mail.com",
      "offset": 21
    }
  ],
  "location": "AddUserSteps.a_user_enters_email(String)"
});
formatter.result({
  "duration": 107677100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "082555",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_enters_cellphoneNo(String)"
});
formatter.result({
  "duration": 75210100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.a_user_saves_a_created_user()"
});
formatter.result({
  "duration": 93168600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 34
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_user_is_added(String)"
});
formatter.result({
  "duration": 70501100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add new users to the table list",
  "description": "",
  "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "a user has launched the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user checks if a username already exists on the list\"User2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a user clicks on the add user button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "a user enters firstname on the populated modal screen\"FName2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user enters lastname \"LName2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user enters username \"User2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user enters password \"Pass2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user selects a company \"Company BBB\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user chooses a role \"Customer\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user enters email \"customer@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user enters cellphoneNo \"083444\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user saves a created user",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user checks if a user is added \"User2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_website()"
});
formatter.result({
  "duration": 13859985800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User2",
      "offset": 55
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_username_already_exists_on_the_list(String)"
});
formatter.result({
  "duration": 188157700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.a_user_clicks_on_the_add_user_button()"
});
formatter.result({
  "duration": 4717639400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FName2",
      "offset": 54
    }
  ],
  "location": "AddUserSteps.a_user_enters_firstname_on_the_populated_modal_screen(String)"
});
formatter.result({
  "duration": 83035400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LName2",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_enters_lastname(String)"
});
formatter.result({
  "duration": 67132500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User2",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_enters_username(String)"
});
formatter.result({
  "duration": 79097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass2",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_enters_password(String)"
});
formatter.result({
  "duration": 77762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company BBB",
      "offset": 26
    }
  ],
  "location": "AddUserSteps.a_user_selects_a_company(String)"
});
formatter.result({
  "duration": 5068316000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.a_user_chooses_a_role(String)"
});
formatter.result({
  "duration": 88649900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customer@mail.com",
      "offset": 21
    }
  ],
  "location": "AddUserSteps.a_user_enters_email(String)"
});
formatter.result({
  "duration": 97328000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "083444",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_enters_cellphoneNo(String)"
});
formatter.result({
  "duration": 65771200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.a_user_saves_a_created_user()"
});
formatter.result({
  "duration": 5054874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User2",
      "offset": 34
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_user_is_added(String)"
});
formatter.result({
  "duration": 98429700,
  "status": "passed"
});
});