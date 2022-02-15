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
  "name": "a user select a company \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"\u003crole\u003e\"",
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
        "sipha1",
        "Nipha1",
        "sipha1",
        "123",
        "Company AAA",
        "Admin",
        "sipha@mail.com",
        "043"
      ],
      "line": 21,
      "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;2"
    },
    {
      "cells": [
        "sipha2",
        "Nipha2",
        "sipha2",
        "123",
        "Company BBB",
        "Customer",
        "siphe@mail.com",
        "021"
      ],
      "line": 22,
      "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;3"
    },
    {
      "cells": [
        "sipha3",
        "Nipha3",
        "sipha2",
        "123",
        "Company BBB",
        "Customer",
        "siphe@mail.com",
        "041"
      ],
      "line": 23,
      "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;4"
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
  "name": "a user checks if a username already exists on the list\"sipha1\"",
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
  "name": "a user enters firstname on the populated modal screen\"sipha1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user enters lastname \"Nipha1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user enters username \"sipha1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user enters password \"123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user select a company \"Company AAA\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"Admin\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user enters email \"sipha@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user enters cellphoneNo \"043\"",
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
  "name": "a user checks if a user is added \"sipha1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_browser()"
});
formatter.result({
  "duration": 15474589800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AddUserSteps.a_user_clicks_on_the_add_user_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha1",
      "offset": 54
    }
  ],
  "location": "AddUserSteps.a_user_populate_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nipha1",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_surname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha1",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Company AAA",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.a_user_select_a_company(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.a_user_choose_a_role(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha@mail.com",
      "offset": 21
    }
  ],
  "location": "AddUserSteps.a_user_populate_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "043",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_populate_cellphone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserSteps.a_user_saves_a_created_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha1",
      "offset": 34
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_user_is_added(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 700907100,
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
  "name": "a user checks if a username already exists on the list\"sipha2\"",
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
  "name": "a user enters firstname on the populated modal screen\"sipha2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user enters lastname \"Nipha2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user enters username \"sipha2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user enters password \"123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user select a company \"Company BBB\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"Customer\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user enters email \"siphe@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user enters cellphoneNo \"021\"",
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
  "name": "a user checks if a user is added \"sipha2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_browser()"
});
formatter.result({
  "duration": 13726754400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AddUserSteps.a_user_clicks_on_the_add_user_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha2",
      "offset": 54
    }
  ],
  "location": "AddUserSteps.a_user_populate_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nipha2",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_surname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha2",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Company BBB",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.a_user_select_a_company(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.a_user_choose_a_role(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "siphe@mail.com",
      "offset": 21
    }
  ],
  "location": "AddUserSteps.a_user_populate_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "021",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_populate_cellphone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserSteps.a_user_saves_a_created_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha2",
      "offset": 34
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_user_is_added(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 676204000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add new users to the table list",
  "description": "",
  "id": "add-new-users-to-the-table;add-new-users-to-the-table-list;;4",
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
  "name": "a user checks if a username already exists on the list\"sipha2\"",
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
  "name": "a user enters firstname on the populated modal screen\"sipha3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user enters lastname \"Nipha3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user enters username \"sipha2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user enters password \"123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user select a company \"Company BBB\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"Customer\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user enters email \"siphe@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user enters cellphoneNo \"041\"",
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
  "name": "a user checks if a user is added \"sipha2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_browser()"
});
formatter.result({
  "duration": 13552994800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AddUserSteps.a_user_clicks_on_the_add_user_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha3",
      "offset": 54
    }
  ],
  "location": "AddUserSteps.a_user_populate_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nipha3",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_surname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha2",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 24
    }
  ],
  "location": "AddUserSteps.a_user_populate_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Company BBB",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.a_user_select_a_company(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.a_user_choose_a_role(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "siphe@mail.com",
      "offset": 21
    }
  ],
  "location": "AddUserSteps.a_user_populate_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "041",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_populate_cellphone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserSteps.a_user_saves_a_created_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sipha2",
      "offset": 34
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_user_is_added(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 664669000,
  "status": "passed"
});
});