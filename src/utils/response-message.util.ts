interface ResponseJsonObject {
    message: string | undefined;
    data?: object | string;
}

const codeMessages = new Map<string, string>([
    ['200', 'OK'],
    ['201', 'Created'],
    ['401', 'Unauthorized'],
    ['404', 'Not Found'],
    ['400', 'Bad Request'],
    ['500', 'Internal Server Error']
]);


export function resMessage(code: number, data?: object | string): object {
    let jsonObj: ResponseJsonObject = {
        message: codeMessages.get(`${code}`),
    }
    if(data) jsonObj['data'] = data;
    return jsonObj;
}