import { nanoid } from "nanoid";
//resolvers some work to be done

class Course{
    constructor(id,{
        courseName,category,price,language, email,stack,teachingAssists
    }){//constructor expects that you will fill all these values
        //basiaclly creating a placeholder where we can set some data
        this.id=id
        this.courseName=courseName
        this.category=category
        this.price=price
        this.language=language
        this.email=email
        this.stack=stack
        this.teachingAssists=teachingAssists
    }
}

const courseholder = {}//this obj will have key value pairs

const resolvers={
    getCourse:({id})=>{
        return new Course(id,courseholder[id])
    },
    createCourse:({input})=>{
        let id=nanoid()//unique id;
        courseholder[id]=input;//setting up the input
        return new Course(id,input)
    }
}

export default resolvers;