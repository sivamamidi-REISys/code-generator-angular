export class {{singularWord}} {
    {{#each properties}}
        {{name}}: {{type}};
    {{/each}}
  }
  
  export class {{singularWord}}Create {
    {{#each properties}}
        {{name}}: {{type}};
    {{/each}}
  }
  