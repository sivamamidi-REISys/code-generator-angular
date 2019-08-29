@comet @{{singularWord}}
Feature: Manage {{singular}}
  As a user, I should be able to manage {{plural}}.

@positive @comet
Scenario: I should be able to view all the {{plural}}
  Given the user with "Administrator" role logs in
  When I navigate to {{pluralWord}} page
  Then I should be able to verify {{pluralWord}} List

@positive @comet
Scenario: I should be able to create {{singular}}
  Given the user with "Administrator" role logs in
  When I navigate to {{pluralWord}} page
  Then I should be able to create a new {{singularWord}} "{{singular}}"

@positive @comet
Scenario: I should be able to edit the created {{singular}}
  Given the user with "Administrator" role logs in
  When I navigate to {{pluralWord}} page
  Then I should be able to edit the {{singular}} "{{singular}}"



