sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    "user strict";
    XMLView.create({
        viewName: "ui5.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));
});