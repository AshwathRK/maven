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
        "hp laptop",
        "84713090",
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
  "name": "Enter the \"ashwathaman@expsoltechs.com\",\"Dindigul@123\",\"hp laptop\",\"84713090\",\"PAC - PACKS\",\"2\",\"30/05/2022\",\"20\",\"2200\",\"Sales\",\"3000\"and\"Ram\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.enter_the_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//div[@data-path\u003d\u0027sales\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IN7QPO7\u0027, ip: \u002710.65.214.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdef.stepdefination.enter_the_and(stepdefination.java:46)\r\n\tat ✽.Enter the \"ashwathaman@expsoltechs.com\",\"Dindigul@123\",\"hp laptop\",\"84713090\",\"PAC - PACKS\",\"2\",\"30/05/2022\",\"20\",\"2200\",\"Sales\",\"3000\"and\"Ram\"(src/test/resources/demo.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the save and Close button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_the_save_and_Close_button()"
});
formatter.result({
  "status": "skipped"
});
});