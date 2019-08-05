
const configuration = require('./configuration.js').configuration;
const Handlebars = require('handlebars');
const rawDefinitions = configuration.definitions;
const destinationPath = configuration.destinationPath;
const fs = require('async-file');
const fsExtra = require('fs-extra');
const dree = require('dree');
const templateFolder = './templates/definitionName';

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

(async function () {
    registerHelpers();
    const definitions = processDefinition();
    const template = readTemplate();
    console.log(template);
    template.files.forEach(async (file) => {
        definitions.forEach(async (definition) => {
            if (file.path) {
                let rawData = await fs.readFile(file.path, 'utf8');
                if (rawData) {
                    const tempRelativePath = resolvePath(file, definition)
                    const destinationFile = `${destinationPath}/${definition.singular}/${tempRelativePath}`;
                    var rawTemplate = Handlebars.compile(rawData);
                    var formattedData = rawTemplate(definition);
                    fsExtra.createFileSync(destinationFile);
                    fsExtra.writeFileSync(destinationFile, formattedData);
                }
            }
        })
    })
})();

function processDefinition() {
    return Object.keys(rawDefinitions).map(definitionName => {
        const singularWord = definitionName, pluralWord = `${rawDefinitions[definitionName]["pluralWord"]}`,
            plural = pluralWord.toLowerCase(), singular = singularWord.toLowerCase();
        const properties = rawDefinitions[definitionName]["properties"];
        const actionType = rawDefinitions[definitionName]["actionType"];
        const uniqueId = rawDefinitions[definitionName]["uniqueId"];

        return {
            singularWord: singularWord,
            pluralWord: pluralWord,
            plural: plural,
            singular: singular,
            properties: properties,
            actionType: actionType,
            uniqueId: uniqueId
        }
    });
}

function readTemplate() {
    const files = [];
    const dirs = [];
    const fileCb = function (file) {
        files.push({ name: file.name, relativePath: file.relativePath, path: file.path });
    }
    const dirCb = function (file) {
        dirs.push({ name: file.name, relativePath: file.relativePath, path: file.path });
    }
    const tree = dree.scan(templateFolder, {}, fileCb, dirCb);
    return { dirs: dirs, files: files };
}

function resolvePath(file, definition) {
    let result = file.relativePath.replaceAll("plural", definition.plural)
        .replaceAll("singular", definition.singular);
    return result;
}

function registerHelpers() {
    Handlebars.registerHelper('encodeMyString', function (inputData) {
        return new Handlebars.SafeString(inputData);
    });

    Handlebars.registerHelper('list-row', function () {
        const result = `<ng-container matColumnDef="${this.name}" id="location">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>${this.display}</th>
        <td mat-cell *matCellDef="let element"> {{element.${this.name}}} </td>
      </ng-container>`;
        return new Handlebars.SafeString(result);
    });

    Handlebars.registerHelper('view-row', function () {
        const result = ` <div>
        <label for="${this.name}">${this.display}</label>
        <input id="${this.name}" name="${this.name}" type="text" formControlName="${this.name}" disabled>
      </div>`;
        return new Handlebars.SafeString(result);
    });

    Handlebars.registerHelper('create-row', function () {
        const result = `  <div [ngClass]="{'usa-input-error':${this.name}Control.invalid && (${this.name}Control.dirty || ${this.name}Control.touched)}">
        <label for=${this.name}">${this.display}</label>
        <div *ngIf="${this.name}Control.invalid && (${this.name}Control.dirty || ${this.name}Control.touched)" class="usa-input-error-message">
          <div *ngIf="${this.name}Control.hasError('required')">
            ${this.display} is required.
          </div>
        </div>
        <input id=${this.name}" name=${this.name}" type="text" required formControlName="${this.name}">
      </div>`;
        return new Handlebars.SafeString(result);
    });

    Handlebars.registerHelper('edit-row', function () {
        const result = `  <div
        [ngClass]="{'usa-input-error':${this.name}Control.invalid && (${this.name}Control.dirty || ${this.name}Control.touched)}">
        <label for="${this.name}">${this.display}</label>
        <div *ngIf="${this.name}Control.invalid && (${this.name}Control.dirty || ${this.name}Control.touched)"
          class="usa-input-error-message">
          <div *ngIf="${this.name}Control.hasError('required')">
            ${this.display} is required.
          </div>
        </div>
        <input id="${this.name}" name="${this.name}" type="text" required formControlName="${this.name}">
      </div>`;
        return new Handlebars.SafeString(result);
    });



    


   

}







