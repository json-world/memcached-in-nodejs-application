**How to Implement Memcached in Nodejs Application**
===============================================

- - -


***What is Memcached?***

Memcached is a general-purpose distributed memory caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. Memcached is free and open-source software, licensed under the Revised BSD licence. Memcached runs on Unix-like operating systems (at least LINUX and OS X) and on Microsoft windows.

We can store data to memcached server in key pair format. So whenever any request come from the app can be matched with memcached  server without any query from mysql/Nosql server. This increases the performance of the application.

----------------------------------


CONFIGURATION AND INSTALLATION
-------------------------------

Download the zip from here

 - Extract the code from downloaded zip
 - Change the config settings like database connection or any credentials needed.
 - Import data(file with .sql extension) from the root folder, if needed in the demo.
 - Install Node package dependencies using  ``npm install``
 - Develop or modify changes
 - Build and run it into the browser using ``npm start`` command

MORE INFORMATION
----------------

Read Complete Article: https://jsonworld.com/demo/how-to-implement-memcached-in-nodejs-application 



