package org.cucumber.proj1;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FirstPro {
	static WebDriver driver;
	@Given("user should launch browser")
	public void user_should_launch_browser() {
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Day1\\CucumberProj\\drivers\\chromedriver1.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		}

	@Given("user should click add customer link")
	public void user_should_click_add_customer_link() {
	    driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}

	@When("user provide valid input")
	public void user_provide_valid_input() {
	    driver.findElement(By.xpath("//label[text()='Done']")).click();
	    driver.findElement(By.id("fname")).sendKeys("Anu");
	    driver.findElement(By.id("lname")).sendKeys("krithika");
	    driver.findElement(By.id("email")).sendKeys("anu22@gmail.com");
	    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("chennai");
	    driver.findElement(By.id("telephoneno")).sendKeys("1234567890");
	    driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify the customer id is displayed")
	public void to_verify_the_customer_id_is_displayed() {
	    Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}


}
