Test Case 1
ID: TC01
Procedure:
Seed products via POST /api/products/seed
Add 1 unit each of products A, B, and C by sending three POST /api/cart/add requests with correct product IDs and quantity=1
Call GET /api/cart/summary

Expected Result:
Total price Rs 100, no discounts applied

Actual Result:
Total price Rs 100, no discounts applied as expected


Test Case 2
ID: TC02
Procedure:
Clear cart using DELETE /api/cart/clear
Add 3 units of product A and 2 units of product B using POST /api/cart/add
Call GET /api/cart/summary

Expected Result:
Promotions applied: Rs 85 for 3×A, Rs 35 for 2×B
Total price Rs 120

Actual Result:
Promotions correctly applied, total price Rs 120  

Test Case 3
ID: TC03
Procedure:
Clear cart using DELETE /api/cart/clear
Add 3×A, 2×B, 1×C, and 1×D using POST /api/cart/add
Call GET /api/cart/summary

Expected Result:
Item discounts on A and B applied
Basket discount Rs 20 applied because subtotal > 150
Total price Rs 165

Actual Result:
All discounts applied correctly, final total Rs 165


Test Case 4
ID: TC04
Procedure:
Clear cart using DELETE /api/cart/clear
Add 3×A, 1×C, and 1×D using POST /api/cart/add
Call GET /api/cart/summary

Expected Result:
3×A promotion applied
No basket discount (subtotal exactly 150)
Total price Rs 150

Actual Result:
Promotions applied accurately, total Rs 150 as expected