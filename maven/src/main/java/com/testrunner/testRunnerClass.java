package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources" }, glue = { "com.stepdef" }, plugin = { "pretty",
		"html:target/cucumber-reports" }, monochrome = true)
public class testRunnerClass {

}
