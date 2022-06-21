Feature: verify the quickbook function

  Scenario Outline: Create the new inventory
    Given The basic browser configration
    When Enter the "<user name>","<password>","<Name>","<HSN code>","<Unit>","<Initial quantity on hand>","<As of date>","<Reorder point>","<Sales price/rate>","<Income account>","<Cost>"and"<Preferred Supplier>"
    And Click the save and Close button

    Examples: 
      | user name                   | password     | Name      | HSN code | Unit        | Initial quantity on hand | As of date | Reorder point | Sales price/rate | Income account | Cost | Preferred Supplier |
      | ashwathaman@expsoltechs.com | Dindigul@123 | hp laptop | 84713090 | PAC - PACKS |                        2 | 30/05/2022 |            20 |             2200 | Sales          | 3000 | Ram                |
