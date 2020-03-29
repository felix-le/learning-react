https://github.com/typicode/json-server/issues/186

## Task 1: tui muon ra 1 trang detail de xem detail cua 1 item (item day la data cua posts) (edited) 

### Action
1. 1 trang detail > tao 1 trang detail item
2. Mỗi 1 item sẽ có 1 button
3. click vô btn đó sẽ chuyển sang detail item tương ứng (page item ở bước 1)
4. Show nội dung detail item đó (Page bước 1)
5. get Api có url tương ứng.
6. get id post click vào.

### Technical
1. React router



## Task 2: delete 1 item when user click "Delete" button

## Task 3: Show loading when fetch data

## Task 4: search item do



1. call item (Item)> detail item  = item.id
2. detail item > call api follow id
3. call api detail item follow id
Luồng
a. Truyền tham số vào url thông qua history ở trang Call Api > 
trang diễn ra hành động.
b. vô trang có Router để đặt thêm tham số cho URL trang sẽ được move to (Detail item)
c. Vô trang được điều hướng đến (detail item) - bắt tham số trên URL.

4. axios sẽ trả về url theo id
5. id ở đây là biến có value = id item
