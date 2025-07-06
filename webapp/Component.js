sap.ui.define([
    // https://ui5.sap.com/#/api/
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);

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
        }
    })
})