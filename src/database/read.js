import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return data;
  } catch (error) {
    throw "Failed to load database ";
  }
}
