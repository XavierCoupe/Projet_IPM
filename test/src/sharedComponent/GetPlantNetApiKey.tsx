function GetPlantNetApiKey({ num }: { num: number }) {
    //wbal***.com, wint***.com, xavi***.fr
    var apiKeys = ['2b10QLbiB1ARdDqPHrwcuOb9u', '', ''];
    return apiKeys[num];
}

export default GetPlantNetApiKey