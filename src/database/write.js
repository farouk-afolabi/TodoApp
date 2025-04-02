import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


export async function addTask(task) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      description: task.description,
      status: task.status || "open",
     
    });
    return { ...task, id: docRef.id };
  } catch (error) {
    throw "Failed to add task";
  }
}

    



