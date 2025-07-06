sap.ui.define([
    // https://ui5.sap.com/#/api/
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "ui5.walkthrough.view.App",
                "type": "XML",
                "id": "app"
            }
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);

            //Set the data model to the provided context

            //Define object to describe the data
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            //Initialize JSOMModel of this data
            const oModel = new JSONModel(oData);
            //Set the model for current view
            this.setModel(oModel);

            //Set i18n model which contains translated texts
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            //Set the i18n model to this view and give it an alias
            this.setModel(i18nModel, "i18n");
        }
    })
})