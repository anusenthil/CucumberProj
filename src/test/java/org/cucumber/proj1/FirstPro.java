package org.cucumber.proj1;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FirstPro {
	static WebDriver driver;
	/*@Given("user should launch browser")
	public void user_should_launch_browser() {
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Day1\\CucumberProj\\drivers\\chromedriver1.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
		}

	@Given("user should click add customer link")
	public void user_should_click_add_customer_link() {
	    driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}*/

	/*@When("user provide valid input")
	public void user_provide_valid_input() {
	    driver.findElement(By.xpath("//label[text()='Done']")).click();
	    driver.findElement(By.id("fname")).sendKeys("Anu");
	    driver.findElement(By.id("lname")).sendKeys("krithika");
	    driver.findElement(By.id("email")).sendKeys("anu22@gmail.com");
	    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("chennai");
	    driver.findElement(By.id("telephoneno")).sendKeys("1234567890");
	    driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
*/
	
	/*@When("user provide valid input{string},{string},{string},{string},{string}")
	public void user_provide_valid_input(String fname, String lname, String gmail, String address, String phoneno) {
		 driver.findElement(By.xpath("//label[text()='Done']")).click();
		    driver.findElement(By.id("fname")).sendKeys(fname);
		    driver.findElement(By.id("lname")).sendKeys(lname);
		    driver.findElement(By.id("email")).sendKeys(gmail);
		    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(address);
		    driver.findElement(By.id("telephoneno")).sendKeys(phoneno);
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
	    
	}
*/
	//<One Dimensional List>
	/*@When("user provide valid input")
	public void user_provide_valid_input(io.cucumber.datatable.DataTable dataTable) {
		List<String>onedimen = dataTable.asList(String.class);
		 	driver.findElement(By.xpath("//label[text()='Done']")).click();
		    driver.findElement(By.id("fname")).sendKeys(onedimen.get(0));
		    driver.findElement(By.id("lname")).sendKeys(onedimen.get(1));
		    driver.findElement(By.id("email")).sendKeys(onedimen.get(2));
		    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedimen.get(3));
		    driver.findElement(By.id("telephoneno")).sendKeys(onedimen.get(4));
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
    
	}*/
	//<One Dimensional Map>
	/*@When("user provide valid input")
	public void user_provide_valid_input(io.cucumber.datatable.DataTable dataTable) {
		Map<String, String>onedieMap = dataTable.asMap(String.class,String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
	    driver.findElement(By.id("fname")).sendKeys(onedieMap.get("fname"));
	    driver.findElement(By.id("lname")).sendKeys(onedieMap.get("lname"));
	    driver.findElement(By.id("email")).sendKeys(onedieMap.get("gmail"));
	    driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedieMap.get("address"));
	    driver.findElement(By.id("telephoneno")).sendKeys(onedieMap.get("phno"));
	    driver.findElement(By.xpath("//input[@type='submit']")).click();

		
	}

	@Then("to verify the customer id is displayed")
	public void to_verify_the_customer_id_is_displayed() {
	    Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}
*/
	@Given("user should launch the browser")
	public void user_should_launch_the_browser() {
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Day1\\CucumberProj\\drivers\\chromedriver1.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
	}

	@Given("user should clik add tariff plan")
	public void user_should_clik_add_tariff_plan() {
		  driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();

	}

	@When("user provide valid input and sumbit")
	public void user_provide_valid_input_and_sumbit(io.cucumber.datatable.DataTable dataTable) {
		List<List<String>> twodimen = dataTable.asLists(String.class);
		driver.findElement(By.id("rental1")).sendKeys(twodimen.get(0).get(0));
	    driver.findElement(By.id("local_minutes")).sendKeys(twodimen.get(0).get(1));
	    driver.findElement(By.id("inter_minutes")).sendKeys(twodimen.get(0).get(2));
	    driver.findElement(By.id("sms_pack")).sendKeys(twodimen.get(1).get(3));
	    driver.findElement(By.id("minutes_charges")).sendKeys(twodimen.get(1).get(4));
	    driver.findElement(By.id("inter_charges")).sendKeys(twodimen.get(0).get(5));
	    driver.findElement(By.id("sms_charges")).sendKeys(twodimen.get(2).get(6));
	    driver.findElement(By.xpath("//input[@name='submit']")).click();
	    }

	@Then("to verify success message is displayed")
	public void to_verify_success_message_is_displayed() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	    
	}



}
