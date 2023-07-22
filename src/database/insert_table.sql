Insert into users(username,password,full_name,email,study_at,working_at,other_info,date_of_birth,avatar_url) values('nguyenminhQ','123','nguyenminhQ','ngytenq234@gmail.com','test','test','test','test','https');
Insert into users(username,password,full_name,email,study_at,working_at,other_info,date_of_birth,avatar_url) values('nguyenvanb','321','nguyen van B','nguyenvanB123@gmail,com','ptit','ptit','ptit','9/3/2003','https1');

Insert into userrela(follower) values(1);
Insert into userrela(follower) values(2);

Insert into posts(user_id,content,like_count) values(1, 'day la content',10);
Insert into posts(user_id,content,like_count) values(2, 'day la content',20);

Insert into likes(user_id,post_id) values(2,1);
Insert into likes(user_id,post_id) values(1,2);