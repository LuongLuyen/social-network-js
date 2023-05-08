INSERT INTO Users(full_name,email,avatar_url,interested_user) VALUES('nguyen van a','nguyenvana@gmail,com','https','test');
INSERT INTO Users(full_name,email,avatar_url,interested_user) VALUES('nguyen van B','nguyenvanB123@gmail,com','https','test');

INSERT INTO UserInfo(id,is_active,study_at,working_at,favorites,other_info,date_of_birth) VALUES(1,1,'ptit','fpt','test','test','1/3/2003');
INSERT INTO UserInfo(id,is_active,study_at,working_at,favorites,other_info,date_of_birth) VALUES(2,0,'ptit1','fpt','test','test','12/3/2004');

INSERT INTO UserRela(follower) VALUES(1);
INSERT INTO UserRela(follower) VALUES(2);

INSERT INTO Posts(user_id,content,like_count) VALUES(1, 'day la content',10);
INSERT INTO Posts(user_id,content,like_count) VALUES(2, 'day la content',20);

INSERT INTO Likes(user_id,post_id) VALUES(2,1);
INSERT INTO Likes(user_id,post_id) VALUES(1,2);