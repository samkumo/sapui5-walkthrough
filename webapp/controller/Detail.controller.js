sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/core/Popup",
    "sap/ui/model/json/JSONModel"
], (Controller, History, MessageToast, Popup, JSOMModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.Detail", {
        onInit() {
            const oViewModel = new JSOMModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
        },

        onObjectMatched(oEvent) {
            const sInvoicePath = window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath);
            //console.log("InvoicePath IN:", sInvoicePath);
            this.byId("rating").reset();
            this.getView().bindElement({
                path: "/" + sInvoicePath,
                model: "invoice"
            });
        },
        onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("overview", {}, true);
            }
        },
        onRatingChange(oEvent) {
            const fValue = oEvent.getParameter("value");
            const oResourcebundle = this.getView().getModel("i18n").getResourceBundle();

            const sMsg = oResourcebundle.getText("ratingConfirmation", [fValue]);
            const oDock = Popup.Dock.CenterCenter;
            MessageToast.show(sMsg, {
                at: oDock,
                my: oDock
            });
        }
    });
});