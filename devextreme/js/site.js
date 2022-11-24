// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function cell_prepared(options) {
    if (options.rowType === 'header') {
        options.cellElement.css("backgroundColor", "#DCE6EE");
        options.cellElement.css("color", "#2D2D2D");
        options.cellElement.css("fontWeight", "bold");
    }
}