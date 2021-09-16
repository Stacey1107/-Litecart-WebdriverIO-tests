Feature: Goods adding and deletion from the cart

Scenario: Selecting a duck category & adding it to the cart

Given a user is on LiteCart home page
When a user selects "Rubber Ducks" category
And a user selects "Yellow Duck" in subcategory
Then a duck should have certain technical data 
|Body    |Yellow    |
|Eyes    |Black     |
|Beak    |Orange    |
|Material|Plastic   |

When a user selects a duck of "Medium" size
And a user specifies "2" items of ducks
Then a user adds ducks to a cart

When a user opens the cart
And a user waits for the item to be displayed
Then a user should see "Yellow Duck" item


Scenario: Ducks deletion from the cart

When a user deletes "Yellow Duck" product from the cart
And a user waits until the item disappears from the cart
Then a user should not see "Yellow Duck" item

 


