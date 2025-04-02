import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";


export async function deleteTask(id) {
    try {
      await deleteDoc(doc(db, "tasks", id));
    } catch (error) {
      throw "Failed to delete task";
    }
  }