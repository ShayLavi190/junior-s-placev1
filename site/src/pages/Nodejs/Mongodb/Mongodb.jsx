import React from 'react'
import './Mongodb.css'
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
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Mongodb() {
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
              <p>Node.js can be used in database applications. One of the most popular NoSQL database is MongoDB.</p>
              <p>To be able to experiment with the code examples, you will need access to a MongoDB database. You can download a free MongoDB database at <a href='https://www.mongodb.com'>https://www.mongodb.com</a>. Or get started right away with a MongoDB cloud service at <a href='https://www.mongodb.com/cloud/atlas'>https://www.mongodb.com/cloud/atlas</a>.</p>
              <h2>Creating a Database</h2>
              <p>To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create. MongoDB will create the database if it does not exist, and make a connection to it.</p>
              <img className = 'imagesnode' src= {e1}/>
              <h2>Creating a Collection</h2>
              <p>To create a collection in MongoDB, use the createCollection() method:</p>
              <img className = 'imagesnode' src= {e2}/>
              <h2>Insert Into Collection</h2>
              <p>To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method. The first parameter of the insertOne() method is an object containing the name(s) and value(s) of each field in the document you want to insert. It also takes a callback function where you can work with any errors, or the result of the insertion:</p>
              <img className = 'imagesnode' src= {e3}/>
              <p>To insert multiple documents into a collection in MongoDB, we use the insertMany() method. The first parameter of the insertMany() method is an array of objects, containing the data you want to insert. It also takes a callback function where you can work with any errors, or the result of the insertion. When executing the insertMany() method, a result object is returned. The result object contains information about how the insertion affected the database.</p>
              <p>If you do not specify an _id field, then MongoDB will add one for you and assign a unique id for each document. In the example above no _id field was specified, and as you can see from the result object, MongoDB assigned a unique _id for each document. If you do specify the _id field, the value must be unique for each document:</p>
              <img className = 'imagesnode' src= {e4}/>
              <h2>Find One</h2>
              <p>To select data from a collection in MongoDB, we can use the findOne() method. The findOne() method returns the first occurrence in the selection. The first parameter of the findOne() method is a query object. In this example we use an empty query object, which selects all documents in a collection (but returns only the first document)</p>
              <img className = 'imagesnode' src= {e5}/>
              <p>To select data from a table in MongoDB, we can also use the find() method. The find() method returns all occurrences in the selection. The first parameter of the find() method is a query object. The second parameter of the find() method is the projection object that describes which fields to include in the result. This parameter is optional, and if omitted, all fields will be included in the result.</p>
              <img className = 'imagesnode' src= {e6}/>
              <h2>Filter the Result</h2>
              <p>When finding documents in a collection, you can filter the result by using a query object. The first argument of the find() method is a query object, and is used to limit the search.</p>
              <img className = 'imagesnode' src= {e7}/>
              <h2>Sort the Result</h2>
              <p>Use the sort() method to sort the result in ascending or descending order. The sort() method takes one parameter, an object defining the sorting order.</p>
              <img className = 'imagesnode' src= {e8}/>
              <p>Use the value -1 in the sort object to sort descending.</p>
              <h2>Delete Document</h2>
              <p>To delete a record, or document as it is called in MongoDB, we use the deleteOne() method. The first parameter of the deleteOne() method is a query object defining which document to delete.</p>
              <img className = 'imagesnode' src= {e9}/>
              <p>To delete more than one document, use the deleteMany() method. The first parameter of the deleteMany() method is a query object defining which documents to delete. The deleteMany() method returns an object which contains information about how the execution affected the database.</p>
              <h2>Drop Collection</h2>
              <p>You can delete a table, or collection as it is called in MongoDB, by using the drop() method. The drop() method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.</p>
              <img className = 'imagesnode' src= {e10}/>
              <p>You can also use the dropCollection() method to delete a table (collection). The dropCollection() method takes two parameters: the name of the collection and a callback function.</p>
              <h2>Update Document</h2>
              <p>You can update a record, or document as it is called in MongoDB, by using the updateOne() method. The first parameter of the updateOne() method is a query object defining which document to update.</p>
              <img className = 'imagesnode' src= {e11}/>
              <p>When using the $set operator, only the specified fields are updated:<b> var newvalues = &#123; $set: &#123; address: "Canyon 123" &#125; &#125;;</b></p>
              <p>To update all documents that meets the criteria of the query, use the updateMany() method. The updateOne() and the updateMany() methods return an object which contains information about how the execution affected the database.</p>
              <h2>Limit the Result</h2>
              <p>To limit the result in MongoDB, we use the limit() method. The limit() method takes one parameter, a number defining how many documents to return.</p>
              <img className = 'imagesnode' src= {e12}/>
              <h2>Join Collections</h2>
              <p>MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage. The $lookup stage lets you specify which collection you want to join with the current collection, and which fields that should match.</p>
              <img className = 'imagesnode' src= {e13}/>
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

export default Mongodb
