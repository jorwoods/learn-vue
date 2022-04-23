import { timestamp } from "@/firebase/config"
import firebase from "firebase/app"

export class ProjectBase {
  title: string;
  details: string;
  complete: boolean;
  created_at: firebase.firestore.FieldValue
  updated_at: firebase.firestore.FieldValue

  constructor(title: string, details: string) {
    this.title = title
    this.details = details
    this.complete = false

    this.created_at = timestamp();
    this.updated_at = timestamp();
  }
}

// Split into a base class and derived class since the ID gets auto generated
// by Firebase.
export class ProjectItem extends ProjectBase {
  id!: string
}

export default ProjectItem
