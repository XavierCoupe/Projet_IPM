function GetPerenualApiKey({ num }: { num: number }) {
    //wbal***.com, wint***.com, xavi***.fr
    var apiKeys = ['sk-XbtH65cc82432447c4151', 'sk-mdL665b3c49354b4f3903', 'sk-PLbx65cc83f1f38ca3905'];
    return apiKeys[num];
}

export default GetPerenualApiKey