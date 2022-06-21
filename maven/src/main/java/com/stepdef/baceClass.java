package com.stepdef;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class baceClass {
	String string;
	public void browser() {
	
	WebDriver driver;
	String browser = "Chrome";
	String browser1 = "FF";
	String browser2 = "ie";
	if (string == browser) {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}else if  (string == browser1) {
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
	
	}else if (string == browser2) {
		WebDriverManager.iedriver().setup();
		driver = new InternetExplorerDriver();	
	}
}

	
}