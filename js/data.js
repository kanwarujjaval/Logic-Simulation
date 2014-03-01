(function () {
    "use strict";

    var dataArray = [
    { title: "AND Gate", picture: "images/and.png", link: "and/and" },
    { title: "OR Gate", picture: "images/or.png", link: "orgate/orgate" },
    { title: "XOR Gate", picture: "images/xor.png", link: "xor/xor" },
    { title: "NAND Gate", picture: "images/nand.png", link: "nand/nand" },
    { title: "NOR Gate", picture: "images/nor.png", link: "nor/nor" },
    { title: "XNOR Gate", picture: "images/xnor.png", link: "xnor/xnor" },
    { title: "NOT Gate", picture: "images/not.png", link: "not/not" }
    ];

    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);

})();