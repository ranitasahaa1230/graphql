# lco-graphql
A standard babel setup
Starter project setup for upcoming crash courses

<!-- type Query{//getting some data
        getCourse(id:ID):Course
        //getCourse is a method which accepts id
        //mentioning datatype(id:ID) is v.v.imp
        //that will return  a Course datatype or a String datatype
        //basically if someone ask me a getCourse with this id, i will return a Course to him
    }

    input CourseInput{//whatever is the type mention that with input
            id:ID
            courseName:String!
            category:String
            price:Int!
            language:String
            email:String
            stack:Stack
            teachingAssists:[TeachingAssistInput]!
        }
        type Mutation{//wants to change any data
        createCourse(input:CourseInput):Course//graphqls job to netpick the data nd show what we want
    }
     -->
