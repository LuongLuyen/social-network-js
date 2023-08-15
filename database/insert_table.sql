Insert into users(userName,password,fullName,email,role) values('Nguyen van A','123456','Nguyen Van A','nguyenvana2004@gmail.com','ADMIN');
Insert into users(userName,password,fullName,email,role) values('Nguyen van B','123456','Nguyen Van B','nguyenvanb2004@gmail.com','USER');
Insert into users(userName,password,fullName,email,role) values('Nguyen van C','123456','Nguyen Van C','nguyenvanc2004@gmail.com','USER');

Insert into userinfos(id,studyAt,workingAt,otherInfo,dateOfBirth,avatarUrl) values(1,'Học tại PTIT', 'FPT', 'FPT','2/2/2003','http://localhost:5000/public/avt.jpg');
Insert into userinfos(id,studyAt,workingAt,otherInfo,dateOfBirth,avatarUrl) values(2,'Học tại FPT', 'VNG', 'VNG','23/5/2003','http://localhost:5000/public/avtmd.png');
Insert into userinfos(id,studyAt,workingAt,otherInfo,dateOfBirth,avatarUrl) values(3,'Học tại FTU', 'RIOT', 'RIOT','20/4/2003','http://localhost:5000/public/avtmd.png');

Insert into posts(userId,content,contentUrl,likeCount,shareCount,commentCount,category) values(1,'Bài viết 1', 'http://baiviet1', 10, 20,30,'the-thao');
Insert into posts(userId,content,contentUrl,likeCount,shareCount,commentCount,category) values(2,'Bài viết 2', 'http://baiviet2', 10, 10,30,'the-gioi');
Insert into posts(userId,content,contentUrl,likeCount,shareCount,commentCount,category) values(3,'Bài viết 3', 'http://baiviet3', 50, 20,30,'game');

Insert into notifications(postId,userId,content) values(1,3,'thông báo bài viết 1');
Insert into notifications(postId,userId,content) values(2,1,'thông báo bài viết 2');
Insert into notifications(postId,userId,content) values(3,2,'thông báo bài viết 3');

Insert into comments(postId,userId,content) values(1,3,'bình luận bài viết 1');
Insert into comments(postId,userId,content) values(2,1,'bình luận bài viết 2');
Insert into comments(postId,userId,content) values(3,2,'bình luận bài viết 3');

Insert into films(userId,title,contentUrl,content) values(1,'film 1','http://film','http://bg');
Insert into films(userId,title,contentUrl,content) values(2,'film 2','http://film','http://bg');
Insert into films(userId,title,contentUrl,content) values(3,'film 3','http://film','http://bg');

Insert into groupchats(userAdmin,user1,user2,user3,user4,user5) values(1,'người dùng 1', 'người dùng 2', 'người dùng 3', 'người dùng 4','người dùng 5');
Insert into groupchats(userAdmin,user1,user2,user3,user4,user5) values(2,'người dùng 1', 'người dùng 2', 'người dùng 3', 'người dùng 4','người dùng 5');
Insert into groupchats(userAdmin,user1,user2,user3,user4,user5) values(3,'người dùng 1', 'người dùng 2', 'người dùng 3', 'người dùng 4','người dùng 5');

Insert into messages(groupChatId,userId,content) values(1,3,'tin nhắn 1');
Insert into messages(groupChatId,userId,content) values(3,1,'tin nhắn 2');
Insert into messages(groupChatId,userId,content) values(2,2,'tin nhắn 3');