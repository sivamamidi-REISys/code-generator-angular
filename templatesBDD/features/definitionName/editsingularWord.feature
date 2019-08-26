Feature: I should be able to create a new {{singularWord}}.

Background: User logs in
    Given I am on the home page
    And the user with "Administrator" role logs in
    
@positive
Scenario: Edit a {{singularWord}}
    Given I am on "{{singularWord}}" page
    And I click on Edit action for first {{singularWord}}
    And I enter data for edit {{singularWord}} page
    And I click on Edit button for {{singularWord}} page
    Then I am able to verify {{singularWord}} data for Edit page