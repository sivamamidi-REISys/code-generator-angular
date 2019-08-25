Feature: I should be able to view all {{pluralWord}}.

Background: User logs in
    Given I am on the home page
    And the user with "Administrator" role logs in
    

@positive
Scenario: Verify page Title for List {{singularWord}} page
    Given I am on "List {{singularWord}}" page
    Then I am able to verify page header "Header" for {{singularWord}} page

@positive
Scenario: Verify page header for List {{singularWord}} page
    Given I am on "List {{singularWord}}" page
     {{#each properties}}
         Then I am able to verify {{../singularWord}} page table header "{{name}}"
    {{/each}}


@positive
Scenario: Verify page header for List {{singularWord}} page
    Given I am on "List {{singularWord}}" page
    Then I am able to verify {{singularWord}} data
