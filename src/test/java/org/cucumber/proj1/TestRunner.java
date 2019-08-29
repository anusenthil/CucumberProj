package org.cucumber.proj1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Feature",glue="org.cucumber.proj1",plugin="html:target")

public class TestRunner {

}
