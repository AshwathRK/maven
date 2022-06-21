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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d102.0.5005.115)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IN7QPO7\u0027, ip: \u002710.65.214.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\EST0179\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52792}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2c5c57dfe181d4801564242d6700cc0c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat com.stepdef.stepdefination.enter_the_and(stepdefination.java:64)\r\n\tat ✽.Enter the \"ashwathaman@expsoltechs.com\",\"Dindigul@123\",\"hp laptop\",\"84713090\",\"PAC - PACKS\",\"2\",\"30/05/2022\",\"20\",\"2200\",\"Sales\",\"3000\"and\"Ram\"(src/test/resources/demo.feature:5)\r\n",
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