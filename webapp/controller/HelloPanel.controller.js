sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Popup"
], (Controller, MessageToast, Popup) => {
    "use strict";

    //This returns Controller-object which we have extended with new functions
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        //Here we define and implement new functions
        //Different from ABAP where definition and implementation are clearly separated

        onShowHello() {
            //Read message text from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name"); //s = string
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            //Toast message positions must be set to avoid error message
            const oDock = Popup.Dock.CenterCenter;
            MessageToast.show(sMsg, {
                at: oDock,
                my: oDock
            });
        },

        //Open dialog asynchronously
        async onOpenDialog() {
            //first load the dialog fragment
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
            this.oDialog.open(); //then open it
        },

        //Close the dialog
        onCloseDialog() {
            this.byId("helloDialog").close();
        }
    }
    );
});