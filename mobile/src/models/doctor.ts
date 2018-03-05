import { DocumentReference } from "@firebase/firestore-types";

export class Doctor {
    id:string;
    firstName: string;
    middleName: string;
    lastName: string;
    createDate: Date;
    spec: DocumentReference;
    profilePic:string;
}