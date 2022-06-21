package com.stepdef;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class stepdefination extends baceClass   {

	WebDriver driver;

	@Given("The basic browser configration")
	public void the_basic_browser_configration() {
	    
	
		
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://quickbooks.intuit.com/in/");
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//ul[@role=\"menubar\"][2]")).click();
		
	}

	@When("Enter the {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}and{string}")
	public void enter_the_and(String string, String string2, String string3, String string4, String string5,
			String string6, String string7, String string8, String string9, String string10, String string11,
			String string12) throws Exception {
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name=\"Email\"]")).sendKeys(string);
		driver.findElement(By.xpath("//button[@name=\"SignIn\"]")).click();
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name=\"Password\"]")).sendKeys(string2);
		driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();
		//Click the sales
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@data-path='sales']")).click();
		//Click the prodect and service
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//li[@data-id=\"path-items-Tab\"]")).click();
		
		
		
		driver.findElement(By.xpath("//button[@class=\"ha-button combo-button-action no-connector ha-button-primary\"]")).click();
		//click the inventory
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@data-automation-id=\"button-newInventory\"]")).click();
		//pass the data 
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//textarea[@name=\"name\" and @class=\"item-name dijitValidationTextArea dijitTextArea dijitValidationTextBox dijitValidationTextAreaFocused dijitTextAreaFocused dijitValidationTextBoxFocused dijitFocused\"]")).sendKeys(string3);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name=\"hsnCode\" and @type=\"text\"]")).sendKeys(string4);
//		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		Thread.sleep(4000);
		driver.findElement(By.xpath("//div[@class=\"col-md-6 col-xs-6 col-offset-1\"]//child::div[@role=\"combobox\"]")).sendKeys(string5);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@type='text' and @id='uniqName_74_0']")).sendKeys(string6);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@class=\"ha-input\"]")).sendKeys(string7);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@class=\"dijitReset dijitInputInner\" and @aria-label=\"Low stock alert\" ]")).sendKeys(string8);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@class=\"dijitReset dijitInputInner\" and @data-automation-id=\"input-salesPrice\"]")).sendKeys(string9);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);

		driver.findElement(By.xpath("//input[@class=\"dijitReset dijitInputInner\"and@id=\"uniqName_78_6\"and@placeholder=\"Enter Text\"]")).click();
		driver.findElement(By.xpath("//input[@class=\"dijitReset dijitInputInner\"and@id=\"uniqName_78_6\"and@placeholder=\"Enter Text\"]")).sendKeys(string10);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);

		driver.findElement(By.xpath("//input[@type=\"checkbox\"and@name=\"salesTaxInclusive\"]")).click();
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@data-dojo-attach-point=\"textbox,focusNode\" and @aria-labelledby=\"itemPurchasePrice\"]")).sendKeys(string11);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@aria-label=\"Inclusive of purchase tax\"]")).click();
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@class=\"dijitReset dijitInputInner\"and @placeholder=\"Select a preferred supplier\"]")).sendKeys(string12);
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.SECONDS);

		Robot roboat = new Robot();

		roboat.keyPress(KeyEvent.VK_ENTER);

		roboat.keyRelease(KeyEvent.VK_ENTER);
		roboat.keyPress(KeyEvent.VK_ENTER);
		roboat.keyRelease(KeyEvent.VK_ENTER);
	}

	@When("Click the save and Close button")
	public void click_the_save_and_Close_button() {
		// driver.findElement(By.xpath("//div[@class=\"combo-button
		// primary\"]")).click();
		driver.quit();

	}
}
