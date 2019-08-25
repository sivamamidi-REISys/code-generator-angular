Feature: I should be able to create a new {{singularWord}}.

Background: User logs in
    Given I am on the home page
    And the user with "Administrator" role logs in
    
@positive
Scenario: Create a {{singularWord}}
    Given I am on "{{singularWord}}" page
    And I enter text for {{singularWord}}
    And I click on Create button
