$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Test.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid in",
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/onedList.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input1",
  "rows": [
    {
      "cells": [
        "anu",
        "krithika",
        "anu@gamil.com",
        "chennai",
        "1234567890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input1(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/onedMap.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input2",
  "rows": [
    {
      "cells": [
        "fname",
        "anu"
      ]
    },
    {
      "cells": [
        "lname",
        "krithika"
      ]
    },
    {
      "cells": [
        "gmail",
        "anu@gamil.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phno",
        "1234567890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input2(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/scenoutilne.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.step({
  "name": "user provide valid input\"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cgmail\u003e\",\"\u003caddress\u003e\",\"\u003cphoneno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "gmail",
        "address",
        "phoneno"
      ]
    },
    {
      "cells": [
        "anu",
        "krithika",
        "anu22@gmail.com",
        "chennai",
        "12345678"
      ]
    },
    {
      "cells": [
        "shravan",
        "Prasenjith",
        "shravan@gamil.com",
        "chennai",
        "34567890"
      ]
    },
    {
      "cells": [
        "ram",
        "prasath",
        "ram@gmail.com",
        "chennai",
        "23456789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input\"anu\",\"krithika\",\"anu22@gmail.com\",\"chennai\",\"12345678\"",
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input\"shravan\",\"Prasenjith\",\"shravan@gamil.com\",\"chennai\",\"34567890\"",
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input\"ram\",\"prasath\",\"ram@gmail.com\",\"chennai\",\"23456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/twodList.feature");
formatter.feature({
  "name": "Add Tariff Plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Getting successfully add message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should clik add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_clik_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input and sumbit1",
  "rows": [
    {
      "cells": [
        "500",
        "10000",
        "5000",
        "300",
        "1",
        "10",
        "1"
      ]
    },
    {
      "cells": [
        "399",
        "1000",
        "1000",
        "100",
        "2",
        "15",
        "2"
      ]
    },
    {
      "cells": [
        "599",
        "5000",
        "10000",
        "250",
        "2",
        "9",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input_and_sumbit1(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_success_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/twodMap.feature");
formatter.feature({
  "name": "Add Tariff Plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Getting successfully add message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstPro.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should clik add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "FirstPro.user_should_clik_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide valid input and sumbit",
  "rows": [
    {
      "cells": [
        "mnthrental",
        "lmint",
        "intermint",
        "smspack",
        "lmintchrg",
        "intmintchrg",
        "smschrg"
      ]
    },
    {
      "cells": [
        "500",
        "10000",
        "5000",
        "300",
        "1",
        "10",
        "1"
      ]
    },
    {
      "cells": [
        "399",
        "1000",
        "1000",
        "100",
        "2",
        "15",
        "2"
      ]
    },
    {
      "cells": [
        "599",
        "5000",
        "10000",
        "250",
        "2",
        "9",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FirstPro.user_provide_valid_input_and_sumbit(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstPro.to_verify_success_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});