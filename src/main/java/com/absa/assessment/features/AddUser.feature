Feature: Add new users to the table

  Scenario Outline: Add new users to the table list
    Given a user has launched the website
    When a user checks if a username already exists on the list"<username>"
    When a user clicks on the add user button
    And a user enters firstname on the populated modal screen"<firstname>"
    And a user enters lastname "<lastname>"
    And a user enters username "<username>"
    And a user enters password "<password>"
    And a user selects a company "<company>"
    And a user chooses a role "<role>"
    And a user enters email "<email>"
    And a user enters cellphoneNo "<cellphoneNo>"
    And a user saves a created user
    And a user checks if a user is added "<username>"


    Examples:
      | firstname | lastname| username | password | company     | role     | email             | cellphoneNo |
      | FName1    | LName1  | User1    | Pass1    | Company AAA | Admin    | admin@mail.com    | 082555      |
      | FName2    | LName2  | User2    | Pass2    | Company BBB | Customer | customer@mail.com | 083444      |