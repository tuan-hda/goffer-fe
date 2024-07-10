const flattenPlateJsData = (data: any) => {
    let finalResult = '';
    let array = data;
    try {
        array = JSON.parse(data);
    } catch (error) {
        // Do nothing
    }
    console.log(array);
    array.forEach((item: any) => {
        if (item.text) {
            finalResult += `${item.text} `;
        }
        if (item.children) {
            finalResult += flattenPlateJsData(item.children);
        }
    });
    return finalResult;
};

export default flattenPlateJsData;
