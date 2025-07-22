import {db} from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createStorage from "./storageSetup";
import createVoteCollection from "./vote.collection";
import {databases} from "./config";

export default async function getOrCreateDB(){
  try {
    await databases.get(db);
    console.log("Database connected");
  } catch(error){
    try{
      await databases.create(db, db)
      console.log("databases connected")
      
      // create collection
      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),
      ])
      console.log("Connection created")
      console.log("Database connected");
    } catch (error) {
      console.error("Error creating database or collection:", error);
    }
  }

  return databases;
}