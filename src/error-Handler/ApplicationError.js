
// for handling applicating levels error

export default class ApplicationError extends Error{
    constructor(code, message){
        super(message);
        this.code=code;
    }
}