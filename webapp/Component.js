sap.ui.define([
    // https://ui5.sap.com/#/api/
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], (UIComponent, JSONModel, Device) => {
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

            //Set device model
            const oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay"); //read-only
            this.setModel(oDeviceModel, "device");

            //Router loads the views we've configured in manifest routes and targets
            this.getRouter().initialize();
        }
    })
})