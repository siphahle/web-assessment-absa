Feature: Add new users to the table

  Scenario Outline: Add new users to the table list
    Given a user has launched the website
    When a user checks if a username already exists on the list"<username>"
    When a user clicks on the add user button
    And a user enters firstname on the populated modal screen"<firstname>"
    And a user enters lastname "<lastname>"
    And a user enters username "<username>"
    And a user enters password "<password>"
    And a user select a company "<company>"
    And a user choose a role "<role>"
    And a user enters email "<email>"
    And a user enters cellphoneNo "<cellphoneNo>"
    And a user saves a created user
    And a user checks if a user is added "<username>"


    Examples:
      | firstname | lastname | username  | password | company     | role     | email             | cellphoneNo |
      | sipha1    | Nipha1   | sipha1    |   123    | Company AAA | Admin    | sipha@mail.com    | 043         |
      | sipha2    | Nipha2   | sipha2    | 123      | Company BBB | Customer | siphe@mail.com    | 021         |
      | sipha3    | Nipha3   | sipha2    | 123      | Company BBB | Customer | siphe@mail.com    | 041         |