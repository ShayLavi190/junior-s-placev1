import React from 'react'
import './MySql.css'
import Navbar from '../../../components/Navbar/Navbar'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import e7 from './e7.png'
import e8 from './e8.png'
import e9 from './e9.png'
import e10 from './e10.png'
import e11 from './e11.png'
import e12 from './e12.png'
import e13 from './e13.png'
import e14 from './e14.png'
import e15 from './e15.png'
import e16 from './e16.png'
import e17 from './e17.png'
import e18 from './e18.png'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function MySql() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
      <div>
      <body>
      {isMobile ? <NavbarMini /> : <Navbar />}
      <div class="sidenavv sticky-to" style={{width:'120px'}}>
      <a href="/nodejs/part1">Basics part 1</a>
        <a href="/nodejs/part2">Basics part 2</a>
        <a href="/nodejs/mongodb">MongoDB</a>
        <a href="/nodejs/mysql">MySQL</a>
        <a href="/nodejs/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockjs">
              <p>Node.js can be used in database applications. One of the most popular databases is MySQL.</p>
              <p>To be able to experiment with the code examples, you should have MySQL installed on your computer. You can download a free MySQL database at <a href='https://www.mysql.com/downloads/'>https://www.mysql.com/downloads/</a>.</p>
              <p>Once you have MySQL up and running on your computer, you can access it by using Node.js. To access a MySQL database with Node.js, you need a MySQL driver. This tutorial will use the "mysql" module, downloaded from NPM. To download and install the "mysql" module, open the Command Terminal and execute the following:</p>
              <p><b>C:\Users\Your Name&lt;npm install mysql</b></p>
              <p>Now you have downloaded and installed a mysql database driver. Node.js can use this module to manipulate the MySQL database:</p>
              <p><b>var mysql = require('mysql');</b></p>
              <h2>Create Connection</h2>
              <p>Start by creating a connection to the database. Use the username and password from your MySQL database.</p>
              <img className = 'imagesnode' src= {e1}/>
              <h2>Query a Database</h2>
              <p>Use SQL statements to read from (or write to) a MySQL database. This is also called "to query" the database. The connection object created in the example above, has a method for querying the database:</p>
              <img className = 'imagesnode' src= {e2}/>
              <h2>Creating a Database</h2>
              <p>To create a database in MySQL, use the "CREATE DATABASE" statement:</p>
              <img className = 'imagesnode' src= {e3}/>
              <h2>Creating a Table</h2>
              <img className = 'imagesnode' src= {e4}/>
              <p>When creating a table, you should also create a column with a unique key for each record. This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number for each record. Starting at 1, and increased by one for each record.</p>
              <img className = 'imagesnode' src= {e5}/>
              <h2>Insert Into Table</h2>
              <p>To fill a table in MySQL, use the "INSERT INTO" statement.</p>
              <img className = 'imagesnode' src= {e6}/>
              <p>To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array: INSERT INTO customers (name, address) VALUES ?</p>
              <h2>The Result Object</h2>
              <p>When executing a query, a result object is returned. The result object contains information about how the query affected the table. The result object returned from the example above looks like this:</p>
              <img className = 'imagesnode' src= {e7}/>
              <h2>Get Inserted ID</h2>
              <p>For tables with an auto increment id field, you can get the id of the row you just inserted by asking the result object.</p>
              <img className = 'imagesnode' src= {e8}/>
              <h2>Selecting From a Table</h2>
              <p>To select data from a table in MySQL, use the "SELECT" statement.</p>
              <img className = 'imagesnode' src= {e9}/>
              <p>To select only some of the columns in a table, use the "SELECT" statement followed by the column name. the result object is an array containing each row as an object. The third parameter of the callback function is an array containing information about each field in the result.</p>
              <h2>Select With a Filter</h2>
              <p>When selecting records from a table, you can filter the selection by using the "WHERE" statement:</p>
              <img className = 'imagesnode' src= {e10}/>
              <p>You can also select the records that starts, includes, or ends with a given letter or phrase. Use the '%' wildcard to represent zero, one or multiple characters:</p>
              <p><b>  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) )</b></p>
              <p>When query values are variables provided by the user, you should escape the values. This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database. The MySQL module has methods to escape query values:</p>
              <p><b>var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);</b></p>
              <p>You can also use a ? as a placeholder for the values you want to escape.</p>
              <h2>Sort the Result</h2>
              <p>Use the ORDER BY statement to sort the result in ascending or descending order. The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.</p>
              <img className = 'imagesnode' src= {e11}/>
              <p>Use the DESC keyword to sort the result in a descending order.</p>
              <img className = 'imagesnode' src= {e12}/>
              <h2>Delete Record</h2>
              <p>You can delete records from an existing table by using the "DELETE FROM" statement:</p>
              <img className = 'imagesnode' src= {e13}/>
              <p>You can delete an existing table by using the "DROP TABLE" statement: <b>  var sql = "DROP TABLE customers";</b></p>
              <p>If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.</p>
              <h2>Update Table</h2>
              <p>You can update existing records in a table by using the "UPDATE" statement:</p>
              <img className = 'imagesnode' src= {e14}/>
              <h2>Limit the Result</h2>
              <p>You can limit the number of records returned from the query, by using the "LIMIT" statement:</p>
              <img className = 'imagesnode' src= {e15}/>
              <p>If you want to return five records, starting from the third record, you can use the "OFFSET" keyword.</p>
              <p>You can also write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above.</p>
              <h2>Join Two or More Tables</h2>
              <p>You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement. Consider you have a "users" table and a "products" table.</p>
              <p><b>Users:</b></p>
              <img className = 'imagesnode' src= {e16}/>
              <p><b>Products:</b></p>
              <img className = 'imagesnode' src= {e17}/>
              <p>These two tables can be combined by using users' favorite_product field and products' id field.</p>
              <img className = 'imagesnode' src= {e18}/>
              <p>If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement.</p>
              <p>If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement.</p>
            </div>
        </div>
      <footer class="py-3 bg-dark fixed-bottom">
          <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; shay lavi 2023</p></div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
  </body>
  </div>
  )
}

export default MySql
