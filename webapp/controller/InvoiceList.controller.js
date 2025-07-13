sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        onInit() {
            const oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterInvoice(oEvent) {

            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) { //User has typed search-term into the search bar
                //Add filter into the array. ProductName must contain the search-term
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            //Filter the invoice list items using filters inside the filter-array
            const oList = this.Id("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress(oEvent) {
            const oItem = oEvent.getSource();
            const oRouter = this.getOwnerComponent().getRouter();
            const sInvoicePath = window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substring(1));
            console.log("InvoicePath OUT:", sInvoicePath);
            oRouter.navTo("detail", {
                invoicePath: sInvoicePath
            });
        }
    });
});