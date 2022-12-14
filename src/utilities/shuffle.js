function shuffle() {
    // grid is 4x4 => 16 tiles
    // 16 / 2 => we need 8 unique pictures
    // + 1 which is the default "face-back picture"

    // 8 unique pictures:
    let assets = [
        { image: "/assets/yoda1.png" },
        { image: "/assets/yoda2.png" },
        { image: "/assets/yoda3.png" },
        { image: "/assets/yoda4.png" },
        { image: "/assets/yoda5.png" },
        { image: "/assets/yoda6.png" },
        { image: "/assets/yoda7.png" },
        { image: "/assets/yoda8.png" }
    ];

    // duplicating each so we have 16:
    assets = [...assets, ...assets];

    // "randomly" shuffle the objects in the array:
    assets.sort(() => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        return 0.5 - Math.random();
    });

    // adding id so React can do optimisation:
    assets = assets.map((item) => {
        // this can result in the same id but very low chance:
        return {...item, id: Math.random()}; 
    });

    return assets;
}

export default shuffle;