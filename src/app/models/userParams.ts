import { User } from 'src/app/models/user';

export class UserParams {
    gender: string;
    minAge = 18;
    maxAge = 150;
    pageNumber = 1;
    pageSize = 5;
    orderBy = 'lastActive';

    constructor(user: User) {
        this.gender = user.gender == "male" ? "female" : "male";
    }
}