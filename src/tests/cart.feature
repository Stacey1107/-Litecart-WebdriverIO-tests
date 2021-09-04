Feature: Goods adding and deletion from the cart

Scenario: Selecting a duck category & adding it to the cart

Given a user is on LiteCart home page
When a user selects Rubber Ducks category
And a user selects Rubber Ducks subcategory
Then a user should see the following duck types
|Yellow|
|Green |

When a user selects "Yellow" Duck in subcategory
Then a duck should have certain technical data 
|Body    |Yellow    |
|Eyes    |Black     |
|Beak    |Orange    |
|Material|Plastic   |

When a user selects a duck of "Medium" size
And a user specifies "2" items of ducks
Then a user adds ducks to a cart
And a user waits until the ducks appear in the cart

When a user opens the cart
Then a user should see "2.00" "Yellow" duck items


Scenario: Ducks deletion from the cart

When a user deletes ducks from the cart
Then a user should not see "2.00" "Yellow" duck items

 


