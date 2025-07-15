class ApiResponse{
    constructor(res, statusCode,message = "Request successful") {
        this.res = res;
        this.statusCode = statusCode < 400;
        this.message = message;
    }
}
export default ApiResponse;