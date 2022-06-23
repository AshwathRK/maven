$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/demo.feature");
formatter.feature({
  "name": "verify the quickbook function",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create the new inventory",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The basic browser configration",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the \"\u003cuser name\u003e\",\"\u003cpassword\u003e\",\"\u003cName\u003e\",\"\u003cHSN code\u003e\",\"\u003cUnit\u003e\",\"\u003cInitial quantity on hand\u003e\",\"\u003cAs of date\u003e\",\"\u003cReorder point\u003e\",\"\u003cSales price/rate\u003e\",\"\u003cIncome account\u003e\",\"\u003cCost\u003e\"and\"\u003cPreferred Supplier\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the save and Close button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user name",
        "password",
        "Name",
        "HSN code",
        "Unit",
        "Initial quantity on hand",
        "As of date",
        "Reorder point",
        "Sales price/rate",
        "Income account",
        "Cost",
        "Preferred Supplier"
      ]
    },
    {
      "cells": [
        "ashwathaman@expsoltechs.com",
        "Dindigul@123",
        "prodect1",
        "222222222",
        "PAC - PACKS",
        "2",
        "30/05/2022",
        "20",
        "2200",
        "Sales",
        "3000",
        "Ram"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create the new inventory",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The basic browser configration",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.the_basic_browser_configration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"ashwathaman@expsoltechs.com\",\"Dindigul@123\",\"prodect1\",\"222222222\",\"PAC - PACKS\",\"2\",\"30/05/2022\",\"20\",\"2200\",\"Sales\",\"3000\"and\"Ram\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.enter_the_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the save and Close button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_the_save_and_Close_button()"
});
formatter.result({
  "status": "passed"
});
});