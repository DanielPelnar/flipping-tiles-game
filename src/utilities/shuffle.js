function shuffle() {
    // grid is 4x4 = 16
    // 16 / 2 => we need 8 unique pictures
    // + 1 which is the default "hiding picture"

    // 8 unique pictures:
    let assets = [
        { image: "/assets/ts.png" },
        { image: "/assets/rust.png" },
        { image: "/assets/react.png" },
        { image: "/assets/node.png" },
        { image: "/assets/next.png" },
        { image: "/assets/js.png" },
        { image: "/assets/html5.png" },
        { image: "/assets/firebase.png" },
    ];

    // duplicating each so we have 16:
    assets = [...assets, ...assets];

    // "randomly" shuffle the objects in the array:
    assets.sort(() => {
        return 0.5 - Math.random();
    });

    // adding id so React can do optimisation:
    assets = assets.map((item) => {
        return {...item, id: Math.random()}; // this can result in the same id but very low chance
    });

    return assets;
}

export default shuffle;