export class ProjectBase  {
  title: string;
  details: string;
  complete: boolean;
  created_at: Date
  updated_at: Date

  constructor (title: string, details: string) {
    this.title = title
    this.details = details
    this.complete = false

    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

// Split into a base class and derived class since the ID gets auto generated
// by Firebase.
export class ProjectItem extends ProjectBase {
  id!: string
}

export default ProjectItem
