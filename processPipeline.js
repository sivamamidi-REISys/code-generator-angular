
const configuration = require('./configuration.js').configuration;
const pipeline = configuration.pipeline;
const Handlebars = require('handlebars');
const fs = require('async-file');
const fsExtra = require('fs-extra');
const dree = require('dree');
const templateFolder = './templatesPipeline';
const destinationPath = 'y:/sample/pipelineoutput';

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

(async function () {
    registerHelpers();
    const template = readTemplate();
    console.log(template);
    template.files.forEach(async (file) => {
            if (file.path) {
                let rawData = await fs.readFile(file.path, 'utf8');
                if (rawData) {
                    const tempRelativePath = resolvePath(file)
                    const destinationFile = `${destinationPath}/${tempRelativePath}`;
                    var rawTemplate = Handlebars.compile(rawData);
                    var formattedData = rawTemplate(pipeline);
                    fsExtra.createFileSync(destinationFile);
                    fsExtra.writeFileSync(destinationFile, formattedData);
                }
            }
    })
})();


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

function resolvePath(file) {
    let result = file.relativePath;
    return result;
}

function registerHelpers() {
    Handlebars.registerHelper('encodeMyString', function (inputData) {
        return new Handlebars.SafeString(inputData);
    });

   
}







