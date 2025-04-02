import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase"


export async function updateTask(id, updates) {
    try {
      await updateDoc(doc(db, "tasks", id), updates);
    } catch (error) {
      throw "Failed to update task";
    }
  }
